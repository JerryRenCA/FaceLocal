import React, { useContext, useState } from "react";
import tw from "tailwind-styled-components";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FieldContentTag, { T_fieldConent } from "../../components/shared/fieldContent/FieldContent";
import validatorjs from "validator";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login, T_userInfo } from "./authBLogic";
import { authContext } from "../../contexts/authContext/AuthProvider";

const Container = tw.div`py-4`;
const Wrapper = tw.div`py-4 mx-auto w-[45rem] border-2 rounded-lg px-6 pt-12 bg-white text-black`;
const fields: T_fieldConent[] = [
  {
    fieldname: "email",
    fieldInfo: "",
    fieldErr: [],
    fieldVisibleSettable: false,
    icon: EmailIcon,
    updateUserInfo: (prev: T_userInfo, newVal: string): T_userInfo => {
      return { ...prev, email: newVal };
    },
    validateField: (val: string) => validatorjs.isEmail(val),
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
    validateField: (val: string) => true,
  },
];
//Module
const Signin = () => {
  const [userInfo, setUserInfo] = useState<T_userInfo>({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [loginErr, setLoginErr] = useState(false);
  const navigator = useNavigate();
  const authCtx = useContext(authContext);
  const handleLogin = async () => {
    const loginRzlt = await login(userInfo);
    console.log('login:',loginRzlt)
    if (loginRzlt.uid) {
      authCtx.login(loginRzlt);
      navigator("/");
    } else setLoginErr(true);
  };
  return (
    <Container>
      <Wrapper>
        <div className="text-3xl">Login</div>
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
        {loginErr && (
          <div className="pl-4 pb-2 mt-[-8px] text-red-700 text-sm">
            Email address and password combination is incorrect.
          </div>
        )}
        <div>
          <input
            type="checkbox"
            name=""
            id="keepsignin"
            className="w-4 h-4 ml-4 align-middle"
          />
          <label htmlFor="keepsignin" className="pl-2 align-middle">
            Keep me signed in
          </label>
        </div>
        <div className="hover:[&>div>a]:text-purple-800 hover:[&>div>a]:font-bold flex text-sm pl-2">
          <div className="p-2">
            <a href="">Forgot password?</a>
          </div>
          <div className="p-2 ">
            <Link to="/register">No account? Register free.</Link>
          </div>
        </div>
        <button
          className=" bg-primary-purple w-full my-2 h-12 rounded-lg text-white hover:bg-primary-purple-lighter"
          onClick={handleLogin}
        >
          Login
        </button>
      </Wrapper>
    </Container>
  );
};
export default Signin;
