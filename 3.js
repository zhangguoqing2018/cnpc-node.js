
const MoneytoCNY = (Style,Num) => {
    if(Num > 0){
        switch(Style) {
            case 'USD':
                console.log('美元(' + Style + ') 数额('+ Num +') Change into 人民币CNY Equal '+ (Num / 6.3211).toFixed(2));
                break;
            case 'JPY':
                console.log(`日元(${Style}) 数额(${Num}) Change into 人民币CNY Equal ${(Num / 0.0594).toFixed(2)}`);
                break;
            case 'EUR':
                console.log('欧元(' + Style + ') 数额('+ Num +') Change into 人民币CNY Equal '+ (Num / 7.7950).toFixed(2));
                break;
            case 'RUB':
                console.log(`卢布(${Style}) 数额(${Num}) Change into 人民币CNY Equal ${(Num / 0.1117).toFixed(2)}`);
                break;
            case 'CHF':
                console.log('法郎(' + Style + ') 数额('+ Num +') Change into 人民币CNY Equal '+ (Num / 6.6181).toFixed(2));
                break;
            default:
                console.log('请检查录入的货币类型是否正确！！');
                break;
        }
    }else{
        console.log('请检查录入的数据是否正确！！');
    }
}

//输入货币类型和数值
const Style = 'USD';
const Num = 50;

MoneytoCNY(Style,Num);
