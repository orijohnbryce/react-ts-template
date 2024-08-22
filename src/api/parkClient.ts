import axios from "axios";

export async function fetchAllParks(): Promise<any[]> {
    const response = await axios.get("http://localhost:4000/park");
    return response.data;
}

export async function updateParkIsTaken(id: number, isTaken: boolean): Promise<void> {
    await axios.patch(`http://localhost:4000/park/${id}`, { isTaken });
}
