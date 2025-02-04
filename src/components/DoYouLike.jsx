import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import Btn from "./packge/Btn";
import CardProfile from "./packge/CardProfile";
import Header from "./packge/Header";
import { useState } from "react";
let itemsLike = [
  {
    text: "Digital Design",
    selected: true,
  },
  {
    text: "Computer Programming",
    selected: false,
  },
  {
    text: "Data Analysis",
    selected: false,
  },
  {
    text: "Entrepreneurship",
    selected: false,
  },
];
const WhoAreYou = () => {
  const [likes, setLikes] = useState([]);
  function handleLikesItem(text) {
    setLikes((prev) => {
      return [...prev, text];
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    
  }
  return (
    <div className="container bg-mainWhite font-Urbanist  flex justify-center gap-12 items-center  sm:flex-wrap">
      <CardProfile
        img="./skills.png"
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
          caption="What do you like?"
          desc="please choose at least one from the following items to get started"
        />
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <ul className="my-9  space-y-9 text-start">
            {itemsLike.map((item, i) => {
              return (
                <Item
                  key={i}
                  {...item}
                  i={i}
                  setLikes={setLikes}
                  likes={likes}
                  handleLikesItem={handleLikesItem}
                />
              );
            })}
          </ul>

          <Btn>Login</Btn>
        </form>
      </div>
    </div>
  );
};
function Item({ text, selected, i, likes, setLikes  ,handleLikesItem}) {
  // const [likes, setLikes] = useState(selected);
  // function handleLikesItem() {
  //   setLikes(!likes);
  // }

 
  return (
    <li
      onClick={() => handleLikesItem(text)}
      className={`${
        likes && "selected"
      }  cursor-pointer  border-2 rounded-xl text-2xl font-semibold p-5 border-[#EAEAEA] flex justify-start gap-4 items-center`}
    >
      <span
        className={`${
          likes && "bg-purpel"
        } border-[1px]   border-[#ddd] w-8 h-8  flex justify-center items-center rounded-full `}
      >
        {likes && (
          <FontAwesomeIcon className="text-white text-lg " icon={faCheck} />
        )}
      </span>
      {text}
    </li>
  );
}
export default WhoAreYou;
