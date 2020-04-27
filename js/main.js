$(document).ready(function () {
  
  /* referenze */
  var box = $(".box");
  var randomApi = "https://flynn.boolean.careers/exercises/api/random/int";

 
  //al click sul box
  box.click(function() {
    //console.log("click");
    var singleBox = $(this);
    singleBox.removeClass("yellow green");
    
    //chiamata ajax api numero random
    $.ajax({
      url: randomApi,
      method: "GET",
      success: function (data) {
      
        var number = data.response;
        singleBox.text("");

        setTimeout(scriviNumero, 1700);

        if(number <= 5){
          singleBox.addClass("yellow");
        }else{
          singleBox.addClass("green");
        }

        
        /* funzione */
        function scriviNumero(){
          singleBox.text(number)
        };
        
      },
      error: function (){
        console.log("Errore chiamata API");
      }
    })//fine chiamata api

  })//fine click

});//Fine ready
