import {
  Agents,
  Articles,
  Contacts,
  Dashboard,
  Ideas,
  Overwiev,
  Settings,
  Subscription,
  Tickets,
} from "../iconss/icons";
import { NavLink } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="w-[255px] bg-[#363740] h-full fixed left-0">
        <h1 className="flex items-center justify-center p-10">
          <Dashboard props="cursor-pointer" />
          <span className="inline-block font- text-[19px] font-bold text-zinc-400 ml-[12px]">
            Dashboard Kit
          </span>
        </h1>
        <ul className="list border-b-2 border-[#40414A] h-sc">
          <li className="list__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `list__item-active flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]`
                  : "flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]"
              }
            >
              <Overwiev />
              <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                Overview
              </span>
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              to="/tickets"
              className={({ isActive }) =>
                isActive
                  ? `list__item-active flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]`
                  : "flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]"
              }
            >
              <Tickets />
              <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                Tickets
              </span>
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              to="/ideas"
              className={({ isActive }) =>
                isActive
                  ? `list__item-active flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]`
                  : "flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]"
              }
            >
              <Ideas />
              <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                Ideas
              </span>
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive
                  ? `list__item-active flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]`
                  : "flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]"
              }
            >
              <Contacts />
              <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                Contacts
              </span>
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              to="/agents"
              className={({ isActive }) =>
                isActive
                  ? `list__item-active flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]`
                  : "flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]"
              }
            >
              <Agents />
              <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                Agents
              </span>
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive
                  ? `list__item-active flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]`
                  : "flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]"
              }
            >
              <Articles />
              <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                Articles
              </span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className="list__item">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive
                  ? `list__item-active flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]`
                  : "flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]"
              }
            >
              <Settings />
              <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                Settings
              </span>
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              to="/subscription"
              className={({ isActive }) =>
                isActive
                  ? `list__item-active flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]`
                  : "flex items-center pl-10 font-semibold cursor-pointer py-[18px] hover:bg-[#3E4049]"
              }
            >
              <Subscription />
              <span className="list__item-span inline-block text-[16px] text-[#A4A6B3] ml-[24px]">
                Subscription
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
