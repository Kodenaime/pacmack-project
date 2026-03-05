import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  isRead: boolean;
  sentAt: Date;
}

const ContactSchema: Schema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, trim: true },
  message: { type: String, required: true, trim: true },
  isRead: { type: Boolean, default: false },
  sentAt: { type: Date, default: Date.now }
});

export default mongoose.model<IContact>('Contact', ContactSchema);