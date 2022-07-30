// -----> Scss
import "./overCard.scss";

const OverCard = (props) => {
  const {text, number} = props;

  return (
    <>
      <div className="overview__card w-[258px] border-[1px] border-solid rounded-lg bg-white py-[24px] px-[32px] cursor-pointer">
        <p className="overview__card-title leading-[24px] font-medium text-[19px] text-[#9FA2B4] text-center ease-in duration-100">{text}</p>
        <h2 className="overview__card-num text-center mt-[12px] text-[40px] font-medium leading-[50px] ease-in duration-100">{number}</h2>
      </div>
    </>
  )
}

export default OverCard;