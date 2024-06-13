import { createContext, useState } from "react";
import Cars from "./components/Cars";
import { CarType } from "./types/car-type";
import BasicExample from "./components/DropDownExample";


const carsData: CarType[] = [
    {id: 1, model: 'Tesla', price: 400000},
    {id: 2, model: 'Toyota', price: 300000},
    {id: 3, model: 'Subaru', price: 200000},
]


export const DarkModeContext = createContext<any>(null);

function App() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [cars, setCars] = useState(carsData)

    return (
        <DarkModeContext.Provider value={{isDarkMode}}>

            <div>
                <span> DarkMode</span>
                <input type="checkbox" checked={isDarkMode} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>
                        {setIsDarkMode(e.target.checked)}}/>
            </div>
            <div>            
                <h1> Hello React-Typescript template</h1>
                <Cars cars={cars} setCars={setCars}/>
            </div>
            <BasicExample/>
        </DarkModeContext.Provider>
    );
}
export default App;
