# CALCULATOR_made-by-me
<!-- NAME:ARCHITA DAS -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculate</title>
    <style>
        body{
            text-align: center;
            background-color: rgb(70, 74, 72);
        }
        #container{
            height: 40%;
            width: 30%;
            background-color: rgb(12, 12, 13);
            padding: 10px;
            text-align: center;
            display: inline-block;
            border: 10px solid rgb(186, 220, 133);
            }
         input{
                padding: 12px 12px;
                margin: 0;
            }
        #container div{
            padding: 10px;
            text-align: center;
        }
        button{
            height: 20%;
            width: 10%;
            padding-top: 10px;
            padding-bottom: 10px;
           display: inline-block;
           border-radius: 60px 60px;   
         
           
        }

    </style>
</head>
<body>
  
    <div id="container">
        <div>
        <input type="text" placeholder="Enter the number">
      </div>
    <div>
        <button class="box">1</button>
        <button class="box">2</button>
        <button class="box">3</button>
        <button class="box">C</button>
    </div>
    <div>
        <button class="box">4</button>
        <button class="box">5</button>
        <button class="box">6</button>
        <button class="box">+</button>
    </div>
    <div>
        <button class="box">7</button>
        <button class="box">8</button>
        <button class="box">9</button>
        <button class="box">-</button>
    </div>
    <div>
        <button class="box">.</button>
        <button class="box">/</button>
        <button class="box">*</button>
        <button class="box">=</button>
    </div>
    </div>
   
    <script>
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
    </script>
</body>
</html>
