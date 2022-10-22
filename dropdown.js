var teste = new String()
function dropdown()
{
    if(teste == "")
    {
        var drop = document.getElementById("Dropdown-list")
        var dropdown = document.getElementById("li-drop")
        var dropdown2 = document.getElementById("li-drop2")
        var dropdown3 = document.getElementById("li-drop3")
        var dropdown4 = document.getElementById("li-drop4")
        var dropdown5 = document.getElementById("li-drop5")
        var dropdown6 = document.getElementById("li-drop6")
        teste = "grid"
        drop.style.display= teste
        dropdown.style.display = teste
        dropdown2.style.display = teste
        dropdown3.style.display = teste
        dropdown4.style.display = teste
        dropdown5.style.display = teste
        dropdown6.style.display = teste
    }else if(teste === "grid")
    {
        var drop = document.getElementById("Dropdown-list")
        var dropdown = document.getElementById("li-drop")
        var dropdown2 = document.getElementById("li-drop2")
        var dropdown3 = document.getElementById("li-drop3")
        var dropdown4 = document.getElementById("li-drop4")
        var dropdown5 = document.getElementById("li-drop5")
        var dropdown6 = document.getElementById("li-drop6")
        teste = ""
        drop.style.display= teste
        dropdown.style.display =teste
        dropdown2.style.display = teste
        dropdown3.style.display = teste
        dropdown4.style.display = teste
        dropdown5.style.display = teste
        dropdown6.style.display = teste
    }

}