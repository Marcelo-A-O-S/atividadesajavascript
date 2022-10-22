

let Usuario = new Array()
let Idade = new Array()
function ListarTabela()
{
        
   var indiceTabela = Usuario.length 
   var tabelabody = document.getElementById("BodyTabela")
   tabelabody.innerHTML = null;
   for (let i = 0; i < indiceTabela; i++) 
   {
    var tabelaAdicionar =`<tr class="Info">
    <td id="NomeObitido"scope="row">${Usuario[i]}</td>
    <td id="IdadeObitida"scope="row">${Idade[i]}</td>
   </tr>`
     tabelabody.innerHTML +=  tabelaAdicionar;
    }
}
function tabela()
{
    
    var indiceTabela = Usuario.length 
   var tabelabody = document.getElementById("BodyTabela")

for (let i = 0; i < indiceTabela; i++) 
{
    var tabelaAdicionar =`<tr class="Info">
    <td id="NomeObitido"scope="row">${Usuario[i]}</td>
    <td id="IdadeObitida"scope="row">${Idade[i]}</td>
   </tr>`
     tabelabody.innerHTML +=  tabelaAdicionar;
}
}

function Modificar()
{
    var modificador = document.getElementById("Modificador").value
    var modificadorNome = document.getElementById("ModificarNome").value
    var modificadorIdade = document.getElementById("ModificarIdade").value
    var status = "falso"
    var indice = Usuario.length + 1

    for (let i = 0; i < indice; i++) {
        if(modificador === Usuario[i])
        {
            Usuario[i] = modificadorNome
            Idade[i] = modificadorIdade
            status= "verdadeiro"
            alert("O "+ modificador +" foi modificado!")
        }     
    }
    if(status === "falso")
    {
        document.getElementById("filtroResultado1").innerHTML= "O usuario "+modificador+" nao está cadastrado"
    }
    

    
    
}

function limparCampoNome()
{
    document.getElementById("entradaNome").value =""
    
}
function limpaCampoIdade()
{
    document.getElementById("entradaIdade").value =""
}
function limpaCampoBuscar()
{
    document.getElementById("Buscar").value =""
}
function limpaCampoDeletar()
{
    document.getElementById("BuscarD").value =""
}
function limparFiltro()
{
    document.getElementById("Filtro").value =""
}
function limparModificar()
{
    document.getElementById("Modificador").value =""
}
function limparModificarNome()
{
    document.getElementById("ModificarNome").value =""
}
function limparModificarIdade()
{
    document.getElementById("ModificarIdade").value =""
}
function Filtrar()
{
    var filtro = document.getElementById("Filtro").value
    var status = "falso"
    var indice = Usuario.length + 1

    for (let i = 0; i < indice; i++) {
        if(filtro === Usuario[i])
        {
            document.getElementById("filtroResultado1").innerHTML= Usuario[i]+ "  " +Idade[i]
            status = "verdadeiro" 
        }     
    }
    if(status === "falso")
    {
        document.getElementById("filtroResultado1").innerHTML= "O usuario "+filtro+" nao está cadastrado"
    }

}
function VerificarUsuarios()
{
    var busca = document.getElementById("Buscar").value
    var status = "falso"
    var indice = Usuario.length + 1

    for (let i = 0; i < indice; i++) {
        if(busca === Usuario[i])
        {
            alert("O usuario "+Usuario[i]+" está cadastrado")
            status = "verdadeiro"
        }     
    }
    if(status === "falso")
    {
        alert("O usuario "+busca+" nao está cadastrado")
    }
}
function Salvar(){
    nome = new String()
    idade = new Number()
    
    nome = document.getElementById("entradaNome").value
    idade = document.getElementById("entradaIdade").value
    Usuario.push(nome)
    Idade.push(idade)
    alert("O usuário " + nome +" foi cadastrado")
    
}
function Deletar()
{
    var busca = document.getElementById("BuscarD").value
    var status = "falso"
    var indice = Usuario.length + 1

    for (let i = 0; i < indice; i++) {
        if(busca === Usuario[i])
        {
            
            alert("O usuario "+Usuario[i]+" foi deletado com sucesso")
            status = "verdadeiro"
            Usuario.splice(i, 1)
        }     
    }
    if(status === "falso")
    {
        alert("O usuario "+busca+" nao está cadastrado")
    }
}