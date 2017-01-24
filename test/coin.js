import { expect } from "chai";
import { GetBalance } from '../lib/dogecoin'; // Use Dogechain libary
const address = 'DK8KStpVX9JQkz8dnE8ZFF1cMiXYTPfVMn';

describe("Dogechain.info API : ", () => {

    describe("Connect to API ", () => {
        it("Response 200 OK", () => {
        //    let balance = request.get(`https://dogechain.info/api/v1/address/balance/${address}`);
            
        });
    });

    describe("Get balance by Address", () => {
        it("Balance return to string", () => {
            // Get Balance from Dogecoin address 
            let res = GetBalance(address);
            expect(res).to.be.a('string');
        });

    });

});