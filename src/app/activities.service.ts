import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  private apiUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Activities';

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  addData(newItem: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newItem);
  }
  updateData(updatedItem: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${updatedItem.id}`, updatedItem);
  }
  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
