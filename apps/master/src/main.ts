/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { AppModule } from './app/app.module';
import { bootstrapFastifyApp } from '@aio/bootstrap';

bootstrapFastifyApp(AppModule);
