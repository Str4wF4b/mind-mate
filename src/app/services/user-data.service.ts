import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private usernameSubject = new BehaviorSubject<string>('User'); // current username subject
  usernameStorage$ = this.usernameSubject.asObservable(); // observed username
  private currentUsername: string = 'User'; // current user name
  private currentEmail: string = ''; // current email address
  private profileImage: string /* | ArrayBuffer */ | null | undefined = null; // profile image URL or data
  private profileImageSubject = new BehaviorSubject<string | null>(localStorage.getItem('profileImage')); // current profile image subject
  profileStorageImage$ = this.profileImageSubject.asObservable(); // observed profile image

  private weeklyQuestionnaireResult: { short: string, text: string, weight: number } = { short: '', text: '', weight: 0 }; // weekly questionnaire result
  private dailyQuestionnaireResult: { short: string, text: string, weight: number } = { short: '', text: '', weight: 0 }; // daily questionnaire result
  private shortQuestionnaireResult: { short: string, text: string, weight: number } = { short: '', text: '', weight: 0 }; // short questionnaire result

  private selectedFeelingSubject = new BehaviorSubject<string>('empty'); // current selected feeling subject
  selectedFeeling$ = this.selectedFeelingSubject.asObservable(); // observed selected feeling

  private recentSong: { title: string, artist: string, songUrl: string } = { title: '', artist: '', songUrl: '' }; // recent song data

  /**
   * Constructor for the UserDataService.
   * Initializes the service with values from localStorage, if available.
   */
  constructor() {
    const savedUsername = localStorage.getItem('usernameStorage');
    if (savedUsername) {
      this.usernameSubject.next(savedUsername);
    }
  }

  /**
   * Sets the username both in the local state and localStorage.
   * 
   * @param username The username to set.
   */
  setUsername(username: string) {
    this.currentUsername = username;

    localStorage.setItem('usernameStorage', username);
    this.usernameSubject.next(username);
  }

  /**
   * Gets the current username stored in the service.
   * 
   * @returns The current username.
   */
  getUsername() {
    return this.currentUsername;
  }

  /**
   * Sets the user's email address in the service.
   * 
   * @param email The email to set.
   */
  setEmail(email: string) {
    this.currentEmail = email;
  }

  /**
   * Gets the user's email address.
   * 
   * @returns The current email address.
   */
  getEmail(): string {
    return this.currentEmail;
  }

  /**
   * Logs the user out by clearing all user data and localStorage items.
   * Resets all stored values to defaults and notifies observers.
   */
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
    localStorage.clear(); // clear all localStorage data
  }

  /**
   * Gets the profile image stored in the service.
   * 
   * @returns The current profile image URL or null if none exists.
   */
  getProfileImage(): string /* | ArrayBuffer */ | null | undefined {
    return this.profileImage;
  }

  /**
   * Sets the profile image URL in the service and localStorage.
   * 
   * @param image The image URL to set.
   */
  setProfileImage(image: string | null/*  | ArrayBuffer | null | undefined */) {
    this.profileImage = image;

    if (image) {
      localStorage.setItem('profileStorageImage', image);
    }

    this.profileImageSubject.next(image);
  }

  /**
   * Sets the weekly questionnaire result.
   * 
   * @param result The weekly questionnaire result to set.
   */
  setWeeklyQuestionnaireResult(result: { short: string, text: string, weight: number }) {
    this.weeklyQuestionnaireResult = result;
  }

  /**
   * Gets the weekly questionnaire result.
   * 
   * @returns The current weekly questionnaire result.
   */
  getWeeklyQuestionnaireResult(): { short: string, text: string, weight: number } {
    return this.weeklyQuestionnaireResult;
  }

  /**
   * Sets the daily questionnaire result.
   * 
   * @param result The daily questionnaire result to set.
   */
  setDailyQuestionnaireResult(result: { short: string, text: string, weight: number }) {
    this.dailyQuestionnaireResult = result;
  }

  /**
   * Gets the daily questionnaire result.
   * 
   * @returns The current daily questionnaire result.
   */
  getDailyQuestionnaireResult(): { short: string, text: string, weight: number } {
    return this.dailyQuestionnaireResult;
  }

  /**
   * Sets the short questionnaire result.
   * 
   * @param result The short questionnaire result to set.
   */
  setShortQuestionnaireResult(result: { short: string, text: string, weight: number }) {
    this.shortQuestionnaireResult = result;
  }

  /**
   * Gets the short questionnaire result.
   * 
   * @returns The current short questionnaire result.
   */
  getShortQuestionnaireResult(): { short: string, text: string, weight: number } {
    return this.shortQuestionnaireResult;
  }

  /**
   * Saves the user's feeling (emotion or mood).
   * 
   * @param feeling The feeling to save.
   */
  saveUserFeeling(feeling: string) {
    this.selectedFeelingSubject.next(feeling);
  }

  /**
   * Saves information about the recently played song.
   * 
   * @param song The song data to save, including title, artist, and URL.
   */
  saveRecentSong(song: { title: string, artist: string, songUrl: string }) {
    this.recentSong = song;
    console.log(song);
  }

  /**
   * Gets the most recently played song data.
   * 
   * @returns The recent song's title, artist, and URL.
   */
  getRecentSong() {
    return this.recentSong;
  }
}
