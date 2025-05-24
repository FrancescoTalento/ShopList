import { listaItens } from "../main.js";

const ux =  {
    mostrarItens(ulComprarItens,ulItens){
    ulComprarItens.innerHTML = ""
    ulItens.innerHTML = "";

    listaItens.forEach((itemList,index) =>{
        const li = this.criarLi(itemList,index)
        if(itemList.checado){
            ulComprarItens.append(li);
        }else{
            ulItens.append(li)
        }
    })
},


criarLi(item,index){
    if(item.checado){

        console.log("entrou checado");

        //creating the elements tag and showing structure
        const li =document.createElement('li');
            const div1 = document.createElement('div')
                const input1 = document.createElement('input')
                const span1 = document.createElement('span')
            const div2 = document.createElement('div')
                const i = document.createElement('i')


        // adding the classes and atributues of the elements
        li.classList.add("item-compra", "is-flex","is-justify-content-space-between")
        li.dataset.value = index

        input1.classList.add("is-clickable","checked")
        input1.type = "checkbox"
        input1.checked = true; 
        span1.classList.add("itens-comprados","is-size-5")
        span1.textContent = item.name;

        i.classList.add("fa-solid","fa-trash","is-clickable","deletar")

        // setting up the structure 
        div1.append(input1,span1)
        div2.append(i)

        li.append(div1,div2)
        
        return li
    }
    else{
         console.log("entrou nao chegado");
   
 
        const li =document.createElement('li');
            const div1 = document.createElement('div')
                const input1 = document.createElement('input')
                const input12 = document.createElement('input')
            const div2 = document.createElement('div')
                const iSalva = document.createElement('i')
                const iEdita = document.createElement('i')
                const iDeleta = document.createElement('i')


        //adding the classes and atributues of the elements
        li.classList.add("item-compra", "is-flex","is-justify-content-space-between")
        li.dataset.value = index

        input1.classList.add("is-clickable",)
        input1.type = "checkbox"
        
        div1.classList.add("containerInputs")
        div2.classList.add("containerBtn")

        input12.classList.add("is-size-5")
        input12.type = "text"
        input12.disabled = true
        input12.value =  item.name ?? "";//item.name

    
        iSalva.classList.add("fa-regular","fa-floppy-disk","is-clickable","salvar","hidden")
        
        iEdita.classList.add("fa-regular","is-clickable","fa-pen-to-square","editar")
        iDeleta.classList.add("fa-solid","fa-trash","is-clickable","deletar")

        // setting up the structure 
        div1.append(input1,input12)

        div2.append(iSalva)
        div2.append(iEdita)
        div2.append(iDeleta)

        li.append(div1,div2)
      
        return li
                 
        }
    },

    modoEdicao(liItem){
        console.log("Chamou modo edição!");
        
        const inputContent = liItem.querySelector("input[type=text]")
        inputContent.disabled = false
//CONFIG TO EDIT
        // Saving the i Edit btn 
        const iEdita = liItem.querySelector('i.editar');
        
        
        
        //Getting the i Salva btn and activating
        const iSalva = liItem.querySelector("i.salvar")
        
        
        //changing the visibility of icons
        iSalva.classList.toggle('hidden')
        iEdita.classList.toggle('hidden')


        inputContent.focus();
    },
    desableEditMode(liItem){
        const inputContent = liItem.querySelector("input[type=text]")
        inputContent.disabled = true

        // Saving the i Edit btn 
        const iEdita = liItem.querySelector('i.editar');

        //Getting the i Salva btn and activating
        const iSalva = liItem.querySelector("i.salvar")
        
        iSalva.classList.toggle('hidden')
        iEdita.classList.toggle('hidden')

    },
    confirmEdit(liItem,index){
        const inputContentValue = liItem.querySelector("input[type=text]").value
        listaItens[index].name = inputContentValue
        this.desableEditMode(liItem)
    }
}

export default ux;