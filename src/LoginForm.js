import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ loginUser }) => {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    username: "testuser3",
    password: "12345",
  }
  
  // state for form
  const [formData, setFormData] = useState(INITIAL_STATE);

  // handle form submit
  const handleSubmit = async (e)  => {
    e.preventDefault();
    await loginUser(formData);
    navigate("/");
  }

  // handle form change
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  }

  // render form
  return (
    <div className="LoginForm-wrapper">
      <form onSubmit={handleSubmit} className="NewColorForm">
        <label htmlFor="username">username</label>
        <input
          className="LoginForm-input-username"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="testuser"
          required
        />
        <label htmlFor="password">password</label>
        <input
          className="LoginForm-input-password"
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="LoginForm-button">Add</button>
      </form>
    </div>
    
  )
  
}

export default LoginForm;