//美元转人民币
const USDtoCNY = (USD) => {
    const num = USD * 6.33;
    console.log(`USD美元(${USD}) Change into CNY人民币 Equal ${num.toFixed(2)}`);
}
//输入美元
const USD = 50;
USDtoCNY(USD);


//人民币转美元
const CNYtoUSD = (CNY) => {
    const num = CNY / 6.33;
    console.log('CNY人民币(' + CNY + ') Change into USD美元 Equal ' + num.toFixed(2));
}

//输入人民币
const CNY = 50;
CNYtoUSD(CNY);

