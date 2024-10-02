import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';
import { DatabaseModule } from './database/database.module';
import { RmqModule } from './rmq/rmq.module';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true }),
    // FirebaseModule,
    DatabaseModule,
    RmqModule.register({ name: 'NOTIFICATION_SERVICE' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
