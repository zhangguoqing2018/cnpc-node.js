
const Result = (Num) => {
    switch(Num) {
        case 1:
            console.log(`Number:${Num}--Answer:D`);
            break;
        case 2:
            console.log(`Number:${Num}--Answer:C`);
            break;
        case 3:
            console.log(`Number:${Num}--Answer:D`);
            break;
        case 4:
            console.log(`Number:${Num}--Answer:C`);
            break;
        case 5:
            console.log(`Number:${Num}--Answer:B`);
            break;
        case 6:
            console.log(`Number:${Num}--Answer:B`);
            break;     
        case 7:
            console.log(`Number:${Num}--Answer:C`);
            break;
        case 8:
            console.log(`Number:${Num}--Answer:B`);
            break;
        case 9:
            console.log(`Number:${Num}--Answer:C`);
            break;
        case 10:
            console.log(`Number:${Num}--Answer:D`);
            break;
        case 11:
            console.log(`Number:${Num}--Answer:B`);
            break;
        case 12:
            console.log(`Number:${Num}--Answer:A`);
            break; 
        default:
            console.log('请检查录入的题号是否正确！！');
            break;      
    }
}

//输入选择题题号
const Num = 12;
Result(Num);
//答案
//DCDCB  BCBCD  BA
