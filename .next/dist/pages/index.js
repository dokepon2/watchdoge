'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('/Users/PRINZE/watchdoge/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/PRINZE/watchdoge/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _css = require('/Users/PRINZE/watchdoge/node_modules/next/dist/lib/css.js');

var _dogecoin = require('../lib/dogecoin');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _head2.default,
            null,
            _react2.default.createElement(
                'style',
                null,
                'body { background: #9E9E9E;  } '
            ),
            _react2.default.createElement(
                'title',
                null,
                'Watch Doge 1.0'
            ),
            _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' })
        ),
        _react2.default.createElement(
            'div',
            { className: (0, _css.style)(css.container) },
            _react2.default.createElement('img', { src: '/static/doge.png' }),
            _react2.default.createElement(
                'h1',
                null,
                'Watch Doge 1.0'
            )
        )
    );
};

var css = {
    container: {
        textAlign: 'center',
        color: '#212121'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNzcyIsImNvbnRhaW5lciIsInRleHRBbGlnbiIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7a0JBRWU7QUFBQSxXQUNYO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUdJLG9EQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLHFDQUE5QjtBQUhKLFNBREo7QUFNSTtBQUFBO0FBQUEsY0FBSyxXQUFZLGdCQUFNQSxJQUFJQyxTQUFWLENBQWpCO0FBQ0ksbURBQUssS0FBSSxrQkFBVCxHQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBTkosS0FEVztBQUFBLEM7O0FBY2YsSUFBTUQsTUFBTTtBQUNSQyxlQUFZO0FBQ1JDLG1CQUFXLFFBREg7QUFFUkMsZUFBTztBQUZDO0FBREosQ0FBWiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUFJJTlpFL3dhdGNoZG9nZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICduZXh0L2Nzcyc7XG5pbXBvcnQgeyBEb2dlY29pbiB9IGZyb20gJy4uL2xpYi9kb2dlY29pbic7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICA8ZGl2PiBcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8c3R5bGU+e2Bib2R5IHsgYmFja2dyb3VuZDogIzlFOUU5RTsgIH0gYH08L3N0eWxlPlxuICAgICAgICAgICAgPHRpdGxlPldhdGNoIERvZ2UgMS4wPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZShjc3MuY29udGFpbmVyKSB9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2RvZ2UucG5nXCIgLz5cbiAgICAgICAgICAgIDxoMT5XYXRjaCBEb2dlIDEuMDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG5jb25zdCBjc3MgPSB7XG4gICAgY29udGFpbmVyIDoge1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBjb2xvcjogJyMyMTIxMjEnXG4gICAgfVxufSJdfQ==