import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistance/localstorage";
import { openModal } from "./modal";


export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};

export const handleRenderList = (productosIn) => {
    const burgers = productosIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categoria === "Papas");
    const gaseosas = productosIn.filter((el) => el.categoria === "Gaseosas");

    const renderProductGroup = (productos, title) => {
        console.log("Productos a renderizar:", productosIn);
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `<div class='containerTargetItem' id='product-${producto.categoria}-${index}'>
                            <div>
                                <img src='${producto.imagen}' alt='${producto.nombre}' />
                                <div>
                                    <h2>${producto.nombre}</h2>
                                </div>
                                <div class='targetProps'>
                                    <p><b>Precio:</b> $${producto.precio}</p>
                                    <p><b>Categorías:</b> ${producto.categoria}</p>
                                </div>
                            </div>
                        </div>`;
            }).join("");

            return `
                <section class='sectionStore'>
                    <div class='containerTitleSection'>    
                    <h3>${title}</h3>
                    </div>
                    <div class='containerProductStore'>
                        ${productosHTML}
                    </div>
                </section>
            `;
        } else {
            return "";
        }
    };

    // Renderizar cada grupo de productos por categoría
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductGroup(burgers, "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    const addEvents = (productsIn) => {
        if (productsIn) {
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(
                    `product-${element.categoria}-${index}`
                );
                if (productContainer) {
                    productContainer.addEventListener('click', () => {
                        setProductoActivo(element);
                        openModal();
                    });
                }
            });
        }
    };

    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};
