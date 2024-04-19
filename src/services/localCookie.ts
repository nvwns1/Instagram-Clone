import { UserCredential } from "firebase/auth";
import Cookies from "js-cookie";

export const setAuthCookie = (userCredential: UserCredential) => {
  const { user } = userCredential;
  user.getIdToken().then((accessToken) => {
    const expiryTime = new Date();
    expiryTime.setTime(expiryTime.getTime() + 1 * 60 * 60 * 1000); // 1 hour in milliseconds

    Cookies.set("accessToken", accessToken, { expires: expiryTime });
    Cookies.set("user", JSON.stringify(user), { expires: expiryTime });
  });
};
export const getAuthCookie =  () => {
  const accessToken =  Cookies.get("accessToken");
  const user =  Cookies.get("user");
  if (accessToken) {
    return accessToken;
  }
  return null;
};

export const clearAuthCookie = () => {
  // Remove access token and user cookies
  Cookies.remove("accessToken");
  Cookies.remove("user");
};

export const accessTokenLocal = Cookies.get("accessToken");
