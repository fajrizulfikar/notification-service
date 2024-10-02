import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';
import { DatabaseModule } from './database/database.module';
import { RmqModule } from './rmq/rmq.module';
import { NotificationService } from './notification/notification.service';
import { NotificationController } from './notification/notification.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true }),
    FirebaseModule,
    // DatabaseModule,
    RmqModule.register({ name: 'NOTIFICATION_SERVICE' }),
  ],
  providers: [AppService, NotificationService],
  controllers: [NotificationController],
})
export class AppModule {}
