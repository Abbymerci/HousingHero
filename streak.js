Parse.initialize("kZh3SCYIQnQ3OkI1Euet7scVhDLkgwfyNai57hqj", "FbBxp4yolPxAb8ALib1NjSg8WyYdE3Blu4DwAMcw"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var setid = "9ZMGDCEAaF"


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

// Use the find method to retrieve all the objects that match the query
query.find().then((results) => {
  //console.log("Retrieved ", results.length, " rows with ID ", objectId);
  //console.log("Results: ", results);

  for (let i = 0; i < results.length; i++){
    console.log(results[i])
  }
}, (error) => {
  console.error("Error while retrieving rows with ID ", objectId, ": ", error);
});
}
document.onload = test();