import { createContext, useState } from "react";
import Cars from "./components/Cars";
import { CarType } from "./types/car-type";


const carsData: CarType[] = [
    {id: 1, model: 'Tesla', price: 400000},
    {id: 2, model: 'Toyota', price: 300000},
    {id: 3, model: 'Subaru', price: 200000},
]


export const DarkModeContext = createContext<any>(null);

function App() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    
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
                <Cars cars={carsData}/>
            </div>
        </DarkModeContext.Provider>
    );
}
export default App;
