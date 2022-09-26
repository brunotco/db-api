import { Module } from '@nestjs/common';
import { AuthService } from '@modules/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@common/security/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '@common/security/local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@entities/user.entity';
import { AuthController } from '@modules/auth/auth.controller';
import { jwtConfig } from '@common/config/jwt.config';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync(jwtConfig),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
