import { listaItens } from "../main.js";

const tableProducts = "produtos"


export const LocalStorage = {
    updateStorage(){
        localStorage.setItem(tableProducts,JSON.stringify(listaItens));
    },
    getProduts(){
        return JSON.parse(localStorage.getItem(tableProducts))
    }
}




