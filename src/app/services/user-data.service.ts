import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private usernameSubject = new BehaviorSubject<string>('User');
  username$ = this.usernameSubject.asObservable();
  private currentUsername: string = 'User';
  private currentEmail: string = '';
  private profileImage: string /* | ArrayBuffer */ | null | undefined = null;
  private profileImageSubject = new BehaviorSubject<string | null>(localStorage.getItem('profileImage'));
  profileStorageImage$ = this.profileImageSubject.asObservable();

  constructor() { 
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      this.usernameSubject.next(savedUsername);
    }
  }

  /**
   * 
   * @param username 
   */
  setUsername(username: string) {
    this.usernameSubject.next(username);
    this.currentUsername = username;
    localStorage.setItem('username', username);
  }

  getUsername() {
    return this.currentUsername;
  }

  setEmail(email: string) {
    this.currentEmail = email;
  }

  getEmail(): string {
    return this.currentEmail;
  }

  logout() {
    this.usernameSubject = new BehaviorSubject<string>('User');
    this.username$ = this.usernameSubject.asObservable();
    this.currentUsername = 'User';
    this.currentEmail = '';
  }

  getProfileImage(): string /* | ArrayBuffer */ | null | undefined {
    return this.profileImage;
  }

  setProfileImage(image: string/*  | ArrayBuffer | null | undefined */) {
    this.profileImage = image;
    
    localStorage.setItem('profileStorageImage', image);
    this.profileImageSubject.next(image);
  }
}
