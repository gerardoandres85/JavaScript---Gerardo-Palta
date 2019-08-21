
var calculadora={
  init: function(){
  this.tamañosBotones()
  this.asignarValores()
  this.showDisplay()
  this.operaciones()
  var operacion;
  var valor1;
  var valor2;
  var resultado;
  },
  //***FUNCION TAMAÑO BOTONES***
  tamañosBotones: function(){
    document.getElementById('1').onmousedown=function(e){     
      document.getElementById('1').style = "transform : scale(0.9)";
    },
    document.getElementById('1').onmouseup=function (e){
      document.getElementById('1').style = "transform : scale(1)";
    },
    document.getElementById('2').onmousedown=function(e){     
      document.getElementById('2').style = "transform : scale(0.9)";
    },
    document.getElementById('2').onmouseup=function (e){
      document.getElementById('2').style = "transform : scale(1)";
    },
    document.getElementById('3').onmousedown=function(e){     
      document.getElementById('3').style = "transform : scale(0.9)";
    },
    document.getElementById('3').onmouseup=function (e){
      document.getElementById('3').style = "transform : scale(1)";
    },
    document.getElementById('4').onmousedown=function(e){     
      document.getElementById('4').style = "transform : scale(0.9)";
    },
    document.getElementById('4').onmouseup=function (e){
      document.getElementById('4').style = "transform : scale(1)";
    },
    document.getElementById('5').onmousedown=function(e){     
      document.getElementById('5').style = "transform : scale(0.9)";
    },
    document.getElementById('5').onmouseup=function (e){
      document.getElementById('5').style = "transform : scale(1)";
    },
    document.getElementById('6').onmousedown=function(e){     
      document.getElementById('6').style = "transform : scale(0.9)";
    },
    document.getElementById('6').onmouseup=function (e){
      document.getElementById('6').style = "transform : scale(1)";
    },
    document.getElementById('7').onmousedown=function(e){     
      document.getElementById('7').style = "transform : scale(0.9)";
    },
    document.getElementById('7').onmouseup=function (e){
      document.getElementById('7').style = "transform : scale(1)";
    },
    document.getElementById('8').onmousedown=function(e){     
      document.getElementById('8').style = "transform : scale(0.9)";
    },
    document.getElementById('8').onmouseup=function (e){
      document.getElementById('8').style = "transform : scale(1)";
    },
    document.getElementById('9').onmousedown=function(e){     
      document.getElementById('9').style = "transform : scale(0.9)";
    },
    document.getElementById('9').onmouseup=function (e){
      document.getElementById('9').style = "transform : scale(1)";
    },
    document.getElementById('0').onmousedown=function(e){     
      document.getElementById('0').style = "transform : scale(0.9)";
    },
    document.getElementById('0').onmouseup=function (e){
      document.getElementById('0').style = "transform : scale(1)";
    },
    document.getElementById('on').onmousedown=function(e){     
      document.getElementById('on').style = "transform : scale(0.9)";
    },
    document.getElementById('on').onmouseup=function (e){
      document.getElementById('on').style = "transform : scale(1)";
    },
    document.getElementById('sign').onmousedown=function(e){     
      document.getElementById('sign').style = "transform : scale(0.9)";
    },
    document.getElementById('sign').onmouseup=function (e){
      document.getElementById('sign').style = "transform : scale(1)";
    },
    document.getElementById('raiz').onmousedown=function(e){     
      document.getElementById('raiz').style = "transform : scale(0.9)";
    },
    document.getElementById('raiz').onmouseup=function (e){
      document.getElementById('raiz').style = "transform : scale(1)";
    },
    document.getElementById('dividido').onmousedown=function(e){     
      document.getElementById('dividido').style = "transform : scale(0.9)";
    },
    document.getElementById('dividido').onmouseup=function (e){
      document.getElementById('dividido').style = "transform : scale(1)";
    },
    document.getElementById('por').onmousedown=function(e){     
      document.getElementById('por').style = "transform : scale(0.9)";
    },
    document.getElementById('por').onmouseup=function (e){
      document.getElementById('por').style = "transform : scale(1)";
    },
    document.getElementById('menos').onmousedown=function(e){     
      document.getElementById('menos').style = "transform : scale(0.9)";
    },
    document.getElementById('menos').onmouseup=function (e){
      document.getElementById('menos').style = "transform : scale(1)";
    },
    document.getElementById('mas').onmousedown=function(e){     
      document.getElementById('mas').style = "transform : scale(0.9)";
    },
    document.getElementById('mas').onmouseup=function (e){
      document.getElementById('mas').style = "transform : scale(1)";
    },
    document.getElementById('igual').onmousedown=function(e){     
      document.getElementById('igual').style = "transform : scale(0.9)";
    },
    document.getElementById('igual').onmouseup=function (e){
      document.getElementById('igual').style = "transform : scale(1)";
    },
    document.getElementById('punto').onmousedown=function(e){     
      document.getElementById('punto').style = "transform : scale(0.9)";
    },
    document.getElementById('punto').onmouseup=function (e){
      document.getElementById('punto').style = "transform : scale(1)";
    }
  },
  //***FUNCION ASIGNAR VALORES A LOS BOTONES***
  asignarValores: function(){
    document.getElementById('1').value = "1";
    document.getElementById('2').value = "2";
    document.getElementById('3').value = "3";
    document.getElementById('4').value = "4";   
    document.getElementById('5').value = "5";
    document.getElementById('6').value = "6";   
    document.getElementById('7').value = "7";
    document.getElementById('8').value = "8";
    document.getElementById('9').value = "9";
    document.getElementById('0').value = "0";
    document.getElementById('punto').value = ".";
  },
  //***FUNCION MOSTRAR LOS NUMEROS EN DISPLAY***
  showDisplay: function(){
    document.getElementById('1').onclick = function(e){
      if(document.getElementById('display').innerHTML=="0"){
        document.getElementById('display').innerHTML="";
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('1').value;
      }else if(document.getElementById('display').innerHTML.length < 8){        
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('1').value;
      }        
    },
    document.getElementById('2').onclick = function(e){
      if(document.getElementById('display').innerHTML=="0"){
        document.getElementById('display').innerHTML="";
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('2').value;
      }else if(document.getElementById('display').innerHTML.length < 8){        
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('2').value;
      } 
    },
    document.getElementById('3').onclick = function(e){
      if(document.getElementById('display').innerHTML=="0"){
        document.getElementById('display').innerHTML="";
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('3').value;
      }else if(document.getElementById('display').innerHTML.length < 8){        
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('3').value;
      } 
    },
    document.getElementById('4').onclick = function(e){
      if(document.getElementById('display').innerHTML=="0"){
        document.getElementById('display').innerHTML="";
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('4').value;
      }else if(document.getElementById('display').innerHTML.length < 8){        
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('4').value;
      } 
    },
    document.getElementById('5').onclick = function(e){
      if(document.getElementById('display').innerHTML=="0"){
        document.getElementById('display').innerHTML="";
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('5').value;
      }else if(document.getElementById('display').innerHTML.length < 8){        
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('5').value;
      } 
    },
    document.getElementById('6').onclick = function(e){
      if(document.getElementById('display').innerHTML=="0"){
        document.getElementById('display').innerHTML="";
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('6').value;
      }else if(document.getElementById('display').innerHTML.length < 8){        
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('6').value;
      } 
    },
    document.getElementById('7').onclick = function(e){
      if(document.getElementById('display').innerHTML=="0"){
        document.getElementById('display').innerHTML="";
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('7').value;
      }else if(document.getElementById('display').innerHTML.length < 8){        
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('7').value;
      } 
    },
    document.getElementById('8').onclick = function(e){
      if(document.getElementById('display').innerHTML=="0"){
        document.getElementById('display').innerHTML="";
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('8').value;
      }else if(document.getElementById('display').innerHTML.length < 8){        
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('8').value;
      } 
    },
    document.getElementById('9').onclick = function(e){
      if(document.getElementById('display').innerHTML=="0"){
        document.getElementById('display').innerHTML="";
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('9').value;
      }else if(document.getElementById('display').innerHTML.length < 8){        
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('9').value;
      } 
    },
    document.getElementById('0').onclick = function(e){
      if(document.getElementById('display').innerHTML=="0"){
        document.getElementById('display').innerHTML="";
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('0').value;
      }else if(document.getElementById('display').innerHTML.length < 8){        
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + document.getElementById('0').value;
      } 
    },
    document.getElementById('on').onclick = function(e){
      document.getElementById('display').innerHTML=0;
      valor1 = "";
      valor2 = "";
      operacion = "";
      resultado= 0;
    },
    document.getElementById('punto').onclick = function(e){
      if(document.getElementById('display').innerHTML.includes(".")){
        //Do nothing
      }else{        
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + punto.value;
      } 
    },
    document.getElementById('sign').onclick = function(e){
      if(document.getElementById('display').innerHTML < 0){
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML * -1;
      }else{
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML * -1;
      }
    },
    document.getElementById('mas').onclick = function(e){
      if(document.getElementById('display').innerHTML != "0"){
        valor1 = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = "";
        operacion = "+";
      }
    },
    document.getElementById('menos').onclick = function(e){
      if(document.getElementById('display').innerHTML != "0"){
        valor1 = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = "";
        operacion = "-";
      }
    },
    document.getElementById('por').onclick = function(e){
      if(document.getElementById('display').innerHTML != "0"){
        valor1 = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = "";
        operacion = "*";
      }
    },
    document.getElementById('dividido').onclick = function(e){
      if(document.getElementById('display').innerHTML != "0"){
        valor1 = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = "";
        operacion = "/";
      }
    }
  },
  //***FUNCION OPERACIONES***
  operaciones: function(){
    document.getElementById('igual').onclick = function(e){
      if(operacion == "+"){
        valor2 = document.getElementById('display').innerHTML;
        resultado = parseFloat(valor1) + parseFloat(valor2);
    
      }else if(operacion == "-"){
        valor2 = document.getElementById('display').innerHTML;
        resultado = parseFloat(valor1) - parseFloat(valor2);
    
      }else if(operacion == "*"){
        valor2 = document.getElementById('display').innerHTML;
        resultado = parseFloat(valor1) * parseFloat(valor2);
        
      }else if(operacion == "/"){
        valor2 = document.getElementById('display').innerHTML;
        resultado = parseFloat(valor1) / parseFloat(valor2);
      }
    resultado = new String(resultado);
    document.getElementById('display').innerHTML = resultado.substr(0,8);
    }
  }
}
calculadora.init()