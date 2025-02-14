
const Header = ({caption ,desc}:{caption:string,desc:string}) => {
  return (
    <div className="relative w-[515px] mt-7 mb-12">
          <img
            className="absolute top-[-35px] left-[72px]"
            src="./stargreen.png"
            alt=""
          />

          <img
            className="absolute  top-[37px] right-[30px]"
            src="./Vectorgold.png"
            alt=""
          />
          <img
            className="absolute  bottom-[-10px] left-[28px]"
            src="./Ellipse 5.png"
            alt=""
          />
          <h1 className="font-extrabold text-5xl pb-3">{caption}</h1>
          <p className="text-[#4D4D4D] font-normal text-lg">
           {desc}
          </p>
        </div>
  )
}

export default Header
