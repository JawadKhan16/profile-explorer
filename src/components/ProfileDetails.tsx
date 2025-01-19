import React from 'react';
import { X, MapPin, Mail, Briefcase, Phone, Globe, Calendar } from 'lucide-react';
import { Profile } from '../data/profiles';

interface ProfileDetailsProps {
  profile: Profile;
  onClose: () => void;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profile, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden" onClick={onClose} />
      <div className="relative bg-white h-full lg:h-auto overflow-auto rounded-t-2xl lg:rounded-lg shadow-xl p-6 mt-auto lg:mt-0">
        {/* Close button - only visible on mobile */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 lg:hidden"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>

        {/* Profile Header */}
        <div className="flex flex-col items-center mb-6 pt-6 lg:pt-0">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-24 h-24 rounded-full object-cover shadow-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
          <p className="text-lg text-gray-600">{profile.occupation}</p>
        </div>

        {/* Profile Details */}
        <div className="space-y-4">
          <div className="flex items-center text-gray-700">
            <MapPin className="w-5 h-5 mr-3 text-blue-500" />
            <span>{profile.address}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Mail className="w-5 h-5 mr-3 text-blue-500" />
            <span>{profile.email}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Briefcase className="w-5 h-5 mr-3 text-blue-500" />
            <span>{profile.occupation}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Phone className="w-5 h-5 mr-3 text-blue-500" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Globe className="w-5 h-5 mr-3 text-blue-500" />
            <span>www.{profile.name.toLowerCase().replace(' ', '')}.com</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Calendar className="w-5 h-5 mr-3 text-blue-500" />
            <span>Joined January 2024</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t">
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;