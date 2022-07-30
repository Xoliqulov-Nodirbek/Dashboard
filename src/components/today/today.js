import TodayCard from "../todayCard/todayCard";

// -----> Scss
import "./today.scss";

const Today = () => {
  return (
    <>
      <div className="flex items-start justify-between">
        <div className="w-full flex items-end justify-between">
          <div className="pt-[30px] pl-[30px]">
            <h3 className="font-semibold leading-[24px] text-[19px]">Today’s trends</h3>
            <span className="font-normal leading-[18px] block mt-[8px] text-[14px] text-[#9FA2B4]">as of 25 May 2019, 09:41 PM</span>
          </div>
          <div className=" mr-[30px]">
            <span className="days-to pl-[26px] inline-block font-normal leading-[15px] text-[14px] text-[#9FA2B4]">Today</span>
            <span className="days-ye pl-[26px] inline-block font-normal leading-[15px] ml-[56px] text-[14px] text-[#9FA2B4]">Yesterday</span>
          </div>  
        </div>
        <div>
          <TodayCard text="Resolved" number="449" />
          <TodayCard text="Received" number="426" />
          <TodayCard text="Average first response time" number="33m" />
          <TodayCard text="Average response time" number="3h 8m" />
          <TodayCard text="Resolution within SLA" number="94%" />
        </div>
      </div>
    </>
  )
}

export default Today;