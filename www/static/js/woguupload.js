/**
 * Created by xin on 2016/12/15.
 */
var WoguUpload = function(options) {
    var
        file,persize,sock,size,sendsize,end,fr,separator,filenamepre;

    var
        init = function(instance) {
            fr = new FileReader();

            separator = options.separator || '$##$';
            filenamepre =
                options.filenamepre || 'woguupload';
            size = sendsize = end = 0;

            persize = options.persize || 1024*50/*50K*/;

            try {

                sock = woguWebSocket(options.url);
                sock.onopen =
                    function() {
                        if(options.onOpen) {

                            options.onOpen();
                        }
                    }


                sock.onmessage  = function(event) {
                    var cmd =
                        event.data.split(separator);
                    if('0' == cmd[0]) {

                        sendsize = parseInt(cmd[1]);
                        doupload();

                    } else if('1' == cmd[0]) {

//服务器真实写入的数据
                        var realwrite = parseInt(cmd[1]);


//如果写入失败则重新发送
                        if(realwrite == 0) {
                            doupload();

                            return;
                        }


                        if(end < size) {
                            sendsize = end;

                            if(options.onProcess) {

                                options.onProcess(sendsize, size);
                            }


                            doupload();
                        } else {

                            if(options.onComplete) {

                                options.onComplete(size);
                                sock.close();

                            }
                        }
                    }

                }

                sock.onclose   = function() {

                    if(options.onClose) {
                        options.onClose();

                    }
                }
            } catch(e) {
                alert(e);

            }

            var elem = document.getElementById(options.id);

            if(options.formid) {
                var form =
                    document.getElementById(options.formid);
                if(form) {

                    form.onsubmit = bind(instance, function(event) {

                        upload();
                        return false;
                    });

                }
            }

            elem.onchange = bind(instance,
                function() {
                    file = elem.files[0];
                    if(!form) {

                        upload();
                    }
                });
        }


    var woguSlice = function(file, start, end, contentType) {

        if(file.mozSlice) {
            return file.mozSlice(start, end,
                contentType);
        } else if(file.webkitSlice) {
            return
            file.webkitSlice(start, end, contentType);
        }
    }


    var woguWebSocket = function(url) {
        if(window.WebSocket) {

            return new WebSocket(url);
        } else if(window.MozWebSocket) {

            return new MozWebSocket(url);
        }
    }


    var doupload = function() {
        end = sendsize + persize;

        end = end > size ? size : end;
        var blob = woguSlice(file,
            sendsize, end);
        fr.readAsArrayBuffer(blob);
        fr.onloadend
            = function() {
            sock.send(fr.result);
        }
    }


    var getFileName = function(file) {
        var filename =
            filenamepre + '-' + file.size;
        if(file.lastModifiedDate) {

            var dateinfo = file.lastModifiedDate.toString().split(' ');

            var date = dateinfo[1] + dateinfo[2] + dateinfo[3] + dateinfo[4];

            date = date.replace(/\:/g, '');
            filename += '-' + date;

        }

        filename += '-' + file.name;
        return filename;

    }

    var upload = function() {
        if(!file) {

            return;
        }

        size = file.size;
        var
            filename = getFileName(file);
        var cmd = getCmd([0, filename]);

        sock.send(cmd);
    }

    var bind = function(obj, func) {

        return function() {
            return func.call(obj);

        }
    }

    var getCmd = function(args) {
        return
        args.join(separator);
    }
    init(this);
}