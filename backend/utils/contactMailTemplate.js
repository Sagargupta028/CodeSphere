const contactMailTemplate = (contactData) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>New Contact Message - CodeSphere</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                background: linear-gradient(135deg, #fb4c19, #d6927c);
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
            }
            .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 8px 8px;
                border: 1px solid #ddd;
            }
            .field {
                margin-bottom: 15px;
                padding: 10px;
                background: white;
                border-radius: 5px;
                border-left: 4px solid #fb4c19;
            }
            .field-label {
                font-weight: bold;
                color: #fb4c19;
                margin-bottom: 5px;
            }
            .field-value {
                color: #555;
            }
            .message-box {
                background: white;
                padding: 15px;
                border-radius: 5px;
                border: 1px solid #ddd;
                margin-top: 10px;
            }
            .footer {
                text-align: center;
                margin-top: 20px;
                color: #666;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>🚀 New Contact Message</h1>
            <p>CodeSphere Contact Form Submission</p>
        </div>
        
        <div class="content">
            <p>You have received a new contact message from your CodeSphere website:</p>
            
            <div class="field">
                <div class="field-label">👤 Name:</div>
                <div class="field-value">${contactData.firstName} ${contactData.lastName}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📧 Email:</div>
                <div class="field-value">${contactData.email}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📱 Phone:</div>
                <div class="field-value">${contactData.phone}</div>
            </div>
            
            <div class="field">
                <div class="field-label">💬 Message:</div>
                <div class="message-box">${contactData.message}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📅 Submitted:</div>
                <div class="field-value">${new Date().toLocaleString()}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>This email was sent from your CodeSphere contact form.</p>
            <p>Please reply directly to ${contactData.email} to respond to this inquiry.</p>
        </div>
    </body>
    </html>
    `;
};

export default contactMailTemplate;
