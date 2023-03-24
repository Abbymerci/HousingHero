Parse.initialize("kZh3SCYIQnQ3OkI1Euet7scVhDLkgwfyNai57hqj", "FbBxp4yolPxAb8ALib1NjSg8WyYdE3Blu4DwAMcw");
Parse.serverURL = "https://parseapi.back4app.com/";

var setid = "9ZMGDCEAaF"
var DateArr = []

// Define the name of the class you want to query
const className = "MonthlyPaymentsUser";

// Define the ID of the object(s) you want to retrieve
const objectId = { "__type": "Pointer", "className": "UserData", "objectId": "9ZMGDCEAaF"};

// Create a new query for the class
const query = new Parse.Query(className);

// Use the equalTo method to add a constraint to the query
query.equalTo("ID", objectId);
query.ascending("PaymentDate")

function compare1(d1,d2,dc,st,sa){
    console.log(d1,d2,dc)
    if((d1 < d2) && (dc > d2)){
        st += 1
        console.log("Here1")
        sa.push("-")
    }
    else {
        st = 0
        console.log("Here2")
        sa.push(".")
    }
    return st
}


function Streak(datearr) {
    let streak = 0;
    let streakarr = [];
  
    if (datearr != []) {
      for (let j = 0; j < datearr.length; j++) {
        var sec = j + 1;
  
        if (sec <= datearr.length) {
          let d1 = datearr[j];
          let oneMonthInFuture = new Date(d1.getTime());
          oneMonthInFuture.setMonth(d1.getMonth() + 1);
          let d2 = datearr[j+1];

          if (sec < datearr.length){
            streak = compare1(d1,d2,oneMonthInFuture,streak,streakarr) 
            console.log(d1,d2,oneMonthInFuture)
          }

          if (sec === datearr.length){
            d2 =  new Date();
            streak = compare1(d1,d2,oneMonthInFuture,streak,streakarr) 
          }
        }
      }
    }
    console.log(streak + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  }

// Use the find method to retrieve all the objects that match the query
query.find().then((results) => {
  for (let i = 0; i < results.length; i++){
    var add = results[i].id
    //console.log(add)

    let nquery = new Parse.Query(className);
    nquery.equalTo("objectId", add);
    nquery.ascending("PaymentDate")
    nquery.first().then(function(pet){
        if(pet){
           DateArr.push({date: pet.get("PaymentDate"), index: i})
           if (DateArr.length === results.length) {
             // Sort DateArr based on the indexes before extracting the sorted dates
             DateArr.sort((a, b) => a.index - b.index);
             const sortedDates = DateArr.map(obj => obj.date);
             //console.log(sortedDates);
             Streak(sortedDates)
           }
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