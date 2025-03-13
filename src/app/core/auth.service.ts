import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '';

  login(email: string, password: string): any {
    return false;
  }

  logout(): void {
  }

  isLoggedIn(): boolean {
    return false;
  }

  register(user: any): any {
    return false;
  }
}
