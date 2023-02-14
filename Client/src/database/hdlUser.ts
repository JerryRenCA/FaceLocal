import { doc, FieldValue, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

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
