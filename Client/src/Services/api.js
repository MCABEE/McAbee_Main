import axios from "axios"

const BASE_URL = "http://localhost:5000"

export const SendResume = async (resume) => {
    try {
        const {data} = await axios.post(`${BASE_URL}/sendEmail`, resume,{headers:{"Content-Type":"multipart/form-data"}})
        return data
    } catch (error) {
        return("Error which sending from frontend...",error);
    }
}