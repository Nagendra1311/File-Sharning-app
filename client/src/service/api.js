import axios from 'axios';

const URL_API = 'http://localhost:8000'

export const uploadImageApi = async (data) => {
    try {
        const response = await axios.post(`${URL_API}/upload`, data)
        return response.data

    } catch (error) {
        console.error("some issue in service file", error.message)
    }
}