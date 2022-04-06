for (var i = 1; i <= 10; i++) { 
    document.write("<p>=== TABUADA DO " + i + "===</p>");
for (var n = 0; n <= 10; n++) { 
    var resultado = i * n; 
    var valorEhPar = ""; 
    if (resultado % 2 === 0) { 
        valorEhPar = "Par";               
    } else {
        valorEhPar = "Ímpar";  
    } 
     document.write(i + "x" + n + " = " + resultado + " - " + valorEhPar + "<br>");
}     
}