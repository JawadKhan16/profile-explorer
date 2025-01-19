import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { profiles } from '../data/profiles';
import ProfileCard from '../components/ProfileCard';
import SearchBar from '../components/SearchBar';
import { Users } from 'lucide-react';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOccupation, setSelectedOccupation] = useState('');
  const navigate = useNavigate();

  const occupations = useMemo(() => {
    return Array.from(new Set(profiles.map(profile => profile.occupation)));
  }, []);

  const filteredProfiles = useMemo(() => {
    return profiles.filter(profile => {
      const matchesSearch = (
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesOccupation = !selectedOccupation || profile.occupation === selectedOccupation;
      return matchesSearch && matchesOccupation;
    });
  }, [searchTerm, selectedOccupation]);

  const handleProfileClick = (profile) => {
    navigate(`/profile/${profile.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Users className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Profile Explorer</h1>
        </div>

        {/* Search and Filter */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onOccupationFilter={setSelectedOccupation}
          occupations={occupations}
          selectedOccupation={selectedOccupation}
        />

        {/* Profile List */}
        <div className="bg-white p-6 rounded-lg shadow-md h-[calc(100vh-240px)] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Profiles ({filteredProfiles.length})</h2>
          {filteredProfiles.map(profile => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onClick={() => handleProfileClick(profile)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
