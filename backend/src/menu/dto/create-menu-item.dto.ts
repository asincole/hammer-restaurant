import { IsString, IsDecimal } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuItemDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsDecimal()
  @ApiProperty()
  price: number;

  @IsString()
  @ApiProperty()
  sku: string;

  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  tags: string[];

  @IsString()
  @ApiProperty()
  description: string;
}
