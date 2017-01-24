"use strict";

import axios from 'axios';

export function GetBalance(address) {
    // `https://dogechain.info/api/v1/address/balance/${address}`
        axios.get(`https://dogechain.info/api/v1/address/balance/${address}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    return '3000'
};