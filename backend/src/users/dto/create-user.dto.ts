import { IsEnum, IsOptional, IsString } from 'class-validator';
import { UserRoles, UserRoleType } from '../entity/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  firstName: string;

  @IsString()
  @ApiProperty()
  lastName: string;

  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsString()
  @ApiProperty({ enum: UserRoles, required: false })
  @IsEnum(UserRoles)
  @IsOptional()
  role: UserRoleType;
}
