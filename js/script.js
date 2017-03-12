$(document).ready(function () {

    var clockHours = new Date().getHours();

    if(clockHours < 12 && clockHours > 6 ){
         $("#msg").html('<img src="img/morning.png"> Good Morning.');

    }else if(clockHours > 12 && clockHours < 20){
        $("#msg").html('<img src="img/afternoon.png"> Good Afternoon.');

    }else{
        $("#msg").html('<img src="img/night.png"> Good Night.');
    }



});
