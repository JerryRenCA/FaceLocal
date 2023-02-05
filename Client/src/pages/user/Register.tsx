import React, { createRef, useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
// import Component1 from 'Aa'
import FieldContent, {
  T_fieldConent,
  T_userInfo,
} from "./components/FieldContent";
import FieldContentTag from "./components/FieldContent";
import validatorjs from "validator";
// type

//Style Components
const Container = tw.div`mt-4`;
const Wrapper = tw.div`mx-auto w-[45rem] border-2 rounded-lg px-6 pt-12`;
//Data
const fields: T_fieldConent[] = [
  {
    fieldname: "name",
    fieldInfo: "- Name will be displayed on your profile.",
    fieldErr: ["- Name length between 6 to 20."],
    fieldVisibleSettable: false,
    icon: PersonIcon,
     updateUserInfo:(prev:T_userInfo,newVal:string):T_userInfo=>{return{...prev,name:newVal}},
     validateUserInfo:(val:string)=>validatorjs.isLength(val, { max: 20, min: 6 })
  },
  {
    fieldname: "email",
    fieldInfo: "- Email will be used to login in.",
    fieldErr: ["- Email address is invalid."],
    fieldVisibleSettable: false,
    icon: EmailIcon,
     updateUserInfo:(prev:T_userInfo,newVal:string):T_userInfo=>{return{...prev,email:newVal}},
     validateUserInfo:(val:string)=>validatorjs.isLength(val, { max: 20, min: 6 })
  },
  {
    fieldname: "password",
    fieldInfo: "",
    fieldErr:[ 
    "- password  is invalid",
     "- At least 8"],
    fieldVisibleSettable: true,
    icon: LockIcon,
     updateUserInfo:(prev:T_userInfo,newVal:string):T_userInfo=>{return{...prev,password:newVal}},
     validateUserInfo:(val:string)=>validatorjs.isLength(val, { max: 20, min: 6 })
  },
  {
    fieldname: "rePassword",
    fieldInfo: "",
    fieldErr: ["- Retyped password  is not matching."],
    fieldVisibleSettable: true,
    icon: LockIcon,
     updateUserInfo:(prev:T_userInfo,newVal:string):T_userInfo=>{return{...prev,rePassword:newVal}},
     validateUserInfo:(val:string)=>validatorjs.isLength(val, { max: 20, min: 6 })
  },
];
//Module
const Register = () => {
  const [userInfo, setUserInfo] = useState<T_userInfo>({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  // const refs = useRef(Array.from({length: fields.length}, a => createRef<HTMLLabelElement>()));

  return (
    <Container>
      <Wrapper>
        <div className="text-3xl">Register</div>
        {
          fields.map((fieldContent,id)=>{
            return(
              <FieldContentTag
              key={fieldContent.fieldname}
              fieldContent={fieldContent}
              setUserInfo={setUserInfo}
              userInfo={userInfo}

            />
            )
          })
        }
        {/* <Component1/> */}
      </Wrapper>
    </Container>
  );
};
export default Register;
