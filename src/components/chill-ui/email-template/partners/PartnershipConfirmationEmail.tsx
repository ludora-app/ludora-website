import * as React from 'react';

interface PartnershipConfirmationEmailProps {
  companyName: string;
  name: string;
}

export const PartnershipConfirmationEmail: React.FC<PartnershipConfirmationEmailProps> = ({ companyName, name }) => {
  return (
    <div
      style={{
        backgroundColor: '#f9fafb',
        fontFamily: 'Inter, Arial, sans-serif',
        margin: '0 auto',
        maxWidth: '600px',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          padding: '40px',
        }}
      >
        <h1
          style={{
            color: '#111827',
            fontSize: '24px',
            fontWeight: 700,
            marginBottom: '20px',
            marginTop: 0,
          }}
        >
          Merci pour votre intérêt, {name} !
        </h1>

        <p
          style={{
            color: '#4b5563',
            lineHeight: '1.6',
            margin: '0 0 20px',
          }}
        >
          Nous avons bien reçu votre demande de partenariat pour <strong>{companyName}</strong> et nous vous en
          remercions. Notre équipe va l&rsquo;examiner avec attention et reviendra vers vous dans les plus brefs délais.
        </p>

        <div
          style={{
            backgroundColor: '#f9fafb',
            borderLeft: '4px solid #f97316',
            borderRadius: '0 4px 4px 0',
            margin: '24px 0',
            padding: '16px',
          }}
        >
          <p
            style={{
              color: '#111827',
              fontWeight: 600,
              margin: '0 0 10px',
            }}
          >
            Prochaines étapes :
          </p>
          <ol
            style={{
              color: '#4b5563',
              margin: '10px 0 0',
              paddingLeft: '20px',
            }}
          >
            <li style={{ marginBottom: '8px' }}>Notre équipe va analyser votre demande</li>
            <li style={{ marginBottom: '8px' }}>Nous vous contacterons pour discuter des modalités</li>
            <li>Mise en place du partenariat et configuration de votre espace</li>
          </ol>
        </div>

        <p
          style={{
            color: '#4b5563',
            lineHeight: '1.6',
            margin: '0 0 20px',
          }}
        >
          Si vous avez des questions ou souhaitez des informations complémentaires, n&rsquo;hésitez pas à répondre à cet
          email.
        </p>

        <p
          style={{
            color: '#4b5563',
            fontStyle: 'italic',
            margin: '30px 0 0',
          }}
        >
          Cordialement,
          <br />
          L&rsquo;équipe Ludora
        </p>

        <div
          style={{
            borderTop: '1px solid #e5e7eb',
            color: '#9ca3af',
            fontSize: '14px',
            marginTop: '40px',
            paddingTop: '20px',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: '5px 0' }}>© {new Date().getFullYear()} Ludora. Tous droits réservés.</p>
          <p style={{ fontSize: '13px', margin: '5px 0' }}>
            <a href="https://www.ludora.fr/mentions-legales" style={{ color: '#9ca3af', textDecoration: 'none' }}>
              Mentions légales
            </a>
            {' • '}
            <a
              href="https://www.ludora.fr/politique-de-confidentialite"
              style={{ color: '#9ca3af', textDecoration: 'none' }}
            >
              Politique de confidentialité
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipConfirmationEmail;
