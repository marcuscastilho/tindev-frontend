import React, { useState } from "react";
import "./Login.css";

import api from "../services/api";

import logo from "../assets/logo.svg";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(username);

    const response = await api.post("/devs", {
      username: username
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
    console.log(history);
  }

  return (
    <div className="login-container">
      <p>Process {JSON.stringify(process.env)}</p>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="Digite seu usuário do Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
