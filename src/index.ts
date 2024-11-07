function add(str:string):number{
    let sum:number = 0;
    let delimiter:string = ",";
    str.split(delimiter).forEach(element => {
        sum += Number(element);
    });
    return sum;
}
export default add;