import { Notification, Search } from "../iconss/icons";
import Avatar from "../../assets/images/photo.jpg";
import OverCard from "../overCard/overCard";

// -----> Scss
import "./overview.scss";

const Overview = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-[25px] text-[#252733] leading-[30px]">Overview</h1>
          <div className="flex items-center">
            <Search />
            <Notification props="ml-[28px]" />
            <p className="text font-normal">Jones Ferdinand</p>
            <img className="w-[44px] h-[44px] ml-[15px] rounded-[50%]"  src={Avatar} alt="Avatar image" />
          </div>
        </div>
        <div className="mt-[58px] flex justify-between items-center ">
          <OverCard text="Unresolved" number="60" />
          <OverCard text="Overdue" number="16" />
          <OverCard text="Open" number="43" />
          <OverCard text="On hold" number="64" />
        </div>
      </div>
    </>
  )
}

export default Overview; 