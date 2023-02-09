import React, { createRef, useContext, useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import FieldContent, {
  T_fieldBase,
  T_fieldContent,
} from "../../components/shared/fieldContent/FieldContent";
import FieldContentTag from "../../components/shared/fieldContent/FieldContent";
import validatorjs from "validator";
import { Link } from "react-router-dom";
import { register, T_userInfo} from "./authBLogic";
import { authContext } from "../../contexts/authContext/AuthProvider";
import { validateUserInfo_email, validateUserInfo_name, validateUserInfo_password, validateUserInfo_rePassword } from "../../components/shared/fieldContent/FieldValidate";

//Style Components
const Container = tw.div`pt-4 py-4 `;
const Wrapper = tw.div`my-4 mx-auto w-[45rem] border-2 rounded-lg px-6 pt-12 bg-white text-black`;
//Data
const fields: T_fieldContent[] = [
  {
    fieldname: "name",
    fieldInfo: "- Name will be displayed on your profile.",
    fieldErr: ["- Name length between 6 to 20."],
    fieldVisibleSettable: false,
    icon: PersonIcon,
    updateField: <T extends T_fieldBase>(prev: T, newVal: string): T => {
      return { ...prev, name: newVal };
    },
    validateField: validateUserInfo_name
  },
  {
    fieldname: "email",
    fieldInfo: "- Email will be used for login.",
    fieldErr: ["- Email address is invalid."],
    fieldVisibleSettable: false,
    icon: EmailIcon,
    updateField: <T extends T_fieldBase>(prev: T, newVal: string): T => {
      return { ...prev, email: newVal };
    },
    validateField: validateUserInfo_email
  },
  {
    fieldname: "password",
    fieldInfo: "",
    fieldErr: [],
    fieldVisibleSettable: true,
    icon: LockIcon,
    updateField: <T extends T_fieldBase>(prev: T, newVal: string): T => {
      return { ...prev, password: newVal };
    },
    validateField:validateUserInfo_password
  },
  {
    fieldname: "rePassword",
    fieldInfo: "",
    fieldErr: [],
    fieldVisibleSettable: true,
    icon: LockIcon,
    updateField: <T extends T_fieldBase>(prev: T, newVal: string): T => {
      return { ...prev, rePassword: newVal };
    },
    validateField: () => true,
  },
];

 const validateUserInfo = (userInfo: T_userInfo): boolean => {
  if (!fields[0].validateField(userInfo.name)) return false;
  if (!fields[1].validateField(userInfo.email)) return false;
  if (!fields[2].validateField(userInfo.password)) return false;
  if (!validateUserInfo_rePassword(userInfo.password, userInfo.rePassword))
    return false;
  return true;
};
//Module
const Register = () => {
  const [userInfo, setUserInfo] = useState<T_userInfo>({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [submitEnabled,setSubmitEnabled]=useState(false)
  const [registerErr,setRegisterErr]=useState(false)
  // const refs = useRef(Array.from({length: fields.length}, a => createRef<HTMLLabelElement>()));
  useEffect(()=>{setSubmitEnabled(validateUserInfo(userInfo))},[userInfo])
  const navigator=useNavigate()
  const userAuthCtx=useContext(authContext)
  const handleSubmit=async()=>{
    const registerRzlt= await register(userInfo)
    if(registerRzlt.uid) navigator('/')
    else{
      setRegisterErr(true)
    }
    userAuthCtx.login({uid:registerRzlt.uid,name:userInfo.name})
  }
  
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
        {registerErr&&(<div>{registerErr}</div>)}
        <div className="text-sm text-center hover:[&>a]:text-purple-600">
          By clicking Register, you agree to our <a href="">Terms of Use</a> and 
          <a href=""> Privacy Policy</a>
        </div>
        <button className=" disabled:text-gray-400 bg-primary-purple w-full my-2 h-12 rounded-lg text-white hover:bg-primary-purple-lighter"
        disabled={!submitEnabled}
        onClick={handleSubmit}>
          Create Account
        </button>
        <div className="text-sm text-center mb-4">
        Already have an account? <Link to='/login' className="hover:text-purple-600">Sign in!</Link>
        </div>
      </Wrapper>
    </Container>
  );
};
export default Register;
