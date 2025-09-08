let cont=Array.from(document.querySelectorAll(".button"))
console.log(cont);
let a="";
let b;
let c=0;
let d;

let result=[]



cont.forEach(element => {
    console.log(element);

    

        

            element.addEventListener("click",e=>{
                let text=element.innerHTML                

                if((text==="+" || text==="-" || text==="/" || text==="*" )&& (a!=="+" && a!=="-" && a!=="/" && a!=="*")){
                    console.log('111111');
                    

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

