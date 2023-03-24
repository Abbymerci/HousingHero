Parse.initialize("kZh3SCYIQnQ3OkI1Euet7scVhDLkgwfyNai57hqj", "FbBxp4yolPxAb8ALib1NjSg8WyYdE3Blu4DwAMcw"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Pet = Parse.Object.extend("UserData");
var payment = Parse.Object.extend("MonthlyPaymentsUser");


function create() {
    var in1 = document.getElementById("name").value
    var in2 = document.getElementById("email").value
    var in3 = document.getElementById("income").value
    var in4 = document.getElementById("down").value
    var in5 = document.getElementById("mon").value
    var in6 = document.getElementById("min").value
    var in7 = document.getElementById("max").value

    let mypet = new Pet();
    mypet.set("Name", in1);
    mypet.set("Email", in2);
    mypet.set("AnnIncome", in3);
    mypet.set("InitDown", in4);
    mypet.set("Mon", in5);
    mypet.set("HouMin", in6);
    mypet.set("HouMax", in7);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var currdate = new Date(yyyy + "-" + mm + "-" +dd)


    let mypay = new payment();
    mypay.set("PaymentDate",currdate)
    mypay.set("PaymentAmount",in5)
    mypay.set("ID",mypet)

    mypet.save().then(function(pet){
         console.log('Pet created successful with name: ' + pet.get("Name"));
    }).catch(function(error){
         console.log('Error: ' + error.message);
    });

    console.log("HERRERRR")
    mypay.save().then(function(pay1){
      console.log('Pay created successful with name: ' + pay1.get("PaymentAmount"));
    }).catch(function(error){
      console.log('Error: ' + error.message);
    });

    in1.value = ""
    in2.value = ""
    in3.value = ""
    in4.value = ""
    in5.value = ""
    in6.value = ""
    in7.value = ""
}

document.getElementById("ret-but").addEventListener("click", function () {
    create();
  });

  function signUp() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    documen.getElementById("myForm").style.display = "none";

  }