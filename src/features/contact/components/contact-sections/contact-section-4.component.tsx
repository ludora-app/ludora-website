'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export default function ContactSection4() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Où nous trouver</h2>
          <p className="text-gray-600">Venez nous rendre visite dans nos bureaux au cœur de Paris.</p>
        </div>

        <div className="mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border shadow-sm">
          {/* Placeholder for map - in a real implementation, this would be a Google Maps or similar embed */}
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}>
            <Map
              style={{ borderRadius: '20px' }}
              defaultZoom={16}
              defaultCenter={{
                lat: 48.8587446,
                lng: 2.3743209,
              }}
              gestureHandling={'none'}
              disableDefaultUI
              clickableIcons={false}
            >
              <Marker
                position={{
                  lat: 48.8587446,
                  lng: 2.3743209,
                }}
                clickable={true}
                onClick={() => {
                  window.open('https://www.google.com/maps/place/40+Rue+du+Chemin+Vert,+75011+Paris,+France', '_blank');
                }}
              />
            </Map>
          </APIProvider>
        </div>
      </div>
    </section>
  );
}
