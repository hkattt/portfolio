import PocketBase from 'pocketbase';

import { pocketbaseUrl } from '@/lib/config';

export const pb: PocketBase = new PocketBase(pocketbaseUrl);