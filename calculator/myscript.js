let str="";
let buttonify = document.querySelectorAll(".box")
Array.from(buttonify).forEach((button)=>{
    button.addEventListener('click',(i)=>{
        if(i.target.innerHTML=='='){
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if(i.target.innerHTML=='C'){
            str = "";
            document.querySelector('input').value = str;
        }
        else{
            console.log(i.target);
            str = str + i.target.innerHTML;
            document.querySelector('input').value = str;
        }
    })
})