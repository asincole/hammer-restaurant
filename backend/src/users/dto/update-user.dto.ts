import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRoles, UserRoleType } from '../entity/user.entity';

export class UpdateUserDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  firstName: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  lastName: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  username: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  password: string;

  @IsString()
  @ApiProperty({ enum: UserRoles })
  @IsEnum(UserRoles)
  @IsOptional()
  role: UserRoleType;
}
