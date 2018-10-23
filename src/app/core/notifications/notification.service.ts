import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

/** UI notifications service */
@Injectable()
export class NotificationService {
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) {}

  /** Displays a self-closing Error notification.
   * @param {string} message - message.
   */
  error(message: string) {
    this.show(message, {
      duration: 3000,
      panelClass: 'error-notification-overlay'
    });
  }

  /** Displays a self-closing Information notification.
   * @param {string} message - message.
   */
  info(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'info-notification-overlay'
    });
  }

  /** Displays a self-closing Success notification.
   * @param {string} message - message.
   */
  success(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'success-notification-overlay'
    });
  }

  /** Displays a self-closing Warning notification.
   * @param {string} message - message.
   */
  warn(message: string) {
    this.show(message, {
      duration: 2500,
      panelClass: 'warning-notification-overlay'
    });
  }

  private show(message: string, configuration: MatSnackBarConfig) {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.open(message, null, configuration));
  }
}
