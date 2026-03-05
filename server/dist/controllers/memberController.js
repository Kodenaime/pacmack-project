"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinCommunity = void 0;
const Member_1 = __importDefault(require("../models/Member"));
const resend_1 = require("resend");
const joinCommunity = async (req, res) => {
    try {
        const { firstName, middleName, lastName, email, whatsapp, ageBracket, sex, passportCountry, countryOfResidence, currentEngagement, category, joinCommunityArm, reasonForJoining } = req.body;
        // Check required fields (middleName is optional)
        const requiredFields = [
            firstName, lastName, email, whatsapp, ageBracket, sex,
            passportCountry, countryOfResidence, currentEngagement,
            category, joinCommunityArm, reasonForJoining
        ];
        if (requiredFields.some(field => !field)) {
            return res.status(400).json({ success: false, message: "Please fill all required fields." });
        }
        const normalizedEmail = email.toLowerCase().trim();
        const existingMember = await Member_1.default.findOne({ email: normalizedEmail });
        if (existingMember) {
            return res.status(409).json({ success: false, message: "Email already exists." });
        }
        const newMember = await Member_1.default.create({
            ...req.body,
            email: normalizedEmail,
            status: "Pending"
        });
        // 4️⃣ Send Welcome Email (If API Key Exists)
        if (process.env.RESEND_API_KEY) {
            const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
            try {
                await resend.emails.send({
                    from: "PACMACK <community@pacmack.com>",
                    to: [normalizedEmail],
                    subject: "Welcome to the Community!",
                    html: `
            <h1>Welcome ${firstName}!</h1>
            <p>Your application is under review.</p>
            <p>We’re excited to have you join us.</p>
          `,
                });
            }
            catch (emailError) {
                console.error("Email sending failed:", emailError);
                // Do NOT fail registration if email fails
            }
        }
        else {
            console.warn("RESEND_API_KEY is not set. Email not sent.");
        }
        return res.status(201).json({
            success: true,
            message: "Application submitted successfully!",
            data: newMember,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });
    }
};
exports.joinCommunity = joinCommunity;
