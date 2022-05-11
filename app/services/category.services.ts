import { ICategory } from '../types/category.types';
import axios from "axios"

const API_URL = process.env.API_AUTOHELP

axios.defaults.baseURL = API_URL

export const CategoryService = {
  async getAll(){
    return axios.get<ICategory[]>('/category')
  }
}