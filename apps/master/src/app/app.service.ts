import { Injectable } from '@nestjs/common';
import { ProjectConfig } from '../config/app.config';
import { I18nContext, I18nService } from '@aio/i18n';
@Injectable()
export class AppService {

  constructor(
    private config: ProjectConfig,
    private readonly i18n: I18nService
  ) {}

  readConfig(): string { 
    const out = [
      `project.name: ${this.config.name}`,
      `project.version: ${this.config.version}`,
      `project.time: ${this.config.title}`,
    ].join('\n');

    return `${out}\n`;
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getHello(): string {
    return this.i18n.t('test.HELLO', { lang: I18nContext.current().lang });
  }
}
