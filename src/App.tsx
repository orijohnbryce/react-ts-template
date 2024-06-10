import { createContext, useEffect, useState } from "react";
import ShowData from "./ShowData";

export const AppContext = createContext<any>(null)

function App() {

    const [data, setData] = useState<any>()
    const [name, setName] = useState<string>("David")

    useEffect(() => {
        setData([1, 2, 3, 4])
    }, [])

    return (
        <AppContext.Provider value={{ data, name, setName }}>

            <h1> Hello React-Typescript template</h1>
            <ShowData />

        </AppContext.Provider>
    );
}

export default App;
