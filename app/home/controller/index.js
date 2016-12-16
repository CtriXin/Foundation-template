'use strict';

exports.__esModule = true;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  /**
   * index action
   * @return {Promise} []
   */
  _class.prototype.indexAction = function indexAction() {
    //auto render template file index_index.html
    return this.display();
  };

  _class.prototype.uploadAction = function uploadAction() {
    // let dir = this.post('filename')
    var allFiles = this.file(); //获取所有上传的文件
    console.log(allFiles);
    return this.display();
  };

  _class.prototype.uploadfileAction = function uploadfileAction() {
    var $self = this;
    console.log(this.post());
    if (think.isFile()) {
      console.log('aaaa');
    }
    var allFiles = this.file('file'); //获取所有上传的文件
    console.log(allFiles);
    console.log(this.file());
    // if(this.files.size > 50*1024*1024){
    //     console.log('aaa')
    // }else{
    //     console.log('bbbb')
    // }
  };

  _class.prototype.uploadtestAction = function uploadtestAction() {
    console.log('haha');
    console.log((0, _typeof3.default)(this.file()));
    var $self = this;
    console.log(this.file().file.size);
    var dir = this.post('filename');
    think.mkdir('upload');
    var filePath = think.RESOUCE_PATH + dir;
    this.download(filePath);
  };

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=index.js.map