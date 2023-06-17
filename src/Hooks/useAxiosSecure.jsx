import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProviders";

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL:
      "https://b7a12-summer-camp-server-side-joshim-uddin-woad-phi.vercel.app",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("sports-fusion");
      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }
      return config;
    });
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          (error.response && error.response.status === 401) ||
          error.response.status === 403
        ) {
          navigate("/login", { replace: true });
        }
      }
    );
  }, []);
};
export default useAxiosSecure;
