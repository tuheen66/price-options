import "./App.css";
import LineChart from "./Components/LineChart/LineChart";
import NavBar from "./Components/NavBar/NavBar";
import Phones from "./Components/Phones/Phones";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}

      <NavBar></NavBar>

      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>

      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
