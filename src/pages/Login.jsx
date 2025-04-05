import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out both fields.");
      return;
    }

    console.log("Logged in with:", email, password);
    setError("");
  };

  
  return (
    <div>
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div>
          <button type="submit">Login</button>
        </div>

        <div>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>

        <div>
          <p>
            <a href="/forgot-password">Forgot your password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
