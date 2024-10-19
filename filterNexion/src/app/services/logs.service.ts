import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private logs: any[] = [];

  constructor() {}

  // Función para registrar el log
  addLog(logEntry: any) {
    this.logs.push(logEntry);
    console.log('Nuevo log:', logEntry); // Puedes enviar los logs a un backend o almacenarlos
  }

  getLogs() {
    return this.logs;
  }
}
