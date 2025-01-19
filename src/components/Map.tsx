import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Profile } from '../data/profiles';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  profiles: Profile[];
  selectedProfile: Profile | null;
}

const Map: React.FC<MapProps> = ({ profiles, selectedProfile }) => {
  const center: [number, number] = [39.8283, -98.5795]; // Center of USA

  return (
    <MapContainer
      center={selectedProfile?.coordinates || center}
      zoom={selectedProfile ? 13 : 4}
      className="w-full h-full rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {profiles.map((profile) => (
        <Marker
          key={profile.id}
          position={profile.coordinates}
          icon={L.icon({
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          })}
        >
          <Popup>
            <div className="text-center">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
              />
              <h3 className="font-semibold">{profile.name}</h3>
              <p className="text-sm text-gray-600">{profile.occupation}</p>
              <p className="text-sm text-gray-600">{profile.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;