import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:3007/campuses",
});