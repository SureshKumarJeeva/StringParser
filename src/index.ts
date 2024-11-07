/*
* Function to find the sum of numbers in a string delimited by special char
* @param str: string that contains number demilited by comma or special char
* return : number showing the sum of all numbers in the string
*/
function add(str:string):number{
    let sum:number = 0;
    let delimiter:string = ",";
    //condition to check if string contains delimiter char and extract it, if so
    if(str.substring(0,2) == "//"){
        delimiter = str.substring(2,str.indexOf("\n"));
        str = str.substring(str.indexOf("\n") + 1);
    }
    //parse through numbers in provided string and find the sum
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