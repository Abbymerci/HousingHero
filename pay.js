import {} from  "script.js"
var paym = document.getElementById("pay")
var nref 
Parse.initialize("kZh3SCYIQnQ3OkI1Euet7scVhDLkgwfyNai57hqj", "FbBxp4yolPxAb8ALib1NjSg8WyYdE3Blu4DwAMcw"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Pay = Parse.Object.extend("MonthlyPaymentsUser");

function createpay(){
        const newState1 = new Parse.Object("MonthlyPaymentsUser");
        newState1.set("state_name", "California");
        try {
          // Save the Object
          let result = await newState1.save();
        } catch (error) {
          console.log(`Failed to create new object, with error code: ${error.message}`);
          return false;
        }
        const newState2 = new Parse.Object("State");
        newState2.set("state_name", "Colorado");
        try {
          let result = await newState2.save();
        } catch (error) {
          console.log(`Failed to create new object, with error code: ${error.message}`);
          return false;
        }
      
        // Create City class and it's records
        const newCity1 = new Parse.Object("City");
        // Define its attributes
        newCity1.set("city_name", "Los Angeles");
        // To create a relation, pass the Parse Object as the field value
        newCity1.set("state", newState1);
        try {
          // Save the Object
          let result = await newCity1.save();
        } catch (error) {
          console.log(`Failed to create new object, with error code: ${error.message}`);
          return false;
        }
        const newCity2 = new Parse.Object("City");
        newCity2.set("city_name", "Denver");
        newCity2.set("state", newState2);
        try {
          let result = await newCity2.save();
        } catch (error) {
          console.log(`Failed to create new object, with error code: ${error.message}`);
          return false;
        }
        console.log("Success creating classes and records!");
      }
    let mypay = new Pay();
    mypay.set("Name", );
    
}

document.getElementById("ret-but").addEventListener("click", function () {
    createpay();
  });