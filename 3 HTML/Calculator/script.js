// Components
let display=document.getElementById("displayValue");
display.textContent="";
const allClearBtn=document.getElementsByClassName("allClear")[0];
const addBtn=document.getElementById("add");
const subBtn=document.getElementById("sub");
const divBtn=document.getElementById("div");
const mulBtn=document.getElementById("mul");
const delBtn=document.getElementById("del");
const equalBtn=document.getElementById("equals");
const numberBtn=document.getElementsByClassName("number");

// Helper Components
let num1=0,num2=0,total=0;
let operationType="",temp="";
let num1Empty=true;

// EventListeners
allClearBtn.addEventListener("click",()=>{
    display.innerText="";
    total=0;
    num1=0;
    num2=0;
    operationType="";
    temp="";
    num1Empty=true;
});

for(let i=0;i<numberBtn.length;i++){
    const button=numberBtn[i];
    button.addEventListener("click",()=>{
        temp+=button.innerHTML;
        // console.log(equation.length);
        display.innerText+=button.innerHTML;
    })
};

addBtn.addEventListener("click",()=>{
    concatOperation(addBtn);
});
subBtn.addEventListener("click",()=>{
    concatOperation(subBtn);
});
divBtn.addEventListener("click",()=>{
    concatOperation(divBtn);
});
mulBtn.addEventListener("click",()=>{
    concatOperation(mulBtn);
});
equalBtn.addEventListener("click",()=>{
    calculateEquation();
})


// Functions
function concatOperation(btn){
    if(display.innerText!=""){
        num1=Number(temp);
        total+=num1;
        num1Empty=false;
        operationType=btn.innerHTML;
        temp="";
        // console.log(equation.length);
        display.innerHTML+=btn.innerHTML;
    }
}

function calculateEquation(){
    if(display.innerText!="" && temp!=""){
        num2=Number(temp);
        temp="";
        if(operationType==="+"){
            total+=num2;
        }
        else if(operationType==="-"){
            total-=num2;
        }
        else if(operationType==="*"){
            total*=num2;
        }
        else if(operationType==="/"){
            total/=num2;
        }
        display.innerHTML=total;
        num2=0;
        operationType="";
    }
}

delBtn.addEventListener("click",()=>{
    if(display.innerHTML!=""){
        temp=temp.substring(0,temp.length-1);
        display.innerHTML=display.innerText.substring(0,display.innerText.length-1);
    }
})