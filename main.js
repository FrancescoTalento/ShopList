import ux from "./scripts/ux.js";
import { LocalStorage } from "./scripts/localStorage.js";

export const listaItens =  LocalStorage.getProduts() || []
console.log(listaItens);

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");

const ulComprarItens = document.querySelector('#itens-comprados');
const ulItens = document.querySelector('#lista-de-itens');


form.addEventListener("submit", function(event){
    event.preventDefault()
    salvarItens();
    ux.mostrarItens(ulComprarItens,ulItens);
})

document.addEventListener('DOMContentLoaded',()=>{
    ux.mostrarItens(ulComprarItens,ulItens);
})


function salvarItens(){
    const comprasItem = itensInput.value.toLowerCase();
    
    const valuExists = listaItens.some((produtc) => produtc.name.toLowerCase().replace(/\s/g, "") === comprasItem.replace(/\s/g, ""))

    if(valuExists){
        alert("The item already exists in the Shopping List")
    }else{
        listaItens.push({
            'name': comprasItem.trim(),
            'checado': false
        })
        itensInput.value = ""
    }   
    LocalStorage.updateStorage()    
    itensInput.focus();
}


ulComprarItens.addEventListener("click", userInterectionHandler)


ulItens.addEventListener("click",userInterectionHandler)
ulItens.addEventListener("focusout",userInterectionHandler)
ulItens.addEventListener("keydown",userInterectionHandler)

function userInterectionHandler(event){
    
    
    const eventTarget = event.target
    const index = eventTarget.closest('li').getAttribute('data-value')
    
    
    if(eventTarget.matches('input[type=checkbox]')&& event.type === "click"){
        checkListHandler(eventTarget,index)
        ux.mostrarItens(ulComprarItens,ulItens)
    }else if(eventTarget.matches("i.deletar")&& event.type === "click"){
        deleteListHandler(index)
        ux.mostrarItens(ulComprarItens,ulItens)
    }else if(eventTarget.matches("i.editar")&& event.type === "click"){
        editListHandler(eventTarget)
    }else if(eventTarget.matches("i.salvar") && event.type === "click"){
        confirmEditHandler(eventTarget,index)
        ux.mostrarItens(ulComprarItens,ulItens)
    }else if(eventTarget.matches("input[type=text]") && (event.type === "focusout" || (event.type === "keydown") && event.key === "Enter")){
        confirmEditHandler(eventTarget,index)
        ux.mostrarItens(ulComprarItens,ulItens)
    }
    LocalStorage.updateStorage()    
    console.log(listaItens);
    
}

function checkListHandler(eventTarget,index){
    listaItens[index].checado = eventTarget.checked
    
}

function deleteListHandler(index){
    listaItens.splice(index, 1)
    
}
function editListHandler(eventTarget){
    const li = eventTarget.closest("li")
    ux.modoEdicao(li)
}

function confirmEditHandler(eventTarget,index){
    const li = eventTarget.closest("li")
    ux.confirmEdit(li,index)
}