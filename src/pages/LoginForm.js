import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Link, withStyles } from "arwes";
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

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${GALAXY_API_URL}/tokens`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;

        Cookies.set("token", token, { expires: 7, secure: true });
        Cookies.set("email", data.email);
        Cookies.set("loggedIn", true);

        navigate("/journeys");
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleFormSubmit} style={styles.form}>
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
        <Button type="submit" style={styles.button}>Log in</Button>
      </form>
      <br/>
      Or <Link href="/register">Sign Up</Link>.
    </>
  );
};

export default withStyles(styles)(LoginForm);

