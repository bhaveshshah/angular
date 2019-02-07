import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate, CanLoad {
  constructor() {}

  canActivate(): boolean {
    return this.isUserLoggedIn();
  }

  canLoad(): boolean {
    return this.canUserLoad();
  }

  private isUserLoggedIn(): boolean {
    return true;
  }

  private canUserLoad(): boolean {
    return true;
  }
}
