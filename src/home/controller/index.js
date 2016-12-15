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


  uploadAction(){

    // let dir = this.post('filename')
    return this.display();
  }

  xhr2Action(){
    console.log('haha');
    let dir = this.post('filename');
    console.log(dir);
    let md5 = think.md5(dir)
    dir = 'upload/' + md5;
    if(think.isEmpty('upload/' + md5)){
        think.mkdir('upload')
    }
  }




}