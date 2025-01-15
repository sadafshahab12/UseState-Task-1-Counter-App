import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrease = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  return (
    <>
      <div className=" bg-bgImage h-screen bg-cover bg-no-repeat p-5">
        <h1 className="text-2xl text-center font-semibold py-2">Counter App</h1>
        <div className=" max-w-md mx-auto">
          <div className="bg-[#ffc107] p-10 flex flex-col justify-center items-center gap-5 w-full  rounded-tr-2xl rounded-tl-2xl">
            <div className="image bg-gradient-to-t shadow-md from-gray-400 to-white   rounded-[10rem] p-5">
              <img src="/card-img2.png" alt="card-img" className="w-32 h-32" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold">Red Wine </h1>
              <p>{count}/80</p>
            </div>
          </div>
          <div className="flex items-center gap-10 bg-slate-700 w-full justify-center h-[10rem] rounded-br-2xl rounded-bl-2xl">
            <div
              className={`decrement bg-[#ffc107] text-xl cursor-pointer w-12 h-12 rounded-full flex items-center justify-center hover:shadow-md   ${
                count === 0
                  ? "active:scale-100 hover:bg-none hover:shadow-none "
                  : "active:scale-95 hover:bg-yellow-200 hover:shadow-white "
              } transition-all ease-in duration-100`}
              onClick={decrease}
            >
              <button>-</button>
            </div>
            <div className="value bg-gray-200 w-12 h-12 flex items-center justify-center rounded-md text-xl">
              <p>{count}</p>
            </div>

            <div
              className="increment bg-[#ffc107] text-xl cursor-pointer w-12 h-12 rounded-full flex items-center justify-center hover:shadow-md hover:shadow-white hover:bg-yellow-200 active:scale-90 transition-all ease-in duration-100"
              onClick={increase}
            >
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
