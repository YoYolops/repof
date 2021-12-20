import TrackMenu from "./components/TrackMenu";
import { ControllerProvider } from "./components/context/ControllerContext";
import './App.css';

function App() {
    return (
        <ControllerProvider>
            <div className="App">
                <TrackMenu color="#689d69"/>
            </div>
        </ControllerProvider>
    );
}

export default App;
