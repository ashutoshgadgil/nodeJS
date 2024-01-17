var fs=require('fs');

fs.writeFile("file1.txt","Welcome to Node JS",(err)=>{
    if(err)
        console.log("Error writing file");
    else
        console.log("File has been written");
})