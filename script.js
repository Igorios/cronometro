
(function () {

    var segundo = 00;
    var decimo = 00;
    var addSegundo = document.querySelector("#segundo");
    var addDecimo = document.querySelector("#decimo");
    var btnStart = document.querySelector("#start");
    var btnStop = document.querySelector("#stop");
    var btnReset = document.querySelector("#reset");
    var Intervalo;
    
    btnStart.addEventListener('click', () => {
      clearInterval(Intervalo);
      Intervalo = setInterval(comecar, 10);
    });
  
    btnStop.addEventListener('click', () => {
      clearInterval(Intervalo);
    });
  
    btnReset.addEventListener('click', () => {
      clearInterval(Intervalo);
      segundo = "00";
      decimo = "00";
      addSegundo.innerHTML = segundo;
      addDecimo.innerHTML = decimo;
  
    });
  
    function comecar () {
      decimo++;
  
      if (decimo <= 9) {
        addDecimo.innerHTML = "0" + decimo;
      }
  
      if (decimo > 9) {
        addDecimo.innerHTML = decimo;
      }
  
      if (decimo > 99) {
        segundo++;
        addSegundo.innerHTML = "0" + segundo;
        decimo = 0;
        addDecimo.innerHTML = "0" + 0;
      }
  
      if (segundo > 9) {
        addSegundo.innerHTML = segundo;
      }
  
    }
  
}())