import React,{Fragment} from "react";
import { LoginIcon, LogoutIcon, UserAddIcon, UserCircleIcon, UserIcon } from "@heroicons/react/outline";
import styles from "../../styles/Header.module.scss";
import { Menu, Transition } from "@headlessui/react";

const Auth = () => {
  return (
    <>
    <div className="md:flex pt-2 md:pt-1 md:cursor-pointer hover:scale-105 hover:-translate-y-1 duration-300 hover:opacity-75 md:gap-0 grid grid-cols-2  px-24 md:px-0  p-1 md:p-0">
      
      <UserIcon className="md:hidden w-7 h-7" />
      <a className="md:hidden text-xl">Профиль</a>
      </div>
      <Menu as="div" className="hidden md:relative md:inline-block md:text-center">
        <div>
          <Menu.Button className=" pt-1.5 hover:scale-105 hover:-translate-y-1 duration-300 hover:opacity-75">
            <UserIcon className="hidden md:flex w-7 h-7" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-in duration-500 transform"
          enterFrom="opacity-0 translate-x-full -translate-y-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-in duration-500 transform"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-full"
        >
          <Menu.Items className="absolute right-0 w-56 mt-8 origin-top-right bg-white divide-y ring-black rounded-md shadow-lg ring-1   ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item as='div' className="px-4 py-2 text-lg text-gray-700 flex gap-4">
                <LoginIcon className="w-7 h-7"/>
                Авторизация
              </Menu.Item>
              <Menu.Item as='div' className="flex px-4 py-2 text-lg text-gray-700 gap-4">
                <UserAddIcon className="w-7 h-7"/>
                Регистрация
              </Menu.Item>
              <Menu.Item as='div' className="flex px-4 py-2 text-lg text-gray-700 gap-4">
                <UserCircleIcon className="w-7 h-7"/>
                Профиль
              </Menu.Item>
              <Menu.Item as='div' className="flex px-4 py-2 text-lg text-gray-700 gap-4">
                <LogoutIcon className="w-7 h-7"/>
                Выйти
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    
    </>
  );
};

export default Auth;
