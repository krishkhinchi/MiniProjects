//const prompt = require("prompt-sync")();
window.alert("Welcome to Krish Bankz");
var lang=prompt("Select language: 1)English, 2)Hindi, 3)Gujarati");

if(lang==1||lang=="English"||lang=="english"||lang=="ENGLISH"){
var TotalAmount;
var checkbank=prompt("Do you have a Bank Account? (YES/NO): ");
if(checkbank=="yes"||checkbank=="YES"||checkbank=="Yes"){
    var account=parseInt(prompt("Enter your Account Number: "));
    if(account==123){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 25590;
        switch(user){
            case 1:
                window.alert(`Your Balance is: ${Balance}₹`);
            break;
            case 2:
                let Withdraw = parseInt(prompt("Enter Withdraw Amount (Available: ₹ 100, 500, 200): "));
                if(Withdraw>0){
                    if(Balance>=Withdraw){
                        if(Withdraw%100==0){
                            TotalAmount=Balance-Withdraw;
                            console.log(`Withdrawal Amount: ${Withdraw}₹`);
                            console.log(`Remaining Amount: ${TotalAmount}₹`);
                        } else if(Withdraw%100!=0){
                            window.alert("Only ₹ 100, 500, 200 notes are available");
                        } else{
                            window.alert("Invalid Amount");
                        }
                    } else if(Withdraw>Balance){
                        console.log("Not Enough Money");
                        console.log(`You want to Withdraw ${Withdraw}₹ but Your balance is ${Balance}₹ only`);
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
                console.log(`Deposite Amount: ${Deposite}₹`);
                console.log(`Total Amount: ${TotalAmount}₹`);
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
                        console.log(`Transfer Amount: ${Transfer}₹`);
                        console.log(`Remaining Amount: ${TotalAmount}₹`);
                    } else{
                        console.log("Not Enough Money");
                        console.log(`You want to Transfer ${Transfer}₹ but Your balance is ${Balance}₹ only`);
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
                window.alert(`Your Balance is: ${Balance}₹`);
            break;
            case 2:
                let Withdraw = parseInt(prompt("Enter Withdraw Amount (Available: ₹ 100, 500, 200): "));
                if(Withdraw>0){
                    if(Balance>=Withdraw){
                        if(Withdraw%100==0){
                            TotalAmount=Balance-Withdraw;
                            console.log(`Withdrawal Amount: ${Withdraw}₹`);
                            console.log(`Remaining Amount: ${TotalAmount}₹`);
                        } else if(Withdraw%100!=0){
                            window.alert("Only ₹ 100, 500, 200 notes are available");
                        } else{
                            window.alert("Invalid Amount");
                        }
                    } else if(Withdraw>Balance){
                        console.log("Not Enough Money");
                        console.log(`You want to Withdraw ${Withdraw}₹ but Your balance is ${Balance}₹ only`);
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
                console.log(`Deposite Amount: ${Deposite}₹`);
                console.log(`Total Amount: ${TotalAmount}₹`);
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
                        console.log(`Transfer Amount: ${Transfer}₹`);
                        console.log(`Remaining Amount: ${TotalAmount}₹`);
                    } else{
                        console.log("Not Enough Money");
                        console.log(`You want to Transfer ${Transfer}₹ but Your balance is ${Balance}₹ only`);
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
                window.alert(`Your Balance is: ${Balance}₹`);
            break;
            case 2:
                let Withdraw = parseInt(prompt("Enter Withdraw Amount (Available: ₹ 100, 500, 200): "));
                if(Withdraw>0){
                    if(Balance>=Withdraw){
                        if(Withdraw%100==0){
                            TotalAmount=Balance-Withdraw;
                            console.log(`Withdrawal Amount: ${Withdraw}₹`);
                            console.log(`Remaining Amount: ${TotalAmount}₹`);
                        } else if(Withdraw%100!=0){
                            window.alert("Only ₹ 100, 500, 200 notes are available");
                        } else{
                            window.alert("Invalid Amount");
                        }
                    } else if(Withdraw>Balance){
                        console.log("Not Enough Money");
                        console.log(`You want to Withdraw ${Withdraw}₹ but Your balance is ${Balance}₹ only`);
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
                console.log(`Deposite Amount: ${Deposite}₹`);
                console.log(`Total Amount: ${TotalAmount}₹`);
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
                        console.log(`Transfer Amount: ${Transfer}₹`);
                        console.log(`Remaining Amount: ${TotalAmount}₹`);
                    } else{
                        console.log("Not Enough Money");
                        console.log(`You want to Transfer ${Transfer}₹ but Your balance is ${Balance}₹ only`);
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

} else if(lang==2||lang=="Hindi"||lang=="hindi"||lang=="HINDI"){
    var TotalAmount;
    var checkbank=prompt("क्या आपके पास बैंक खाता है? (हां, नहीं): ");
    if(checkbank=="yes"||checkbank=="YES"||checkbank=="Yes"||checkbank=="हां"){
        var account=parseInt(prompt("अपना खाता नंबर दर्ज करें: "));
        if(account==123||account=="१२३"){
            let user = parseInt(prompt("1:शेष राशि जांचें, 2:निकासी, 3:जमा, 4:स्थानांतरण दर्ज करें:"));
            let Balance = 25590;
            switch(user){
                case 1:
                    window.alert(`आपका बैलेंस है: ${Balance}₹`);
                break;
                case 2:
                    let Withdraw = parseInt(prompt("निकासी राशि दर्ज करें (उपलब्ध: ₹ १००, ५००, २००): "));
                    if(Withdraw>0){
                        if(Balance>=Withdraw){
                            if(Withdraw%100==0){
                                TotalAmount=Balance-Withdraw;
                                console.log(`निकासी राशि: ${Withdraw}₹`);
                                console.log(`बाकी अमाउंट: ${TotalAmount}₹`);
                            } else if(Withdraw%100!=0){
                                window.alert("केवल ₹१००, ५००, २०० के नोट उपलब्ध हैं");
                            } else{
                                window.alert("अमान्य राशि");
                            }
                        } else if(Withdraw>Balance){
                            console.log("पर्याप्त पैसा नहीं हैं");
                            console.log(`आप निकासी लेना चाहते हैं ${Withdraw}₹ लेकिन आपका शेष है ${Balance}₹ है केवल`);
                        } else{
                            window.alert("अमान्य राशि");
                        }
                    } else if(Withdraw==0){
                        window.alert("निकासी राशि शून्य नहीं हो सकती");
                    } else if(Withdraw<0){
                        window.alert("निकासी राशि ऋणात्मक नहीं हो सकती");
                    } else{
                        window.alert("अमान्य राशि, कृपया एक संख्यात्मक मान दर्ज करें");
                    }
                break;
                case 3:
                    let Deposite = parseInt(prompt("जमा राशि दर्ज करें: "));
                    if(Deposite>0){
                    TotalAmount=Balance+Deposite;
                    console.log(`जमा राशि: ${Deposite}₹`);
                    console.log(`कुल राशि: ${TotalAmount}₹`);
                    }else if(Deposite==0){
                        window.alert("जमा राशि शून्य नहीं हो सकती");
                    } else if(Deposite<0){
                        window.alert("जमा राशि ऋणात्मक नहीं हो सकती");
                    } else{
                        window.alert("अमान्य राशि, कृपया एक संख्यात्मक मान दर्ज करें");
                    }
                break;
                case 4:
                    let TransferAccount = prompt("स्थानांतरण खाता दर्ज करें: ");
                    if(TransferAccount==0){
                        window.alert("खाता संख्या शून्य नहीं हो सकती");
                    } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                        let Transfer = parseInt(prompt("स्थानांतरण राशि दर्ज करें: "));
                        if(Balance>=Transfer){
                            TotalAmount=Balance-Transfer;
                            console.log(`स्थानांतरण राशि: ${Transfer}₹`);
                            console.log(`बाकी अमाउंट: ${TotalAmount}₹`);
                        } else{
                            console.log("पर्याप्त पैसा नहीं हैं");
                            console.log(`आप स्थानांतरण करना चाहते हैं ${Transfer}₹ लेकिन आपका संतुलन ${Balance}₹ है केवल`);
                        }
                    } else{
                        window.alert("खाता संख्या वर्ण में नहीं हो सकती");
                    }
                break;
                default:
                    window.alert("कृपया १ से ४ के बीच कोई संख्या दर्ज करें");
            }
        } else if(account==456||account=="४५६"){
            let user = parseInt(prompt("1:शेष राशि जांचें, 2:निकासी, 3:जमा, 4:स्थानांतरण दर्ज करें:"));
            let Balance = 562900;
            switch(user){
                case 1:
                    window.alert(`आपका बैलेंस है: ${Balance}₹`);
                break;
                case 2:
                    let Withdraw = parseInt(prompt("निकासी राशि दर्ज करें (उपलब्ध: ₹ १००, ५००, २००): "));
                    if(Withdraw>0){
                        if(Balance>=Withdraw){
                            if(Withdraw%100==0){
                                TotalAmount=Balance-Withdraw;
                                console.log(`निकासी राशि: ${Withdraw}₹`);
                                console.log(`बाकी अमाउंट: ${TotalAmount}₹`);
                            } else if(Withdraw%100!=0){
                                window.alert("केवल ₹१००, ५००, २०० के नोट उपलब्ध हैं");
                            } else{
                                window.alert("अमान्य राशि");
                            }
                        } else if(Withdraw>Balance){
                            console.log("पर्याप्त पैसा नहीं हैं");
                            console.log(`आप निकासी लेना चाहते हैं ${Withdraw}₹ लेकिन आपका शेष है ${Balance}₹ है केवल`);
                        } else{
                            window.alert("अमान्य राशि");
                        }
                    } else if(Withdraw==0){
                        window.alert("निकासी राशि शून्य नहीं हो सकती");
                    } else if(Withdraw<0){
                        window.alert("निकासी राशि ऋणात्मक नहीं हो सकती");
                    } else{
                        window.alert("अमान्य राशि, कृपया एक संख्यात्मक मान दर्ज करें");
                    }
                break;
                case 3:
                    let Deposite = parseInt(prompt("जमा राशि दर्ज करें: "));
                    if(Deposite>0){
                    TotalAmount=Balance+Deposite;
                    console.log(`जमा राशि: ${Deposite}₹`);
                    console.log(`कुल राशि: ${TotalAmount}₹`);
                    }else if(Deposite==0){
                        window.alert("जमा राशि शून्य नहीं हो सकती");
                    } else if(Deposite<0){
                        window.alert("जमा राशि ऋणात्मक नहीं हो सकती");
                    } else{
                        window.alert("अमान्य राशि, कृपया एक संख्यात्मक मान दर्ज करें");
                    }
                break;
                case 4:
                    let TransferAccount = prompt("स्थानांतरण खाता दर्ज करें: ");
                    if(TransferAccount==0){
                        window.alert("खाता संख्या शून्य नहीं हो सकती");
                    } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                        let Transfer = parseInt(prompt("स्थानांतरण राशि दर्ज करें: "));
                        if(Balance>=Transfer){
                            TotalAmount=Balance-Transfer;
                            console.log(`स्थानांतरण राशि: ${Transfer}₹`);
                            console.log(`बाकी अमाउंट: ${TotalAmount}₹`);
                        } else{
                            console.log("पर्याप्त पैसा नहीं हैं");
                            console.log(`आप स्थानांतरण करना चाहते हैं ${Transfer}₹ लेकिन आपका संतुलन ${Balance}₹ है केवल`);
                        }
                    } else{
                        window.alert("खाता संख्या वर्ण में नहीं हो सकती");
                    }
                break;
                default:
                    window.alert("कृपया १ से ४ के बीच कोई संख्या दर्ज करें");
            }
        } else if(account==789||account=="७८९"){
            let user = parseInt(prompt("1:शेष राशि जांचें, 2:निकासी, 3:जमा, 4:स्थानांतरण दर्ज करें:"));
            let Balance = 13431;
            switch(user){
                case 1:
                    window.alert(`आपका बैलेंस है: ${Balance}₹`);
                break;
                case 2:
                    let Withdraw = parseInt(prompt("निकासी राशि दर्ज करें (उपलब्ध: ₹ १००, ५००, २००): "));
                    if(Withdraw>0){
                        if(Balance>=Withdraw){
                            if(Withdraw%100==0){
                                TotalAmount=Balance-Withdraw;
                                console.log(`निकासी राशि: ${Withdraw}₹`);
                                console.log(`बाकी अमाउंट: ${TotalAmount}₹`);
                            } else if(Withdraw%100!=0){
                                window.alert("केवल ₹१००, ५००, २०० के नोट उपलब्ध हैं");
                            } else{
                                window.alert("अमान्य राशि");
                            }
                        } else if(Withdraw>Balance){
                            console.log("पर्याप्त पैसा नहीं हैं");
                            console.log(`आप निकासी लेना चाहते हैं ${Withdraw}₹ लेकिन आपका शेष है ${Balance}₹ है केवल`);
                        } else{
                            window.alert("अमान्य राशि");
                        }
                    } else if(Withdraw==0){
                        window.alert("निकासी राशि शून्य नहीं हो सकती");
                    } else if(Withdraw<0){
                        window.alert("निकासी राशि ऋणात्मक नहीं हो सकती");
                    } else{
                        window.alert("अमान्य राशि, कृपया एक संख्यात्मक मान दर्ज करें");
                    }
                break;
                case 3:
                    let Deposite = parseInt(prompt("जमा राशि दर्ज करें: "));
                    if(Deposite>0){
                    TotalAmount=Balance+Deposite;
                    console.log(`जमा राशि: ${Deposite}₹`);
                    console.log(`कुल राशि: ${TotalAmount}₹`);
                    }else if(Deposite==0){
                        window.alert("जमा राशि शून्य नहीं हो सकती");
                    } else if(Deposite<0){
                        window.alert("जमा राशि ऋणात्मक नहीं हो सकती");
                    } else{
                        window.alert("अमान्य राशि, कृपया एक संख्यात्मक मान दर्ज करें");
                    }
                break;
                case 4:
                    let TransferAccount = prompt("स्थानांतरण खाता दर्ज करें: ");
                    if(TransferAccount==0){
                        window.alert("खाता संख्या शून्य नहीं हो सकती");
                    } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                        let Transfer = parseInt(prompt("स्थानांतरण राशि दर्ज करें: "));
                        if(Balance>=Transfer){
                            TotalAmount=Balance-Transfer;
                            console.log(`स्थानांतरण राशि: ${Transfer}₹`);
                            console.log(`बाकी अमाउंट: ${TotalAmount}₹`);
                        } else{
                            console.log("पर्याप्त पैसा नहीं हैं");
                            console.log(`आप स्थानांतरण करना चाहते हैं ${Transfer}₹ लेकिन आपका संतुलन ${Balance}₹ है केवल`);
                        }
                    } else{
                        window.alert("खाता संख्या वर्ण में नहीं हो सकती");
                    }
                break;
                default:
                    window.alert("कृपया १ से ४ के बीच कोई संख्या दर्ज करें");
            }
        } else {
            window.alert("Invalid Account Number");
        }
    } else if(checkbank=="no"||checkbank=="NO"||checkbank=="No"||checkbank=="नहीं"){
        let user = parseInt(prompt("दर्ज करें 1:खाता बनाएं, 2:बाहर निकलें :"));
        if(user==1){
            let name=prompt("अपना नाम दर्ज करें: ");
            let age=parseInt(prompt("अपनी आयु दर्ज करें: "));
            if(age>=18){
                let DL=prompt("आपके पास ड्राइविंग लाइसेंस है? (हां, नहीं)");
                if(DL=="Yes"||DL=="yes"||DL=="YES"){
                    let adhar=parseInt(prompt("अपना आधार नंबर दर्ज करें: "));
                    let pan=parseInt(prompt("अपना पैन नंबर दर्ज करें: "));
                    window.alert("अपना विवरण सबमिट करने के लिए धन्यवाद, आपका खाता जल्द ही बनाया जाएगा");
                } else if(DL=="No"||DL=="no"||DL=="NO"){
                    window.alert("क्षमा करें, आप बैंक खाता नहीं बना सकते. आपके पास ड्राइविंग लाइसेंस नहीं होने के कारण");
                } else{
                    window.alert("ड्राइविंग लाइसेंस का अमान्य इनपुट");
                }
            } else if(age<18){
                window.alert("क्षमा करें, आप बैंक खाता नहीं बना सकते. क्योंकि तुम नाबालिग हो");
            } else{
                window.alert("आयु का अमान्य इनपुट");
            }
        } else if(user==2){
            window.alert("पुनः पधारें")
        } else{
            window.alert("कृपया 1 से 2 के बीच कोई संख्या दर्ज करें");
        }
    } else{
        window.alert("कृपया हाँ या नहीं चुनें");
    }
} else if(lang==3||lang=="Gujarati"||lang=="gujarati"||lang=="GUJARATI"){
    var TotalAmount;
    var checkbank=prompt("શું તમારી પાસે બેંક ખાતું છે? (હા/ના): ");
    if(checkbank=="yes"||checkbank=="YES"||checkbank=="Yes"||checkbank=="હા"){
        var account=parseInt(prompt("તમારો એકાઉન્ટ નંબર દાખલ કરો: "));
        if(account==123||account=="૧૨૩"){
            let user = parseInt(prompt("દાખલ કરો 1:બેલેન્સ તપાસો, 2:ઉપાડ, 3:જમા, 4:ટ્રાન્સફર :"));
            let Balance = 25590;
            switch(user){
                case 1:
                    window.alert(`તમારું બેલેન્સ છે: ${Balance}₹`);
                break;
                case 2:
                    let Withdraw = parseInt(prompt("ઉપાડની રકમ દાખલ કરો (ઉપલબ્ધ: ₹ 100, 500, 200): "));
                    if(Withdraw>0){
                        if(Balance>=Withdraw){
                            if(Withdraw%100==0){
                                TotalAmount=Balance-Withdraw;
                                console.log(`ઉપાડની રકમ: ${Withdraw}₹`);
                                console.log(`બાકીની રકમ: ${TotalAmount}₹`);
                            } else if(Withdraw%100!=0){
                                window.alert("માત્ર ₹100, 500, 200 ની નોટો ઉપલબ્ધ છે");
                            } else{
                                window.alert("અમાન્ય રકમ");
                            }
                        } else if(Withdraw>Balance){
                            console.log("પૂરતા પૈસા નથી");
                            console.log(`તમે ${Withdraw}₹ ઉપાડવા માંગો છો, પરંતુ તમારું બેલેન્સ છે ${Balance}₹ માત્ર`);
                        } else{
                            window.alert("અમાન્ય રકમ");
                        }
                    } else if(Withdraw==0){
                        window.alert("ઉપાડની રકમ શૂન્ય ન હોઈ શકે");
                    } else if(Withdraw<0){
                        window.alert("ઉપાડની રકમ નેગેટિવ ન હોઈ શકે");
                    } else{
                        window.alert("અમાન્ય રકમ, કૃપા કરીને સંખ્યાત્મક મૂલ્ય દાખલ કરો");
                    }
                break;
                case 3:
                    let Deposite = parseInt(prompt("ડિપોઝીટની રકમ દાખલ કરો: "));
                    if(Deposite>0){
                    TotalAmount=Balance+Deposite;
                    console.log(`જમા રકમ: ${Deposite}₹`);
                    console.log(`કુલ રકમ: ${TotalAmount}₹`);
                    }else if(Deposite==0){
                        window.alert("ડિપોઝીટની રકમ શૂન્ય ન હોઈ શકે");
                    } else if(Deposite<0){
                        window.alert("ડિપોઝીટની રકમ ઋણ હોઈ શકતી નથી");
                    } else{
                        window.alert("અમાન્ય રકમ, કૃપા કરીને સંખ્યાત્મક મૂલ્ય દાખલ કરો");
                    }
                break;
                case 4:
                    let TransferAccount = prompt("મોકલવા માટે A/C દાખલ કરો: ");
                    if(TransferAccount==0){
                        window.alert("એકાઉન્ટ નંબર શૂન્ય ન હોઈ શકે");
                    } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                        let Transfer = parseInt(prompt("ટ્રાન્સફર રકમ દાખલ કરો: "));
                        if(Balance>=Transfer){
                            TotalAmount=Balance-Transfer;
                            console.log(`ટ્રાન્સફર રકમ: ${Transfer}₹`);
                            console.log(`બાકીની રકમ: ${TotalAmount}₹`);
                        } else{
                            console.log("પૂરતા પૈસા નથી");
                            console.log(`તમે ${Transfer}₹ ટ્રાન્સફર કરવા માંગો છો, પરંતુ તમારું બેલેન્સ છે ${Balance}₹ માત્ર`);
                        }
                    } else{
                        window.alert("એકાઉન્ટ નંબર અક્ષરમાં ન હોઈ શકે");
                    }
                break;
                default:
                    window.alert("કૃપા કરીને 1 થી 4 ની વચ્ચેનો નંબર દાખલ કરો");
            }
        } else if(account==456){
            let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
            let Balance = 562900;
            switch(user){
                case 1:
                    window.alert(`Your Balance is: ${Balance}₹`);
                break;
                case 2:
                    let Withdraw = parseInt(prompt("Enter Withdraw Amount (Available: ₹ 100, 500, 200): "));
                    if(Withdraw>0){
                        if(Balance>=Withdraw){
                            if(Withdraw%100==0){
                                TotalAmount=Balance-Withdraw;
                                console.log(`Withdrawal Amount: ${Withdraw}₹`);
                                console.log(`Remaining Amount: ${TotalAmount}₹`);
                            } else if(Withdraw%100!=0){
                                window.alert("Only ₹ 100, 500, 200 notes are available");
                            } else{
                                window.alert("Invalid Amount");
                            }
                        } else if(Withdraw>Balance){
                            console.log("Not Enough Money");
                            console.log(`You want to Withdraw ${Withdraw}₹ but Your balance is ${Balance}₹ only`);
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
                    console.log(`Deposite Amount: ${Deposite}₹`);
                    console.log(`Total Amount: ${TotalAmount}₹`);
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
                            console.log(`Transfer Amount: ${Transfer}₹`);
                            console.log(`Remaining Amount: ${TotalAmount}₹`);
                        } else{
                            console.log("Not Enough Money");
                            console.log(`You want to Transfer ${Transfer}₹ but Your balance is ${Balance}₹ only`);
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
                    window.alert(`Your Balance is: ${Balance}₹`);
                break;
                case 2:
                    let Withdraw = parseInt(prompt("Enter Withdraw Amount (Available: ₹ 100, 500, 200): "));
                    if(Withdraw>0){
                        if(Balance>=Withdraw){
                            if(Withdraw%100==0){
                                TotalAmount=Balance-Withdraw;
                                console.log(`Withdrawal Amount: ${Withdraw}₹`);
                                console.log(`Remaining Amount: ${TotalAmount}₹`);
                            } else if(Withdraw%100!=0){
                                window.alert("Only ₹ 100, 500, 200 notes are available");
                            } else{
                                window.alert("Invalid Amount");
                            }
                        } else if(Withdraw>Balance){
                            console.log("Not Enough Money");
                            console.log(`You want to Withdraw ${Withdraw}₹ but Your balance is ${Balance}₹ only`);
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
                    console.log(`Deposite Amount: ${Deposite}₹`);
                    console.log(`Total Amount: ${TotalAmount}₹`);
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
                            console.log(`Transfer Amount: ${Transfer}₹`);
                            console.log(`Remaining Amount: ${TotalAmount}₹`);
                        } else{
                            console.log("Not Enough Money");
                            console.log(`You want to Transfer ${Transfer}₹ but Your balance is ${Balance}₹ only`);
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
}