import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
  };

  // Enable CORS with specific configuration
  app.enableCors(corsOptions);

  // Set a global API prefix
  app.setGlobalPrefix('api');

  // Configure session middleware
  app.use(
    session({
      secret: 'uENlr7n8xoO3qnrV6TeP',
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 60000, // Set the session cookie's max age
      },
    }),
  );

  // Initialize passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  // Start the Nest.js application on port 3000
  await app.listen(3000);
}

bootstrap();
