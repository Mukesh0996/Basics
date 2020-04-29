class Calculator
{
    constructor(a,b)
    {
        this.a = a;
        this.b =b
    }
    display()
    {
        console.log("The numbers are: ", this.a," and",this.b);
    }
}
class addition extends Calculator
{
    findSum()
    {
        return this.a + this.b;
    }
}
class subtract extends addition
{
    findDifference()
    {
        return this.a - this.b;
    }
}
class multiply extends Calculator
{
    findproduct()
    {
        return this.a * this.b;
    }
}
class division extends Calculator
{
    divide()
    {
        return this.a/this.b;
    }
}
class modulo extends Calculator
{
    findModulo()
    {
        return this.a % this.b;
    }
}
class findPower extends Calculator
{
    power_calculate()
    {
        return Math.pow(this.a, this.b);
    }
}
class squareRoot extends Calculator
{
    calculate_squareroot()
    {
        return Math.sqrt(this.a)
    }
}
class tangent extends Calculator
{
    calculate_tangent()
    {
        return Math.tan(this.a);
    }
}
var sel = String(prompt("Enter 'a' for Addition \n Enter 'b' for Subtraction \n Enter 'c' for Multiplication \n Enter 'd' for division \n Enter 'e' to find modulus \n Enter 'f' to find the power of a numbers \n Enter 'g' to fing the tangent"));
var firstNum = Number(prompt("Enter the first num"));
var secondNum = Number(prompt("Enter the second num"));


switch (sel)
{
    case "a":
        var add = new addition(firstNum, secondNum);
        add.display();
        console.log("The sum is:", add.findSum());
        break;
    case "b":
        var sub = new subtract(firstNum, secondNum);
        sub.display();
        console.log("The difference is", sub.findDifference());
        break;
    case "c":  
            var mul = new multiply(firstNum,secondNum);
            mul.display();
            console.log("The product is:", mul.findproduct());
            break;
    case "d":
            var div = new division(firstNum, secondNum);  
            div.display();
            console.log(div.divide()); 
            break; 
    case "e":
            var mod = new modulo(firstNum, secondNum);
            mod.display();
            console.log(mod.findModulo());
            break; 
    case "f":
            var pow = new findPower(firstNum,secondNum);
            pow.display();
            console.log(pow.power_calculate());
            break; 
    case "g":
            var tane = new tangent(firstNum);
            tane.display();
            console.log(tane.calculate_tangent());
            break;                        
};