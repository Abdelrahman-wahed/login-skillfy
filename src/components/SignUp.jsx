import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Btn from "./packge/Btn";
import CardProfile from "./packge/CardProfile";
import Header from "./packge/Header";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="container bg-mainWhite font-Urbanist flex justify-center gap-12 items-center  sm:flex-wrap">
      <CardProfile
        img="./signUp.png"
        caption="Fully Flexible"
        specialWord="Schedule"
        desc="There is no set schedule and you can learn whenever you want to."
      >
        {" "}
      </CardProfile>

      <div className="px-10 pt-[20px] pb-[40px] bg-white relative    text-center rounded-xl  ">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="block absolute top-[40px] text-xl"
        />

        <Header
          caption="Sign up"
          desc="Create an account to unlock exclusive features."
        />
        <form className="text-start mb-10 mt-5 flex flex-wrap flex-col justify-start items-start">
          <label
            className="self-stretch font-medium text-2xl"
            htmlFor="Full Name"
          >
            Full Name
            <input
              className="my-6 w-full outline-none border-[#EAEAEA] border-[1px] bg-white rounded-lg py-[22px] px-[24px]"
              type="text"
              name=""
              id="Full Name"
            />
          </label>

          <label className="self-stretch font-medium text-2xl" htmlFor="gmail">
            Email
            <input
              className="my-6 w-full outline-none border-[#EAEAEA] border-[1px] bg-white rounded-lg py-[22px] px-[24px]"
              type="email"
              name=""
              id="gmail"
            />
          </label>

          <label
            className="self-stretch font-medium text-2xl"
            htmlFor="password"
          >
            Password
            <div className="flex bg-white text-xl  px-[24px]  justify-between items-center my-6 w-full outline-none border-[#EAEAEA] border-2  rounded-lg ">
              <input
                className=" grow h-full text-2xl outline-none py-5"
                type={showPassword ? "text" : "password"}
                name=""
                id="password"
              />
              <FontAwesomeIcon
                className="cursor-pointer"
                onClick={handleShowPassword}
                icon={showPassword ? faEyeSlash : faEye}
              />
            </div>
          </label>

          <div className="text-[#4D4D4D] text-xl flex justify-between items-center my-6">
            {" "}
            <input
              className=" accent-[#E4E4E7] w-[30px] h-[30px]  outline-none mr-3 border-none rounded-[4px]"
              type="checkbox"
              name=""
              id="checkbox"
            />
            <label className=" grow curser-pointer " htmlFor="checkbox">
              I agree with{" "}
              <span className="underline decoration-1 "> Terms of Use</span> and{" "}
              <span className="underline decoration-1  ">Privacy Policy</span>
            </label>
          </div>

          <Btn>Login</Btn>
        </form>
        <span className=" block my-7 w-full h-[1px] bg-[#EAEAEA] relative after:content-['OR'] after:absolute after:text-[#9999] after:text-[23px] after:bg-[#FCFCFE] after:px-6 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:rounded-full after:-translate-y-1/2"></span>
        <Btn style="text-[#4D4D4D] hover:bg-[#eee] mb-7   border-[#EAEAEA]  bg-transparent">
          <img src="./google.png" alt="" />
          Login with Google
        </Btn>

        <p className="text-xl">
          Don’t have an account?{" "}
          <a href="#" className="decoration-1 underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
