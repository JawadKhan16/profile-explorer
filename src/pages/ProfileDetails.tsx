import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { profiles } from '../data/profiles';
import Map from '../components/Map';
import { ArrowLeft } from 'lucide-react';

function ProfileDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const profile = useMemo(() => {
    return profiles.find(p => p.id === Number(id));
  }, [id]);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 mb-6 hover:text-blue-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Profiles
        </button>

        {/* Map Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          <div className="h-[calc(100%-2rem)]">
            <Map profiles={[profile]} selectedProfile={profile} />
          </div>
        </div>

        {/* Profile Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-20 h-20 rounded-full object-cover mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
              <p className="text-gray-600">{profile.occupation}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Email:</span> {profile.email}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Address:</span> {profile.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsPage;
