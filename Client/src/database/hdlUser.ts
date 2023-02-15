
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import {
  doc,
  FieldValue,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { T_userLocalStorage } from "../contexts/authContext/AuthProvider";
import { T_userInfoRegister } from "../viewModel/user/userModel";
import { auth, db } from "./firebase";

export const USERCOLLECTION = "users";
export type T_userCollection = {
  name: string;
  createdAt: FieldValue | null;
  profileIcon: string;
  location: string;
};

export const default_userCollection: T_userCollection = {
  name: "",
  createdAt: null,
  profileIcon: "",
  location: "",
};
export type T_userProfile = {
  uid: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
};
// Update user collection
export const updateUserCollection = async (
  uid: string,
  colname: string,
  val: string
) => {
  const userRef = doc(db, USERCOLLECTION, uid);
  const key = colname as keyof T_userCollection;
  const obj: any = {};
  obj[key] = val;
  await updateDoc(userRef, obj);
};
// Update user Profile
export const updateUserProfile = async (
  uid: string,
  fieldName: string,
  val: string
) => {
  const userRef = doc(db, USERCOLLECTION, uid);
  const key = fieldName as keyof T_userProfile;
  const obj: any = {};
  obj[key] = val;
  if (auth.currentUser) await updateProfile(auth.currentUser, obj);
};

// login module
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
      userCredential: userCredential,
      userCollection: dataget,
    };
  } catch (err) {
    return { userCollection: default_userCollection, userCredential: null };
  }
};

// register module
export const register = async (
  userInfo: T_userInfoRegister
): Promise<T_userLocalStorage> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
    const k = serverTimestamp();
    const newUserCollection: T_userCollection = {
      ...default_userCollection,
      name: userInfo.name,
      createdAt: serverTimestamp(),
    };

    await setDoc(
      doc(db, USERCOLLECTION, userCredential.user.uid),
      newUserCollection
    );
    return {
      userCredential: userCredential,
      userCollection: newUserCollection,
    };
  } catch {
    return { userCollection: default_userCollection, userCredential: null };
  }
};

//test password
export const testPassword = async (userInfo:T_userInfoRegister):Promise<boolean> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    userInfo.email,
    userInfo.oldPassword
  );
  console.log(userCredential)
  return userCredential===undefined
};
