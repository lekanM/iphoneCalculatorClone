const inputsBtn=document.querySelector('#inputs');
const outputText=document.getElementById('text-area');

const datas={
    newEntry:null,
    operator:'',
    output:'',
    globalEntry:'',
}

//functions
const calculatorHandler=(e)=>{
    if (e.target.nodeName==='SPAN') {
       const button=e.target;
        if(button.innerText!=="="){
            if(button.innerText==='+'||
            button.innerText==='-'||
            button.innerText==='*'||
            button.innerText==='/'
            ){
            datas.operator=button.innerText;
            datas.operatorSet;
            datas.output=''
           
            
            } 
             if(button.innerText!=='+'&&
            button.innerText!=='-'&&
            button.innerText!=='*'&&
            button.innerText!=='/'&&
            button.innerText!=='AC'&&
            button.innerText!=='+/-'){
            datas.newEntry=button.innerText;
            datas.output+=datas.newEntry
            outputText.innerText=datas.output;
            datas.globalEntry +=datas.operator+datas.newEntry;
            datas.operator=''

            } 
          
         
            console.log(datas);

        }
        if (button.innerText==="=") {
            //datas.globalEntry +=datas.newEntry;
           console.log(eval(datas.globalEntry));
            outputText.innerText=eval(datas.globalEntry)
            datas.globalEntry=`${outputText.innerText}`
            datas.output=''
        }
        
        if(button.innerText==='AC'){
            datas.output='';
            datas.globalEntry='';
            datas.operator=''

            outputText.innerText='0'
        }
        if(button.innerText==='+/-'){
            outputText.innerText=Math.abs(datas.globalEntry)
        }
    }
}

inputsBtn.addEventListener('click',calculatorHandler );
