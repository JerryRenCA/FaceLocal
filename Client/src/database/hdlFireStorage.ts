import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const uploadToFireStorage = (
  file: File,
  setUrlUploadedFile: React.Dispatch<React.SetStateAction<string>>,
  setUploadProgress: React.Dispatch<React.SetStateAction<number>>,
) => {
  const storageRef = ref(storage, "images/rivers.jpg");
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setUploadProgress(progress);
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setUrlUploadedFile(downloadURL);
      });
    }
  );
};
