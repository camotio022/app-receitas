import { useState } from "react";
import { api } from "../../api/index.js";
import { User } from "../../api/entities/User.jsx";

export const Register = () => {
  const [newUser, setUser] = useState({ email: "", name: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((old) => ({ ...old, [name]: value }));
  };

  const handleSubmit = () => {
    api.user.post(newUser);
  };

  return (
    <div>
      <input name="email" value={newUser?.email} onChange={handleChange} />
      <input name="name" value={newUser?.name} onChange={handleChange} />
      <input name="birth" value={newUser?.birth} onChange={handleChange} />
      <input name="gender" value={newUser?.gender} onChange={handleChange} />
      <button onClick={handleSubmit}>Registrar</button>
    </div>
  );
};
