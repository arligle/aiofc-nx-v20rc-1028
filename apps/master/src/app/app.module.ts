import { Module } from '@nestjs/common';
import { AppController, ConfigController } from './app.controller';
import { AppService } from './app.service';
import { ProjectConfig } from '../config/app.config';
import { setupYamlBaseConfigModule } from '@aio/config';
@Module({
  imports: [
    setupYamlBaseConfigModule(__dirname, ProjectConfig),
  ],
  controllers: [AppController, ConfigController],
  providers: [AppService],
})
export class AppModule {}
