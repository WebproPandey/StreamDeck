import React from "react";
import mainlogo from "../assets/StreamDeck.webp";

const Navbar = () => {
  return (
    <div className="w-full  flex justify-between h-[10vh] bg-slate-200/20 px-6">
      <div className="leftside flex items-center gap-2 w-fit h-full ">
        <div className="menu bg-slate-300 rounded-full px-2  py-1 ">
          <i className="ri-menu-line text-lg"></i>
        </div>

        <div className="MainLogo flex gap-2 justify-center items-center">
          <div className="logoimg h-full w-10">
            <img src={mainlogo} alt="" srcset="" />
          </div>
          <div>
            <h1 className="font-bold text-lg uppercase tracking-tighter text-white shadow-md">
              StreamDeck
            </h1>
          </div>
        </div>
      </div>
      <div className="SerachSide flex items-center gap-2 w-[50%] h-full ">
        <div className="searchbox w-full  flex  rounded-full  overflow-hidden py-1 ">
         <input type="search" placeholder="Search" className="pl-4 outline-none  w-full rounded-tl-full border-[#bdbdbd] border rounded-bl-full py-2 "  />
        <div className="menu bg-slate-300 px-6 py-2 cursor-pointer  rounded-tr-full rounded-br-full border border-l-nonre border-[#bdbdbd] ">
           <i className="ri-search-line text-lg"></i>
        </div>

         </div>
         <div className="Mic hover:bg-slate-300 px-2 border border-[#222] delay-75 ease-linear py-1 cursor-pointer  rounded-full   ">
           <i className="ri-mic-2-line text-lg"></i>
        </div>
      </div>
      <div className="rightside flex items-center justify-end gap-2 w-fit h-full  ">
        <div className="menu bg-slate-300 rounded-full px-2  py-1 ">
         <i className="ri-video-add-line text-lg"></i>
        </div>
        <div className="menu hover:bg-slate-300  border border-[#222] delay-75 ease-linear rounded-full px-2  py-1 ">
         <i className="ri-notification-4-fill text-lg"></i>
        </div>
        <div className="h-fit   flex justify-center  items-center  ">
        <div className="Profile rounded-full h-10 w-10  overflow-hidden">
            <img src={mainlogo} alt="" srcset="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
