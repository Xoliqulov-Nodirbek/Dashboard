const TicketsLine = ({title, text}) => {
  return (
    <>
      <div className="flex items-center justify-between px-[30px] py-[20px] border-b-2 rounded-[5px]">
        <h3 className="text-[#252733] text-[15px]">{title}</h3>
        <p className="text-[#9FA2B4] text-[15px] tracking-[1px]">{text}</p>
      </div>
    </>
  )
}

export default TicketsLine;