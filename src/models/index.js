// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CreateParticipant, CreateMeeting, CreateHost } = initSchema(schema);

export {
  CreateParticipant,
  CreateMeeting,
  CreateHost
};