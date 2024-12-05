import brand from "./img/gg.svg"
import logo from "./img/_Logo.svg"
import woman from "./img/WW.svg"
import toch from "./img/tochka.svg"
import wait from "./img/www.svg"
import rybashka from "./img/shirt.svg"
import strelkapravo from "./img/ArrowRight.svg"
import strelkalevo from "./img/ArrowLeft.svg"
import myzhik from "./img/bgg.svg"
import orange from "./img/bg.svg"
import men from "./img/men.svg"
import baba from "./img/woman.svg"
import bloomberg from "./img/bloom.svg"
import forbes from "./img/Forbes.svg"
import fast from "./img/fd.svg"

function App() {
  return (
    <div className="App">
      <div className="header font-bold text-[15px]  justify-between flex">
        <img src={toch} alt="toch" />
        <p>SUMMER SALE UP TO 50% OFF</p>
        <img src={toch} alt="toch" />
      </div>
      <div className="flex justify-center items-center align-middle text-center">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <div className="text-white relative text-[30px]">
        <img src={woman} alt="woman" className="w-full" />
          <h1 className="absolute bottom-5 left-8">Spring Season</h1>
          <a className="absolute right-4 bottytom-5">View collection</a>
        </div>
      </div>
      <div className='box justify-center items-center align-middle text-center flex'>
        <img src={brand} alt='brand' />
      </div>
      <div className="flex justify-center items-center align-middle text-center relative">
        <div className="flex">
          <img src={strelkalevo} alt="=strelkalevo" />
          <img src={rybashka} alt="rybashka" />
          <img src={strelkapravo} alt="strelkapravo " />
        </div>
          <p className="justify-start">Basic Shirt €49</p>
        <div>
          <img src={wait} alt="wait" />
          <button className='bg-black text-white px-4 py-2 rounded absolute bottom-2 center'>Shop Shirts</button>
        </div>
      </div>
      <div className="flex justify-center items-center align-middle text-center relative ">
        <img src={myzhik} alt="myzhik" />
        <button className='bg-black text-white px-4 py-2 rounded absolute bottom-2 center absolute left-6 '>Shop Sweaters</button>
        <img src={orange} alt="orange" />
      </div>
      <div className="flex justify-center items-center align-middle text-center relative font-bold text-black text-[20px]">
        <div>
        <img src={baba} alt="baba"/>
        <div className="absolute bottom-5">
        <a>women</a>
        </div>      
        </div>
        <div>
        <img src={men} alt="men"/>
        <div className="absolute bottom-5">
        <a>men</a>
        </div>
        </div>
      </div>
      <div className="flex justify-center items-center align-middle text-center  relative">
        <div>
        <img src={bloomberg} alt="bloomberg" />
        <h1>“First Light: Where great design and the finest materials unite in ultimate comfort”</h1>
        </div>
        <div>
        <img src={forbes} alt="forbes" />
        <h1>“First light proves it is possible to combine great design with the finest materials available.”</h1>
        </div>
        <div>
        <img src={fast} alt="fast"/>
        <h1>“Redefining excellence with premium materials and visionary robust design.”</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
