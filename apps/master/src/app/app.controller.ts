import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
@Controller('/config')
export class ConfigController {
  constructor(private readonly appService: AppService) {}

  @Get()
  showConfig() {
    return this.appService.show();
  }
}
