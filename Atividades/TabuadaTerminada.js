var i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function result(){
        var resultado = i * n;
        if (resultado % 2 === 0) { 
            return "Par"              
        } else {
            return "ímpar" 
        }
        }
        
   for (var i = 1; i <= 10; i++) { 
        document.write("<p>=== TABUADA DO " + i + "===</p>");
    for (var n = 0; n <= 10; n++) { 
         document.write(i + "x" + n + " = " + (i * n) + " - "  + (result()) + "<br>");
}
}