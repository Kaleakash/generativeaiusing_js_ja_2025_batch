function greeting(fname,callback){
    return "Welcome "+callback(fname);
}

var maleInfo=function(fname){
    return "Mr. "+fname;
}

let femaleInfo = (fname)=>"Ms. "+fname;

document.writeln("<br/> "+greeting("Raj",maleInfo));
document.writeln("<br/> "+greeting("Rani",femaleInfo));
document.writeln("<br/> "+greeting("Raj",function(fname){
    return "Mr. "+fname;
}))
document.writeln("<br/> "+greeting("Rani",(fname)=>"Ms. "+fname));