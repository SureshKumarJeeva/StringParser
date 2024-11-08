/*
* Function to find the sum of numbers in a string delimited by special char
* @param str: string that contains number demilited by comma or special char
* return : number showing the sum of all numbers in the string
*/
function add(numbers:string):number{
    let sum:number = 0;
    let delimiter:string = ",";
    let negativeNumbers:Array<Number> = Array();
    let negative:boolean = false;

    //condition to check if string contains delimiter char and extract it, if so
    if(numbers.substring(0,2) == "//"){
        delimiter = numbers.substring(2,numbers.indexOf("\n"));
        numbers = numbers.substring(numbers.indexOf("\n") + 1);
    }
    //parse through numbers in provided string and find the sum
    numbers.split(delimiter).forEach(items => {
        let arrayItems:Array<string> = items.split("\n");
        arrayItems.forEach(item =>{
            if(Number(item) < 0){
                negativeNumbers.push(Number(item));
                negative = true;
            }
            if(!negative)
                sum += Number(item);
        });
    });
    if(!negative){
        return sum;
    }else{
        //Throw error stating the negative numbers in the numbers string
        throw new Error("Negative numbers are not allowed:"+negativeNumbers.join(","));
    }
}
export default add;