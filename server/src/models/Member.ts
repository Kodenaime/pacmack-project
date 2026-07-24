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
  updatedAt: Date;
}

const MemberSchema = new Schema<IMember>(
  {
    firstName: { type: String, required: true, trim: true, index: true },
    middleName: { type: String, trim: true },
    lastName: { type: String, required: true, trim: true, index: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    whatsapp: { type: String, required: true, trim: true },
    ageBracket: { type: String, required: true },
    sex: { type: String, enum: ['Male', 'Female'], required: true },
    passportCountry: { type: String, required: true, trim: true },
    countryOfResidence: { type: String, required: true, trim: true, index: true },
    currentEngagement: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ['MK/TCK', 'Parent', 'Member Care Professional', 'Mission Leader'],
      index: true,
    },
    joinCommunityArm: { type: String, required: true },
    reasonForJoining: { type: String, required: true, maxlength: 2000 },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Declined'],
      default: 'Pending',
      index: true,
    },
  },
  { timestamps: true }
);

// Compound index for common queries
MemberSchema.index({ status: 1, createdAt: -1 });
MemberSchema.index({ category: 1, status: 1 });

export default mongoose.model<IMember>('Member', MemberSchema);
