import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-6a4d2.firebaseio.com/"
});

export default instance;