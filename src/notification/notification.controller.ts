import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('notification')
export class NotificationController {
  constructor() {}

  @EventPattern('notification.fcm')
  handleFcmMessage(
    @Payload()
    data: {
      identifier: string;
      type: string;
      deviceId: string;
      text: string;
    },
  ) {
    if (this.isValidMessage(data)) {
      const { identifier, type, deviceId, text } = data;

      console.log('Received notification:', identifier, type, deviceId, text);
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
