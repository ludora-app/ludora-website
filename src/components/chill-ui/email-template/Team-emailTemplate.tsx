import type * as React from 'react';

interface TeamEmailTemplateProps {
  email: string;
  message: string;
  name: string;
  subject: string;
}

export const TeamEmailTemplate: React.FC<TeamEmailTemplateProps> = ({ email, message, name, subject }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Nouveau message de contact</title>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
            body {
              font-family: 'Inter', sans-serif;
              -webkit-font-smoothing: antialiased;
              font-size: 16px;
              line-height: 1.5;
              margin: 0;
              padding: 0;
              background-color: #f9fafb;
              color: #111827;
            }
            
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            
            .header {
              background: linear-gradient(to right, #f97316, #e11d48);
              padding: 20px;
              color: white;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            
            .content {
              background-color: #ffffff;
              padding: 30px;
              border-radius: 0 0 8px 8px;
              border: 1px solid #e5e7eb;
              border-top: none;
            }
            
            .logo {
              font-weight: bold;
              font-size: 24px;
              margin-bottom: 10px;
            }
            
            h1 {
              font-size: 20px;
              margin: 0 0 20px;
              color: #111827;
            }
            
            .field {
              margin-bottom: 20px;
              border-bottom: 1px solid #f3f4f6;
              padding-bottom: 15px;
            }
            
            .field:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            
            .label {
              font-weight: 600;
              color: #4b5563;
              display: block;
              margin-bottom: 5px;
            }
            
            .value {
              color: #111827;
            }
            
            .message-box {
              background-color: #f9fafb;
              border-radius: 8px;
              padding: 15px;
              margin-top: 5px;
              border-left: 4px solid #f97316;
            }
            
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 14px;
              color: #6b7280;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <div className="logo">LUDORA</div>
            <div>Nouveau message du formulaire de contact</div>
          </div>

          <div className="content">
            <h1>Détails du message</h1>

            <div className="field">
              <div className="label">Nom</div>
              <div className="value">{name}</div>
            </div>

            <div className="field">
              <div className="label">Email</div>
              <div className="value">
                <a href={`mailto:${email}`} style={{ color: '#f97316', textDecoration: 'none' }}>
                  {email}
                </a>
              </div>
            </div>

            <div className="field">
              <div className="label">Sujet</div>
              <div className="value">{subject}</div>
            </div>

            <div className="field">
              <div className="label">Message</div>
              <div className="message-box">{message}</div>
            </div>
          </div>

          <div className="footer">
            <p>
              Ce message a été envoyé via le formulaire de contact du site Ludora le{' '}
              {new Date().toLocaleDateString('fr-FR', {
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </p>
            <p>© {new Date().getFullYear()} Ludora. Tous droits réservés.</p>
          </div>
        </div>
      </body>
    </html>
  );
};
