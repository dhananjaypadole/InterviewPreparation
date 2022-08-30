let http=  require('http')
http.createServer((req,res)=>{
    res.write(this.myFun)
    
    res.end('HI Dhananjay')
}).listen(8081);

// exports.myFun= function(){
//     return 'Hiii';
// }

console.log('http://localhost:8081');