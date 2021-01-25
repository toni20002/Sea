function print() {
    let heading = document.getElementsByTagName("h1")[0].innerHTML;
    console.log(heading);
    let original = document.getElementsByTagName("h1")[0].innerHTML;
   let a = document.getElementsByTagName("h1")[0].innerText = "gaaaa";
   for (b = 0; b < 5; b++) {
       console.log(b);
       $("h1")[0].innerHTML = b.toString();
   }
}
let imageUrl = "C:\\Users\\toni2\\WebstormProjects\\untitled2\\sea";

//change of logo on hover
let whiteLogo = "Logos/whiteSea.png";
let blackLogo = "Logos/blackSea.png";

$(document).ready(function () {
    $(".navbar").on( 'mouseenter mouseleave', function () {

     if ($(".navbar-brand img").attr("src") == whiteLogo) {
            $(".navbar-brand img").attr("src", blackLogo);
        }

        else{
            $(".navbar-brand img").attr("src", whiteLogo);
        }
    })
})

$(document).ready(function() {
    $("video").on("start", function() {
        console.log("Video ended!");
    });
})

//navbar color change on hover, also added functionality to change the logo with smaller one
$(document).ready(function() {
    $(".navbar").on({
        mouseenter: (function() {
            $(".navbar").css("background-color", "white");
            if ($("#nav").innerWidth() < 500) {
                $(".navbar-brand img").attr("src", smLogoB);
            }
        }),
        mouseleave: (function() {
        $(".navbar").css("background-color", "black");
            if ($("#nav").innerWidth() < 500) {
                $(".navbar-brand img").attr("src", smLogoW);
            }
        })
    });})


//Responsive images/navbar on phones
let smSlider1 = "SliderPhone/slider1.JPG";
let smSlider2 = "SliderPhone/slider2.JPG";
let smSlider3 = "SliderPhone/slider3.JPG";
let smCreator = "SliderPhone/abiSmall.JPG";
let smLogoW = "Logos/smallLogoWhite.png";
let smLogoB = "Logos/smallLogoBlack.png";

$(document).ready(function () {
    let currentWidth = window.innerWidth;
    console.log(currentWidth);

    if (currentWidth < 500) {
        $("#slider1").attr("src", smSlider1);
       // console.log("I changed the image to " + smSlider1);
        $("#slider2").attr("src", smSlider2);
        $("#slider3").attr("src", smSlider3);
        $("#creator").attr("src", smCreator);
        $("#nav").height("45px");
        $(".navbar-brand img").attr("src", smLogoW); //this one is being set as default if the page has width < 500px
      //  console.log($("#nav").height());
    }
})


//open watch link
/*$(document).ready(function()  {
    $(".img-fluid").click( function() {
        window.open("https://www.instagram.com/seadsgn", "_blank");
    })
}) */

