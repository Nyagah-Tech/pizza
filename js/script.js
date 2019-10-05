$(document).ready(function(){
    $("#show1").click(function(){
        $("#show1").toggle();
        $("#hide").toggle();     
    });
    $("#hide").click(function(){
        $("#hide").toggle();
        $("#show1").toggle();
    });
    $("#show2").click(function(){
        $("#show2").toggle();
        $(".hide1").toggle();     
    });
    $(".hide1").click(function(){
        $(".hide1").toggle();
        $("#show2").toggle();
    });

//     $( "#show1" ).click(function(){
//         $('#hide').scrollBottom($('#hide').scrollbottom()+200);
//    }); 
  
//    $( "#hide" ).click(function(){
//        $('#show1').scrollTop($('#show1').scrollTop()-200);;
//    }); 
    // $(".des1").click(function(){
    //     $(".design").toggle();
    //     $(".des1").toggle();     
    // });
    // $(".dev").click(function(){
    //     $(".textdev").toggle();
    //     $(".dev").toggle();
    // });
    // $(".textdev").click(function(){
    //     $(".dev").toggle();
    //     $(".textdev").toggle();
    // });
    // $(".prod").click(function(){
    //     $(".prodText").toggle();
    //     $(".prod").toggle();
    // });
    // $(".prodText").click(function(){
    //     $(".prod").toggle();
    //     $(".prodText").toggle();
    
    });
   