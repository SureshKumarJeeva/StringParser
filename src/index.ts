function add(str:string):number{
    let sum:number = 0;
    let delimiter:string = ",";
    str.split(delimiter).forEach(items => {
        console.log(items);
        let arrayItems:Array<string> = items.split("\n");
        arrayItems.forEach(item =>{
            console.log(item);
            sum += Number(item);
        });
    });
    return sum;
}
export default add;