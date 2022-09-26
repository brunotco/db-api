import { Controller, Request, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from '@modules/auth/auth.service';
import { UserEntity } from '@entities/user.entity';
import { LocalAuthGuard } from '@common/security/local.auth.guard';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() user: UserEntity): Promise<UserEntity> {
    return this.authService.signup(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<{ access_token: string }> {
    return this.authService.login(req.user);
  }
}
