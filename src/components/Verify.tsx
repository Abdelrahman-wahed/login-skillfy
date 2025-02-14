import { useState } from "react";
import Btn from "./packge/Btn";
const Verify = () => {
  return (
    <div className="container bg-mainWhite font-Urbanist  p-24 ">
      <div className="max-w-[60%] mx-auto px-16 pt-24  pb-20 bg-white relative  rounded-xl ">
        <h1 className="font-extrabold text-5xl pb-9 text-center">
          Verify Your Email
        </h1>
        <p className="max-w-[70%] text-[#4D4D4D] font-normal text-lg mb-[70px] mx-auto text-center ">
          We’ll send the code on ui@vertex.com
        </p>
        <form action="" className="mx-auto text-center space-x-2">
          {Array.from({ length: 4 }, (_, i) => i).map((index) => {
            return <Input key={index} />;
          })}
          <a href="#" className="block my-14 text-purpel text-lg font-normal">
            Send Me a New Code
          </a>
          <Btn>Continue</Btn>
        </form>
      </div>
    </div>
  );
};
function Input() {
  const [isValue, setIsValue] = useState(false);
  function handleInput() {
    setIsValue(!isValue);
  }
  return (
    <input
      type="text"
      maxLength={1}
      onChange={handleInput}
      className={`${
        isValue && "bg-white text-5xl w-10 h-fit"
      } font-semibold focus:bg-white focus:text-5xl focus:w-10 focus:h-fit text-center  w-7 h-7   bg-[#F4F0FE] rounded-full outline-none border-none `}
    />
  );
}
export default Verify;
