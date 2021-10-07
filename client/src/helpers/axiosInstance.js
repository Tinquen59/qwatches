import axios from "axios";

const instance = axios.create();

// add the token to request headers
instance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

export default instance;