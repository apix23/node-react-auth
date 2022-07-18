import { useState, useEffect } from "react";
import { getLocalStorageInfo } from "../utils/getLocalStorageInfo";
import { useNavigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigateTo = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/user/auth", {
      method: "POST",
      headers: {
        authorization: getLocalStorageInfo(),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.isAuthenticated);
        setIsAuth(data.isAuthenticated);
      });
  }, []);

  if (isAuth) {
    navigateTo("/user/sign-in/success");
  } else {
    navigateTo("/user/sign-in/fail");
  }
};

export default RequiredAuth;
