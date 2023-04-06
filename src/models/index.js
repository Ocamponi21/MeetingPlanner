// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Host } = initSchema(schema);

export {
  Host
};