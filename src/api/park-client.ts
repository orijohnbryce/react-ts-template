import axios from "axios";
import { ParkType } from "../types/parkType";

const BASE_URL = "http://localhost:4000/parks";

export async function fetchAllParks(): Promise<ParkType[] | void> {
    try {
        const res  = await axios.get(BASE_URL) 
        return res.data 
    } catch (error) {
        console.log(error);        
        alert("Some error. sorry. retry latter")        
    }
}

export async function updateOccupied(id: number, newValue: boolean): Promise<void> {
    try {
        const res = await axios.patch(BASE_URL + `/${id}`, {newValue})
        if (res.status !== 200){
            console.log(res);            
            throw new Error("update returned with wrong status");            
        }
    } catch (error) {
        console.log(error);        
        alert("Some error. sorry. retry latter")        
    }
}

