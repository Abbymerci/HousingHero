Parse.initialize("kZh3SCYIQnQ3OkI1Euet7scVhDLkgwfyNai57hqj", "FbBxp4yolPxAb8ALib1NjSg8WyYdE3Blu4DwAMcw");
Parse.serverURL = "https://parseapi.back4app.com/";

var setid = "9ZMGDCEAaF"
var DateArr = []
var streakr = document.getElementById("streak-p")


// Define the name of the class you want to query
const className = "MonthlyPaymentsUser";

// Define the ID of the object(s) you want to retrieve
const objectId = { "__type": "Pointer", "className": "UserData", "objectId": "9ZMGDCEAaF"};

// Create a new query for the class
function compare1(d1,d2,dc,st,sa){
    console.log(d1,d2,dc)
    if((d1 < d2) && (dc > d2)){
        st += 1
        console.log("Here1")
    }
    else {
        st = 0
        console.log("Here2")
        sa+=1
    }
    return st,sa
}
function render() {
  const queryt = new Parse.Query(className);
  queryt.equalTo("ID", objectId);
  query.find().then((results) => {
  for (let i = 0; i < results.length; i++){
    var add = results[i].id
    //console.log(add)
    let nquery = new Parse.Query(className);
    nquery.equalTo("objectId", add);
    nquery.first().then(function(pet){
        if(pet){
           console.log(pet.get("PaymentAmount"))
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
}

function HScore(streaks,stloss){
  streaks = parseInt(streaks,10)
  const query2 = new Parse.Query("UserData")
  query2.equalTo("objectId", setid);
  query2.first().then(function(mon){
    if(mon){
       console.log('Pet found successful with name:--- ' + mon.get("Mon"));
        let stvalue = (((streaks)* (0.75^stloss)))
        let hscore = (stvalue *0.9) + (mon.get("Mon") *0.1);

        if (hscore > 500){
          hscore = 500
        }
        console.log("Final Score:" + hscore)
    } else {
       console.log("Nothing found, please try again");
    }
}).catch(function(error){
    console.log("Error: " + error.code + " " + error.message);       
});
console.log("NEWWWWWWWWWWWWW")
  fs = `
  <p>
    ${streaks} Months
  </p>`
  //streakr.innerHTML = fs
  render()
  


}

function Streak(datearr) {
    let streak = 0;
    let stval = [];
  
    if (datearr != []) {
      for (let j = 0; j < datearr.length; j++) {
        var sec = j + 1;
  
        if (sec <= datearr.length) {
          let d1 = datearr[j];
          let oneMonthInFuture = new Date(d1.getTime());
          oneMonthInFuture.setMonth(d1.getMonth() + 1);
          let d2 = datearr[j+1];

          if (sec < datearr.length){
            streak,loss = compare1(d1,d2,oneMonthInFuture,streak,stval) 
            console.log(d1,d2,oneMonthInFuture)
          }

          if (sec === datearr.length){
            d2 =  new Date();
            //d2 = new Date("2023-08-20")
            streak,loss = compare1(d1,d2,oneMonthInFuture,streak,stval) 
          }
        }
      }
    }
    HScore(streak,loss);
    console.log(streak + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  }

// Use the find method to retrieve all the objects that match the query
const query = new Parse.Query(className);
query.equalTo("ID", objectId);
query.ascending("PaymentDate")
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