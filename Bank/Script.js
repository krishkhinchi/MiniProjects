alert("Welcome to Krish Bank");
let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
var Balance = 25590;
var TotalAmount;
switch(user){
    case 1:
        alert("Your Balance is: ",Balance);
    break;
    case 2:
        let Withdraw = parseInt(prompt("Enter Withdraw Amount: "));
        if(Balance>=Withdraw){
            TotalAmount=Balance-Withdraw;
            console.log("Withdrawal Amount: ",Withdraw);
            console.log("Remaining Amount: ",TotalAmount);
        }
        else{
            console.log("Not Enough Money");
        }
    break;
    case 3:
        let Deposite = parseInt(prompt("Enter Deposite Amount: "));
        TotalAmount=Balance+Deposite;
        console.log("Deposite Amount: ",Deposite);
        console.log("Total Amount: ",TotalAmount);
    break;
    case 4:
        let Transfer = parseInt(prompt("Enter Transfer Amount: "));
        if(Balance>=Transfer){
            TotalAmount=Balance-Transfer;
            console.log("Transfer Amount: ",Transfer);
            console.log("Remaining Amount: ",TotalAmount);
        } else{
            console.log("Not Enough Money");
        }
    break;
    default:
        alert("Please Enter a Number between 1 to 4");
}