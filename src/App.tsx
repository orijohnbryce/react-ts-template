import { useEffect, useState } from "react"
import { fetchAllParks } from "./api/park-client";
import { ParkType } from "./types/parkType";
import Park from "./components/park/Park";
import FilterHeader from "./components/filterHeader/FilterHeader";

function App() {

    const [parks, setParks] = useState<ParkType[]>([])
    const [filteredParks, setFilteredParks] = useState<ParkType[]>([])

    useEffect(() => {
        fetchParks()
    }, [])

    const fetchParks = async (updateFiltered=true) => {
        const parks = await fetchAllParks()
        if (parks) {
            setParks(parks);            
            setFilteredParks(parks);
        }
    }

    return (
        <div>
            <h1> Hello To Park Search </h1>
            <FilterHeader parks={parks} setFilteredParks={setFilteredParks}/>
            {filteredParks.map((p) => { return <Park park={p} fetchParks= {fetchParks} /> })}

        </div>
    );
}

export default App;
