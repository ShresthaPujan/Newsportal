
$( function() {
          $( "#tabs" ).tabs();
});

$("#navMenus").on('click', 'li', function () {
    $("#navMenus li.activethis").removeClass("activethis");
    // adding classname 'active' to current click li 
    $(this).addClass("activethis");
});

function openNav() {          
    document.querySelector(".side-bar").style.right = 0;
}
function closeNav(){      
    document.querySelector('.side-bar').style.right = "-300px";
}
      
