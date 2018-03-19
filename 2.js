
const MoneytoCNY = (Style,Num) => {
    if (Style === 'USD' && Num > 0){
        console.log('美元(' + Style + ') 数额('+ Num +') Change into 人民币CNY Equal '+ (Num / 6.3211).toFixed(2));
    }else if (Style === 'JPY' && Num > 0){
        console.log(`日元(${Style}) 数额(${Num}) Change into 人民币CNY Equal ${(Num / 0.0594).toFixed(2)}`);
    }else if (Style === 'EUR' && Num > 0){
        console.log('欧元(' + Style + ') 数额('+ Num +') Change into 人民币CNY Equal '+ (Num / 7.7950).toFixed(2));
    }else if (Style === 'RUB' && Num > 0){
        console.log(`卢布(${Style}) 数额(${Num}) Change into 人民币CNY Equal ${(Num / 0.1117).toFixed(2)}`);
    }else if (Style === 'CHF' && Num > 0){
        console.log('法郎(' + Style + ') 数额('+ Num +') Change into 人民币CNY Equal '+ (Num / 6.6181).toFixed(2));
    }else{
        console.log('请检查录入的货币类型和数据是否正确！！');
    }
};

//输入货币类型和数值
const Style = 'CHF';
const Num = 0;

MoneytoCNY(Style,Num);
