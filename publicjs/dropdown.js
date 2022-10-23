var teste = new String()
function dropdown()
{
    if(teste == "")
    {
        var drop = document.getElementById("Dropdown-list")

        teste = "grid"
        drop.style.display= teste

    }else if(teste === "grid")
    {
        var drop = document.getElementById("Dropdown-list")

        teste = ""
        drop.style.display= teste

    }

}