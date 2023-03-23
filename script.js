Parse.initialize("kZh3SCYIQnQ3OkI1Euet7scVhDLkgwfyNai57hqj", "FbBxp4yolPxAb8ALib1NjSg8WyYdE3Blu4DwAMcw"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Pet = Parse.Object.extend("UserData");



function create() {
    var in1 = document.getElementById("name").value
    var in2 = document.getElementById("email").value
    var in3 = document.getElementById("income").value
    var in4 = document.getElementById("down").value
    var in5 = document.getElementById("mon").value
    var in6 = document.getElementById("min").value
    var in7 = document.getElementById("max").value
    console.log(in1)
    let mypet = new Pet();
    mypet.set("Name", in1);
    mypet.set("Email", in2);
    mypet.set("AnnIncome", in3);
    mypet.set("InitDown", in4);
    mypet.set("Mon", in5);
    mypet.set("HouMin", in6);
    mypet.set("HouMax", in7);
    mypet.save().then(function(pet){
         console.log('Pet created successful with name: ' + pet.get("Name"));
    }).catch(function(error){
         console.log('Error: ' + error.message);
    });
}

    document.getElementById("ret-but").addEventListener("click",function(){
        query = new Parse.Query("User");
        query.equalTo("username", "ef");
        query.first().then(function(pet){
            if(pet){
            console.log('Pet found successful with name: ' + pet.get("name") + ' and age: ' + pet.get("agePet"));
            nrender = `
                <h1>
                    ${pet.get("username")}
                </h1>`
            divi.innerHTML = nrender
            } else {
            console.log("Nothing found, please try again");
            }
        }).catch(function(error){
            console.log("Error: " + error.code + " " + error.message);       
        });
    })
function signUp() {
    document.getElementById("sign-el").style.display = 'block';
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
document.getElementById("ret-but").addEventListener("click", function () {
    create();
  });
