
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
  updateDoc,
} from "firebase/firestore";
import validatorjs from "validator";
import {
  validateUserInfo_email,
  validateUserInfo_name,
  validateUserInfo_password,
  validateUserInfo_rePassword,
} from "../../viewModel/user/userValidate";
import { T_userLocalStorage } from "../../contexts/authContext/AuthProvider";
import { auth, db } from "../../database/firebase";
import { default_userCollection, T_userCollection,USERCOLLECTION } from "../../database/hdlUser";
import { T_userInfoRegister } from "../../viewModel/user/userModel";

// types


//Functions
export const login = async (
  userInfo: T_userInfoRegister
): Promise<T_userLocalStorage> => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
    const docRef = doc(db, USERCOLLECTION, userCredential.user.uid);
    const userCollectionItem = await getDoc(docRef);
    const dataget = userCollectionItem.data() as unknown as T_userCollection;

    return {

      userCredential:userCredential,
      userCollection: dataget
    };
  } catch (err) {
    return {  userCollection: default_userCollection,userCredential:null };
  }
};

export const register = async (
  userInfo: T_userInfoRegister
): Promise<T_userLocalStorage> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
    const k=serverTimestamp()
    const newUserCollection:T_userCollection={
      ...default_userCollection,
      name: userInfo.name,
      createdAt: serverTimestamp(),
    }
  
    await setDoc(doc(db, USERCOLLECTION, userCredential.user.uid), newUserCollection);
    return {
      userCredential:userCredential,
      userCollection: newUserCollection,
    };
  } catch {
    return {  userCollection: default_userCollection,userCredential:null };
  }
};


