// src/components/ContactCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../hooks/useGlobalReducer";

export const ContactCard = ({ contact }) => {
  const { dispatch } = useStore();
  const username = "pzd3v";

  // Función para borrar
  const handleDelete = async (id) => {
    const url = `https://playground.4geeks.com/contact/agendas/${username}/contacts/${id}`;
    
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        // Si la API lo borró con éxito, avisamos al Reducer
        dispatch({
          type: "DELETE_CONTACT",
          payload: id // Mandamos el ID para que el filter eliga cual es distinto
        });
        console.log(`Contacto ${id} eliminado`);
      }
    } catch (error) {
      console.error("Error al borrar:", error);
    }
  };

 return (
    <div className="list-group-item d-flex p-3 shadow-sm mb-2 rounded align-items-center">
      <div className="col-md-3 text-center">
        <img 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.xtrafondos.com%2Fwallpapers%2Fvertical%2Frick-sanchez-foto-policial-de-rick-y-morty-6533.jpg" 
          alt={contact.name}
          className="rounded-circle"
          style={{ height: "100px", width: "100px", objectFit: "cover" }}
        />
      </div>
      <div className="col-md-6 px-3">
        <h5 className="mb-1">{contact.name}</h5>
        <p className="text-muted mb-1">
          <i className="fa-solid fa-location-dot me-2"></i>{contact.address}
        </p>
        <p className="text-muted mb-1">
          <i className="fa-solid fa-phone-flip me-2"></i>{contact.phone}
        </p>
        <p className="text-muted mb-0">
          <i className="fa-solid fa-envelope me-2"></i>{contact.email}
        </p>
      </div>
      <div className="col-md-3 d-flex justify-content-end align-items-center">
        <Link to={`/edit-contact/${contact.id}`} className="btn text-primary mx-3">
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
        <i 
          className="fa-solid fa-trash btn text-danger"
          onClick={() => {
            if (window.confirm("¡Alto ahí!, seguro que quieres borrar a este contacto?")) {
               handleDelete(contact.id);
            }
          }}
        ></i>
      </div>
    </div>
  );
};