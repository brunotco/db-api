import { Module } from '@nestjs/common';
import { AuthService } from '@modules/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '@common/security/constants';
import { JwtStrategy } from '@common/security/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '@common/security/local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { AuthController } from '@modules/auth/auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}
