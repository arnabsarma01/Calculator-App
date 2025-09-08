let cont=Array.from(document.querySelectorAll(".button"))
console.log(cont);
let a="";
let b;
let c=0;
let d;

let result=[]


// let exp=["225","+","14","-","10"];
// let result=eval(exp.join(""))
// console.log(result);

// let expression = ["225","+","15","-","10"];
// result = eval(expression.join("")); // "225+15-10"
// console.log(result); // Output: 230


cont.forEach(element => {
    console.log(element);

    // let text=element.innerHTML

    // console.log(text);
    

        

            element.addEventListener("click",e=>{
                let text=element.innerHTML                

                if((text==="+" || text==="-" || text==="/" || text==="*" )&& (a!=="+" && a!=="-" && a!=="/" && a!=="*")){
                    console.log('111111');
                    

                    // console.log(a +'is not that');
                    

                    console.log("Here");
                    result.push(a)
                    a=element.innerHTML;

                    console.log(" here "+a);
                    

                    result.push(a)
    
                    document.querySelector(".screen").innerHTML=a
                }
                else if((a==="+" || a==="-" || a==="/" || a==="*" ) && (text!=="+" && text!=="-" && text!=="/" && text!=="*")){
                    console.log('22222');


                    a=element.innerHTML;

                    console.log(a);
                    document.querySelector(".screen").innerHTML=a
                }
                else if((a==="+" || a==="-" || a==="/" || a==="*" ) && (text==="+" || text==="-" || text==="/" || text==="*")){
                    console.log('333333');

                    a=element.innerHTML;
                    console.log("Here 2");

                    
                    
                    result.pop();
                    result.push(a)
                    console.log(result);
                    

                    document.querySelector(".screen").innerHTML=a
                }
                else if(text==="="){

                    console.log('444444');

                    d=parseInt(a)
                    console.log('d '+d);
                    result.push(a)

                    console.log(result);
                    
                    
                    let ans=eval(result.join(""))
                    a=ans
                    console.log(ans);
                    result=[]

                    console.log(result);
                    


                    document.querySelector(".screen").innerHTML=ans

                    console.log(document.querySelector(".main").getElementsByTagName("div"));
                    
                    // document.querySelector(".main").getElementsByTagName("div")[0].innerHTML=document.querySelector(".main").getElementsByTagName("div")[0].innerHTML+" Good Work Try Again"
                }

                else if(text==='C'){
                    console.log('555555');
                    
                    
                    a=""
                    result=[]
                    console.log(a);
                    
                    document.querySelector(".screen").innerHTML=""

                }

                else{
                    console.log('666666');

                    a=a+element.innerHTML;
                    console.log(a);
                    document.querySelector(".screen").innerHTML=a
                }
            })

    
});

