import axios from "axios";

// kapag magkaparehas lang ng domain ang frontend at backend sapat na ang ganitong code for your BASE_URL
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

// kapag magkaiba naman sila ng domain dapat ganto
// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://yourwebsitename.com/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export default axiosInstance;