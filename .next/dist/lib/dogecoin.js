'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dogecoin = {
    getBalance: function getBalance(address) {
        return _axios2.default.get('https://dogechain.info/api/v1/address/balance/${address}');
    }
};

exports.default = Dogecoin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9kb2dlY29pbi5qcyJdLCJuYW1lcyI6WyJEb2dlY29pbiIsImdldEJhbGFuY2UiLCJhZGRyZXNzIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVztBQUNiQyxjQURhLHNCQUNGQyxPQURFLEVBQ087QUFDaEIsZUFBTyxnQkFBTUMsR0FBTixDQUFVLDBEQUFWLENBQVA7QUFDSDtBQUhZLENBQWpCOztrQkFNZUgsUSIsImZpbGUiOiJkb2dlY29pbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUFJJTlpFL3dhdGNoZG9nZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IERvZ2Vjb2luID0ge1xuICAgIGdldEJhbGFuY2UoYWRkcmVzcykge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KCdodHRwczovL2RvZ2VjaGFpbi5pbmZvL2FwaS92MS9hZGRyZXNzL2JhbGFuY2UvJHthZGRyZXNzfScpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2dlY29pbiJdfQ==