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
  
  private weeklyQuestionnaireResult: { short: string, text: string, weight: number} = { short: '', text: '', weight: 0 };
  private dailyQuestionnaireResult: {  short: string, text: string, weight: number} = { short: '', text: '', weight: 0 };
  private shortQuestionnaireResult: {  short: string, text: string, weight: number} = { short: '', text: '', weight: 0 };

  private selectedFeelingSubject = new BehaviorSubject<string>('empty');
  selectedFeeling$ = this.selectedFeelingSubject.asObservable();

  private recentSong: { title: string, artist: string, songUrl: string } = { title: '', artist: '', songUrl: '' };

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
    this.saveUserFeeling('empty');
    this.setWeeklyQuestionnaireResult({ short: '', text: '', weight: 0 });
    this.setDailyQuestionnaireResult({ short: '', text: '', weight: 0 });
    this.setShortQuestionnaireResult({ short: '', text: '', weight: 0 });
    localStorage.clear();
  }

  getProfileImage(): string /* | ArrayBuffer */ | null | undefined {
    return this.profileImage;
  }

  setProfileImage(image: string/*  | ArrayBuffer | null | undefined */) {
    this.profileImage = image;
    
    localStorage.setItem('profileStorageImage', image);
    this.profileImageSubject.next(image);
  }

  setWeeklyQuestionnaireResult(result: { short: string, text: string, weight: number}) {
    this.weeklyQuestionnaireResult = result;
  }

  getWeeklyQuestionnaireResult(): { short: string, text: string, weight: number} {
    return this.weeklyQuestionnaireResult;
  } 

  setDailyQuestionnaireResult(result: { short: string, text: string, weight: number}) {
    this.dailyQuestionnaireResult = result;
  }

  getDailyQuestionnaireResult(): { short: string, text: string, weight: number} {
    return this.dailyQuestionnaireResult;
  }

  setShortQuestionnaireResult(result: { short: string, text: string, weight: number}) {
    this.shortQuestionnaireResult = result;
  }

  getShortQuestionnaireResult(): { short: string, text: string, weight: number} {
    return this.shortQuestionnaireResult;
  }

  saveUserFeeling(feeling: string) {
    this.selectedFeelingSubject.next(feeling);
  }

  saveRecentSong(song: { title: string, artist: string, songUrl: string }) {
    this.recentSong = song;
    console.log(song);
  }

  getRecentSong() {
    return this.recentSong;
  }
}
