import React, { useContext, useState } from "react";
import tw from "tailwind-styled-components";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FieldContentTag, {
  T_fieldBase,
  T_fieldContent,
} from "../../components/shared/fieldContent/FieldContent";
import validatorjs from "validator";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/authContext/AuthProvider";
import {
  default_userInfoRegister,
  T_userInfoRegister,
  userFieldsLogin,
} from "../../viewModel/user/userModel";
import { login } from "../../database/hdlUser";

const Container = tw.div`py-4`;
const Wrapper = tw.div`py-4 mx-auto w-[45rem] border-2 rounded-lg px-6 pt-12 bg-white text-black`;

//Module
const Signin = () => {
  const [userInfo, setUserInfo] = useState<T_userInfoRegister>(
    default_userInfoRegister
  );
  const [loginErr, setLoginErr] = useState(false);
  const navigator = useNavigate();
  const authCtx = useContext(authContext);
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginRzlt = await login(userInfo);
    console.log("login:", loginRzlt);
    if (loginRzlt.userCredential?.user) {
      authCtx.login(loginRzlt);
      navigator("/");
    } else setLoginErr(true);
  };
  return (
    <Container>
      <Wrapper>
        <form onSubmit={handleLogin}>
          <div className="text-3xl">Login</div>
          {userFieldsLogin.map((fieldContent, id) => {
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
            <label
              htmlFor="keepsignin"
              className="pl-4 align-middle block text-sm pb-4 text-blue-400"
            >
              Test User: 'online2jerry@gmail.com'; Pwd: '####Ab12'
            </label>
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
            type="submit"
            className=" bg-primary-purple w-full my-2 h-12 rounded-lg text-white hover:bg-primary-purple-lighter"
          >
            Login
          </button>
        </form>
      </Wrapper>
    </Container>
  );
};
export default Signin;
