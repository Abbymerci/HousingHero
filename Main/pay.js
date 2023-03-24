//import {an} from  "script.js"

Parse.initialize("kZh3SCYIQnQ3OkI1Euet7scVhDLkgwfyNai57hqj", "FbBxp4yolPxAb8ALib1NjSg8WyYdE3Blu4DwAMcw"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Payment = Parse.Object.extend("MonthlyPaymentsUser");

function createpay(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var currdate = new Date(today)

    var paym = document.getElementById("pay-inp").value

    let Addpay = new Payment()
    Addpay.set("PaymentDate",currdate)
    console.log(paym)
    Addpay.set("PaymentAmount",paym)
    Addpay.set("ID",{ "__type": "Pointer", "className": "UserData", "objectId": "9ZMGDCEAaF"})

    Addpay.save().then(function(add1){
      console.log('Pet created successful with name: ' + add1.get("PaymentAmount"));
    }).catch(function(error){
      console.log('Error: ' + error.message);
    });
}

document.getElementById("pay-id").addEventListener("click", function () {
    createpay();
});