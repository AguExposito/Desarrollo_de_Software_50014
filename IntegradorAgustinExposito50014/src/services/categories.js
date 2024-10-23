import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistance/localstorage";
import {handleRenderList } from "../view/store";

const handlefilterProductsByCategory = (categoriaIn) =>{

    const products = handleGetProductLocalStorage();
    
    switch (categoriaIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el)=> el.categoria === categoriaIn);
            handleRenderList(result);
            default:
            break;
         case "mayorPrecio":
        const resultPrecioMayor = products.sort((a, b) => b.precio - a.precio);
            handleRenderList(resultPrecioMayor);

         break;  
         case "menorPrecio":   
         const resultPrecioMenor = products.sort((a, b) => a.precio - b.precio);
            handleRenderList(resultPrecioMenor);
            break;
    };
};



//render de la vista Categoria

export const renderCategories =()=>{
    //Tomamos elementos de la lista y Creamos esos elementos dentro de la lista
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    
    <li id="Todo"> Todos los productos</li>
    <li id="Hamburguesas"> Hamburguesas</li>
    <li id="Papas"> Papas </li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">mayorPrecio</li>
    <li id="menorPrecio">menorPrecio</li>
    `;
    //añadimos dinamicamente el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener('click', ()=>{
            handleClick(liElement);
        });

    });
    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento)=> {
        handlefilterProductsByCategory(elemento.id);
        liElements.forEach((el)=>{
            if(el.classList.contains ("liActive")){
                el.classList.remove("liActive");
            }else{
                if(elemento === el) {
                    el.classList.add("liActive");
                }
            }
        });
    };
};