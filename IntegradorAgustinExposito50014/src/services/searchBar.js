import { handleGetProductLocalStorage } from "../persistance/localstorage";
import { handleRenderList } from "../view/store";

export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductLocalStorage();

    const result = products.filter((el) => 
        el.nombre.toLowerCase().includes(inputHeader.value)
    );
    handleRenderList(result);
};