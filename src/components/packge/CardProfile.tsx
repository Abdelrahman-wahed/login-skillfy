type CardProfileProps ={
[key:string]:string
}
const CardProfile = ({ img, caption, specialWord, desc }:CardProfileProps) => {
  return (
    <div className="bg-mainWhite  self-stretch  py-[30px]  relative px-11 text-center rounded-xl  border-[#EAEAEA] border-2 ">
      <img className="pb-12 mx-auto mt-36 sm:w-72" src={img} alt="" />
      <div className=" mx-auto mb-24  ">
        <h1 className="text-[#1a1a1a] flex text-center flex-wrap gap-3  pb-4 justify-center text-3xl font-semibold ">
          {caption}
          <span className="flex flex-col justify-start  items-start w-fit ">
            {specialWord} <img className="inline w-full" src="./Vector 2.png" alt="" />
          </span>
        </h1>
        <p
          className="text-[#4D4D4D] mx-auto text-center
         font-normal text-[18px] leading-5 w-[70%]"
        >
          {desc}
        </p>
      </div>
      <div className=" flex justify-center items-center space-x-2 absolute bottom-[30px] left-1/2 -translate-x-1/2">
        <span className=" bg-purpel w-[16px] h-[6px] rounded-full t duration-200 "></span>
        <span className="  bg-[#EDE7FE] w-[6px] h-[6px] rounded-full "></span>
        <span className=" bg-[#EDE7FE] w-[6px] h-[6px] rounded-full "></span>
        <span className=" bg-[#EDE7FE] w-[6px] h-[6px] rounded-full "></span>
      </div>
    </div>
  );
};

export default CardProfile;
