$(function(){var e=Qiniu.uploader({runtimes:"html5,flash,html4",browse_button:"pickfiles",container:"container",drop_element:"drag",max_file_size:"100mb",flash_swf_url:"js/plupload/Moxie.swf",dragdrop:!0,chunk_size:"4mb",uptoken_url:$("#uptoken_url_p").text(),domain:$("#domain").text(),auto_start:!1,init:{PostInit:function(){document.getElementById("filelist").innerHTML="",document.getElementById("uploadfiles").onclick=function(){return e.start(),!1}},FilesAdded:function(e,t){$("table").show(),plupload.each(t,function(e){console.log("####################上传的文件目录结构: "+JSON.stringify(e));var t=e.name.split("."),o=t[t.length-1];console.log(o),document.getElementById("table-index").innerHTML+='<tr id="'+e.id+'"><td>'+e.name+" ("+plupload.formatSize(e.size)+")</td><td>http://imagecloud.tataufo.com/"+e.id+"."+o+"</td><td>"+e.type+"</td><td></td><td></td></tr>"})},BeforeUpload:function(e,t){},UploadProgress:function(e,t){},UploadComplete:function(){},FileUploaded:function(e,t,o){console.log(t);var n=e.getOption("domain");console.log(o);var a=JSON.parse(o),i="http://imagecloud.tataufo.com/"+a.key,l=a.key;console.log("============"+l);var d=t.id,c=Qiniu.watermark({mode:2,text:"你好吗",dissolve:100,gravity:"SouthWest",fontsize:600,dx:10,dy:10,fill:"red"}),s=Qiniu.imageView2({mode:5,w:50}),m=i+"?imageInfo";console.log(typeof m),imgLinks="http://imagecloud.tataufo.com/"+l+"?"+c,"image/jpeg"==t.type||"image/png"==t.type?document.getElementById(t.id).getElementsByTagName("td")[3].innerHTML='<img src="http://imagecloud.tataufo.com/'+l+"?"+s+'" alt="">':document.getElementById(t.id).getElementsByTagName("td")[3].innerHTML='<img src="http://imagecloud.tataufo.com/undefinedbitmap80.png?'+s+'" alt="">',document.getElementById(t.id).getElementsByTagName("td")[4].innerHTML='<a class="btn btn-danger deleteit" data-key="'+l+'">删除</a>',console.log(imgLinks),$.ajax({url:"http://imagecloud.tataufo.com/"+l+"?imageInfo",type:"get",dataType:"json",success:function(e){console.log(e.width)}}),$(".deleteit").on("click",function(){var e=$(this),t=$(this).attr("data-key");$.ajax({url:"/index/delete",type:"get",dataType:"json",data:{key:t},success:function(t){console.log(e.parents("#"+d)),e.parents("#"+d).remove()}})})},Error:function(e,t,o){document.getElementById("console").innerHTML+="\nError #"+t.code+": "+t.message},Key:function(e,t){console.log(typeof("################"+e),t.name);var o=$("#path-last-live").val();console.log(typeof o);var n=o+t.name;if(""==o)var n="/oam/upload/";return n}}});e.bind("FileUploaded",function(){console.log("hello man,a file is uploaded")}),$(".imageinfo").on("click",function(){var e=$(this).attr("data-key");console.log("fhhsh"),$.ajax({url:"http://imagecloud.tataufo.com/"+e+"?imageInfo",type:"get",dataType:"json",success:function(e){console.log(e)}})})});