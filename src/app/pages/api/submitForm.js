// pages/api/submitForm.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Example nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    // Example email options
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for your submission',
      text: 'Your form has been submitted successfully!',
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    // Here, you can perform any necessary validation and store the form data in a database.

    // For simplicity, let's just log the data for now.
    console.log('Form Data:', { name, email, phone, message });

    res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
