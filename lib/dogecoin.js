import axios from 'axios';

const Dogecoin = {
    getBalance(address) {
        return axios.get('https://dogechain.info/api/v1/address/balance/${address}')
    }
}

export default Dogecoin