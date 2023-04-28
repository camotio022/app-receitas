import { useEffect } from "react";
import { api } from "../../api/index.js";

export const Detail = () => {
  const getUser = async () => {
    console.log(await api.user.get("H8eLoHQMhO5sjMAT4YqG"));
  };

  useEffect(() => {
    getUser();
  }, []);

  return <></>;
};
