import { Injectable } from '@nestjs/common';
import { ProjectConfig } from '../config/app.config';
@Injectable()
export class AppService {

  constructor(
    private config: ProjectConfig
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

}
