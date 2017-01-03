'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 * 
 * global.fn1 = function(){
 *     
 * }
 */

var API_URL = think.config('api_url');
/**
 * oam 接口请求函数
 * @param self
 * @param url
 * @param params
 */
global.api = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(self, url) {
        var user_account_info, request, params, option;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        user_account_info = {
                            mobile: '18515999883',
                            country: '86',
                            type: 'sms'
                        };
                        request = require('request');
                        params = {
                            "mobile": user_account_info.mobile,
                            "country": user_account_info.country,
                            "type": user_account_info.type
                        };
                        option = {
                            url: API_URL + url,
                            method: "GET",
                            json: true,
                            // headers: headers,
                            body: params
                        };

                        console.log('请求接口:', url, '--', '请求头：', '--', '参数:', params);
                        request.get({ url: API_URL + url, mobile: '18515999883', country: '86' }, function (error, response, body) {
                            if (!error && response.statusCode == 200) {
                                console.log(body);
                                return self.json(body);
                            } else {
                                console.log('请求出错了:', error);
                            }
                        });
                        // request(option, function (error, response, body) {
                        //     if (!error && response.statusCode == 200) {
                        //         console.log(body);
                        //         return self.json(body);
                        //     } else {
                        //         console.log('请求出错了:',error);
                        //     }
                        // });

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=global.js.map