import { Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID:
        '63542791492-td9pggit4ku9uafuupjllo1fldf3au5h.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/api/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    try {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);

      const user = await this.authService.validateUser({
        email: profile.emails[0].value,
        displayName: profile.displayName,
      });

      console.log('Validate');
      console.log(user);

      return user || null;
    } catch (error) {
      console.error('Error validating user:', error);
      return null;
    }
  }
}
