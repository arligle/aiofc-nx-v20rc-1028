import { Controller, Get } from '@nestjs/common';
import { I18n, I18nContext } from '@aio/i18n';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/hello')
  async getI18nHello(@I18n() i18n: I18nContext) {
    return await i18n.t('test.HELLO');
  }
}

@Controller('/config')
export class ConfigController {
  constructor(private readonly appService: AppService) {}

  @Get()
  showConfig() {
    return this.appService.readConfig();
  }
}