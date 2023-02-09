import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

import { ValidatePassword, ValidateRePassword } from "./FieldValidate";

// types
export type T_fieldBase={name:string}
export type T_fieldContent={
     fieldname:string,
     fieldInfo:string,
     fieldErr:string[],
     fieldVisibleSettable:boolean,
    icon:OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string;},
     updateField:<T extends T_fieldBase>(prev:T,newVal:string)=>T,
   validateField:(val:string)=>boolean
  }
//Another Module Component - Name
const FieldTag = tw.div`border-[1px] h-14 rounded-lg flex items-center justify-between p-1`;
const InputTag = tw.input`grow outline-none`;
//Module
const FieldContentTag =<T extends T_fieldBase>({
    fieldContent,
  userInfo,
  setUserInfo,

}: {
    fieldContent:T_fieldContent
  userInfo: T;
  setUserInfo: React.Dispatch<React.SetStateAction<T>>,

}) => {

  const [err, setErr] = useState(false);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => {
      return fieldContent.updateField(prev,e.target.value)
    });
  };
const lblRef2 = useRef<HTMLLabelElement>(null);
  useEffect(() => {
    const key=fieldContent.fieldname as keyof T
    // console.log(key,userInfo[key],lblRef.current?.textContent)
    if (lblRef2.current) {
      lblRef2.current.style.position = userInfo[key] ? "relative" : "absolute";
      lblRef2.current.style.fontSize = userInfo[key] ? "0.75rem" : "1rem";
      lblRef2.current.style.color = userInfo[key] ? "gray" : "black";
    }
    if(fieldContent.fieldname!='rePassword')
    setErr(userInfo[key]!=''&&!fieldContent.validateField(userInfo[key] as string));
    else{
      setErr(userInfo[key]!=''&&userInfo["password" as keyof T]!==userInfo["rePassword" as keyof T]);}
  }, [userInfo]);
 const [pwdVisible,setPwdVisible]=useState(false)


  return (
    <div className="my-4 ">
      <FieldTag>
        <fieldContent.icon className="align-middle px-1" fontSize="large" />
        <div className="block grow pl-2">
          <div className="flex flex-col" aria-required>
            <label
              className="text-base duration-200 capitalize"
              htmlFor={fieldContent.fieldname}
              ref={lblRef2}
            >
              {fieldContent.fieldname}
            </label>
            <InputTag type={!pwdVisible&&fieldContent.fieldVisibleSettable?'password':'text'} id={fieldContent.fieldname} onChange={handleInput} />
          </div>
        </div>
        {fieldContent.fieldVisibleSettable&&<div className="mr-2 cursor-pointer text-gray-400" onClick={(e)=>setPwdVisible(prev=>!prev)}>
          {pwdVisible?<VisibilityIcon/>:<VisibilityOffIcon/>}
        </div>}
      </FieldTag>
      {
        <>
          <div className="text-sm pl-4 pt-1  ">
            {fieldContent.fieldInfo}
          </div>
          {err && (
          <div className="text-sm pl-4 pt-1 text-red-600">
            {fieldContent.fieldname==="password"&&<ValidatePassword passwordVal={userInfo["password" as keyof T] as string}/>}
            {fieldContent.fieldname==="rePassword"&&<ValidateRePassword passwordVal={userInfo["password" as keyof T] as string} rePasswordVal={userInfo["rePassword" as keyof T] as string}/>}
            {fieldContent.fieldname!=="password"&&fieldContent.fieldname!=="rePassword"&&fieldContent.fieldErr.map((str,id)=>{return(<div key={id}>{str}</div>)})}
          </div>
          )}
        </>
      }
    </div>
  );
};


export default FieldContentTag

