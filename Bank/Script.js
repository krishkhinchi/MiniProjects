const prompt = require("prompt-sync")();
Window.alert("Welcome to Krish Bankz");
var TotalAmount;
var checkbank=prompt("Do you have a Bank Account? (YES/NO): ");
if(checkbank=="yes"||checkbank=="YES"||checkbank=="Yes"){
    var account=parseInt(prompt("Enter your Account Number"));
    if(account==123){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 25590;
        switch(user){
            case 1:
                Window.alert(`Your Balance is: ${Balance}rs`);
            break;
            case 2:
                let Withdraw = parseInt(prompt("Enter Withdraw Amount: "));
                if(Balance>=Withdraw){
                    TotalAmount=Balance-Withdraw;
                    console.log(`Withdrawal Amount: ${Withdraw}rs`);
                    console.log(`Remaining Amount: ${TotalAmount}rs`);
                }
                else{
                    console.log("Not Enough Money");
                    console.log(`You want to Withdraw ${Withdraw}rs but Your balance is ${Balance}rs only`);
                }
            break;
            case 3:
                let Deposite = parseInt(prompt("Enter Deposite Amount: "));
                TotalAmount=Balance+Deposite;
                console.log(`Deposite Amount: ${Deposite}rs`);
                console.log(`Total Amount: ${TotalAmount}rs`);
            break;
            case 4:
                let Transfer = parseInt(prompt("Enter Transfer Amount: "));
                if(Balance>=Transfer){
                    TotalAmount=Balance-Transfer;
                    console.log(`Transfer Amount: ${Transfer}rs`);
                    console.log(`Remaining Amount: ${TotalAmount}rs`);
                } else{
                    console.log("Not Enough Money");
                    console.log(`You want to Transfer ${Transfer}rs but Your balance is ${Balance}rs only`);
                }
            break;
            default:
                Window.alert("Please Enter a Number between 1 to 4");
        }
    } else if(account==456){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 562900;
        switch(user){
            case 1:
                Window.alert(`Your Balance is: ${Balance}rs`);
            break;
            case 2:
                let Withdraw = parseInt(prompt("Enter Withdraw Amount: "));
                if(Balance>=Withdraw){
                    TotalAmount=Balance-Withdraw;
                    console.log(`Withdrawal Amount: ${Withdraw}rs`);
                    console.log(`Remaining Amount: ${TotalAmount}rs`);
                }
                else{
                    console.log("Not Enough Money");
                    console.log(`You want to Withdraw ${Withdraw}rs but Your balance is ${Balance}rs only`);
                }
            break;
            case 3:
                let Deposite = parseInt(prompt("Enter Deposite Amount: "));
                TotalAmount=Balance+Deposite;
                console.log(`Deposite Amount: ${Deposite}rs`);
                console.log(`Total Amount: ${TotalAmount}rs`);
            break;
            case 4:
                let Transfer = parseInt(prompt("Enter Transfer Amount: "));
                if(Balance>=Transfer){
                    TotalAmount=Balance-Transfer;
                    console.log(`Transfer Amount: ${Transfer}rs`);
                    console.log(`Remaining Amount: ${TotalAmount}rs`);
                } else{
                    console.log("Not Enough Money");
                    console.log(`You want to Transfer ${Transfer}rs but Your balance is ${Balance}rs only`);
                }
            break;
            default:
                Window.alert("Please Enter a Number between 1 to 4");
        }
    } else if(account==789){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 13431;
        switch(user){
            case 1:
                Window.alert(`Your Balance is: ${Balance}rs`);
            break;
            case 2:
                let Withdraw = parseInt(prompt("Enter Withdraw Amount: "));
                if(Balance>=Withdraw){
                    TotalAmount=Balance-Withdraw;
                    console.log(`Withdrawal Amount: ${Withdraw}rs`);
                    console.log(`Remaining Amount: ${TotalAmount}rs`);
                }
                else{
                    console.log("Not Enough Money");
                    console.log(`You want to Withdraw ${Withdraw}rs but Your balance is ${Balance}rs only`);
                }
            break;
            case 3:
                let Deposite = parseInt(prompt("Enter Deposite Amount: "));
                TotalAmount=Balance+Deposite;
                console.log(`Deposite Amount: ${Deposite}rs`);
                console.log(`Total Amount: ${TotalAmount}rs`);
            break;
            case 4:
                let Transfer = parseInt(prompt("Enter Transfer Amount: "));
                if(Balance>=Transfer){
                    TotalAmount=Balance-Transfer;
                    console.log(`Transfer Amount: ${Transfer}rs`);
                    console.log(`Remaining Amount: ${TotalAmount}rs`);
                } else{
                    console.log("Not Enough Money");
                    console.log(`You want to Transfer ${Transfer}rs but Your balance is ${Balance}rs only`);
                }
            break;
            default:
                Window.alert("Please Enter a Number between 1 to 4");
        }
    } else {
        Window.alert("Invalid Account Number");
    }
} else if(checkbank=="no"||checkbank=="NO"||checkbank=="No"){
    let user = parseInt(prompt("Enter 1:Create Account, 2:Exit :"));
    if(user==1){
        let name=prompt("Enter your Name: ");
        let age=parseInt(prompt("Enter your Age: "));
        if(age>=18){
            let DL=prompt("You have Driving License? (Yes/No)");
            if(DL=="Yes"||DL=="yes"||DL=="YES"){
                let adhar=parseInt(prompt("Enter your Adhar Number: "));
                let pan=parseInt(prompt("Enter yout PAN Number: "));
                Window.alert("Thankyou for submitting your details, your account will be created soon");
            } else if(DL=="No"||DL=="no"||DL=="NO"){
                Window.alert("Sorry, You can't create bank account. Due to you don't have Driving License");
            } else{
                Window.alert("Invalid Input of Driving License");
            }
        } else if(age<18){
            Window.alert("Sorry, You can't create bank account. Due to you are minor");
        } else{
            Window.alert("Invalid Input of Age");
        }
    } else if(user==2){
        Window.alert("Visit Again")
    } else{
        Window.alert("Please Enter a Number between 1 to 2");
    }
} else{
    Window.alert("Please select Yes or No");
}