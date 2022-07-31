import TicketsLine from "../ticketsLine/ticketsLine";

const Tickets = () => {
  return (
    <>
      <div className="flex justify-between ml-[285px] mt-[30px] mr-[30px] mb-[30px]">
        <div className="max-w-[650px] w-full border-[1px] border-solid rounded-lg bg-white">
          <div className="flex justify-between items-center p-[30px] pb-[20px]">
            <div>
              <h2 className="font-semibold text-[22px] text-[#252733] leading-6 mb-[10px]">Unresolved tickets</h2>
              <p className="font-normal text-[#9FA2B4]">Group:<span className="inline-block text-blue-400 ml-[10px]">Support</span></p>
            </div>
            <a className="font-normal text-[#3751FF] text-[15px] leading-5 hover:underline" href="https://">View details</a>
          </div>
          <TicketsLine 
            title="Waiting on Feature Request" 
            text="4238"
          />
          <TicketsLine 
            title="Awaiting Customer Response" 
            text="1005"
          />
          <TicketsLine 
            title="Awaiting Developer Fix" 
            text="914"
          />
          <TicketsLine 
            title="Pending" 
            text="281"
          />
        </div>
        <div className="max-w-[650px] w-full border-[1px] border-solid rounded-lg bg-white">
          <div className="flex justify-between items-center p-[30px] pb-[20px]">
            <div>
              <h2 className="font-semibold text-[22px] text-[#252733] leading-6 mb-[10px]">Tasks</h2>
              <p className="font-normal text-[#9FA2B4]">Today</p>
            </div>
            <a className="font-normal text-[#3751FF] text-[15px] leading-5 hover:underline" href="https://">View all</a>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Tickets;