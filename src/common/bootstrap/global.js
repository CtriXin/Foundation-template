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

let API_URL = think.config('api_url');
/**
 * oam 接口请求函数
 * @param self
 * @param url
 * @param params
 */
global.api = async function(self,url){
    let user_account_info = {
        mobile : '18515999883',
        country: '86',
        type: 'sms'
    };
    let request = require('request');
    let params = {
        "mobile": user_account_info.mobile,
        "country": user_account_info.country,
        "type": user_account_info.type
    };
    let option = {
        url: API_URL + url,
        method: "GET",
        json: true,
        // headers: headers,
        body: params
    };
    console.log('请求接口:',url,'--','请求头：','--','参数:',params);
    request.get({url:API_URL + url,mobile:'18515999883',country:'86'},function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            return self.json(body);
        } else {
            console.log('请求出错了:',error);
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
};