import React, { useState } from "react";
import mainlogo from "../assets/StreamDeck.webp";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
const [input , setInput] =  useState('')
    
    
const navigate = useNavigate();
 const user = useSelector((state) => state.auth.user);
 const handleSubmit =  (e) =>{
   e.preventDefault()
   navigate(`search/${input}`)


 }

  return (
    <div className="w-full flex justify-between h-[10vh] bg-[#222] px-2  ds:px-6 fixed top-0 z-[9999]">
      <div className="leftside flex items-center gap-2 w-fit h-full">
        <Link to="/home" className="menu bg-slate-300 rounded-full px-2 py-1 ">
          <i className="ri-menu-line text-lg"></i>
        </Link>
        <div className="MainLogo flex gap-2 justify-center items-center">
          <div className="logoimg h-full w-8 md:w-10 ">
            <LazyLoadImage src={mainlogo}  />
          </div>
          <div>
            <h1 className="font-bold text-[2vw] md:text-lg hidden md:block uppercase tracking-tighter text-white shadow-md">
              StreamDeck
            </h1>
          </div>
        </div>
      </div>
      <div className="SearchSide flex items-center gap-2 w-[50%] h-full ">
        <div className="searchbox w-full flex rounded-full overflow-hidden py-1 ">
          <form onSubmit={handleSubmit} className=" w-full flex " >
           <input
             type="search"
             placeholder="Search"
             value={input}
             onChange={(e) =>setInput(e.target.value)}
             className="pl-4 outline-none w-full rounded-tl-full border-[#bdbdbd] border rounded-bl-full py-2"
            />
            <div className="menu bg-slate-300 px-1 md:px-6 py-1 md:py-2 cursor-pointer rounded-tr-full rounded-br-full border border-l-none border-[#bdbdbd] ">
               <i  className="ri-search-line text-lg"></i>
             </div>
          </form>

        </div>
        <div className="Mic hover:bg-slate-300 px-2 border hidden md:block border-[#222] delay-75 ease-linear py-1 cursor-pointer rounded-full ">
          <i className="ri-mic-2-line text-lg"></i>
        </div>
      </div>
       
      <div className="rightside  flex items-center justify-end gap-2 w-fit h-full ">
        <div className="menu bg-slate-300 rounded-full hidden md:block px-2 py-1 ">
          <i className="ri-video-add-line text-lg"></i>
        </div>
        <div className="menu hover:bg-slate-300 border  hidden md:block border-[#222] delay-75 ease-linear rounded-full px-2 py-1 ">
          <i className="ri-notification-4-fill text-lg"></i>
        </div>
        {user && (
          <div className="h-fit flex justify-center items-center">
            <div className="Profile rounded-full h-10 w-10 overflow-hidden">
              <img src={user.photoURL || mainlogo} alt="Profile" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
