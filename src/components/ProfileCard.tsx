import React from 'react';
import { MapPin, Mail, Briefcase } from 'lucide-react';
import { Profile } from '../data/profiles';

interface ProfileCardProps {
  profile: Profile;
  onClick: () => void;
  isSelected: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onClick, isSelected }) => {
  return (
    <div 
      className={`p-4 rounded-lg shadow-md mb-4 cursor-pointer transition-all
        ${isSelected ? 'bg-blue-50 border-2 border-blue-500' : 'bg-white hover:bg-gray-50'}`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold truncate">{profile.name}</h3>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <Briefcase className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="truncate">{profile.occupation}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <Mail className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="truncate">{profile.email}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="truncate">{profile.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;