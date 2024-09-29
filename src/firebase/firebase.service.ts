import { Inject, Injectable, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private logger = new Logger(FirebaseService.name);

  constructor(
    @Inject('FIREBASE_APP') private readonly firebaseApp: admin.app.App,
  ) {}

  async sendPushNotification(payload: any) {
    try {
      const response = await this.firebaseApp.messaging().send(payload);
      this.logger.log(`Notification sent: ${response}`);
      return response;
    } catch (error) {
      this.logger.error(`Error sending notification: ${error}`);
      throw error;
    }
  }
}
