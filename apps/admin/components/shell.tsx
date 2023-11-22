/* eslint-disable */
import { Button, Dropdown, Modal } from "flowbite-react";
import MainContent from "./main-content";
import SideNavigation from "./side-navigation";
import { HiLogout, HiSearch, HiX } from "react-icons/hi";
import { HiBars3CenterLeft, HiSquares2X2 } from "react-icons/hi2";
import Link from "next/link";
import "flowbite";

export default function Shell({ children }) {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-30">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <Button
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
              className="m-2 w-10 h-10 text-gray-600 md:hidden"
            >
              <HiBars3CenterLeft className="h-6 w-6 text-2xl" />
            </Button>
            <Link
              href="https://flowbite.com"
              className="flex items-center justify-between mr-4"
            >
              <img
                src="https://flowbite.s3.amazonaws.com/logo.svg"
                className="mr-3 h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </Link>
            <form action="#" method="GET" className="hidden md:block md:pl-2">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative md:w-64 md:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <HiSearch className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2">
            <Button className="md:hidden m-2 w-10 h-10 text-gray-600">
              <HiSearch className="h-5 w-5" />
            </Button>

            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <Button className="m-2 w-10 h-10 text-gray-600">
                  <HiSquares2X2 className="h-5 w-5" />
                </Button>
              )}
            >
              <Dropdown.Header></Dropdown.Header>

              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown>

            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                  alt="user photo"
                />
              )}
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  bonnie@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </nav>

      <aside
        className="fixed top-0 left-0 z-20 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav"
        // id="drawer-navigation"
      >
        <SideNavigation />
      </aside>

      <aside
        id="drawer-navigation"
        className="fixed z-40 top-0 left-0 h-screen overflow-y-auto transition-transform -translate-x-full bg-white max-w-max w-80 dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <div className="p-4 flex justify-between items-center">
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            Menu
          </h5>
          <Button
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="m-2 w-10 h-10 text-gray-600"
          >
            <HiX className="h-6 w-6 text-2xl" />
          </Button>
        </div>

        <SideNavigation />
      </aside>

      <MainContent>{children}</MainContent>
    </div>
  );
}
