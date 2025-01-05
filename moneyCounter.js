function countMoneyMachine(insertedAmount, cost) 
{   
  let change = insertedAmount - cost;
  
    if (change > 0) {
      console.log("Change to be returned: ", change);  
    } 
    else if (change < 0) {
      console.log("Insufficient funds");
    } 
    else {
      console.log("Exact amount paid");
    }
  
    return change;
}

  let insertedAmount = 100;
  let cost = 17;
  let change = countMoneyMachine(insertedAmount, cost);
