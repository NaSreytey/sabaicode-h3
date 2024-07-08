
//1.

// function processArrays(arrays,callback){
//     let array=[]
//     for(let i=0;i<arrays.length;i++){
//       array.push(callback(arrays[i]))
//     }
//     return array;
// }

// function square(number){
//     return number*number;
// }

// let arr=[1,2,3,4,5,2]
// let result=processArrays(arr,square)
// console.log(result)

//2.

// function processAsynArray(array,callback){
//     let newArray=[]
//     for(let i=0;i<array.length;i++){
//        if(callback(array[i]))
//        newArray.push(array[i])
//     }
//     return newArray
// }
//  function evenNumber(even){
//     return even%2==0
//  }
// let arr=[1,2,3,4]
// let result=processAsynArray(arr,evenNumber)
// console.log(result)




const { error } = require('console');
//3.
const fs = require('fs');

function readFile(filePath,caLLback){
  fs.readFile(filePath,'utf8',(err,data)=>{
     if(err){
     console.error(err);
     caLLback(err);
     }else{
      caLLback(data);
     }
    });
}
let filePath='input.txt'
readFile(filePath,(data)=>{
 console.log(data)
});


//4. Function to write to file asynchronously

function writeFile(filePath, content, callback) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            callback(err);
        } else {
            console.log(`File '${filePath}' has been saved.`);
            callback() ;
        }
    });
}

const filePaths = 'input.txt';
writeFile(filePaths,'hello', (err) => {
    if (err) {
        console.error('Failed to write file:', err);
    } else {
        console.log(`Successfully wrote '${filePaths}'`);
    }
});



//5.
readFile('input.txt', (data) => {
    console.log(data);
    writeFile('output1.txt',data+'\nfirst modification',(err)=>{
        if(err){
            console.log(err);
        }else{
            readFile('output1.txt',(data)=>{
                console.log(data);
                writeFile('output2.txt',data+'\nsecond modification',(err)=>{
                    if(err){
                        console.log(err)
                    }else{

                        readFile('output2.txt',(data)=>{
                            console.log(data);
                        });
                    }
                });
            });
        }
    });
  });