import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import FieldContentTag, {
  T_fieldBase,
  T_fieldContent,
} from "../../components/shared/fieldContent/FieldContent";
import { authContext } from "../../contexts/authContext/AuthProvider";
import { register } from "./authBLogic";
import {
  validateUserInfo_email,
  validateUserInfo_name,
  validateUserInfo_password,
  validateUserInfo_rePassword,
} from "../../viewModel/user/userValidate";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import {
  default_userInfoRegister,
  T_userInfoRegister,
  userFieldsPasswordChange,
  validateUserInfo,
} from "../../viewModel/user/userModel";

// Types
// Styled Components
const Container = tw.div``;
const Wrapper = tw.div`my-4 mx-auto w-[45rem] border-2 rounded-lg px-6 pt-12 bg-white text-black`;
// Functions & Data

// Module
const PasswordChange = () => {
  const [userInfo, setUserInfo] = useState<T_userInfoRegister>(
    default_userInfoRegister
  );
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [err, setErr] = useState(false);
  useEffect(() => {
    setSubmitEnabled(validateUserInfo(userInfo));
  }, [userInfo]);
  const navigator = useNavigate();
  const userAuthCtx = useContext(authContext);
  const handleSubmit = async () => {
    const registerRzlt = await register(userInfo);
    if (registerRzlt.userCredential?.user.uid) navigator("/");
    else {
      setErr(true);
    }
    userAuthCtx.login(registerRzlt);
  };
  if (userAuthCtx.state.user.userCredential)
    userFieldsPasswordChange[0].valSet =
      userAuthCtx.state.user.userCredential.user.email;
  return (
    <Container>
      <Wrapper>
        <div className="text-3xl">Password Change</div>
        {userFieldsPasswordChange.map((fieldContent, id) => {
          return (
            <FieldContentTag
              key={fieldContent.fieldname}
              fieldContent={fieldContent}
              setUserInfo={setUserInfo}
              userInfo={userInfo}
            />
          );
        })}
        {err && <div>{err}</div>}
        <button
          className=" disabled:text-gray-400 bg-primary-purple w-full my-2 h-12 rounded-lg text-white hover:bg-primary-purple-lighter"
          disabled={!submitEnabled}
          onClick={handleSubmit}
        >
          Change Password
        </button>
      </Wrapper>
    </Container>
  );
};
export default PasswordChange;
