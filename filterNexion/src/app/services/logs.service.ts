import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private logs: any[] = [];

  constructor() {}

  /**
   * Añade un nuevo log a la lista de logs.
   *
   * @param logEntry - El registro de log que se va a agregar, puede contener información de filtros, usuario, fecha, etc.
   */
  addLog(logEntry: any) {
    this.logs.push(logEntry);
    console.log('Nuevo log:', logEntry); // Puedes enviar los logs a un backend o almacenarlos localmente.
  }

  /**
   * Retorna todos los logs almacenados.
   *
   * @returns Un arreglo con los logs almacenados.
   */
  getLogs() {
    return this.logs;
  }
}
