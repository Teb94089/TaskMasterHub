const axios = require('axios');

async function sendVerificationEmail(email, verificationToken) {
    try {
        const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
            personalizations: [
                {
                    to: [{ email }],
                    subject: 'Please verify your email address',
                },
            ],
            from: { email: 'your@example.com' },
            content: [
                {
                    type: 'text/plain',
                    value: `Click the following link to verify your email address: 
                    http://yourwebsite.com/verify-email?token=${verificationToken}`,
                },
            ],
        }, {
            headers: {
                Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            },
        });

        console.log('Verification email sent:', response.data);
    } catch (error) {
        console.error('Error sending verification email:', error);
    }
}

module.exports = sendVerificationEmail;
