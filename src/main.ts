import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RmqService } from './rmq/rmq.service';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const rmqService = app.get<RmqService>(RmqService);

  app.connectMicroservice(rmqService.getOptions('notification.fcm', true));

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
