import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProviders";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  
      axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("fusion-camp");
        config.headers.authorization = `bearer ${token}`;
      return config;
    }, (error)=> {
      // Do something with request error
      return Promise.reject(error);
    });
    axiosSecure.interceptors.response.use(
      (response) => {return response},
      async (error) => {
        const status = error?.response?.status;
        if (status === 401 ||
          status === 403
        ) {
          //when status code is 401 or 403 we should log out the user
          await logout()
          navigate("/login", { replace: true });
        }
        return Promise.reject(error);
      });
    
    
    return axiosSecure;
};
export default useAxiosSecure;
