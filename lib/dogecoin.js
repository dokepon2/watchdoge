"use strict";

import axios from 'axios';
import https from 'https'

const agent = new https.Agent({
    rejectUnauthorized: false
});

export function GetBalance(address) {
        return axios.get(`https://dogechain.info/api/v1/address/balance/${address}`, { httpsAgent: agent })
        .then(function (response) {
            return response.data;
        })
                
};