import React, { useContext, useState, useEffect } from "react";
import CurrentUserContext from "./CurrentUserContext";
const ProfileForm = ({ updateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  
  
  const INITIAL_STATE = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  // handle form submit
  const handleSubmit = async (e)  => {
    e.preventDefault();
    const res = await updateUser(formData, currentUser.username);
    // TODO show a sucess or fail message depending on response
    console.log(res);
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
    <div className="ProfileForm-wrapper">
      <form onSubmit={handleSubmit} className="ProfileForm">
        <label htmlFor="username">username</label>
        <input
          className="ProfileForm-input-firstName"
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          // placeholder={currentUser.firstName}
          required
        />

        <label htmlFor="lastName">first name</label>
        <input
          className="ProfileForm-input-lastName"
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          // placeholder={currentUser.lastName}
          required
        />
        <label htmlFor="email">email</label>
        <input
          className="ProfileForm-input-email"
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          // placeholder={currentUser.email}
          required
        />
        <button className="ProfileForm-button">Add</button>
      </form>
    </div>
    
  )
}

export default ProfileForm;