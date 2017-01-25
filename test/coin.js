import { GetBalance } from '../lib/dogecoin'; // Use Dogechain libary
import { expect } from 'chai';

const address = 'DK8KStpVX9JQkz8dnE8ZFF1cMiXYTPfVMn'; // Dogecoin wallet address

describe("Dogechain.info API : ", () => {

    describe("Connect to API ", () => {
        it("Dogecoin wallet address", () => {
            expect(address).to.be.a('string');
        })

        it("Connect is success : 1 ", () => {
            // Get Balance from Dogecoin address 
            return GetBalance(address)
                .then(function (data) {
                    expect(data).to.be.a('object');
                })

        })
    });

    describe("Get balance by Address", () => {
        it("Data return as Object", () => {
            // Get Balance from Dogecoin address 
            return GetBalance(address)
                .then(function (data) {
                    expect(data).to.be.a('object');
                })
        })
        it("Retrieve balance", () => {
            // Get Balance from Dogecoin address 
            return GetBalance(address)
                .then(function (data) {
                    expect(data.success).to.equal(1);
                })
        })

    });

});