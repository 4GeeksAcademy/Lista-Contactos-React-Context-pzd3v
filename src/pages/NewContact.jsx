// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook for accessing the global state.


export const NewContact = () => {
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // backend
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">Add a new contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Full Name"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Enter phone"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter address"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Save Contact
        </button>
      </form>
      <Link to="/">
        <button className="btn text-primary">or get back to contacts</button>
      </Link>
    </div>
  );
};
