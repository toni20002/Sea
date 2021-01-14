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

$(document).ready(function() {
    $(".navbar").on({
        mouseenter: (function() {
            $(".navbar").css("background-color", "white");
        }),
        mouseleave: (function() {
        $(".navbar").css("background-color", "black");
        this.src='mih.jpg'; })
    });})

    $(document).ready(function() {
    $("button").click(function() {
        $("p").hide();
    });

    $(document).ready(function() {
        $("#div1").click(function () {
            $("#div2").toggle()
        })
    })
});

