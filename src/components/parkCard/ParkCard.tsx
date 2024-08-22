// ParkCard.tsx
import React from "react";

import "./ParkCard.css";
import { ParkType } from "../../types/parkType";

type ParkCardProps = {
  park: ParkType;
  onToggleIsTaken: (id: number, newIsTaken: boolean) => void;
};

const ParkCard: React.FC<ParkCardProps> = ({ park, onToggleIsTaken }) => {
  const handleToggle = () => {
    onToggleIsTaken(park.id, !park.isTaken);
  };

  return (
    <div className="park-card">
      <h3>
        {park.street} {park.number}, {park.city}
      </h3>
      <p>Free: {park.isFree ? "Yes" : "No"}</p>
      <p>Taken: {park.isTaken ? "Yes" : "No"}</p>
      

      <label className="switch">
        <input type="checkbox" onChange={handleToggle}/>
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ParkCard;
