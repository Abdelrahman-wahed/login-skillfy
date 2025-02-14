import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Btn from "./packge/Btn";
import CardProfile from "./packge/CardProfile";
import Header from "./packge/Header";
import { useState } from "react";
let choosePersonal = [
  {
    img: "./Rounded-corners.png",
    header: "Potential Student",
    description:
      "You are planning to use our platform as a student to learn new skills.",
  },
  {
    img: "./star.png",
    header: "Potential Tutor",
    description:
      "You are planning to use our platform to teach the skills you already know.",
  },
];
const WhoAreYou = () => {
  const [choose, setChoose] = useState<number>(0 );
  function handleChoose(index:number) {
    setChoose(index !== choose ? index : 0);
  }

  function handlePersonal(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement
    console.log(form.children[choose].children[1].innerHTML);
  }
  return (
    <div className="container bg-mainWhite font-Urbanist  flex justify-center gap-12 items-center  sm:flex-wrap">
      <CardProfile
        img="./leaning.png"
        caption="Start Learning"
        specialWord="New Skills"
        desc="Learn almost any skill from a comfort of your home with our app."
      />

      <div className="px-10 pt-[20px] pb-[40px] bg-white relative self-stretch    text-center rounded-xl  ">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="block absolute top-[40px] text-xl"
        />
        <Header
          caption="Who Are You?"
          desc="Please tell us a little bit more about yourself and who you are."
        />
        <form action="" onSubmit={(e) => handlePersonal(e)}>
          {choosePersonal.map((e, index) => {
            return (
              <div
                onClick={() => handleChoose(index)}
                key={index}
                className={`${
                  index == choose && "selected"
                } cursor-pointer my-9 border-2 border-[#EAEAEA] text-center mx-auto rounded-xl p-8`}
              >
                <img className="m-auto " src={e.img} alt="" />
                <h1 className="text-[#141414] font-semibold text-2xl mt-6 mb-2  ">
                  {e.header}
                </h1>
                <p className="text-[#4D4D4D] font-normal">
                 {e.description}
                 </p>
              </div>
            );
          })}
          <Btn>Login</Btn>
        </form>
      </div>
    </div>
  );
};

export default WhoAreYou;
