function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    $('.sidenav').show();
    $("#menu").hide();
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    $("#menu").show();
}
function closeMenu () {
    $('.sidenav a').on("click", function(){
        $('.sidenav').hide();
        $("#menu").show();
    })
}
closeMenu()