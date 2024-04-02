import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebase";
import { AuthError, ICreateUserForm } from "@/interfaces/IAuth";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";

const auth = getAuth(app);
const db = getFirestore(app);

export const useRegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const registerUser = async ({
    email,
    fullName,
    username,
    password,
  }: ICreateUserForm) => {
    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        fullName,
        username,
        email,
      });

      setLoading(false);
      setError("");
      console.log('Successfully created User')
      return userCredential.user;
    } catch (error) {
      setLoading(false);
      const errorMessage = (error as AuthError).message;
      setError(errorMessage);
    }
  };

  return { loading, registerUser, error };
};

const getUserEmailByUsername = async (
  username: string
): Promise<string | null> => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "users"), where("username", "==", username))
    );

    if (querySnapshot.empty) {
      return null;
    }

    const docSnapshot = querySnapshot.docs[0];
    const userData = docSnapshot.data();

    const userEmail = userData.email;
    return userEmail;
  } catch (error) {
    console.error("Error fetching user by username:", error);
    return null;
  }
};

export const useLoginUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loginUser = async (usernameOrEmail: string, password: string) => {
    try {
      setLoading(true);
      const isEmail = usernameOrEmail.includes("@");
      let signInCredential;

      if (isEmail) {
        signInCredential = signInWithEmailAndPassword(
          auth,
          usernameOrEmail,
          password
        );
      } else {
        const userEmail = await getUserEmailByUsername(usernameOrEmail);
        if (userEmail) {
          signInCredential = signInWithEmailAndPassword(
            auth,
            userEmail,
            password
          );
        } else {
          throw new Error("Firebase: Error (auth/invalid-credential).");
        }
      }
      const userCredential = await signInCredential;
      setLoading(false);
      setError("");
      console.log('Successfully Login User')
      return userCredential.user;
    } catch (error) {
      setLoading(false);
      const errorMessage = (error as AuthError).message;
      setError(errorMessage);
    }
  };

  return { loading, loginUser, error };
};
