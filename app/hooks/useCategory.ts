import { ICategory } from './../types/category.types';
import { CategoryService } from "./../services/category.services";
import { useQuery } from "react-query";

export const useCategory = () => {
  const { isLoading, data:category } = useQuery(
    "category list",
    () => CategoryService.getAll(),
    {
      onError: (error: any) => {
        alert(error);
      },
      select: ({data}):ICategory[] => data
    }
  );
  return { isLoading, category };
};
