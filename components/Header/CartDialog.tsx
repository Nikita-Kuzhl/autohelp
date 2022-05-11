import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Барсетка",
    href: "#",
    color: "Бежий",
    price: "600.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Рюкзак",
    href: "#",
    color: "Синий",
    price: "600.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 3,
    name: "Рюкзак",
    href: "#",
    color: "Синий",
    price: "600.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];
interface IProps{
  open:boolean,
  setOpen: (flag:boolean)=>boolean
}

const CartDialog = (props:IProps) => {
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={props.setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="flex gap-2 text-lg font-medium text-gray-900">
                        <ShoppingCartIcon className="w-8 h-8" />
                        Корзина
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() =>props.setOpen(false)}
                        >
                          <span className="sr-only">Закрыть панель</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {products.map((product) => (
                            <li key={product.id} className="flex py-6">
                              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image
                                  src={product.imageSrc}
                                  alt={product.name}
                                  width={24}
                                  height={24}
                                  layout="responsive" // required
                                  objectFit="cover"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={product.href}>
                                        {" "}
                                        {product.name}{" "}
                                      </a>
                                    </h3>
                                    <p className="ml-4">{product.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {product.color}
                                  </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">
                                    Дата: {product.quantity}
                                  </p>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Изменить
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-400 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Общая стоимость</p>
                      <p>1200.00 Р</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Налог включен в стоимость.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Оплатить
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        или{" "}
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => props.setOpen(false)}
                        >
                          Продолжить покупки
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CartDialog;
