"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactMessage = void 0;
const resend_1 = require("resend");
const Contact_1 = __importDefault(require("../models/Contact"));
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
const sendContactMessage = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;
        // Save to MongoDB
        const contactMessage = await Contact_1.default.create({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.toLowerCase().trim(),
            phone: phone?.trim(),
            message: message.trim()
        });
        // Send Notification Email to Admin
        await resend.emails.send({
            from: 'system@pacmack.com',
            to: [process.env.ADMIN_EMAIL || ''],
            subject: `New Message from ${firstName} ${lastName}`,
            html: `<p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
             <p><strong>Message:</strong> ${message}</p>`
        });
        res.status(201).json({
            success: true,
            message: 'Your message has been sent successfully!'
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.sendContactMessage = sendContactMessage;
