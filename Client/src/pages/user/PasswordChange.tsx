import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import FieldContentTag from "../../components/shared/fieldContent/FieldContent";
import { authContext } from "../../contexts/authContext/AuthProvider";

import {
  default_userInfoRegister,
  T_userInfoRegister,
  userFieldsPasswordChange,
  validateUserInfoForPasswordChange,
} from "../../viewModel/user/userModel";
import {
  testPassword,
  updateAuthPassword,
  updateUserProfile,
} from "../../database/hdlUser";
import { useSnackbar } from "notistack";

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
    setSubmitEnabled(validateUserInfoForPasswordChange(userInfo));
  }, [userInfo]);
  const navigator = useNavigate();
  const userAuthCtx = useContext(authContext);
  const { enqueueSnackbar } = useSnackbar();
  //submit
  const handleSubmit = async () => {
    if (userAuthCtx.state.user.userCredential) {
      const testOldPassword = await testPassword(userInfo); //test oldpassword, then update to new password
      if(!testOldPassword){
        enqueueSnackbar("Old Password Wrong!", { variant: "error" });
        return
      }
      const rzlt= await updateAuthPassword(userInfo.password)
      if(rzlt){
        enqueueSnackbar("Change password successfully!", { variant: "success" });
        navigator('/')
      }else{
        enqueueSnackbar("Change password fail!", { variant: "error" });
      }
    }
  };
  // set initial email
  if (userAuthCtx.state.user.userCredential) { 
    userFieldsPasswordChange[0].valSet =
      userAuthCtx.state.user.userCredential.user.email;
  }
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
