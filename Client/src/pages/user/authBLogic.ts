import { Login } from "@mui/icons-material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import validatorjs from "validator";
import { validateUserInfo_email, validateUserInfo_name, validateUserInfo_password, validateUserInfo_rePassword } from "../../components/shared/fieldContent/FieldValidate";
import { T_userLocalStorage } from "../../contexts/authContext/AuthProvider";
import { auth, db } from "../../database/firebase";

// types

export const USERCOLLECTION = "users";
export type T_userInfo = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
};
type T_userCollection = {
  name: string;
  createdAt: Date;
};


export const login = async (userInfo: T_userInfo):Promise<T_userLocalStorage> => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
    const docRef = doc(db, USERCOLLECTION, userCredential.user.uid);
    const userCollectionItem = await getDoc(docRef);
    const dataget=userCollectionItem.data() as unknown as T_userCollection

    return { uid: userCredential.user.uid, name: dataget.name };
  } catch (err) {
    return { uid: "", name: "" };
  }
};

export const register = async (
  userInfo: T_userInfo
): Promise<T_userLocalStorage> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
    await setDoc(doc(db, USERCOLLECTION, userCredential.user.uid), {
      name: userInfo.name,
      createdAt: serverTimestamp(),
    });
    return { uid: userCredential.user.uid, name: userInfo.name };
  } catch {
    return { uid: "", name: "" };
  }
};
