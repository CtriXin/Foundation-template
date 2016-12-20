'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }


  formAction(){
      return this.display();
  }


  gridAction(){
      return this.display();
  }


  uploadAction(){
    // let dir = this.post('filename')
      let allFiles = this.file(); //获取所有上传的文件
      console.log(allFiles)
    return this.display();
  }

  uploadfileAction(){
      let $self = this;
      console.log(this.post());
      if(think.isFile()){
        console.log('aaaa')
      }
      let allFiles = this.file('file'); //获取所有上传的文件
      console.log(allFiles);
      console.log(this.file());
      // if(this.files.size > 50*1024*1024){
      //     console.log('aaa')
      // }else{
      //     console.log('bbbb')
      // }
  }

    uploadtestAction() {
      console.log('haha');
      console.log(typeof (this.file()));
      let $self = this;
      console.log(this.file().file.size)
      let dir = this.post('filename');
      think.mkdir('upload');
      let filePath = think.RESOUCE_PATH + dir;
      this.download(filePath)

  }




}