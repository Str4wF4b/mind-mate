import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private usernameSubject = new BehaviorSubject<string>('Username');
  username$ = this.usernameSubject.asObservable();

  constructor() { }

  /**
   * 
   * @param username 
   */
  setUsername(username: string) {
    this.usernameSubject.next(username);
  }
}
