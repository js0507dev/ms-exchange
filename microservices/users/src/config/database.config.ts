import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export interface DatabaseConfiguration {
  uri: string;
  username?: string;
  password?: string;
}

export const databaseConfigurationSchema = Joi.object().keys({
  uri: Joi.string().uri(),
  username: Joi.string(),
  password: Joi.string(),
});

export default registerAs('database', () => {
  return {
    uri: process.env.DATABASE_URI || 'mongodb://localhost:27017/my-users',
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  };
});
