"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GetBalance = GetBalance;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var agent = new _https2.default.Agent({
    rejectUnauthorized: false
});

function GetBalance(address) {
    return _axios2.default.get('https://dogechain.info/api/v1/address/balance/' + address, { httpsAgent: agent }).then(function (response) {
        return response.data;
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9kb2dlY29pbi5qcyJdLCJuYW1lcyI6WyJHZXRCYWxhbmNlIiwiYWdlbnQiLCJBZ2VudCIsInJlamVjdFVuYXV0aG9yaXplZCIsImFkZHJlc3MiLCJnZXQiLCJodHRwc0FnZW50IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O1FBU2dCQSxVLEdBQUFBLFU7O0FBUGhCOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLFFBQVEsSUFBSSxnQkFBTUMsS0FBVixDQUFnQjtBQUMxQkMsd0JBQW9CO0FBRE0sQ0FBaEIsQ0FBZDs7QUFJTyxTQUFTSCxVQUFULENBQW9CSSxPQUFwQixFQUE2QjtBQUM1QixXQUFPLGdCQUFNQyxHQUFOLG9EQUEyREQsT0FBM0QsRUFBc0UsRUFBRUUsWUFBWUwsS0FBZCxFQUF0RSxFQUNOTSxJQURNLENBQ0QsVUFBVUMsUUFBVixFQUFvQjtBQUN0QixlQUFPQSxTQUFTQyxJQUFoQjtBQUNILEtBSE0sQ0FBUDtBQUtQIiwiZmlsZSI6ImRvZ2Vjb2luLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9QUklOWkUvd2F0Y2hkb2dlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgaHR0cHMgZnJvbSAnaHR0cHMnXG5cbmNvbnN0IGFnZW50ID0gbmV3IGh0dHBzLkFnZW50KHtcbiAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdldEJhbGFuY2UoYWRkcmVzcykge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2RvZ2VjaGFpbi5pbmZvL2FwaS92MS9hZGRyZXNzL2JhbGFuY2UvJHthZGRyZXNzfWAsIHsgaHR0cHNBZ2VudDogYWdlbnQgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgXG59OyJdfQ==