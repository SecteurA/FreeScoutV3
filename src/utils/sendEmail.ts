import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

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
