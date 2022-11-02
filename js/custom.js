// Code for preloader will be disappeared after all contents being loaded 
$(window).on('load', function () {
  $(".expandable").hide();
  $(".expanded").parent().parent().find('.minus_svg').show(500);
  $(".expanded").parent().parent().find('.plus_svg').hide(500);

    $("#preloader").fadeOut(2000);
    $("#main").css({'overflow':'auto'});
});
// Code for preloader will be disappeared after all contents being loaded -------------------------- Ended 


// Java script for dropdown with hover 
$('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });





// Remove Push section ----------------------------------------------------------------------------------------------

$(document).on('click','.expand_btn',function(){
  $this = $(this);

  $is_clicked = $this.attr("data-role");
  if($is_clicked == 'clicked'){
    //Do nothing
  }else{

    //If clicked from the outside grid retangle

    // Moving variables  are declared here ....  Step 

    $id = $this.parent().parent().attr('id');

    
      $("#0").find(".rectengale").removeClass("horizontal_mode");
    


      if($id == 3 || $id == 6 || $id == 9 ){  //if from last row 3,6,9
        $moveable_sr = parseInt($this.parent().parent().attr('id'))-1;
        $expended_id = parseInt($(".expanded").parent().parent().parent().attr('id')); 
  
        if($expended_id == 3 || $expended_id == 6 || $expended_id == 9 ){
          $recent_gap = $expended_id -1; 
        }

        else if($expended_id == 0){
          $recent_gap = 3;
        }

        else{
          $recent_gap = $expended_id +1; 
        }
  
      }else{
  
        $moveable_sr = parseInt($this.parent().parent().attr('id'))+1; //upcoming gap
        $expended_id = parseInt($(".expanded").parent().parent().parent().attr('id')); 
  
        if($expended_id == 3 || $expended_id == 6 || $expended_id == 9 ){
          $recent_gap = $expended_id -1; 
        }

        else if($expended_id == 0){
          $recent_gap = 3;
        }

        else{
          $recent_gap = $expended_id +1; 
        }
      }
      
      $moveable = $moveable_sr ;
      $upcoming_gap = $moveable_sr ;
  
      $moveable_content =  $("#"+$moveable_sr).html();
      // alert("push to =>  "+$recent_gap+ " from "+ $upcoming_gap );


      //removing
      if($id == 0){
        $("#0").find(".rectengale").addClass('horizontal_mode');
        $moveable_content =  $("#3").html();
        $("#3").find(".rectengale").remove();
      }else{
        $("#"+$moveable).find(".rectengale").remove();

      }

    //pushing
    // alert($recent_gap);
    $("#"+$recent_gap).append($moveable_content);

      // Animated function is here ------------------------------------------------------------------------------------------@@@@@@@@@@@@@@@

      

        $(".expanded").slideUp('slow');
        $(".expanded").parent().parent().find('a').attr('data-role', 'not_clicked');
        $(".expanded").parent().parent().find('.minus_svg').hide(500);
        $(".expanded").parent().parent().find('.plus_svg').show(500);
        $(".expanded").attr('class', 'expandable');
    
    
        //Make active current one 
        $this.parent().find(".expandable").attr('class', 'expanded');
        $this.parent().find(".expanded").slideDown('slow');
        $this.parent().find("h5").addClass("shrink");
        $this.find(".plus_svg").hide(500);
        $this.find(".minus_svg").show(500);
    
        //Change the properties 
        $this.attr('data-role', 'clicked');
    
      
  
      // Animated function is here ended ------------------------------------------------------------------------------------------@@@@@@@@@@@@@@@@


  }
});




// $(document).on('click','.something',function(){
//   $is_expanded = $(".expanded").text("");
//   if($is_expanded == ""){
//     $("#").find(".rectengale").addClass('horizontal_mode');
//     $moveable_content =  $("#0").html();
//     $("#3").find(".rectengale").remove();
//     $("#2").append($moveable_content);
//   }
// });