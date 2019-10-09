//Business logic
var totalAmount="";
var inputtedSize="";
var inputtedCrust="";
var inputtedToppings=[];
var sizePrice;

function Pizza(size,crust,toppings){
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
  }

var pizzaSizePrice = {
    small:400,
    medium : 550,
    large: 650,
    mega:850
}

var pizzaCrustPrice = {
    thinCrust: 250,
    thickCrust: 350,
    neapolitanCrust:450,
    StuffedCrust:550,
    cheeseCrust:500
}

function getPriceBySize(){
    if(inputtedSize === "small"){
        return pizzaSizePrice.small;
    }
    else if(inputtedSize === "medium"){
        return pizzaSizePrice.medium;
    }
    else if (inputtedSize ==="large"){
      return pizzaSizePrice.large;
    }
    else {
      return pizzaSizePrice.mega;
    }
}
function getPriceByCrust(){
    if(inputtedCrust === "thinCrust"){
        return pizzaCrustPrice.thinCrust;
    }
    else if(inputtedCrust === "thickCrust"){
        return pizzaCrustPrice.thickCrust;
    }
    else if(inputtedCrust === "neapolitanCrust"){
        return pizzaCrustPrice.neapolitanCrust;
    }else if(inputtedCrust==="StuffedCrust"){
      return pizzaCrustPrice.StuffedCrust
    }
    else{
      return pizzaCrustPrice==="cheeseCrust"
    }
}
function getPriceByTopping(){
    return inputtedToppings.length * 70;
}
function getTotalPrice(){
    return getPriceBySize() + getPriceByCrust() + getPriceByTopping();
}
function reset(){
    $("#size option:selected").val("");
    $("input:checkbox[name='topping']").prop('checked',false);
    $("#crust option:selected").val("");

}


// UI logic

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
    $(".order").click(function(){
        $(".oder").toggle();
        $(".finalform").toggle();
    });
    
    inputtedSize=$("#size option:selected").val();
    inputtedCrust=$("#crust option:selected").val();
    $("input:checkbox[name='topping']:checked").each(function(){
      inputtedToppings.push($(this).val());
    });

    var pizza = new Pizza(inputtedSize,inputtedCrust,inputtedToppings);

    $("#total").click(
        function(){
          var total = getTotalPrice();
          $("#order").append(
              '<ul>'+
              '<li>'+

              '<p>Pizza size:</p>'+ pizza.size+
              '</li>'+
              '<li>'+
                '<p>Pizza crust:</p>'+ pizza.crust+
              '</li>'+
              '<li>'+
                '<p>Pizza Toppings:</p>'+ pizza.toppings+
              '</li>'+
              '<li>'+
                '<p>Delivery = 150</p>'+
              '</li>'+
              '<li>'+
                '<p>Total amount<p/>' + total+
              '</li>'+
              '</ul>'
          );
        }
    );

    $(".finalCalc").submit(
        function(event){
            event.preventDefault();
            alert("Your order has been recieved.Thank you for ordering..")
            reset();
            
        }

    );
    $("#deliver").click(function(){
        var del=200;
        var address= confirm("Would you like us to deliver your pizza?");
        if(address){

           var location= prompt("Enter your location");
           alert("Your pizza will be delivered to " + location +" " + "thank you")
        }
    });
    
    });

    $("#add").click(function(){
        $("#newpizza").append( '<h5>Choose your pizza size..</h5>'+
                         ' <select name="size" id="size">'+
                            '<option name="small" value="small">Small</option>'+
                            '<option name="medium" value="medium">Medium</option>'+
                            '<option name="large" value="large">Large</option>'+
                            '<option name="mega" value="mega">Mega</option>'+
                          '</select><br></br>'+
                       ' <p id="show1"><i>Show images.</i></p>'+
                        '<div id="hide">'+
                          '<div class="row">'+
                            '<div class="col-sm-2">'+
                              '<img src="images/4piece.jpg" width="200px" height="200px">'+
                              '<figcaption><p>Small size pizza.<br>4-pieces.</p></figcaption>'+
                            '</div>'+
                            '<div class="col-sm-2">'+
                              '<img src="images/veg2pizza.jpeg" width="200px" height="200px">'+
                              '<figcaption>Medium size pizza<br>6-pieces.</figcaption>'+
                            '</div>'+
                            '<div class="col-sm-2">'+
                              '<img src="images/tomatopizza.jpeg" width="200px" height="200px">'+
                              '<figcaption><p>Large size pizza<br>8-pieces.</p></figcaption>'+
                            '</div>'+
                            '<div class="col-sm-2">'+
                              '<img src="images/meatpizza.jpeg" width="200px" height="200px"></img>'+
                              '<figcaption><p>Mega size pizza<br>12-pieces.</p></figcaption>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                     ' </div>'+

                          '<h5>Choose your crust. </h5>'+
                          '<select name="crust" id="crust">'+
                            '<option name="thinCrust" value="thinCrust">Thin crust</option>'+
                            '<option name="thickCrust" value="thickCrust">Thick crust</option>'+
                            '<option name="cheeseStuffed" value="cheesestuffed">Cheese crust</option>'+
                            '<option name="neaCrust" value="neapolitanCrust">Neapolitan crust</option>'+
                            '<option name="stuffedrust" value="StuffedCrust">Stuffed crust</option>'+                      
                         ' </select><br></br>'+
                          '<p id="show2"><i>Show images</i></p>'+
                          '<div class="hide1">'+
                            '<div class="row">'+
                              '<div id="stff" class="col-sm-2">'+
                                  '<img src="images/crustThin.jpeg" alt="thin crust" height="200px" width="200px">'+
                                  '<figcaption>Thin crust pizza<br></figcaption>'+
                             ' </div>'+
                             ' <div id="stff" class="col-sm-2">'+
                                  '<img src="images/thickcrust.jpeg" height="200px" width="200px">'+
                                  '<figcaption>Thick crust pizza</figcaption>'+
                              '</div>'+
                             ' <div id="stff"class="col-sm-2">'+
                                  '<img src="images/cheeseCrust.jpeg" height="200px" width="200px">'+
                                  '<figcaption>Cheese crust</figcaption>'+
                              '</div>'+
                              '<div id="stff" class="col-sm-2">'+
                                  '<img src="images/crustNe.jpeg" height="200px" width="200px">'+
                                  '<figcaption>Neapolitan crust.</figcaption>'+
                            '  </div>'+
                              '<div id="stff" class="col-sm-2">'+
                                '<img src="images/stuffed.jpeg"height="200px" width="200px">'+
                                '<figcaption>Stuffed crust</figcaption>'+
                              '</div>'+
                            '</div>'+                      
                         ' </div>'+
                          '<h5>Choose your toppings</h5><br>'+
                          '<p>Vegetables:</p>'+
                          '<input type="checkbox" name="ovacado" value="ovacado">'+
                          '<label for="ovacado">Ovacado</label>'+
                          '<input type="checkbox" name="broccoli" value="broccoli">'+
                          '<label for="broccoli">Broccoli</label>'+
                          '<input type="checkbox" name="carrot" value="carrot">'+
                          '<label for="carrot">Carrot</label>'+
                          '<input type="checkbox" name="cherrytomatoes" value="cherrytomatoes">'+
                          '<label for="cherrytomatoes">Cherry tomatoes</label>'+
                         ' <input type="checkbox" name="driedTomatoes" value="driedTomatoes">'+
                          '<label for="driedTomatoes">Dried Tomatoes</label><br>'+
                          '<input type="checkbox" name="lettuce" value="lettuce">'+
                          '<label for="lettuce">Lettuce</label>'+
                          '<input type="checkbox" name="greenpepper" value="greenpepper">'+
                          '<label for="greenpepper">Greenpepper</label>'+
                          '<input type="checkbox" name="onions" value="onions">'+
                          '<label for="onions">Onions</label>'+
                          '<input type="checkbox" name="redonions" value="redonions">'+
                          '<label for="redonions">Redonions</label>'+
                          '<input type="checkbox" name="mushrooms" value="mushroom">'+
                          '<label for="mushroom">Mushroom</label>'+
                          '<input type="checkbox" name="spinach" value="spinach">'+
                          '<label for="spinach">Spinach</label><br>'+

                          '<p>Meat:</p>'+
                          '<input type="checkbox" name="bacon" value="bacon">'+
                          '<label for="bacon">Bacon</label>'+
                         ' <input type="checkbox" name="beef" value="beef">'+
                          '<label for="beef">Beef</label>'+
                          '<input type="checkbox" name="chickenMasala" value="chickenMasala">'+
                          '<label for="chickenMasala">Chicken masala</label>'+
                          '<input type="checkbox" name="pepperoni" value="pepperoni">'+
                          '<label for="pepperoni">Pepperoni</label>'+
                          '<input type="checkbox" name="sausage" value="sausage">'+
                          '<label for="sausage">Sausage</label>'+
                          '<input type="checkbox" name="chickenTikka" value="chickenTikka">'+
                          '<label for="chickenTikka">Chicken Tikka</label><br>'+
                          
                         ' <p>Herbs and Spices</p>'+
                          '<input type="checkbox" name="garlic"value="Parlic">'+
                          '<label for="garlic">Garlic</label>'+
                          '<input type="checkbox" name="pepper"value="Pepper">'+
                          '<label for="pepper">Pepper</label>'+
                          '<input type="checkbox" name="rosemary"value="Rosemary">'+
                          '<label for="rosemary">Rosemary</label>'+
                          '<input type="checkbox" name="basil"value="basil">'+
                          '<label for="basil">Basil</label><br>'+
                          
                         ' <p>Cheese:</p>'+
                          '<input type="checkbox" name="blueCheese" value="BlueCheese">'+
                          '<label for="bluecheese">Blue cheese</label>'+
                         ' <input type="checkbox" name="brie" value="brie">'+
                          '<label for="brie">Brie</label>'+
                          '<input type="checkbox" name="chedar" value="chedar">'+
                         ' <label for="chedar">Chedar</label>')
              
    });

// //     $( "#show1" ).click(function(){
// //         $('#hide').scrollBottom($('#hide').scrollbottom()+200);
// //    }); 
  
// //    $( "#hide" ).click(function(){
// //        $('#show1').scrollTop($('#show1').scrollTop()-200);;
// //    }); 
//     // $(".des1").click(function(){
//     //     $(".design").toggle();
//     //     $(".des1").toggle();     
//     // });
//     // $(".dev").click(function(){
//     //     $(".textdev").toggle();
//     //     $(".dev").toggle();
//     // });
//     // $(".textdev").click(function(){
//     //     $(".dev").toggle();
//     //     $(".textdev").toggle();
//     // });
//     // $(".prod").click(function(){
//     //     $(".prodText").toggle();
//     //     $(".prod").toggle();
//     // });
//     // $(".prodText").click(function(){
//     //     $(".prod").toggle();
//     //     $(".prodText").toggle();
   