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

import { Link } from "react-router-dom";
import { register} from "./authBLogic";
import { authContext, default_userLocalStorage, T_userLocalStorage } from "../../contexts/authContext/AuthProvider";
import { validateUserInfo_email, validateUserInfo_name, validateUserInfo_password, validateUserInfo_rePassword } from "../../viewModel/user/userValidate";
import { UserCredential } from "firebase/auth";
import { default_userInfoRegister, T_userInfoRegister, userFieldsRegister, validateUserInfo } from "../../viewModel/user/userModel";

//Style Components
const Container = tw.div`pt-4 py-4 `;
const Wrapper = tw.div`my-4 mx-auto w-[45rem] border-2 rounded-lg px-6 pt-12 bg-white text-black`;
//Data
//Module
const RegisterPanel = () => {
  const [userInfo, setUserInfo] = useState<T_userInfoRegister>(default_userInfoRegister);
  const [submitEnabled,setSubmitEnabled]=useState(false)
  const [registerErr,setRegisterErr]=useState(false)
 
  useEffect(()=>{setSubmitEnabled(validateUserInfo(userInfo))},[userInfo])
  const navigator=useNavigate()
  const userAuthCtx=useContext(authContext)
  const handleSubmit=async()=>{
    const registerRzlt= await register(userInfo)
    if(registerRzlt.userCredential?.user.uid) navigator('/')
    else{
      setRegisterErr(true)
    }
    userAuthCtx.login(registerRzlt)
  }
  
  return (
    <Container>
      <Wrapper>
        <div className="text-3xl">Register</div>
        {userFieldsRegister.map((fieldContent, id) => {
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
export default RegisterPanel;
