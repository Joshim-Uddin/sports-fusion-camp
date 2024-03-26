import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProviders";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();


  
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("sports-fusion");
        config.headers.Authorization = `bearer ${token}`;
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response.status;
        if (status === 401 ||
          status === 403
        ) {
          //when status code is 401 or 403 we should log out the user
          await logOut()
          navigate("/login", { replace: true });
        }
        return Promise.reject(error);
      }
    );
};
export default useAxiosSecure;
