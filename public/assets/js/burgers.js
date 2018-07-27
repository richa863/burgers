$(document).ready(function() {

   
    $("#addBurger").on("click", function(){
   
      let burger = {
        "burger_name": $(burgerName).val(),
        "devoured": $(burgerName).data("eaten")
      };
  
      $.post("/api/burger", burger).done((response)=>{
        console.log("Created a New Burger!");
        
        location.reload();
      });
  
    }); 
  

  
    $(".burgerBlock").on("click", function(){
      console.log("Button Clicked");
  
      const burgerID = $(this).data("id");
      const devoured = $(this).data("eaten");
  
      const burgerUpdate = {
        "devoured": devoured
      };
  
      console.log("button id is " + burgerID);
  
      $.ajax("/api/burger/" + burgerID, {
        type: "PUT",
        data: burgerUpdate
      }).done((response)=>{
        location.reload();
      });
  
    }); 
  
  });