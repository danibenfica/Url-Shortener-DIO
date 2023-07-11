import mongoose, { Schema, Document } from 'mongoose';

export interface IURL extends Document {
  hash: string;
  originURL: string;
  shortURL: string;
}

const urlSchema = new Schema<IURL>({
  hash: { type: String, required: true },
  originURL: { type: String, required: true },
  shortURL: { type: String, required: true }
});

export const URLModel = mongoose.model<IURL>('URL', urlSchema);
