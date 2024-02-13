import React from "react";
import Notifications from "../../assests/doctors-dashboard-assets/notificationbell.svg";
import Profile from "../../assests/doctors-dashboard-assets/doctorsprofilepic.svg";
import { NavLink } from "react-router-dom";

const pageRoutes = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Appointments",
    href: "/appointment",
  },
  {
    label: "Doctors",
    href: "/patients",
  },
  {
    label: "Messages",
    href: "/messages",
  },
  {
    label: "Reports",
    href: "/reports",
  },
];

const TopNavbar = () => {
  return (
    <>
    <nav>
      <div className=" md:hidden flex flex-row justify-between items-center p-4 bg-[#FFFFFF] mb-5 md:mb-10">
        {
          pageRoutes.map((route, index) => {
            return (
              <div className="flex flex-row items-center " key={index}>
                <NavLink to={route.href} className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-b-[#5D34F3] text-black text-base py-2.5 px-2 flex flex-row items-center gap-x-3 "
                  : "flex flex-row items-center gap-x-3 py-2.5 px-2 text-base text-black "
              }>
                  {route.label}
                </NavLink>
              </div>
            );
          })
        }
      </div>
    </nav>
    <div className="flex flex-row justify-between items-center p-4 md:px-11 md:py-6 bg-[#FFFFFF] mb-5 md:mb-10">
      <div className="flex flex-col items-start">
        <span className="font-semibold text-lg md:text-2xl text-[#0D0D0F] mb-2">
        Hello John &#128075;
        </span>
      </div>
      <div className="flex flex-row gap-x-10 items-center">
        <div className={`bg-[#D9D9D9] p-4 rounded-full`}>
          <img src={Notifications} alt={"notification"} />
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <div className="flex  justify-center items-center">
            <img src={Profile} alt="profile" />
          </div>
          <div className="flex flex-col justify-center items-start gap-x-1">
            <span className="text-base  font-medium">John Ade</span>
            <span className="text-xs md:text-sm text-[#000000]/70">
              30 years old
            </span>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
        .li {
          margin: auto;
          color: #ffffff;
          font-size: 14px;
          cursor: pointer;
        }
        .li::after {
          content: "";
          display: block;
          border-bottom: solid 3px #ffffff;
          padding-bottom: 1%;
          transform: scaleX(0);
          transition: transform 300ms ease-in-out;
        }
        .li:hover:after {
          transform: scaleX(1);
        }
      `}</style>
    </>
  );
};

export default TopNavbar;