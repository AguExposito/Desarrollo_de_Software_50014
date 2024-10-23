//trae los productos
export const handleGetProductLocalStorage = () => {
    
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    } else {
        return[];
    }

};
//guardarEn LOCALSTORAGE
//recibir un producto
export const setInLocalStorage = (productIn)=> {

    //traer los elementos
    let productsInLocal = handleGetProductLocalStorage();
    console.log(productIn);
    const existingIndex = productsInLocal.findIndex((productsLocal) =>
    productsLocal.id === productIn.id
    );
    //verificar si el elemento existe y remplazar
    if(existingIndex !== -1) {
         productsInLocal[existingIndex] = productIn;
    }else {
        productsInLocal.push(productIn);
        //sino existe agregamos
    };
//setear el nuevo array
    localStorage.setItem("products", JSON.stringify(productsInLocal));
    
    
   
    
};