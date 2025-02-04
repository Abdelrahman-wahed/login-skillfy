import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Btn from "./packge/Btn";
import CardProfile from "./packge/CardProfile";
import Header from "./packge/Header";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
 
  const [dataForm, setDataFrom] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    let login = { Email: e.target[0].value, Password: e.target[1].value, Rmember: e.target[2].value };
    setDataFrom(login);
  }
  console.log( dataForm);
  return (
    <div className="container bg-mainWhite font-Urbanist flex justify-center gap-12 items-center  sm:flex-wrap">
      <CardProfile
        img="./amico.png"
        caption="Connect With the "
        specialWord="Tutors"
        desc="You can easily connect with thousands of tutors by using our platform."
      >
        {" "}
      </CardProfile>

      <div className="px-10 pt-[20px] pb-[40px] bg-white relative    text-center rounded-xl  ">
        <Header
          caption="Login"
          desc="Welcome back! Please log in to access your account."
        />
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="text-start mb-10 mt-5 flex flex-wrap flex-col justify-start items-start"
        >
          <label className="self-stretch  font-medium text-2xl" htmlFor="email">
            Email
            <input
              className=" my-6 w-full outline-none border-[#EAEAEA] border-[1px] bg-white rounded-lg py-[22px] px-[24px]"
              type="email"
              name=""
              id="email"
            
            />
          </label>

          <label className="self-stretch  font-medium text-2xl" htmlFor="pass">
            Password
            <div className=" flex bg-white text-xl  px-[24px]  justify-between items-center my-6 w-full outline-none border-[#EAEAEA] border-2  rounded-lg ">
              <input
                className="grow h-full text-2xl outline-none py-5"
                type={showPassword ? "text" : "password"}
                name=""
                id="pass"
              
              />
              <FontAwesomeIcon
                className="cursor-pointer"
                onClick={handleShowPassword}
                icon={showPassword ? faEyeSlash : faEye}
              />
            </div>
          </label>

          <div className="self-stretch  text-[#4D4D4D] text-xl flex justify-between items-center my-6">
            {" "}
            <input
              className="accent-[#4D4D4D] w-[30px] h-[30px]  outline-none mr-3 border-none rounded-[4px]"
              type="checkbox"
              name=""
              id="check"
         
            />
            <label className=" grow curser-pointer " htmlFor="check">
              Remember Me
            </label>
            <a href="#">Forgot Password?</a>
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

export default Login;
