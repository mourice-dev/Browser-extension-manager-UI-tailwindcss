import sun from "../assets/images/icon-sun.svg";
import logo from "../assets/images/logo.svg";

export default function () {
  return (
    <div
      className={`flex justify-between items-center p-3 bg-Neutral-800  rounded-xl `}>
      <div>
        <img src={logo} alt='' className='h-7' />
      </div>

      <div className='bg-Neutral-700 p-1 rounded-md cursor-pointer border-1 hover:border-Red'>
        <img src={sun} alt='' />
      </div>
    </div>
  );
}
