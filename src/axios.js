import axios from "axios";

const instance = axios.create({
    //baseURL:"http://localhost:8000"
    baseURL:"http://devbox.pbx.crazytel.net.au/"
})

export default instance