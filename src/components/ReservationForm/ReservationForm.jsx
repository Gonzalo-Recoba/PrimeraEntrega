import React, { useState } from "react";
import "./ReservationForm.css";
import { doc, setDoc, collection } from "firebase/firestore";
import { app } from "../../utils/firestore/firestore";

const ReservationForm = ({ hotel }) => {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkin || !checkout) {
      alert("Por favor, seleccione las fechas de check-in y check-out.");
      return;
    }

    const newReservation = {
      hotel: hotel.name,
      checkin,
      checkout,
      adults,
      children,
    };

    try {
      const docRef = doc(collection(app, "reservas"));
      await setDoc(docRef, newReservation);
      alert("¡Reserva realizada con éxito!");
    } catch (error) {
      console.error("Error al realizar la reserva: ", error);
      alert("Error al realizar la reserva. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <h3>Realizar una reserva</h3>
      <div className="form-group">
        <label>Check-in:</label>
        <input
          type="date"
          value={checkin}
          onChange={(e) => setCheckin(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Check-out:</label>
        <input
          type="date"
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Adultos:</label>
        <input
          type="number"
          min="1"
          value={adults}
          onChange={(e) => setAdults(parseInt(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label>Niños:</label>
        <input
          type="number"
          min="0"
          value={children}
          onChange={(e) => setChildren(parseInt(e.target.value))}
        />
      </div>
      <button type="submit">Reservar</button>
    </form>
  );
};

export default ReservationForm;
