import Btn from "./packge/Btn";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const SetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div>
      <div className="container bg-mainWhite font-Urbanist  p-24 ">
        <div className="max-w-[60%] mx-auto px-16 pt-24  pb-20 bg-white relative  rounded-xl ">
          <h1 className="font-extrabold text-5xl pb-28 ">
          Set The New Password
          </h1>

          <label className="self-stretch  font-medium text-2xl" htmlFor="new">
            New Password
            <div className=" flex bg-white text-xl  px-[24px]  justify-between items-center my-6 w-full outline-none border-[#EAEAEA] border-2  rounded-lg ">
              <input
                className="grow h-full text-2xl outline-none py-5"
                type={showPassword ? "text" : "password"}
                name=""
                id="new"
              />
              <FontAwesomeIcon
                className="cursor-pointer"
                onClick={handleShowPassword}
                icon={showPassword ? faEyeSlash : faEye}
              />
            </div>
          </label>

          <label className="self-stretch  font-medium text-2xl" htmlFor="ConfirmPassword">
          Confirm Password
            <div className=" flex bg-white text-xl  px-[24px]  justify-between items-center my-6 w-full outline-none border-[#EAEAEA] border-2  rounded-lg ">
              <input
                className="grow h-full text-2xl outline-none py-5"
                type={showPassword ? "text" : "password"}
                name=""
                id="ConfirmPassword"
              />
              <FontAwesomeIcon
                className="cursor-pointer"
                onClick={handleShowPassword}
                icon={showPassword ? faEyeSlash : faEye}
              />
            </div>
          </label>
          <Btn>Confirm Password</Btn>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
