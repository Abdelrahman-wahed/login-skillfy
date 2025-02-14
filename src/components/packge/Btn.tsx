const Btn = ({ style, children }:{style?:string, children:React.ReactNode}) => {
  return (
    <button
      className={` ${style} cursor-pointer  btn bg-purpel hover:bg-[#692ffe] `}
    > 
      {children}
    </button>
  );
};

export default Btn;
