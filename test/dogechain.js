const expect = require("chai").expect
import { GetBalance } from '../lib/dogecoin'; // use Dogecoin libary

describe("Dogechain.info API : ", () => {

    describe("Connect to API ", () => {
        it("Response 200 OK", () => {
           
        });
    });

    describe("Get balance by Address", () => {
        it("Balance return to string", () => {
            // Get Balance from Dogecoin address DK8KStpVX9JQkz8dnE8ZFF1cMiXYTPfVMn 
            let balance = GetBalance('DK8KStpVX9JQkz8dnE8ZFF1cMiXYTPfVMn');
            expect(balance).to.be.a('string');
        });

    });

});