const TodayCard = (props) => {
  const {text, number} = props;

  return (
    <>
      <div className="w-[342px] py-[30px] border rounded-lg">
        <p className="font-medium leading-[24px] text-[#9FA2B4] text-[16px] text-center">{text}</p>
        <h2 className="font-medium leading-[30px] text-[24px] mt-[5px] text-center">{number}</h2>
      </div>
    </>
  )
}

export default TodayCard;