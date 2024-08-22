import { useEffect, useState } from "react";
import { ParkType } from "./types/parkType";
import { fetchAllParks, updateParkIsTaken } from "./api/parkClient";
import ParkCard from "./components/parkCard/ParkCard";
import FilterHeader from "./components/filterHeader/FilterHeader";


function App() {

    const [parks, setParks] = useState<ParkType[]>([])
    const [filteredParks, setFilteredParks] = useState<ParkType[]>([])

    useEffect(() => {
        fetchParks();
    }, [])

    const fetchParks = async () => {
        fetchAllParks().then((res) => {
            setParks(res)
            setFilteredParks(res)
            // console.log(res);            
        })
    }

    const onToggleIsTaken = async (id: number, newValue: boolean) => {
        await updateParkIsTaken(id, newValue);
        await fetchParks();
        alert("Updated!");
    }

    return (
        <div>
            <h1> Hello React-Typescript template</h1>

            <br />
            <FilterHeader parks={parks} setFilteredParks={setFilteredParks} />
            
            {filteredParks.map((p) => {
                return <ParkCard park={p} onToggleIsTaken={onToggleIsTaken}/>
            })}
        </div>
    );
}

export default App;
