/*function gcd(a,b){
    if(b === 0){
        return a;
    }
    else{
        let min = Math.min(a,b);
        let max = Math.max(a,b);
        var r = max % min;
        return gcd(min,r);
    }
}

console.log(gcd(5,15));


function distribute(n, k, i){
    let temp = n;
    if(k>n){
        let t = k%n;
        if(t>n){
            return (t-n);
        }
        else{
            return t;
        }
    }
    else{
        return i+k-1;

    }
}

console.log(distribute(3,5,1));

let x={
    a:1,
    b:2
};

const Arr = Object.values(x);




let x="Some";
let arr = x.split("");
let reversedarr = arr.reverse();
console.log(reversedarr.join(""));



const obj ={
    a:1,
    b:2,
    getA(){
        console.log(this.a);
       return this;
    },
    getB(){
        console.log(this.b);
    }
}

obj.getA().getB();


console.dir(obj);


Array.prototype.print = () =>{
    let str = '';
    this.foreach(el => str+= `${el},`);
}

var arr =[1,2];

arr.print();

*/