import * as React from 'react';
interface EmailTemplateProps {
  message: string;
  name: string;
  subject: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ message, name, subject }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>{'Merci pour votre message'}</title>
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
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              background-color: #f9fafb;
              color: #111827;
            }
            
            .email-wrapper {
              width: 100%;
              margin: 0;
              padding: 0;
              background-color: #f9fafb;
            }
            
            .email-content {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            
            .email-header {
              padding: 25px 0;
              text-align: center;
            }
            
            .email-body {
              background-color: #ffffff;
              border: 1px solid #e5e7eb;
              border-radius: 16px;
              padding: 40px;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            
            .email-footer {
              padding: 20px 0;
              text-align: center;
              font-size: 14px;
              color: #6b7280;
            }
            
            .logo {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 20px;
            }
            
            .logo-icon {
              width: 40px;
              height: 40px;
              border-radius: 8px;
              background: linear-gradient(to bottom right, #f97316, #e11d48);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: bold;
              font-size: 20px;
              margin-right: 10px;
            }
            
            .logo-text {
              font-weight: bold;
              font-size: 20px;
            }
            
            h1 {
              color: #111827;
              font-size: 24px;
              font-weight: 700;
              margin: 0 0 20px;
            }
            
            p {
              margin: 0 0 24px;
            }
            
            .message-box {
              background-color: #f9fafb;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
              border-left: 4px solid #f97316;
            }
            
            .button {
              display: inline-block;
              background: linear-gradient(to right, #f97316, #e11d48);
              color: #ffffff;
              font-weight: 600;
              text-decoration: none;
              text-align: center;
              padding: 12px 24px;
              border-radius: 8px;
              margin: 20px 0;
            }
            
            .info-row {
              margin-bottom: 12px;
            }
            
            .info-label {
              font-weight: 600;
              color: #4b5563;
            }
            
            .social-links {
              display: flex;
              justify-content: center;
              margin: 20px 0;
            }
            
            .social-link {
              display: inline-block;
              margin: 0 10px;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background-color: #f3f4f6;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            @media only screen and (max-width: 600px) {
              .email-body {
                padding: 24px;
              }
            }
          `}
        </style>
      </head>
      <body>
        <div className="email-wrapper">
          <div className="email-content">
            {/* <div className="email-header">
              <img src="./favicon.png" alt="Ludora" width={100} height={100} />
            </div> */}
            <div className="email-body">
              <div>
                <h1 className="text-#6b7280">Merci pour votre message, {name} !</h1>
                <p className="text-#6b7280">
                  Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés. Notre équipe va
                  l'examiner et vous répondra dans les plus brefs délais.
                </p>

                <div className="message-box">
                  <div className="info-row">
                    <span className="info-label">Sujet :</span> {subject}
                  </div>
                  <div style={{ marginTop: '12px' }} className="text-#6b7280">
                    {message}
                  </div>
                </div>

                <p className="text-#6b7280">
                  En attendant, n'hésitez pas à explorer notre application pour découvrir toutes les fonctionnalités qui
                  vous permettront de trouver des partenaires de jeu et d'organiser des matchs facilement.
                </p>

                <div style={{ textAlign: 'center' }}>
                  <a href="https://ludora.fr/fonctionnalites" className="button" style={{ color: '#fff' }}>
                    Découvrir nos fonctionnalités
                  </a>
                </div>
              </div>
            </div>

            <div className="email-footer">
              <p>
                © {new Date().getFullYear()} Ludora. Tous droits réservés.
                <br />
                123 Avenue des Sports, 75000 Paris, France
              </p>

              <p>
                <a
                  href="https://ludora.fr/politique-de-confidentialite"
                  style={{ color: '#6b7280', textDecoration: 'underline' }}
                >
                  Politique de confidentialité
                </a>
                {' | '}
                <a
                  href="https://ludora.fr/conditions-utilisation"
                  style={{ color: '#6b7280', textDecoration: 'underline' }}
                >
                  Conditions d'utilisation
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};
