import Header from "./components/header/header";
import Tickets from "./components/overFooter/overFooter";
import Overview from "./components/overview/overview";
import Today from "./components/today/today";

import "./style.css";

function App() {
  return (
    <>
      <div className="w-full flex">
        <Header />
      </div>
      <div className="ml-[255px] pt-[40px] px-[30px]">
        <Overview />
      </div>
      <div className="ml-[285px] mt-[30px] mr-[30px] bg-white border rounded-lg border-[#DFE0EB] border-solid border-l-[0px]">
        <Today />
      </div>
      <Tickets />
    </>
  );
}

export default App;
