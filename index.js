
const synth = window.speechSynthesis;
// what os javascript?
// its a scripting /programing language and it is dynamically typed and it is alson loosely packed programming problem
// java is not equal to javasript 
// compiler based : example - java ,c,c++,java
// interprator :example-translator = python,converted into c++ and then is read -
// they all are different things 
// javascript is both interprator and compiler based language,it is both easy to code language as well as very fast 
//  name converted from livescript to javascript
// scripting based language  means manipulation
// data types ,lops data functions ,data declatrationdatac dedlarations
// 90% of websites ae using javascript

// functions: block of code which can be executed upon calling or incovating
flag = true
function press(key) {
   
      
        if (key != 'AC' && key != '=' && key != 'bracket') {
         text  = new SpeechSynthesisUtterance(key);
         document.getElementById('result').value += key
    }


    else if (key == '=') {
        document.getElementById('result').value = eval(document.getElementById('result').value)
        text  = new SpeechSynthesisUtterance(document.getElementById('result').value);
    }

    else if (key == 'bracket') {
        if (flag) {
            document.getElementById('result').value += "("
            flag = false

        }
        else {
            document.getElementById('result').value += ")"
            flag = true
        }
      
    


    }
    else{
         document.getElementById('result').value = ""
        
        }synth.speak(text);
   

    
}





// DOM: document object model
// data types : number ,string , boolean , object and undefined ,bigint , null
// arr = [12,32,45,76.987,"javascript","python"]

//  

