"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GetBalance = GetBalance;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var https = require('https');

var agent = new https.Agent({
    rejectUnauthorized: false
});

function GetBalance(address) {
    // `https://dogechain.info/api/v1/address/balance/${address}`'
    return _axios2.default.get('https://dogechain.info/api/v1/address/balance/' + address, { httpsAgent: agent });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9kb2dlY29pbi5qcyJdLCJuYW1lcyI6WyJHZXRCYWxhbmNlIiwiaHR0cHMiLCJyZXF1aXJlIiwiYWdlbnQiLCJBZ2VudCIsInJlamVjdFVuYXV0aG9yaXplZCIsImFkZHJlc3MiLCJnZXQiLCJodHRwc0FnZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7UUFTZ0JBLFUsR0FBQUEsVTs7QUFQaEI7Ozs7OztBQUNBLElBQU1DLFFBQVFDLFFBQVEsT0FBUixDQUFkOztBQUVBLElBQU1DLFFBQVEsSUFBSUYsTUFBTUcsS0FBVixDQUFnQjtBQUMxQkMsd0JBQW9CO0FBRE0sQ0FBaEIsQ0FBZDs7QUFJTyxTQUFTTCxVQUFULENBQW9CTSxPQUFwQixFQUE2QjtBQUNoQztBQUNJLFdBQU8sZ0JBQU1DLEdBQU4sb0RBQTJERCxPQUEzRCxFQUFzRSxFQUFFRSxZQUFZTCxLQUFkLEVBQXRFLENBQVA7QUFFUCIsImZpbGUiOiJkb2dlY29pbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUFJJTlpFL3dhdGNoZG9nZSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuXG5jb25zdCBhZ2VudCA9IG5ldyBodHRwcy5BZ2VudCh7XG4gICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRCYWxhbmNlKGFkZHJlc3MpIHtcbiAgICAvLyBgaHR0cHM6Ly9kb2dlY2hhaW4uaW5mby9hcGkvdjEvYWRkcmVzcy9iYWxhbmNlLyR7YWRkcmVzc31gJ1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2RvZ2VjaGFpbi5pbmZvL2FwaS92MS9hZGRyZXNzL2JhbGFuY2UvJHthZGRyZXNzfWAsIHsgaHR0cHNBZ2VudDogYWdlbnQgfSk7XG5cbn07Il19