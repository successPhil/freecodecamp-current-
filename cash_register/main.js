function checkCashRegister(price, cash, cid) {
    const currencyValues = {
       "PENNY": 0.01,
       "NICKEL": 0.05,
       "DIME": 0.1,
       "QUARTER": 0.25,
       "ONE": 1,
       "FIVE": 5,
       "TEN": 10,
       "TWENTY": 20,
       "ONE HUNDRED": 100
     };
   
     const totalCID = cid.reduce((acc, curr) => {
       return acc + curr[1];
     }, 0);
   
     let changeDue = cash - price;
   
     if (changeDue > totalCID) {
       return {status: "INSUFFICIENT_FUNDS", change: []};
     } else if (changeDue.toFixed(2) === totalCID.toFixed(2)) {
       return {status: "CLOSED", change: cid};
     } else {
       const change = cid.reduceRight((acc, curr) => {
         const value = currencyValues[curr[0]];
         let amount = 0;
   
         while (changeDue >= value && curr[1] >= value) {
           changeDue -= value;
           curr[1] -= value;
           amount += value;
           changeDue = Math.round(changeDue * 100) / 100;
         }
   
         if (amount > 0) {
           acc.push([curr[0], amount]);
         }
   
         return acc;
       }, []);
   
       if (changeDue > 0) {
         return {status: "INSUFFICIENT_FUNDS", change: []};
       }
   
       return {status: "OPEN", change: change};
     }
   }
   
   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);