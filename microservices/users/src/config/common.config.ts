import * as Joi from 'joi';

import { databaseConfigurationSchema } from '@src/config/database.config';

export const configurationSchema = Joi.object().keys({
  port: Joi.number(),
  nodeEnv: Joi.string().valid('development', 'stage', 'production', 'test'),
  database: databaseConfigurationSchema,
});

export default function register() {
  return {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
  };
}
