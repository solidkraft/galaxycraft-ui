import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Link } from "arwes";
import Cookies from "js-cookie";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: "20vh",
  },
  input: {
    padding: '8px 5px',
    outline: "none",
    border: "1px solid #26dafd",
    color: "#26dafd",
    backgroundColor: "#000909",
    marginBottom: "5px",
  },
  button: {
    textAlign: 'center',
    marginTop: "15px",
  },
};

const GALAXY_API_URL = "https://galaxycraft.onrender.com/api/v1";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${GALAXY_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Cookies.set("first_name", firstName);
        Cookies.set("last_name", lastName);

        navigate("/login");
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <Button type="submit" style={styles.button}>Sign Up</Button>
      </form>
      <br/>
      Or <Link href="/login">Log In</Link>.
    </>
  );
};

export default RegisterForm;
