//const prompt = require("prompt-sync")();
window.alert("Welcome to Krish Bankz");
var TotalAmount;
var checkbank=prompt("Do you have a Bank Account? (YES/NO): ");
if(checkbank=="yes"||checkbank=="YES"||checkbank=="Yes"){
    var account=parseInt(prompt("Enter your Account Number"));
    if(account==123){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 25590;
        switch(user){
            case 1:
                window.alert(`Your Balance is: ${Balance}rs`);
            break;
            case 2:
                let Withdraw = parseInt(prompt("Enter Withdraw Amount (Available: Rs 100, Rs 500, Rs 200): "));
                if(Withdraw>0){
                    if(Balance>=Withdraw){
                        if(Withdraw%100==0){
                            TotalAmount=Balance-Withdraw;
                            console.log(`Withdrawal Amount: ${Withdraw}rs`);
                            console.log(`Remaining Amount: ${TotalAmount}rs`);
                        } else if(Withdraw%100!=0){
                            window.alert("Only 100, 500, 200 notes are available");
                        } else{
                            window.alert("Invalid Amount");
                        }
                    } else if(Withdraw>Balance){
                        console.log("Not Enough Money");
                        console.log(`You want to Withdraw ${Withdraw}rs but Your balance is ${Balance}rs only`);
                    } else{
                        window.alert("Invalid Amount");
                    }
                } else if(Withdraw==0){
                    window.alert("Withdrawal Amount can't be Zero");
                } else if(Withdraw<0){
                    window.alert("Withdrawal Amount can't be Negative");
                } else{
                    window.alert("Invalid Amount, Please enter a numeric value");
                }
            break;
            case 3:
                let Deposite = parseInt(prompt("Enter Deposite Amount: "));
                if(Deposite>0){
                TotalAmount=Balance+Deposite;
                console.log(`Deposite Amount: ${Deposite}rs`);
                console.log(`Total Amount: ${TotalAmount}rs`);
                }else if(Deposite==0){
                    window.alert("Deposite Amount can't be Zero");
                } else if(Deposite<0){
                    window.alert("Deposite Amount can't be Negative");
                } else{
                    window.alert("Invalid Amount, Please enter a numeric value");
                }
            break;
            case 4:
                let TransferAccount = prompt("Enter A/C to transfer: ");
                if(TransferAccount==0){
                    window.alert("Account Number can't be Zero");
                } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                    let Transfer = parseInt(prompt("Enter Transfer Amount: "));
                    if(Balance>=Transfer){
                        TotalAmount=Balance-Transfer;
                        console.log(`Transfer Amount: ${Transfer}rs`);
                        console.log(`Remaining Amount: ${TotalAmount}rs`);
                    } else{
                        console.log("Not Enough Money");
                        console.log(`You want to Transfer ${Transfer}rs but Your balance is ${Balance}rs only`);
                    }
                } else{
                    window.alert("Account Number can't be in Character");
                }
            break;
            default:
                window.alert("Please Enter a Number between 1 to 4");
        }
    } else if(account==456){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 562900;
        switch(user){
            case 1:
                window.alert(`Your Balance is: ${Balance}rs`);
            break;
            case 2:
                let Withdraw = parseInt(prompt("Enter Withdraw Amount (Available: Rs 100, Rs 500, Rs 200): "));
                if(Withdraw>0){
                    if(Balance>=Withdraw){
                        if(Withdraw%100==0){
                            TotalAmount=Balance-Withdraw;
                            console.log(`Withdrawal Amount: ${Withdraw}rs`);
                            console.log(`Remaining Amount: ${TotalAmount}rs`);
                        } else if(Withdraw%100!=0){
                            window.alert("Only 100, 500, 200 notes are available");
                        } else{
                            window.alert("Invalid Amount");
                        }
                    } else if(Withdraw>Balance){
                        console.log("Not Enough Money");
                        console.log(`You want to Withdraw ${Withdraw}rs but Your balance is ${Balance}rs only`);
                    } else{
                        window.alert("Invalid Amount");
                    }
                } else if(Withdraw==0){
                    window.alert("Withdrawal Amount can't be Zero");
                } else if(Withdraw<0){
                    window.alert("Withdrawal Amount can't be Negative");
                } else{
                    window.alert("Invalid Amount, Please enter a numeric value");
                }
            break;
            case 3:
                let Deposite = parseInt(prompt("Enter Deposite Amount: "));
                if(Deposite>0){
                    TotalAmount=Balance+Deposite;
                    console.log(`Deposite Amount: ${Deposite}rs`);
                    console.log(`Total Amount: ${TotalAmount}rs`);
                    }else if(Deposite==0){
                        window.alert("Deposite Amount can't be Zero");
                    } else if(Deposite<0){
                        window.alert("Deposite Amount can't be Negative");
                    } else{
                        window.alert("Invalid Amount, Please enter a numeric value");
                }
            break;
            case 4:
                let TransferAccount = prompt("Enter A/C to transfer: ");
                if(TransferAccount==0){
                    window.alert("Account Number can't be Zero");
                } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                    let Transfer = parseInt(prompt("Enter Transfer Amount: "));
                    if(Balance>=Transfer){
                        TotalAmount=Balance-Transfer;
                        console.log(`Transfer Amount: ${Transfer}rs`);
                        console.log(`Remaining Amount: ${TotalAmount}rs`);
                    } else{
                        console.log("Not Enough Money");
                        console.log(`You want to Transfer ${Transfer}rs but Your balance is ${Balance}rs only`);
                    }
                } else{
                    window.alert("Account Number can't be in Character");
                }
            break;
            default:
                window.alert("Please Enter a Number between 1 to 4");
        }
    } else if(account==789){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 13431;
        switch(user){
            case 1:
                window.alert(`Your Balance is: ${Balance}rs`);
            break;
            case 2:
                let Withdraw = parseInt(prompt("Enter Withdraw Amount (Available: Rs 100, Rs 500, Rs 200): "));
                if(Withdraw>0){
                    if(Balance>=Withdraw){
                        if(Withdraw%100==0){
                            TotalAmount=Balance-Withdraw;
                            console.log(`Withdrawal Amount: ${Withdraw}rs`);
                            console.log(`Remaining Amount: ${TotalAmount}rs`);
                        } else if(Withdraw%100!=0){
                            window.alert("Only 100, 500, 200 notes are available");
                        } else{
                            window.alert("Invalid Amount");
                        }
                    } else if(Withdraw>Balance){
                        console.log("Not Enough Money");
                        console.log(`You want to Withdraw ${Withdraw}rs but Your balance is ${Balance}rs only`);
                    } else{
                        window.alert("Invalid Amount");
                    }
                } else if(Withdraw==0){
                    window.alert("Withdrawal Amount can't be Zero");
                } else if(Withdraw<0){
                    window.alert("Withdrawal Amount can't be Negative");
                } else{
                    window.alert("Invalid Amount, Please enter a numeric value");
                }
            break;
            case 3:
                let Deposite = parseInt(prompt("Enter Deposite Amount: "));
                if(Deposite>0){
                    TotalAmount=Balance+Deposite;
                    console.log(`Deposite Amount: ${Deposite}rs`);
                    console.log(`Total Amount: ${TotalAmount}rs`);
                    }else if(Deposite==0){
                        window.alert("Deposite Amount can't be Zero");
                    } else if(Deposite<0){
                        window.alert("Deposite Amount can't be Negative");
                    } else{
                        window.alert("Invalid Amount, Please enter a numeric value");
                }
            break;
            case 4:
                let TransferAccount = prompt("Enter A/C to transfer: ");
                if(TransferAccount==0){
                    window.alert("Account Number can't be Zero");
                } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                    let Transfer = parseInt(prompt("Enter Transfer Amount: "));
                    if(Balance>=Transfer){
                        TotalAmount=Balance-Transfer;
                        console.log(`Transfer Amount: ${Transfer}rs`);
                        console.log(`Remaining Amount: ${TotalAmount}rs`);
                    } else{
                        console.log("Not Enough Money");
                        console.log(`You want to Transfer ${Transfer}rs but Your balance is ${Balance}rs only`);
                    }
                } else{
                    window.alert("Account Number can't be in Character");
                }
            break;
            default:
                window.alert("Please Enter a Number between 1 to 4");
        }
    } else {
        window.alert("Invalid Account Number");
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
                window.alert("Thankyou for submitting your details, your account will be created soon");
            } else if(DL=="No"||DL=="no"||DL=="NO"){
                window.alert("Sorry, You can't create bank account. Due to you don't have Driving License");
            } else{
                window.alert("Invalid Input of Driving License");
            }
        } else if(age<18){
            window.alert("Sorry, You can't create bank account. Due to you are minor");
        } else{
            window.alert("Invalid Input of Age");
        }
    } else if(user==2){
        window.alert("Visit Again")
    } else{
        window.alert("Please Enter a Number between 1 to 2");
    }
} else{
    window.alert("Please select Yes or No");
}