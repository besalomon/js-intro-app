
var numbers = [];

function three(count){
 if (numbers.indexOf(count) === -1){
    numbers.push(count);
 } else{
  console.log("box already clicked");
 }

 if (numbers.length === 3){
    alert("Success");
 }
  
}
