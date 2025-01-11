import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from '../reudux/action/auth.action';

const Sidebar = () => {
  const dispatch =  useDispatch()
  const navigate =  useNavigate()

  const handlelogout = () =>{
     dispatch(logout())
         .then(() => {
           navigate("/");
         })
         .catch((error) => {
           console.error('Login failed:', error);
  });
  }


  const menuItems = [
    { icon: "ri-home-4-line", label: "Home" },
    { icon: "ri-slideshow-3-line", label: "Shorts" },
    { icon: "ri-tv-2-line", label: "Subscription" },
  ];

  const youSectionItems = [
    { icon: "ri-arrow-right-s-line", label: "You", extraIcon: true },
    { icon: "ri-eye-line", label: "History" },
    { icon: "ri-play-list-2-line", label: "Playlist" },
    { icon: "ri-movie-line", label: "Your Video" },
    { icon: "ri-time-line", label: "Watch later" },
    { icon: "ri-thumb-up-line", label: "Like video" },
  ];
  const exploreSectionItems = [
    { icon: null, label: "Explore" },
    { icon: "ri-fire-line", label: "Trending" },
    { icon: "ri-music-line", label: "Music" },
    { icon: "ri-movie-line", label: "Films" },
    { icon: "ri-graduation-cap-line", label: "Course" },
    { icon: "ri-live-line", label: "Live" },
    { icon: "ri-gamepad-line", label: "Gaming" },
    { icon: "ri-file-list-3-line", label: "News" },
    { icon: "ri-trophy-line", label: "Sport" },
  ];
  const settings = [
    { icon: "ri-settings-4-line", text: "Setting" },
    { icon: "ri-flag-line", text: "Report history" },
    { icon: "ri-questionnaire-line", text: "Help" },
    { icon: "ri-feedback-line", text: "Send Feedback" },
  ];
  return (
    <div className="sidebar w-[20%]  hidden md:block   px-4 py-4 h-[calc(100vh-10vh)] overflow-y-scroll relative ">
      <div className="Main flex flex-col  gap-1 pb-3 ">
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-200/10 bg-slate-200/20 delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
          <i className="ri-home-4-line text-2xl"></i>
          <span className="text-md font-medium">Home</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
          <i className="ri-slideshow-3-line text-2xl"></i>
          <span className="text-md font-medium">Shorts</span>
        </div>
        <div className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10  delay-75 ease-linear transition-transform rounded-lg py-1 px-2">
          <i className="ri-tv-2-line text-2xl"></i>
          <span className="text-md font-medium">Subscription</span>
        </div>
      </div>
      <div className="You flex flex-col gap-1 border-t py-2">
        {youSectionItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-200/10 delay-75 ease-linear transition-transform rounded-lg py-1 px-2"
          >
            {item.extraIcon ? (
              <>
                <span className="text-md font-medium">{item.label}</span>
                <i className={`${item.icon} text-2xl`}></i>
              </>
            ) : (
              <>
                <i className={`${item.icon} text-2xl`}></i>
                <span className="text-md font-medium">{item.label}</span>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="Explore flex flex-col gap-1 border-t py-2">
        {exploreSectionItems.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start gap-4 items-center w-full text-white ${
              item.icon ? "hover:bg-slate-100/10" : ""
            } delay-75 ease-linear transition-transform rounded-lg py-1 px-2`}
          >
            {item.icon && <i className={`${item.icon} text-2xl`}></i>}
            <span className="text-md font-medium">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="Setting flex flex-col gap-1 border-t py-2">
        {settings.map((item, index) => (
          <>
          <div
            key={item.id}
            className="flex justify-start gap-4 items-center w-full text-white hover:bg-slate-100/10 delay-75 ease-linear transition-transform rounded-lg py-1 px-2"
            >
            <i className={`${item.icon} text-2xl`}></i>
            <span className="text-md font-medium">{item.text}</span>
          </div>
         
           </>
        ))}
          <div onClick={handlelogout}
           className="flex justify-start gap-4  cursor-pointer items-center w-full text-white hover:bg-slate-100/10 delay-75 ease-linear transition-transform rounded-lg py-1 px-2"
           >
           <i className="ri-logout-box-r-line text-2xl"></i>
           <span className="text-md font-medium">Logout</span>
         </div>
      </div>
      <div className="Main flex flex-col  gap-4 pb-3 border-t py-2 px-2">
        <div className="text-white text-sm leading-[0.5rem] font-normal flex flex-wrap gap-2">
          <span className="flex-shrink-0 cursor-pointer ">About</span>
          <span className="flex-shrink-0 cursor-pointer ">Press</span>
          <span className="flex-shrink-0 cursor-pointer ">Copyright</span>
          <span className="flex-shrink-0 cursor-pointer ">Contact us</span>
          <span className="flex-shrink-0 cursor-pointer ">Creators</span>
          <span className="flex-shrink-0 cursor-pointer ">Advertise</span>
          <span className="flex-shrink-0 cursor-pointer ">Developers</span>
        </div>

        <div className="text-white text-sm leading-[0.5rem] font-normal flex flex-wrap gap-2">
          <span className="flex-shrink-0 cursor-pointer ">Terms</span>
          <span className="flex-shrink-0 cursor-pointer ">Privacy</span>
          <span className="flex-shrink-0 cursor-pointer ">Polic & Safety</span>
          <span className="flex-shrink-0 cursor-pointer ">How YouTube Works</span>
          <span className="flex-shrink-0 cursor-pointer ">Test new Features</span>
        </div>
        <div className="text-[0.8rem] text-[#888]">&copy; 2025  Goggle LLC</div>
      </div>
    </div>
  );
};

export default Sidebar;
