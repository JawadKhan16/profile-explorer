export interface Profile {
  id: number;
  name: string;
  email: string;
  occupation: string;
  address: string;
  coordinates: [number, number];
  avatar: string;
}

export const profiles: Profile[] = [
  {
    id: 1,
    name: "Arjun Patel",
    email: "arjun.patel@example.com",
    occupation: "Software Engineer",
    address: "123 Linking Road, Bandra West, Mumbai, Maharashtra",
    coordinates: [19.0596, 72.8295],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    occupation: "Data Scientist",
    address: "456 Koramangala, Bangalore, Karnataka",
    coordinates: [12.9716, 77.5946],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    occupation: "Product Manager",
    address: "789 Connaught Place, New Delhi",
    coordinates: [28.6139, 77.2090],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    id: 4,
    name: "Anjali Desai",
    email: "anjali.desai@example.com",
    occupation: "UX Designer",
    address: "234 Jubilee Hills, Hyderabad, Telangana",
    coordinates: [17.4319, 78.4095],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    email: "vikram.m@example.com",
    occupation: "Marketing Director",
    address: "567 Park Street, Kolkata, West Bengal",
    coordinates: [22.5726, 88.3639],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  },
  {
    id: 6,
    name: "Meera Reddy",
    email: "meera.r@example.com",
    occupation: "HR Manager",
    address: "890 Anna Nagar, Chennai, Tamil Nadu",
    coordinates: [13.0827, 80.2707],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
  },
  {
    id: 7,
    name: "Aditya Iyer",
    email: "aditya.iyer@example.com",
    occupation: "Backend Developer",
    address: "432 FC Road, Pune, Maharashtra",
    coordinates: [18.5204, 73.8567],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
  },
  {
    id: 8,
    name: "Kavita Singh",
    email: "kavita.s@example.com",
    occupation: "Business Analyst",
    address: "765 CG Road, Ahmedabad, Gujarat",
    coordinates: [23.0225, 72.5714],
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150"
  },
  {
    id: 9,
    name: "Rahul Verma",
    email: "rahul.v@example.com",
    occupation: "Cloud Architect",
    address: "543 MG Road, Indore, Madhya Pradesh",
    coordinates: [22.7196, 75.8577],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    id: 10,
    name: "Neha Kapoor",
    email: "neha.k@example.com",
    occupation: "Frontend Developer",
    address: "321 Civil Lines, Jaipur, Rajasthan",
    coordinates: [26.9124, 75.7873],
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150"
  }
];