/**
 * Interfaz que define la estructura de un producto.
 */
export interface Product {
  /**
   * Nombre del producto.
   */
  name: string;

  /**
   * Fecha de creación o disponibilidad del producto.
   */
  date: Date;

  /**
   * Precio del producto (se debe cambiar a tipo `number` si el precio es numérico).
   */
  price: boolean; // Cambiar a `number` si representa un valor numérico.

  /**
   * Categoría a la que pertenece el producto.
   */
  category: string;
}
