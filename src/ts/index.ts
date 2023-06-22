//
console.log("hello from type");
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
  });

const carritoContador: Product[]=[];

function actualizarCarrito(){
    const carritoSpan = document.getElementById('carrito');
    if (carritoSpan) {
        let contentCarrito = carritoSpan.textContent;
        if (contentCarrito) {
          let numeroCarrito: number = parseInt(contentCarrito);
          numeroCarrito=carritoContador.length;
          carritoSpan.textContent=numeroCarrito.toString();
        }
    }
}

//Interfaz de tipo Producto

interface Product{
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

//método creación de carta Producto con el HTML siguiente (falta la img):

  function createProductCard(product: Product): HTMLElement {
    const card = document.createElement("div");
    card.classList.add("product-card", "card");
    card.style.width = "18rem";
  
    const image = document.createElement("img");
    image.classList.add("product-image", "card-img-top");
    image.src = product.image;
    image.alt = "Product Image";
    card.appendChild(image);
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const title = document.createElement("h3");
    title.classList.add("product-title", "card-title");
    title.textContent = product.title;
    cardBody.appendChild(title);
  
    const description = document.createElement("p");
    description.classList.add("product-description", "card-text");
    description.textContent = product.description;
    cardBody.appendChild(description);
  
    const price = document.createElement("p");
    price.classList.add("product-price", "card-text");
    price.textContent = `$${product.price.toFixed(2)}`;
    cardBody.appendChild(price);
  
    const addToCartButton = document.createElement("a");
    addToCartButton.classList.add("btn", "btn-primary");
    addToCartButton.href = "#";
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.setAttribute("data-product-id", product.id.toString());
    addToCartButton.addEventListener("click", handleAddToCart);
    cardBody.appendChild(addToCartButton);
  
    card.appendChild(cardBody);
  
    return card;
  }

//Revisar apartado image (Si no tiene imagen tener una predeterminada)

const products: Product[] = [
    {
        id: 1,
        title: "Albertito",
        description: "Descripción...",
        price: 10.99,
        image: "none"
    },
    {
        id: 2,
        title: "Miguelito",
        description: "Descripción chula...",
        price: 43.91,
        image: "none"
    }
];

//product-container no existe actualmente por lo que tendríamos que hacer 
//toda la parte de los productos de 0 para tenerlo automatizado y con los estilos que buscamos

//El for of lo hacemos para iterar sobre los Productos y crear cada producto y meterlo como hijo en el contenedor

function cargarProductos(){
    const productContainer = document.getElementById("product-container");
    if (productContainer) {
        for (const product of products) {
            const card = createProductCard(product);
            productContainer.appendChild(card);
        }
    }
}

function handleAddToCart(event: Event) {
    const button = event.target as HTMLElement;
    const productId = button.getAttribute("data-product-id");
    if (productId) {
      const selectedProduct = products.find(product => product.id.toString() === productId);
      if (selectedProduct) {
        console.log("Producto seleccionado:", selectedProduct.title);
        carritoContador.push(selectedProduct); // Agregar el producto a la lista de productos en el carrito
        actualizarCarrito(); // Actualizar la visualización del carrito
      }
    }
}


