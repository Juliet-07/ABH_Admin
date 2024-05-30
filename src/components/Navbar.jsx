import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { miniSidebarInitialValue, RESPONSIVE_WIDTH } from "../utils/constants";
import { useWindowSize } from "../utils/use-window-size";
import { FaBell } from "react-icons/fa";
import Logo from "./Logo";
import {
  Menu,
  MenuItems,
  MenuButton,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { IoPersonSharp } from "react-icons/io5";

const Navbar = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const [miniSidebar, setMiniSidebar] = useAtom(miniSidebarInitialValue);

  const handleToggleSidebar = () => {
    setMiniSidebar(!miniSidebar);
    if (onToggleSidebar) {
      onToggleSidebar();
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="hidden md:flex items-center justify-between px-6 p-2 shadow-md bg-white">
      <div className="flex items-center">
        <Logo className="w-[200px]" />
      </div>
      <div>search bar</div>
      <div className="flex items-center px-4">
        <button className="text-gray-700 mx-2 focus:outline-none">
          <FaBell size={24} />
        </button>
        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="flex rounded-full text-sm focus:outline-none">
              <span className="sr-only">Open user menu</span>
              <div className="bg-gray-200 w-14 h-14 text-2xl text-black text-center p-2 rounded-full mx-4 my-2 flex items-center justify-center">
                <IoPersonSharp size={20} />
              </div>
            </MenuButton>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-primaryRegular">
              <MenuItem>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Your Profile
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Settings
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <button
                    onClick={logout}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Logout
                  </button>
                )}
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
