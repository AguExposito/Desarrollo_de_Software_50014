import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";


const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click', ()=>{
    handleCancelButton();
});

const handleCancelButton =() => {
    closeModal();
};


export const openModal =() => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = 'flex';
    const buttonDelete = document.getElementById("deleteButton");
    if(productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    };

    if (productoActivo) {
        const nombre = document.getElementById("name"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categoria");
    nombre.value =productoActivo.nombre;
    imagen.value =productoActivo.imagen;
    categoria.value =productoActivo.categoria;
    precio.value = productoActivo.precio;
    }
};

export const closeModal =() => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = 'none';
    setProductoActivo(null);
    resetModal();
};

const resetModal =()=> {
    const nombre = document.getElementById("name"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categoria");
    nombre.value ="";
    imagen.value ="";
    categoria.value ="Seleccione una categoria";
    precio.value =0;
};

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click', ()=>{
    handlebuttonDelete();
});

const handlebuttonDelete = ()=> {
    handleDeleteProduct();
};


