import { Injectable } from '@nestjs/common';
import { RootConfig, DatabaseConfig, TableConfig } from './config';
@Injectable()
export class AppService {
  constructor(
    private config: RootConfig,
    private databaseConfig: DatabaseConfig,
    private tableConfig: TableConfig
  ) {}

  public show(): any {
    const out = [
      `root.name: ${this.config.name}`,
      `root.database.name: ${this.databaseConfig.name}`,
      `root.database.table.name: ${this.tableConfig.name}`,
    ].join('\n');

    return `${out}\n`;
  }
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
