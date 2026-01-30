// src/views/Contact.jsx
import React, { useEffect } from "react";
import { useStore } from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";
import { Link } from "react-router-dom";

export const Home = () => {
  const { state, dispatch } = useStore();
  const username = "pzd3v"; //usuario unico

  const fetchContacts = async () => {
            const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${username}/contacts`);
            if (resp.ok) {
                const data = await resp.json();
                dispatch({ type: "GET_CONTACTS", payload: data.contacts });
            } else if (resp.status === 404) {
                // Si la agenda no existe, la creamos
                await fetch(`https://playground.4geeks.com/contact/agendas/${username}`, { method: "POST" });
            }
        }

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-3">
        <Link to="/NewContact" className="btn btn-success">
          Add new contact
        </Link>
      </div>
      <ul className="list-group">
        {state.contacts.map((item) => (
          <ContactCard key={item.id} contact={item} />
        ))}
      </ul>
    </div>
  );
};
