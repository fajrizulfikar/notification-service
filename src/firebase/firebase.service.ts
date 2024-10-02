import { Injectable, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private logger = new Logger(FirebaseService.name);

  async sendPushNotification(payload: any) {
    try {
      const response = await admin.messaging().send(payload);
      this.logger.log(`Notification sent: ${response}`);
      return response;
    } catch (error) {
      this.logger.error(`Error sending notification: ${error}`);
      throw error;
    }
  }
}
