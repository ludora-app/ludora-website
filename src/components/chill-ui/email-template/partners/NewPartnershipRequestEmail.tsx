import * as React from 'react';

interface NewPartnershipRequestEmailProps {
  companyName: string;
  email: string;
  name: string;
  phoneNumber: string;
  submissionDate: string;
}

export const NewPartnershipRequestEmail: React.FC<NewPartnershipRequestEmailProps> = ({
  companyName,
  email,
  name,
  phoneNumber,
}) => {
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
          background: 'linear-gradient(to right, #f97316, #e11d48)',
          borderRadius: '8px 8px 0 0',
          color: 'white',
          padding: '25px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '24px', margin: 0 }}>Nouvelle demande de partenariat</h1>
        <p style={{ margin: '8px 0 0', opacity: 0.9 }}>Une nouvelle structure souhaite devenir partenaire</p>
      </div>

      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '0 0 8px 8px',
          borderTop: 'none',
          padding: '30px',
        }}
      >
        <div style={{ margin: '20px 0' }}>
          <div
            style={{
              borderBottom: '1px solid #f3f4f6',
              display: 'flex',
              marginBottom: '12px',
              paddingBottom: '12px',
            }}
          >
            <span
              style={{
                color: '#4b5563',
                flexShrink: 0,
                fontWeight: 600,
                width: '150px',
              }}
            >
              Structure
            </span>
            <span style={{ color: '#111827', flexGrow: 1 }}>{companyName}</span>
          </div>

          <div
            style={{
              borderBottom: '1px solid #f3f4f6',
              display: 'flex',
              marginBottom: '12px',
              paddingBottom: '12px',
            }}
          >
            <span
              style={{
                color: '#4b5563',
                flexShrink: 0,
                fontWeight: 600,
                width: '150px',
              }}
            >
              Nom du contact
            </span>
            <span style={{ color: '#111827', flexGrow: 1 }}>{name}</span>
          </div>

          <div
            style={{
              borderBottom: '1px solid #f3f4f6',
              display: 'flex',
              marginBottom: '12px',
              paddingBottom: '12px',
            }}
          >
            <span
              style={{
                color: '#4b5563',
                flexShrink: 0,
                fontWeight: 600,
                width: '150px',
              }}
            >
              Email
            </span>
            <a
              href={`mailto:${email}`}
              style={{
                color: '#3b82f6',
                flexGrow: 1,
                textDecoration: 'none',
              }}
            >
              {email}
            </a>
          </div>

          {phoneNumber && (
            <div
              style={{
                borderBottom: '1px solid #f3f4f6',
                display: 'flex',
                marginBottom: '12px',
                paddingBottom: '12px',
              }}
            >
              <span
                style={{
                  color: '#4b5563',
                  flexShrink: 0,
                  fontWeight: 600,
                  width: '150px',
                }}
              >
                Téléphone
              </span>
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                style={{
                  color: '#3b82f6',
                  flexGrow: 1,
                  textDecoration: 'none',
                }}
              >
                {phoneNumber}
              </a>
            </div>
          )}

          <div
            style={{
              borderBottom: '1px solid #f3f4f6',
              display: 'flex',
              marginBottom: '12px',
              paddingBottom: '12px',
            }}
          >
            <span
              style={{
                color: '#4b5563',
                flexShrink: 0,
                fontWeight: 600,
                width: '150px',
              }}
            >
              Voir dans le CRM
            </span>
            <a
              href="https://twenty.ludora.fr/objects/opportunities?viewId=c7cd4dc6-7cbe-4d3d-b542-111741cb6e4d"
              style={{
                color: '#3b82f6',
                flexGrow: 1,
                textDecoration: 'none',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder à l&apos;opportunité dans le CRM
            </a>
          </div>
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <a
            href={`mailto:${email}?subject=Demande de partenariat - ${encodeURIComponent(companyName)}`}
            style={{
              background: 'linear-gradient(to right, #f97316, #e11d48)',
              borderRadius: '6px',
              color: 'white',
              display: 'inline-block',
              fontWeight: 600,
              marginTop: '20px',
              padding: '12px 24px',
              textDecoration: 'none',
            }}
          >
            Répondre à cette demande
          </a>
        </div>

        <div
          style={{
            borderTop: '1px solid #e5e7eb',
            color: '#6b7280',
            fontSize: '14px',
            marginTop: '30px',
            paddingTop: '20px',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: '5px 0' }}>Ludora - Plateforme de réservation de terrains sportifs</p>
          <p style={{ color: '#9ca3af', fontSize: '13px', margin: '5px 0' }}>
            Ceci est un email automatique, merci de ne pas y répondre directement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewPartnershipRequestEmail;
