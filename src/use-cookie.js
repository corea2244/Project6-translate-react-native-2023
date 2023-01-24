import { useEffect, useState } from "react";

const getRandomCookie = () => {
  const cookieLen = 15;
  const randomNum = Math.floor(Math.random() * cookieLen);

  return `cookie_${randomNum + 1}`;
};

export const useCookie = () => {
  const [cookieKey, setCookieKey] = useState("");

  useEffect(() => {
    const randomCookie = getRandomCookie();
    setCookieKey(randomCookie);
  }, []);

  return {
    cookieKey,
  };
};
