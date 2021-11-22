//dark mode
const darkMode = () => {
    $("body").css("background", "-webkit-linear-gradient(45deg, rgb(17, 17, 17) 0%,rgb(13, 14, 13) 51%,rgb(27, 27, 27) 100%)")
    $("h1").css("color", "white")
    $("p").css("color", "white")
    $("h2").css("color", "white")
    $("h3").css("color", "white")
    $("#muchoEstilo").css("background-color", "black")
    $(".cArteles div").css("background-color", "black")
    $(".cArteles div").css("border-color", "white")
    $("#menu").css("background-color", "grey")
    $("#menu li a").css("background-color", "grey")
    $("#menu ul li a").css("background-color", "grey")
    $("#menu ul li a").css("color", "black")
    $ ("#menu img").css ("border-color", "black")
    $("footer").css ("background-color", ("grey"))
    localStorage.setItem("oScuro", "dark")
  }
  
  const ligthMode = () => {
    $("body").css("background", "-webkit-linear-gradient(45deg, rgb(244, 245, 245) 0%,rgb(244, 245, 245) 0%,rgb(244, 245, 245) 0%")
    $("h1").css("color", "black")
    $("p").css("color", "white")
    $(".sKills").css("color", "black")
    $("h2").css("color", "black")
    $("h3").css("color", "black")
    $("h3").css("color", "black")
    $("#muchoEstilo").css("background-color", "white")
    $(".cArteles div").css("background-color", "white")
    $(".cArteles div").css("border-color", "black")
    $("#menu").css("background-color", "white")
    $("#menu").css("border-color", "black")
    $("#menu li a").css("background-color", "white")
    $("#menu li a").css("color", "black")
    $("#menu ul li a").css("border-color", "black")
    $ ("#menu img").css ("border-color", "black")
    $("footer").css ("background-color", ("white"))
    $("footer").css ("border-color", ("black"))
    $("footer p").css ("color", ("black"))
    localStorage.setItem("oScuro", "ligth")
  }
  
  
  $("#oScuro").on("click", () => {
    if (localStorage.getItem("oScuro") === "dark") {
        ligthMode()
    } else {
        darkMode()
    }
  })