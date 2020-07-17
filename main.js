function openNav() {
    document.getElementById("myTopNav").style.height = "200px";
    // document.getElementById("main").style.marginLeft = "250px";
    $('.topnav').show();
    $("#menu").hide();
}
function closeNav() {
    document.getElementById("myTopNav").style.height = "0";
    // document.getElementById("main").style.marginLeft = "0";
    $("#menu").show();
}
function closeMenu () {
    $('.topnav a').on("click", function(){
        $('.topnav').hide();
        $("#menu").show();
    })
}
// function submitForm () {
//     $('form').submit(event=>{
//         alert("Your message was recieved! I'll get back to you shortly");
//     })
// }
closeMenu()
// submitForm()