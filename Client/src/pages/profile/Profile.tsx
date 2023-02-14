import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useContext, useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import TextFWithUBtn from "../../components/shared/textFWithUBtn/TextFWithUBtn";
import {
  authContext,
  default_authState,
} from "../../contexts/authContext/AuthProvider";
import { uploadToFireStorage } from "../../database/hdlFireStorage";
import { T_userCollection, updateUserCollection } from "../../database/hdlUser";

// Types
// Styled Components
const Container = tw.div`flex justify-center items-center`;
const Wrapper = tw.div`border-2 my-12 w-[30rem] rounded-lg p-8 grid grid-cols-1 gap-3`;
const Title = tw.div`text-3xl py-4`;
// Functions
// Module
const Profile = () => {
  const [selFile, setSelFile] = useState<File>();
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [urlUploadedFile, setUrlUploadedFile] = useState<string>("");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setSelFile(e.target.files[0]);
  };
  useEffect(() => {
    if (selFile)
      uploadToFireStorage(selFile, setUrlUploadedFile, setUploadProgress);
  }, [selFile]);
  const authCtx = useContext(authContext);
  const uid = authCtx.state.user.userCredential?.user.uid as string;
  useEffect(() => {
    if (urlUploadedFile) {
      const key = "profileIcon" as keyof T_userCollection;
      const user_localStorage = default_authState().user;
      const userCollection: any = user_localStorage.userCollection;
      userCollection[key] = urlUploadedFile;
      const user_localStorageNew = {
        ...user_localStorage,
        userCollection: { ...userCollection },
      };

      if (user_localStorage) authCtx.update(user_localStorageNew);
      updateUserCollection(uid, "profileIcon", urlUploadedFile);
    }
  }, [urlUploadedFile]);
  return (
    <Container>
      <Wrapper>
        <div className="flex justify-center items-center">
          <Title>Profile</Title>
          <IconButton
            color="primary"
            aria-label="upload avatar"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleFileChange}
            />
            <Tooltip title="Upload profile photo">
              <div className="relative">
                <Avatar
                  sx={{ bgcolor: deepOrange[500], margin: 1 }}
                  alt="Avatar"
                  src={authCtx.state.user.userCollection.profileIcon}
                />
                {uploadProgress != 0 && uploadProgress != 100 && (
                  <div className="absolute top-2 left-2">
                    <CircularProgress
                      color="info"
                      variant="determinate"
                      value={uploadProgress}
                    />
                  </div>
                )}
              </div>
            </Tooltip>
          </IconButton>
        </div>
        <TextFWithUBtn
          title="Name"
          value={authCtx.state.user.userCollection.name}
          colName="name"
          uid={uid}
        />
        <TextFWithUBtn
          title="Email"
          readonly
          value={
            authCtx.state.user.userCredential
              ? authCtx.state.user.userCredential.user.email
              : ""
          }
          colName="email"
          uid={uid}
        />
        <TextFWithUBtn
          title="Location"
          value={authCtx.state.user.userCollection.location}
          colName="location"
          uid={uid}
        />
      </Wrapper>
    </Container>
  );
};
export default Profile;
