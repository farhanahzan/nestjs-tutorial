import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Nest API').setDescription('Nest API DESCRIPTION').setVersion('1.0').build()

  const document = SwaggerModule.createDocument(app, config) //create documentation for the api

  SwaggerModule.setup('/', app, document)
  await app.listen(3000);
}
bootstrap();
