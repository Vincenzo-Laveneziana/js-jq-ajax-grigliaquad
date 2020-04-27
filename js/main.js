$(document).ready(function () {
  
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
        singleBox.text(number); 

        if(number <= 5){
    
          if(singleBox.hasClass("green")){
            singleBox.removeClass("green");
            singleBox.addClass("yellow" );
          } else{
            singleBox.addClass("yellow");
          }

        } else if(number > 5){

          if(singleBox.hasClass("yellow")){
            singleBox.removeClass("yellow");
            singleBox.addClass("green");
          }else{
            singleBox.addClass("green");
          }
        }
      },
      
      error: function (){
        console.log("Errore chiamata API");
      }
    })//fine chiamata api

  })//fine click


  
  
});//Fine ready
