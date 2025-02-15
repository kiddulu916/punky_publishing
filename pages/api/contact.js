import nodemailer from 'nodemailer'; // Import Nodemailer
import { check, validationResult } from 'express-validator'; // Import validation libraries

// Create a Nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Use environment variable
    port: process.env.SMTP_PORT, // Use environment variable
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER, // Use environment variable
        pass: process.env.SMTP_PASS // Use environment variable
    }
});

// API route handler
export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Validate the request
        const errors = validateRequest(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const { name, email, subject, message } = req.body;

        const mailOptions = {
            from: email, // Sender address
            to: 'recipient@example.com', // Replace with your recipient email
            subject: subject,
            text: `You have a new message from ${name} (${email}):\n\n${message}`
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Form submitted successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Error sending email.' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// Function to validate the request
function validateRequest(data) {
    const errors = [];
    if (!data.name || data.name.length > 50) {
        errors.push({ msg: 'Name is required and must be less than 50 characters.' });
    }
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
        errors.push({ msg: 'Email is required and must be valid.' });
    }
    if (!data.subject || data.subject.length > 100) {
        errors.push({ msg: 'Subject is required and must be less than 100 characters.' });
    }
    if (!data.message || data.message.length > 500) {
        errors.push({ msg: 'Message is required and must be less than 500 characters.' });
    }
    return errors;
} 