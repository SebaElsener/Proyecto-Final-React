# Proyecto final React - IE Reparaciones

Proyecto e-commerce de productos de tecnología: móviles, PC y notebooks.

## Navegación

Los productos se pueden comprar a través de las secciones siguientes:

### `INICIO - Logo "IEReparaciones"`

Portada de la web, muestra productos random de la base de datos *Firebase*.

### `CELULARES Y TABLETS - NOTEBOOK - PC`

Renderiza los productos teniendo en cuenta la *categoría*.

### `Widget carrito`

Sección para el carrito de compras, muestra los productos comprados y funcionalidades del carrito, y la cantidad en el widget.  Haciendo click en *"Terminar compra"* pide nombre y email para almacenar los datos de la compra en *Firebase*.  Finalmente muestra un resúmen y un botón para volver al inicio.

## Comentarios

*  He utilizado la librería [*Toastify*](https://www.npmjs.com/package/react-toastify) para mostrar mensajes cuando quiero agregar 0 productos al carrito y también al agregar 1 o más productos.

*  Los datos de los productos están almacenados en [*Firebase*](https://firebase.google.com/?hl=es).
*  Estructura de cada producto en *Firestore database*:

   ```
   {
      category: "notebook",
      description: "Notebook para tareas oficina y home",
      name: "Notebook gama base",
      picurl: "https://www.dropbox.com/s/mfwmkdr14l4rhoz/notebookentrada.png?raw=1",
      price: 47500,
      stock: 5
   }
   ```

* Estructura del formulario de contacto (nombre/apellido y email):

  ```
  {
    comprador {
      email: "sle@gmail.com"
      name: "Sebastián Elsener"
    }
    items [
      0: {
      id: "DaJ6iznMVu05sWsv7sKc"
      price: 294560
      product: "PC gamer"
      quant: 1
      }
    ]
    totalPrice: 294560
  }
  ```

*  Las imágenes están almacenadas en *google drive*.
*  Todos los *id* se obtienen automáticamente desde *Firestore*.