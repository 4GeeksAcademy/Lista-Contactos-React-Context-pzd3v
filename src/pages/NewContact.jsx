import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useStore } from "../hooks/useGlobalReducer"; 

export const NewContact = () => {
  const { state, dispatch } = useStore();
  const { id } = useParams(); // capturamos el ID si existe
  const navigate = useNavigate();
  const agendaSlug = "pzd3v";

  const [contact, setContact] = useState({
    name: "", email: "", phone: "", address: ""
  });

  // Si estamos editando, buscamos el contacto en el store y rellenamos el form
  useEffect(() => {
    if (id && state.contacts.length > 0) {
      const contactToEdit = state.contacts.find(c => c.id === parseInt(id));
      if (contactToEdit) setContact(contactToEdit);
    }
  }, [id, state.contacts]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Decidimos si es: ¿POST o PUT?
    const method = id ? "PUT" : "POST";
    const url = id 
      ? `https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts/${id}`
      : `https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`;

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        const data = await response.json();
        
        //Actualizamos el estado global según la acción
        if (id) {
          dispatch({ type: "UPDATE_CONTACT", payload: data });
        } else {
          dispatch({ type: "ADD_CONTACT", payload: data });
        }
        
        navigate("/");
      }
    } catch (error) {
      console.error("Error en la operación:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{id ? "Update Contact" : "Add a new contact"}</h2>
      <form onSubmit={handleSubmit}>
         <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name" // IMPORTANTE: que coincida con la key del estado
            className="form-control"
            placeholder="Enter Name"
            value={contact.name}
            onChange={handleChange}
            required
          />
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email" // IMPORTANTE: que coincida con la key del estado
            className="form-control"
            placeholder="Enter Email"
            value={contact.email}
            onChange={handleChange}
            required
          />
          <label className="form-label">Phone</label>
          <input
            type="number"
            name="phone" // IMPORTANTE: que coincida con la key del estado
            className="form-control"
            placeholder="Enter Phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address" // IMPORTANTE: que coincida con la key del estado
            className="form-control"
            placeholder="Enter Address"
            value={contact.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {id ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
};
       