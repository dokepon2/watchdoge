import { GetBalance } from '../lib/dogecoin' // Use Dogechain libary
import { expect } from 'chai'

const address = 'DK8KStpVX9JQkz8dnE8ZFF1cMiXYTPfVMn'; // Dogecoin wallet address

describe("Dogechain.info API : ", () => {

    describe("Connect to API ", () => {
        it("Dogecoin wallet address is correct", () => {
            expect(address).to.equal('DK8KStpVX9JQkz8dnE8ZFF1cMiXYTPfVMn');
        })

        it("Connect is success : 1 ", () => {
            // Get Balance from Dogecoin address 
            return GetBalance(address)
                .then(function (data) {
                    expect(data).to.be.a('object');
                })

        })
    });

    describe("Get balance from wallet", () => {
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