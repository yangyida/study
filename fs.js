var log = function(o){
    console.log(o);
};

var error = function(o){
    console.error(o);
};

var fs = require("fs");

/*
fs.appendFile(
    "test/index.txt",
    "+++",
    function(err){
        if(err){
            error(err);
        }else{
            log("成功");
        }
    }
)*/

/*var rs = fs.createReadStream(
    "test/index.txt",
    {
        flags : "r",
        start : 5,
        end : 6
    }
);

var cw = fs.createWriteStream(
    "test/index2.txt",
    {
        flags : "r+"
    }
);*/

/*fs.stat(
    "a.js",
    function(err, stats){
        if(err){
            error(err)
        }else{
            log(stats);
        }
    }
);

fs.mkdir("you", function(err){
    if(err){
        error(err);
    }else{
        log("success !!!");
    }
});*/

/*fs.open(
    "test/index.txt",
    "r",
    function(err, fd){
        if(err){
            error(err);
        }else{
            var buf = new Buffer(1024);
            fs.read(
                fd,
                buf,
                0,
                buf.length,
                0,
                function(err, bytesRead, buffer){
                    if(err){
                        error(err);
                    }else{
                        log(buf.slice(0, bytesRead).toString());
                        fs.close(fd);
                    }
                });
        }
    }
);*/

/*fs.readdir("test", function(err, files){

    if(err){
        error(err);
    }else{
        log(typeof files[0]);
    }
});*/

/*fs.readFile("test/index2.txt", function(err, data){
    if(err){
        error(err);
    }else{
        log(data.toString());
    }
});*/
/*
fs.readlink("test/index2.txt", function(err, linkString){
    if(err){
       error(err);
    }else{
        log(linkString);
    }
});*/

fs.realpath("test/index.txt", function(err, path){

    if(err){
        log(err);
    }else{
        log(path);
    }
});

