import axios from "axios";
const { VITE_APP_CONVERSION_DATA_API_KEY, VITE_APP_API_URL } = import.meta.env;

let oldData = {
    amount: 0,
    from: '',
    to: ''
}

export default class ApiService {
    async getConvertedValue(from: string, to: string, amount: number) {
        try {
            if(from == oldData.from && to == oldData.to && amount == oldData.amount) {
                console.log("OLD DATA ");
                return;
            }
            if(from == to) {
                return amount
            }
            
            const response = await axios.get(`${VITE_APP_API_URL}to=${to}&from=${from}&amount=${amount}`, { headers: { "apikey": VITE_APP_CONVERSION_DATA_API_KEY }});
            return response.data.result;
    
        } catch (error) {
            console.log("API_ERROR = ", error)
            return null;
        }

    }
}
