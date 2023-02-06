import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import validatorjs from "validator";
// types
export type T_userInfo = {
    name: string;
    email: string;
    password: string;
    rePassword: string;
  }
export type T_fieldConent={
     fieldname:string,
     fieldInfo:string,
     fieldErr:string[],
     fieldVisibleSettable:boolean,
    icon:OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string;},
     updateUserInfo:(prev:T_userInfo,newVal:string)=>T_userInfo,
   validateUserInfo:(val:string)=>boolean
  }
//Another Module Component - Name
const FieldTag = tw.div`border-[1px] h-14 rounded-lg flex items-center justify-between p-1`;
const InputTag = tw.input`grow outline-none`;
//Module
const FieldContentTag = ({
    fieldContent,
  userInfo,
  setUserInfo,

}: {
    fieldContent:T_fieldConent
  userInfo: T_userInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<T_userInfo>>,

}) => {

  const [err, setErr] = useState(false);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => {
      return fieldContent.updateUserInfo(prev,e.target.value)
    });
  };
const lblRef2 = useRef<HTMLLabelElement>(null);
  useEffect(() => {
    const key=fieldContent.fieldname as keyof T_userInfo
    // console.log(key,userInfo[key],lblRef.current?.textContent)
    if (lblRef2.current) {
      lblRef2.current.style.position = userInfo[key] ? "relative" : "absolute";
      lblRef2.current.style.fontSize = userInfo[key] ? "0.75rem" : "1rem";
      lblRef2.current.style.color = userInfo[key] ? "gray" : "black";
    }
    if(fieldContent.fieldname!='rePassword')
    setErr(userInfo[key]!=''&&!fieldContent.validateUserInfo(userInfo[key]));
    else
    setErr(userInfo[key]!=''&&userInfo.password!==userInfo.rePassword);
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
            {fieldContent.fieldname==="password"&&<ValidatePassword passwordVal={userInfo.password}/>}
            {fieldContent.fieldname==="rePassword"&&<ValidateRePassword passwordVal={userInfo.password} rePasswordVal={userInfo.rePassword}/>}
            {fieldContent.fieldname!=="password"&&fieldContent.fieldname!=="rePassword"&&fieldContent.fieldErr.map((str,id)=>{return(<div key={id}>{str}</div>)})}
          </div>
          )}
        </>
      }
    </div>
  );
};

const ValidatePassword = ({ passwordVal }: { passwordVal: string }) => {
  const fieldErr = [
    " At least 8 characters",
    " 1 uppercase",
    " 1 lowercase",
    " 1 symbol",
    " 1 number",
  ];
  const upperCaseRegex = /^[A-Z]$/;
  const lowerCaseRegex = /^[a-z]$/;
  const symbolRegex = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
  const numberRegex = /^[0-9]$/;
  const regRzlt = [false, false, false, false];
  Array.from(passwordVal).forEach((char) => {
    regRzlt[0] ||= upperCaseRegex.test(char);
    regRzlt[1] ||= lowerCaseRegex.test(char);
    regRzlt[2] ||= symbolRegex.test(char);
    regRzlt[3] ||= numberRegex.test(char);
  });
  const checkVal = [validatorjs.isLength(passwordVal, { min: 8 }), ...regRzlt];
  return (
    <div>
      {fieldErr.map((err, id) => {
        const color=checkVal[id] ? " text-green-600":"text-red-600"
        const marker=checkVal[id] ?'✓':'✘'
        return <div><div className={color}>{marker} {err}</div> </div>;
      })}
    </div>
  );
};

const ValidateRePassword = ({ passwordVal,rePasswordVal }: { passwordVal: string,rePasswordVal:string }) => {
  const fieldErr=["- Passwords do NOT match"]
  const rzlt = [passwordVal===rePasswordVal];
  return (
    <div>
      {fieldErr.map((err, id) => {
        const color=rzlt[id] ? " text-green-600":"text-red-600"
        const marker=rzlt[id] ?'✓':'✘'
        return <div><div className={color}>{marker} {err}</div> </div>;
      })}
    </div>
  );
};
export default FieldContentTag

