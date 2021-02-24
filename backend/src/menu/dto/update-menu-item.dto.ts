import { IsDecimal, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMenuItemDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  name: string;

  @IsDecimal()
  @IsOptional()
  @ApiPropertyOptional()
  price: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  sku: string;

  @IsString({ each: true })
  @IsOptional()
  @ApiProperty({ type: [String], required: false })
  tags: string[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description: string;
}
