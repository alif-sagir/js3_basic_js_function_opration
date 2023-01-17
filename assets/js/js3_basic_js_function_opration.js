let deposit_tk = 0.00;

function Credit_card(deposit_money=0,withdraw_money=0) {
    let calculation = ((deposit_money) - withdraw_money);
    return calculation;
}

deposit_tk = Credit_card(deposit_tk,0);
console.log("Current Amount " + deposit_tk);

deposit_tk = Credit_card(deposit_tk+100);
console.log("Deposit Amount = 100 \nCurrent Amount " + deposit_tk);

deposit_tk = Credit_card(deposit_tk+100);
console.log("Deposit Amount = 100 \nCurrent Amount " + deposit_tk);

deposit_tk = Credit_card(deposit_tk+100);
console.log("Deposit Amount = 100 \nCurrent Amount " + deposit_tk);

deposit_tk = Credit_card(deposit_tk+100);
console.log("Deposit Amount = 100 \nCurrent Amount " + deposit_tk);

deposit_tk = Credit_card(deposit_tk+100);
console.log("Deposit Amount = 100 \nCurrent Amount " + deposit_tk);

deposit_tk = Credit_card(deposit_tk,500);
console.log("Withdraw Amount = 500 \nCurrent Amount " + deposit_tk);
