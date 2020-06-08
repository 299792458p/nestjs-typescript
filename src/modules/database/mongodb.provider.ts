import * as mongoose from 'mongoose';
import { AccountSchema } from './database.schema';

export const mongodbProviders = [
    {
        provide: 'MONGODB_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb://localhost/test'),
    },
];
