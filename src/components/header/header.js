import { Agents, Articles, Contacts, Dashboard, Ideas, Overwiev, Settings, Subscription, Tickets } from "../iconss/icons";

import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="w-full flex">
        <div className="w-[255px]">
          <div className="bg-[#363740] h-screen">
            <h1 className="flex items-center justify-center p-10">
              <Dashboard cur="cursor-pointer" /> 
              <span className="inline-block font- text-[19px] font-bold text-zinc-400 ml-[12px]">
                Dashboard Kit
              </span>
            </h1>
            <ul className="list border-b-2 border-[#40414A] h-sc">
              <li className="list__item flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]">
                <Overwiev />
                <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                  Overview
                </span>
              </li>
              <li className="list__item flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]">
                <Tickets />
                <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                  Tickets
                </span> 
              </li>
              <li className="list__item flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]">
                <Ideas />
                <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                  Ideas
                </span>
              </li>
              <li className="list__item flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]">
                <Contacts />
                <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                  Contacts
                </span>
              </li>
              <li className="list__item flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]">
                <Agents />
                <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                  Agents
                </span>
              </li>
              <li className="list__item flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]">
                <Articles />
                <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                  Articles
                </span>
              </li>
            </ul>
            <ul>
              <li className="list__item flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]">
                <Settings />
                <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                  Settings
                </span>
              </li>
              <li className="list__item flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]">
                <Subscription />
                <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                  Subscription
                </span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Header;