import "./App.css";
import { useState } from "react";

function App() {
  const defaultForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(defaultForm);

  const validateInput = (text, name) => {
    switch (name) {
      case "firstName":
        const firstNameValid = /^.{5,}$/;
        console.log(firstNameValid.test(text));
        setFormData({ ...formData, [name]: text });
        break;
      case "lastName":
        const lastNameValid = /^.{5,}$/;
        console.log(lastNameValid.test(text));
        setFormData({ ...formData, [name]: text });
        break;
      case "email":
        const emailValid = /\S+@\S+\.\S+/;
        console.log(emailValid.test(text));
        setFormData({ ...formData, [name]: text });
        break;
      case "password":
        const passwordValid = /^.{8,}$/;
        console.log(passwordValid.test(text));
        setFormData({ ...formData, [name]: text });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Form Repeater</h1>
      <div className="form-container">
        <form>
          <div className="social-buttons">
            <a href="https:/facebook.com" target="_blank" rel="noreferrer">
              <button type="button" name="facebook-button">
                Connect with Facebook
              </button>
            </a>
            <a href="https:/twitter.com" target="_blank" rel="noreferrer">
              <button type="button" name="twitter-button">
                Connect with Twitter
              </button>
            </a>
          </div>
          <p>Or sign up with</p>
          <div className="name-inputs">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={(e) => validateInput(e.target.value, e.target.name)}
              placeholder="first name"
              type="text"
            />
            <input
              name="lastName"
              value={formData.lastame}
              onChange={(e) => validateInput(e.target.value, e.target.name)}
              placeholder="last name"
              type="text"
            />
          </div>
          <input
            name="email"
            value={formData.email}
            onChange={(e) => validateInput(e.target.value, e.target.name)}
            placeholder="email"
            type="text"
          />
          <input
            name="password"
            value={formData.password}
            onChange={(e) => validateInput(e.target.value, e.target.name)}
            placeholder="password"
            type="password"
          />
          <p>By creating an account, you agree to our Terms & Conditions</p>
          <input name="submit" type="submit" value="Create account" />
          <p className="">Template by w3Layouts</p>
        </form>
      </div>
    </div>
  );
}

export default App;
