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
const Container = tw.div`pt-4 py-4 `;
const Wrapper = tw.div`my-4 mx-auto w-[45rem] border-2 rounded-lg px-6 pt-12 bg-white text-black`;
//Data
const fields: T_fieldConent[] = [
  {
    fieldname: "name",
    fieldInfo: "- Name will be displayed on your profile.",
    fieldErr: ["- Name length between 6 to 20."],
    fieldVisibleSettable: false,
    icon: PersonIcon,
    updateUserInfo: (prev: T_userInfo, newVal: string): T_userInfo => {
      return { ...prev, name: newVal };
    },
    validateUserInfo: (val: string) =>
      validatorjs.isLength(val, { max: 20, min: 6 }),
  },
  {
    fieldname: "email",
    fieldInfo: "- Email will be used for login.",
    fieldErr: ["- Email address is invalid."],
    fieldVisibleSettable: false,
    icon: EmailIcon,
    updateUserInfo: (prev: T_userInfo, newVal: string): T_userInfo => {
      return { ...prev, email: newVal };
    },
    validateUserInfo: (val: string) => validatorjs.isEmail(val),
  },
  {
    fieldname: "password",
    fieldInfo: "",
    fieldErr: [],
    fieldVisibleSettable: true,
    icon: LockIcon,
    updateUserInfo: (prev: T_userInfo, newVal: string): T_userInfo => {
      return { ...prev, password: newVal };
    },
    validateUserInfo: (val: string) => validatorjs.isStrongPassword(val),
  },
  {
    fieldname: "rePassword",
    fieldInfo: "",
    fieldErr: [],
    fieldVisibleSettable: true,
    icon: LockIcon,
    updateUserInfo: (prev: T_userInfo, newVal: string): T_userInfo => {
      return { ...prev, rePassword: newVal };
    },
    validateUserInfo: () => true,
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
        {fields.map((fieldContent, id) => {
          return (
            <FieldContentTag
              key={fieldContent.fieldname}
              fieldContent={fieldContent}
              setUserInfo={setUserInfo}
              userInfo={userInfo}
            />
          );
        })}
        <div className="text-sm text-center hover:[&>a]:text-purple-600">
          By clicking Register, you agree to our <a href="">Terms of Use</a> and 
          <a href=""> Privacy Policy</a>
        </div>
        <button className=" bg-primary-purple w-full my-2 h-12 rounded-lg text-white hover:bg-primary-purple-lighter">
          Create Account
        </button>
        <div className="text-sm text-center mb-4">
        Already have an account? <a href="" className="hover:text-purple-600">Sign in!</a> 
        </div>
      </Wrapper>
    </Container>
  );
};
export default Register;
