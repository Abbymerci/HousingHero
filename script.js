Parse.initialize("kZh3SCYIQnQ3OkI1Euet7scVhDLkgwfyNai57hqj", "FbBxp4yolPxAb8ALib1NjSg8WyYdE3Blu4DwAMcw"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Pet = Parse.Object.extend("UserData");



function create() {
    var in1 = document.getElementById("name").value
    var in2 = document.getElementById("email").value
    var in3 = document.getElementById("income").value
    var in4 = document.getElementById("down").value
    console.log(in1)
    let mypet = new Pet();
    mypet.set("Name", in1);
    mypet.set("Email", in2);
    mypet.set("AnnIncome", in3);
    mypet.set("InitDown", in4);
    mypet.save().then(function(pet){
         console.log('Pet created successful with name: ' + pet.get("Name"));
    }).catch(function(error){
         console.log('Error: ' + error.message);
    });
}

document.getElementById("ret-but").addEventListener("click", function () {
    create();
  });