import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { FirebaseService } from 'src/firebase/firebase.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @EventPattern('notification.fcm')
  async handleFcmMessage(
    @Payload()
    data: {
      identifier: string;
      type: string;
      deviceId: string;
      text: string;
    },
  ) {
    if (this.isValidMessage(data)) {
      const { deviceId, text } = data;

      const message = {
        token: deviceId,
        webpush: {
          notification: {
            title: 'Incoming message',
            body: text,
          },
        },
      };

      const response = await this.firebaseService.sendPushNotification(message);
      console.log('response', response);
    }
  }

  isValidMessage(msg: any): boolean {
    return (
      typeof msg.identifier === 'string' &&
      typeof msg.type === 'string' &&
      typeof msg.deviceId === 'string' &&
      typeof msg.text === 'string'
    );
  }
}
