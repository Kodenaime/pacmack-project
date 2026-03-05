import mongoose, { Schema, Document } from 'mongoose';

export interface IMember extends Document {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  whatsapp: string;
  ageBracket: string;
  sex: 'Male' | 'Female';
  passportCountry: string;
  countryOfResidence: string;
  currentEngagement: string;
  category: 'MK/TCK' | 'Parent' | 'Member Care Professional' | 'Mission Leader';
  joinCommunityArm: string;
  reasonForJoining: string;
  status: 'Pending' | 'Approved' | 'Declined';
  createdAt: Date;
}

const MemberSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String }, 
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  whatsapp: { type: String, required: true },
  ageBracket: { type: String, required: true },
  sex: { type: String, enum: ['Male', 'Female'], required: true },
  passportCountry: { type: String, required: true },
  countryOfResidence: { type: String, required: true },
  currentEngagement: { type: String, required: true },
  category: { type: String, required: true },
  joinCommunityArm: { type: String, required: true },
  reasonForJoining: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IMember>('Member', MemberSchema);