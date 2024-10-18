import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  paginate<T>(data: T[], pageSize: number, currentPage: number): T[] {
    const startIndex = (currentPage - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }

  getTotalPages(dataLength: number, pageSize: number): number {
    return Math.ceil(dataLength / pageSize);
  }
}
