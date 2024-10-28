import { Module } from '@nestjs/common';
import { TypedConfigModule, fileLoader } from 'nest-typed-config';
import { AppController, ConfigController } from './app.controller';
import { AppService } from './app.service';
import { RootConfig } from './config';

@Module({
  imports: [
    TypedConfigModule.forRoot({
      schema: RootConfig,
      load: fileLoader({
        absolutePath: './apps/master/src/config/.env.yaml',
        ignoreEnvironmentVariableSubstitution: false,
        ignoreEmptySearchPlaces: false,
      }),
    }),
  ],
  controllers: [AppController, ConfigController],
  providers: [AppService],
})
export class AppModule {}
