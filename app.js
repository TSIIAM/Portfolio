$("document").ready(main);


var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');

    $('.nav li').removeClass('active');
    $(this).addClass('active');
		$(".thumbnail").hide();
    $(".thumbnail").addClass('flex');
    if(category == "nav-ejercicios"){
      $(".thumbnail ").removeClass("selected");
      $(".ejercicios ").addClass("selected");
      $(".ejercicios ").toggle();
      


    }else if(category == "nav-estaticos"){
       $(".thumbnail ").removeClass("selected");
      $(".estaticos ").addClass("selected");
      $(".estaticos ").toggle();


    }else if(category == "nav-adaptativos"){
       $(".thumbnail ").removeClass("selected");
      $(".adaptativos ").addClass("selected");
      $(".adaptativos ").toggle();


    }else if(category == "nav-dinamicos"){
       $(".thumbnail ").removeClass("selected");
      $(".dinamicos ").addClass("selected");
     $(".dinamicos ").toggle();



    }else if(category == "nav-all"){
      $(".thumbnail ").removeClass("selected");
      $(".thumbnail").toggle();


    }



  });
};

$(document).ready(main);
