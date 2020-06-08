import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RedocModule, RedocOptions, RedocTheme } from 'nestjs-redoc';
import { AppModule } from './app.module';
import { name, description, version } from '../package.json';
import defaultTheme, { ThemeInterface } from './swagger/theme';

async function bootstrap() {
  /* Express */
  const app = await NestFactory.create(AppModule);

  /* Fastify */
  // const app = await NestFactory.create<NestFastifyApplication>(
  //   AppModule,
  //   new FastifyAdapter({ logger: false }));

  const options = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, options);

  /* Redoc */
  const redocOptions: RedocOptions = {
    title: name,
    logo: {
      url: 'https://askmebet.com/images/amb-logo-full.png',
      backgroundColor: '#F0F0F0',
      altText: description
    },
    sortPropsAlphabetically: false,
    hideDownloadButton: true,
    hideHostname: false,
    theme: defaultTheme
  };
  /* Instead of using SwaggerModule.setup() you call this module */
  await RedocModule.setup('/api', app, document, redocOptions);

  // SwaggerModule.setup('api', app, document);

  await app.listen(3000, '0.0.0.0');
}

bootstrap();
