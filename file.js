
var fs=require('fs')

const dirname="nodefile"
  let filname= fs.readdirSync(dirname);
 filname.forEach((file)=>{
     console.log("file:",file)
 })


  
   


 