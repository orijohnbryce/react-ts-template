import BootstrapVanila from "./BootstrapVanila";
import ReactBootstrapExample from "./ReactBootstrapExample";
import TestWindowSize from "./TestWindowSize";
import { useWindowSize } from "./hooks/useWindowSize";
import "./index.css"

function App() {    

    return (
        <div>            
            <h1 className="pc-only"> - from PC </h1>
            <h1 className="mobile-only">   - from Mobile </h1>

            <TestWindowSize/>

            <br/>
            <br/>
            <BootstrapVanila/>
            <br/>
            <br/>
            <ReactBootstrapExample/>
        </div>
    );
}

export default App;
