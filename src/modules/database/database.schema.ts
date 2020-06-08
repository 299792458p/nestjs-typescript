import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Account extends Document {
    @Prop({ required: true })
    accountId: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, type: [String] })
    parentAccountId: string[];
}

export const AccountSchema = SchemaFactory.createForClass(Account);