import { IsString } from 'class-validator';

export class ProjectConfig {
  @IsString()
  name!: string;

  @IsString()
  version!: string;

  @IsString()
  title!: string;
}
