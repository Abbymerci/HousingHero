Parse.initialize("kZh3SCYIQnQ3OkI1Euet7scVhDLkgwfyNai57hqj", "FbBxp4yolPxAb8ALib1NjSg8WyYdE3Blu4DwAMcw"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var setid = "9ZMGDCEAaF"
var DateArr = []

// Initialize Parse with your Back4App Application ID and JavaScript Key

function test(){
// Define the name of the class you want to query
const className = "MonthlyPaymentsUser";

// Define the ID of the object(s) you want to retrieve
const objectId = { "__type": "Pointer", "className": "UserData", "objectId": "9ZMGDCEAaF"};

// Create a new query for the class
const query = new Parse.Query(className);

// Use the equalTo method to add a constraint to the query
query.equalTo("ID", objectId);
query.ascending("PaymentDate")
// Use the find method to retrieve all the objects that match the query
query.find().then((results) => {
  for (let i = 0; i < results.length; i++){
    var add = results[i].id
    console.log(add)

    let nquery = new Parse.Query(className);
    nquery.equalTo("objectId", add);
    nquery.ascending("PaymentDate")
    nquery.first().then(function(pet){
        if(pet){
           console.log(typeof pet.get("PaymentDate"));
           DateArr.push(pet.get("PaymentDate"))
        } else {
           console.log("Nothing found, please try again");
        }
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);       
    });

  }
}, (error) => {
  console.error("Error while retrieving rows with ID ", objectId, ": ", error);
});
console.log(DateArr.sort())



}


document.onload = test();