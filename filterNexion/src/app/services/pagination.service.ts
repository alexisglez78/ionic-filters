import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  /**
   * Realiza la paginación de un arreglo de datos.
   *
   * @template T - Tipo genérico para los elementos del arreglo.
   * @param data - Arreglo de datos que se quiere paginar.
   * @param pageSize - Tamaño de página, la cantidad de elementos por página.
   * @param currentPage - Página actual a mostrar.
   * @returns Un subarreglo de datos que corresponde a la página actual.
   */
  paginate<T>(data: T[], pageSize: number, currentPage: number): T[] {
    const startIndex = (currentPage - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }

  /**
   * Calcula el número total de páginas necesarias para paginar los datos.
   *
   * @param dataLength - El número total de elementos en el arreglo de datos.
   * @param pageSize - Tamaño de página, la cantidad de elementos por página.
   * @returns El número total de páginas.
   */
  getTotalPages(dataLength: number, pageSize: number): number {
    return Math.ceil(dataLength / pageSize);
  }
}
