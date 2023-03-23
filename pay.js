
var paym = document.getElementById("pay")
var nref 
Parse.initialize("kZh3SCYIQnQ3OkI1Euet7scVhDLkgwfyNai57hqj", "FbBxp4yolPxAb8ALib1NjSg8WyYdE3Blu4DwAMcw"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Pay = Parse.Object.extend("MonthlyPaymentsUser");

function createpay(){
    let mypay = new Pay();
    mypay.set("Name", );
    
}

document.getElementById("ret-but").addEventListener("click", function () {
    createpay();
  });