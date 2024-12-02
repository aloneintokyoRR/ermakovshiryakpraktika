import css from './'
import logo from "./img/_Logo.svg"
import woman from "./img/WW.svg"

function App() {
  return (
    <div className="App">
      <div className="header font-bold text-[15px]">
      <p>SUMMER SALE UP TO 50% OFF</p>
      </div>
      <div className="flex justify-center items-center align-middle text-center">
        <img src={logo} alt="logo"/>
      </div>
      <div>
        <img src={woman} alt="woman" className="w-full" />
        <div className=" mt-[100px] ">
        <p>Spring Season</p>
        <p>View collection</p>
        </div>
    </div>
    </div>
  );
}

export default App;
