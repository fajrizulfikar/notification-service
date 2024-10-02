import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import * as admin from 'firebase-admin';

@Module({
  imports: [],
  providers: [FirebaseService],
})
export class FirebaseModule {
  constructor() {
    const firebaseConfig = {
      projectId: process.env.PROJECT_ID,
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
    } as admin.ServiceAccount;

    admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
    });
  }
}
