import Image from "next/image";
import React from "react";
import { useCategory } from "../../app/hooks/useCategory";
import Spinner from "../Spinner/Spinner"

// export async function getStaticProps() {
//   const category = await CategoryService.getAll();
//   return { props: { category } };
// }

const Category = () => {
  const { isLoading, category } = useCategory();

  return (
    <div>
      {isLoading ? (
        <Spinner/>
      ) : (
        <div>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {category?.map((item: any) => (
                <a key={item.id} href={item.href} className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src={`${process.env.API_AUTOHELP}/${item.image}`}
                      alt={item.name}
                      width={24}
                      height={24}
                      priority
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg text-gray-700">{item.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
