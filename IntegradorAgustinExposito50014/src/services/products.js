
import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistance/localstorage";
import { closeModal } from "../view/modal";

import { handleGetProductsToStore, handleRenderList } from "../view/store";


const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElements();
});

//funcion de guardar
const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("name").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categoria = document.getElementById("categoria").value;
    let object = null;

    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categoria,
        };
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        };
    }

    Swal.fire({
        title: "Correcto",
        text: "Producto guardado correctamente!",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
};

// eliminar Elemento
export const handleDeleteProduct = () => {
    Swal.fire({
        title: "Desea Eliminar el Elemento",
        text: "Si lo elimina sera permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!!!!!!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);
        
            // Actualizar el localStorage con el nuevo array de productos
            localStorage.setItem("products", JSON.stringify(result));
        
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
          }else{
            closeModal();
          }
});
    }
      




