import { useEffect, useState } from "react";
import { api } from "../../api/index.js";

export const View = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    setUsers(await api.user.get());
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="">
      {users?.length > 0 &&
        users.map((user) => (
          <div>
            <p>{user?.name}</p>
            <a href={`/users/${user.id}`}>Detail</a>
          </div>
        ))}
    </div>
  );
};
