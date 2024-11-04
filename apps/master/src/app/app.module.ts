import { Module } from '@nestjs/common';
import { AppController, ConfigController } from './app.controller';
import { AppService } from './app.service';
import { ProjectConfig } from '../config/app.config';
import { setupYamlBaseConfigModule } from '@aio/config';
import {
  AcceptLanguageResolver,
  I18nModule,
  QueryResolver,
  HeaderResolver,
  I18nJsonLoader,
} from '@aio/i18n';
import { join } from 'node:path';

@Module({
  imports: [
    setupYamlBaseConfigModule(__dirname, ProjectConfig),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaders: [
        new I18nJsonLoader({
          path: join(__dirname, '/i18n/'),
        }),
      ],
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
    }),
  ],
  controllers: [AppController, ConfigController],
  providers: [AppService],
})
export class AppModule {}
