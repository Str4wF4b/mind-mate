import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private usernameSubject = new BehaviorSubject<string>('User');
  usernameStorage$ = this.usernameSubject.asObservable();
  private currentUsername: string = 'User';
  private currentEmail: string = '';
  private profileImage: string /* | ArrayBuffer */ | null | undefined = null;
  private profileImageSubject = new BehaviorSubject<string | null>(localStorage.getItem('profileImage'));
  profileStorageImage$ = this.profileImageSubject.asObservable();

  constructor() { 
    const savedUsername = localStorage.getItem('usernameStorage');
    if (savedUsername) {
      this.usernameSubject.next(savedUsername);
    }
  }

  /**
   * 
   * @param username 
   */
  setUsername(username: string) {
    this.currentUsername = username;
    
    localStorage.setItem('usernameStorage', username);
    this.usernameSubject.next(username);
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
    this.profileImage = null;
    this.profileImageSubject.next(null);
    localStorage.removeItem('profileImage');
    this.usernameSubject = new BehaviorSubject<string>('User');
    this.usernameStorage$ = this.usernameSubject.asObservable();
    this.currentUsername = 'User';
    this.usernameSubject.next('User');
    localStorage.removeItem('usernameStorage');
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
