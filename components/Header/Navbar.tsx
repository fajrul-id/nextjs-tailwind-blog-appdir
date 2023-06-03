"use client";
import Brand from "./Brand";
import Menu from "./Menu";
import Socials from "./Socials";
import { HiMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  const openMenu = () => {
    let mobile_menu = document.getElementById("mobile_menu");
    let menu_button = document.getElementById("menu_button");
    let close_button = document.getElementById("close_button");
    // open Menu
    if (mobile_menu?.classList.contains("hidden")) {
      mobile_menu.classList.remove("hidden");
      menu_button?.classList.add("hidden");
      close_button?.classList.add("flex");
      close_button?.classList.remove("hidden");
    } else {
      mobile_menu?.classList.add("hidden");

      menu_button?.classList.add("flex");
      menu_button?.classList.remove("hidden");

      close_button?.classList.add("hidden");
      close_button?.classList.remove("flex");
    }
  };
  return (
    <header
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        backgroundColor: "hsla(0, 0%, 95.3%, 0.25)",
      }}
      className="z-10 sticky top-0 text-gray-700 font-semibold"
    >
      <nav className="flex lg:max-w-6xl container mx-auto lg:px-8 lg:h-20 h-14 px-4 justify-between items-center">
        <a href="/">
          <Brand className="rounded-xl bg-blue-100" />
        </a>

        <menu className="w-full md:w-auto flex justify-end ">
          <Menu className="hidden md:flex space-x-6 capitalize" />
          <div
            className="flex md:hidden text-[36px] items-center"
            onClick={openMenu}
          >
            <div id="menu_button" className="flex items-center">
              <h1 className="text-lg">Menu</h1>
              <HiMenuAlt3 />
            </div>
            <div id="close_button" className="hidden items-center">
              <h1 className="text-lg">Close</h1>
              <HiMenuAlt3 />
            </div>
          </div>
        </menu>

        <div className="">
          <Socials className="hidden text-[24px] md:flex items-center" />
        </div>
      </nav>

      <div id="mobile_menu" className="hidden">
        <div className="w-6/12 z-50 sm:w-5/12 h-screen tp-1 bg-slate-600 rounded-md absolute top-16 right-0">
          <Menu
            onClick={openMenu}
            className="text-slate-200 flex gap-4 mt-4 capitalize flex-col "
            border="border-b border-slate-900 mx-7 pb-2 hover:text-teal-500 active:text-teal-900"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
