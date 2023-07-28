import "./styles.css";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsBox: true
  });

  function handleForm(event) {
    const { name, checked, value } = event.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: name === "newsBox" ? checked : value
    }));
  }

  function submitForm(event) {
    event.preventDefault();
    const { password, confirmPassword, newsBox } = formData;
    if (password === confirmPassword) {
      console.log("Successfully signed in!!!");
    } else {
      console.log("Passwords don't match");
      return;
    }
    newsBox && console.log("Thanks to subscribe newsletter!!!");
  }

  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={submitForm}>
          <input
            type="email"
            name="email"
            onChange={handleForm}
            value={formData.email}
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            onChange={handleForm}
            value={formData.password}
            placeholder="password"
          />
          <input
            type="password"
            name="confirmPassword"
            onChange={handleForm}
            value={formData.confirmPassword}
            placeholder="confirm password"
          />
          <div className="newsletter">
            <input
              type="checkbox"
              id="newsBox"
              name="newsBox"
              onChange={handleForm}
              checked={formData.newsBox}
            />
            <label htmlFor="newsBox">I want to join the newsletter</label>
          </div>
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
}
