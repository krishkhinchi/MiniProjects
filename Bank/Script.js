alert("Welcome to Krish Bankz");
var TotalAmount;
var checkbank=parseInt(prompt("Do you have a Bank Account? press 1:Yes, 2:No"));
if(checkbank==1){
    var account=parseInt(prompt("Enter your Account Number"));
    if(account==123){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 25590;
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
                    console.log(`You want to Withdraw ${Withdraw}rs but Your balance is ${Balance}rs only`);
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
                    console.log(`You want to Transfer ${Transfer}rs but Your balance is ${Balance}rs only`);
                }
            break;
            default:
                alert("Please Enter a Number between 1 to 4");
        }
    } else if(account==456){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 562900;
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
                    console.log(`You want to Withdraw ${Withdraw}rs but Your balance is ${Balance}rs only`);
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
                    console.log(`You want to Transfer ${Transfer}rs but Your balance is ${Balance}rs only`);
                }
            break;
            default:
                alert("Please Enter a Number between 1 to 4");
        }
    } else if(account==789){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 13431;
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
                    console.log(`You want to Withdraw ${Withdraw}rs but Your balance is ${Balance}rs only`);
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
                    console.log(`You want to Transfer ${Transfer}rs but Your balance is ${Balance}rs only`);
                }
            break;
            default:
                alert("Please Enter a Number between 1 to 4");
        }
    } else {
        alert("Invalid Account Number");
    }
} else if(checkbank==2){
    let user = parseInt(prompt("Enter 1:Create Account, 2:Exit :"));
    if(user==1){
        let adhar=parseInt(prompt("Enter your Adhar Number: "));
        let pan=parseInt(prompt("Enter yout PAN Number: "));
        //remaining
    } else if(user==2){
        alert("You are Exit successfully, Thank you for visiting Krish Bankz");
    } else{
        alert("Please Enter a Number between 1 to 2");
    }
} else{
    alert("Please Enter a Number between 1 to 2");
}