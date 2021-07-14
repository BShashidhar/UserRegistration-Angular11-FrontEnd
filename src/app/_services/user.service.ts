import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

const baseUrl = `${environment.apiUrl}`;

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(baseUrl + '/users');
  }

  getById(id: string) {
    return this.http.get<User>(`${baseUrl}/user/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl + '/' + 'users' + '/' + 'new', params);
  }

  update(id: string, params: any) {
    return this.http.put(`${baseUrl}/user/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/user/${id}`);
  }
}
