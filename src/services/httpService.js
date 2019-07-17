import Axios from "axios";
import { toast } from "react-toastify";
import logger from "../services/logService";

Axios.interceptors.response.use(
  success => {
    toast.success("Successfully ");
    return Promise.resolve(success);
  },
  error => {
    const expectedCondition =
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500;
    if (!expectedCondition) {
      logger.log(error);
      toast.error("Unexpected Error");
    }

    return Promise.reject(error);
  }
);

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete
};
