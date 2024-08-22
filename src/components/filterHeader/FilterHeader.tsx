import { useEffect, useState } from "react";
import { ParkType } from "../../types/parkType";
import React from "react";

type FilterHeaderProps = {
  parks: ParkType[];
  setFilteredParks: (parks: ParkType[]) => void;
};

const FilterHeader = (props: FilterHeaderProps) => {
  const [filterNoTaken, setFilterNoTaken] = useState(false);
  const [filterFree, setFilterFree] = useState(false);
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");

    
    useEffect(
        () => {
        let filtered = props.parks;

        if (filterNoTaken) {
            filtered = filtered.filter((park) => !park.isTaken);
            console.log("filter only not taken");        
        }
        if (filterFree) {
          filtered = filtered.filter((park) => park.isFree);
        }
    
        if (city.length > 0) {
          filtered = filtered.filter((park) =>
            park.city.toLowerCase().includes(city.toLowerCase())
          );
        }
    
        if (street.length > 0) {
          filtered = filtered.filter((park) =>
            park.street.toLowerCase().includes(street.toLowerCase())
          );
        }
    
        props.setFilteredParks(filtered);
}, [filterFree, filterNoTaken, city, street])  

    const handleTakenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.checked);
      console.log(filterNoTaken);
      
      setFilterNoTaken(e.target.checked);    
  };
  const handleFreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilterFree(e.target.checked);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);

  };

  const handleStreetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);

  };

  return (
    <div>
      <h4> filter </h4>

      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={handleCityChange}
      />

      <input
        type="text"
        placeholder="Street"
        value={street}
        onChange={handleStreetChange}
      />
      <br />
      <label> Free </label>
      <input checked={filterFree} type="checkbox" onChange={handleFreeChange}/>
      <br />
      <label> Empty </label>
      <input checked={filterNoTaken} type="checkbox" onChange={handleTakenChange} />
    </div>
  );
};

export default FilterHeader;
