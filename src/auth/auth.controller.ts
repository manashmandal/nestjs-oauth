import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard, FacebookAuthGuard } from './utils/Guard';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleGoogleLogin() {
    return { message: 'Google Auth' };
  }
  //api/auth/google/redirect
  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleGoogleRedirect() {
    return { message: 'Google Redirect' };
  }

  @Get('facebook/login')
  @UseGuards(FacebookAuthGuard)
  handleFacebookLogin() {
    return { message: 'Facebook Auth' };
  }
  //api/auth/facebook/redirect
  @Get('facebook/redirect')
  @UseGuards(FacebookAuthGuard)
  handleFacebookRedirect() {
    return { message: 'Facebook Redirect' };
  }
}
