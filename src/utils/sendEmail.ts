import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey('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');

interface EmailData {
  name: string;
  email: string;
  phone: string;
}

export const sendEmail = async (data: EmailData) => {
  const msg = {
    to: 'contact@freescout-installation.com',
    from: 'contact@freescout-installation.com', // Updated from address
    subject: 'New Contact Request - FreeScout Installation',
    text: `
      New contact request received:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
    `,
    html: `
      <h2>New Contact Request</h2>
      <p>A new contact request has been received:</p>
      <ul>
        <li><strong>Name:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
      </ul>
    `,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
