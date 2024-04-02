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
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

export const registerUser = async ({
  email,
  fullName,
  username,
  password,
}: ICreateUserForm) => {
  try {
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
    return { userCredential };
  } catch (error) {
    const errorCode = (error as AuthError).code;
    const errorMessage = (error as AuthError).message;
    console.error("Error registering user:", errorCode, errorMessage);
    return { errorCode, errorMessage };
  }
};

export const loginUser = async (usernameOrEmail: string, password: string) => {
  try {
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
        throw new Error("UserName not found");
      }
    }
    const userCredential = await signInCredential;
    return userCredential.user;
  } catch (error) {
    const errorCode = (error as AuthError).code;
    const errorMessage = (error as AuthError).message;
    console.error("Error Loggin in user:", errorCode, errorMessage);
    return { errorMessage, errorCode };
  }
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
