import {createClient} from 'next-sanity';
import {apiVersion, dataset, projectId} from './env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  timeout: 5000,
  maxRetries: 0,
});
