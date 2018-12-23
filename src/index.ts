import {BulizhnickApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import * as fs from 'fs';

export {BulizhnickApiApplication};

export async function main(options: ApplicationConfig = {}) {
  options = {
    rest: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      maxAge: 86400,
      credentials: true,
    },
  };

  const app = new BulizhnickApiApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
