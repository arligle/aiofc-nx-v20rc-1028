import { IsString, IsNumber, Allow, ValidateNested, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';

export class Config {
  @IsString()
  public readonly host!: string;

  @IsNumber()
  public readonly port!: number;
}

// validator is omitted for simplicity
export class TableConfig {
    @IsString()
    public readonly name!: string;
  }
  
  export class DatabaseConfig {
    @IsString()
    public readonly name!: string;
  
    @Type(() => TableConfig)
    @ValidateNested()
    @IsDefined()
    public readonly table!: TableConfig;
  }
  
  export class RootConfig {
    @IsString()
    public readonly name!: string;
  
    @Type(() => DatabaseConfig)
    @ValidateNested()
    @IsDefined()
    public readonly database!: DatabaseConfig;
  }