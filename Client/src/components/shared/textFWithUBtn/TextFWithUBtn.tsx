import {
  Button,
  IconButton,
  Snackbar,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import {
  T_userCollection,
  updateUserCollection,
} from "../../../database/hdlUser";
import {
  authContext,
  default_authState,
  T_userLocalStorage,
} from "../../../contexts/authContext/AuthProvider";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
// Types
// Styled Components
const Container = tw.div``;
const Wrapper = tw.div`flex items-center`;
// Functions
// Module
const TextFWithUBtn = ({
  title,
  value,
  uid,
  readonly,
  colName,
  collectionName,
}: {
  title: string;
  value: string | null;
  readonly?: boolean;
  uid: string;
  colName: string;
  collectionName?: string;
}) => {
  const [val, setVal] = useState("");
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnChange = () => {
    if (inputRef.current) setVal(inputRef.current.value);
  };
  const authCtx = useContext(authContext);
  const handleUpdate = () => {
    updateUserCollection(uid, colName, val);
    const key = colName as keyof T_userCollection;
    const user_localStorage = default_authState().user;
    const userCollection: any = user_localStorage.userCollection;
    userCollection[key] = val;
    const user_localStorageNew = {
      ...user_localStorage,
      userCollection: { ...userCollection },
    };

    if (user_localStorage) authCtx.update(user_localStorageNew);
    enqueueSnackbar("Update successfully!", { variant: "success" });
  };

  return (
    <Container>
      <Wrapper>
        <div className="grow">
          <TextField
            inputRef={inputRef}
            fullWidth
            id="standard-basic"
            label={title}
            variant="standard"
            disabled={readonly}
            defaultValue={value}
            onChange={handleOnChange}
          />
        </div>

        <div className=" self-end">
          <Tooltip
            title={readonly ? "" : "Update"}
            sx={{
              opacity: readonly ? 0 : 100,
              cursor: readonly ? "default" : "pointer",
            }}
          >
            <>
              <Button
                size="small"
                onClick={handleUpdate}
                sx={{
                  opacity: readonly ? 0 : 100,
                  cursor: readonly ? "default" : "pointer",
                }}
              >
                <UpgradeIcon />
              </Button>
            </>
          </Tooltip>
        </div>
      </Wrapper>
    </Container>
  );
};
export default TextFWithUBtn;
