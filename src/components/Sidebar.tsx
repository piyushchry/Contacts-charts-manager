import { Link } from "react-router-dom";
import { MdOutlineContacts } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";

//Sidebar Component
const Sidebar = () => {
  //render sidebar 
  return (
    <nav className="w-full md:max-w-[300px] flex items-center bg-[#d7c6fc] md:h-screen font-bold text-2xl md:p-[20px] py-[10px] px-[15px] text-[#020405]">
      <div className="gap-y-5 flex md:block items-center justify-between">

        <ul className="md:block flex items-center">
          <li>
            <Link to="/" className="py-[20px] flex items-center hover:text-[#f4544c]">
              <MdOutlineContacts className="mx-2" />
              <h1 className="hidden md:flex">Contact</h1>
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="flex items-center hover:text-[#f4544c]">
              <IoBarChartSharp className="mx-2" />
              <h1 className="hidden md:flex">Charts and Maps</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
