import * as mongoose from 'mongoose';
import { AccountSchema } from './database.schema';

export const accountModelProviders = [
    {
        provide: 'ACCOUNT_MODEL',
        useFactory: (connection: mongoose.Connection) => connection.model('Account', AccountSchema),
        inject: ['MONGODB_CONNECTION'],
    },
];