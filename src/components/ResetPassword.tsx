import Btn from "./packge/Btn";

const ResetPassword = () => {
  return (
    <div className="container bg-mainWhite font-Urbanist  p-24 ">
      <div className="max-w-[60%] mx-auto px-16 pt-24  pb-20 bg-white relative  rounded-xl ">
        <h1 className="font-extrabold text-5xl pb-9 text-center">Reset Password</h1>
        <p className="max-w-[70%] text-[#4D4D4D] font-normal text-lg mb-[70px] mx-auto text-center ">
          Please enter your email address to for us to send you the link to
          reset your password on.
        </p>
        <label className="text-left font-medium text-2xl" htmlFor="emailReset">
          Email
          <input
            className=" my-6 w-full outline-none border-[#EAEAEA] border-[1px] bg-white rounded-lg py-[22px] px-[24px]"
            type="email"
            name=""
            id="emailReset"
          />
        </label>
        <Btn>Continue</Btn>
      </div>
    </div>
  );
};

export default ResetPassword;
