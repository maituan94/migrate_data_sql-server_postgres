import {
  AxiosService
} from "../../../services/axiosService";

//  const url = "../data.json";
export const getList = (url) => {
  return AxiosService.get(url);
}