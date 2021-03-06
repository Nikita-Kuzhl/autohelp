import React,{Fragment} from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { XIcon, MenuIcon, UserIcon } from "@heroicons/react/outline";
import Auth from "./AuthButton";
import styles from "../../styles/Header.module.scss";
import Cart from "./CartButton";

interface IProps{
  links: {
    name: string;
    link: string;
    icon: JSX.Element;
}[]
}

const MenuMobile = (props:IProps) => {
  return (
    <Menu as="div" className="relative md:hidden">
      {({ open }) => (
        <>
          {!open && (
            <Menu.Button className="">
              <MenuIcon className="w-8 h-8 cursor-pointer" />
            </Menu.Button>
          )}
          {open && (
            <Menu.Button>
              <XIcon className="w-8 h-8 cursor-pointer" />
            </Menu.Button>
          )}
          
          
          <Menu.Items className="absolute right-0 mt-4 py-3  divide-y divide-dashed border-b-2 bg-white border-x-2 rounded-lg">
            {props.links.map((item) => (
              <Menu.Item as="div" key={item.name}>
                {({ active }) => (
                  <Link href={item.link} as={item.link} passHref>
                    <a
                      className={`${
                        active
                          ? "flex text-gray-700 scale-105 -translate-y-1 duration-300 opacity-75"
                          : ""
                      }grid grid-cols-2 text-xl p-1 px-24`}
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  </Link>
                )}
              </Menu.Item>
            ))}

            <Menu.Item> <Cart /></Menu.Item>
            <Menu.Item> <Auth /></Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default MenuMobile;
