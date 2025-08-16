export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  gender: 'Male' | 'Female';
  image: string;
  ownerName: string;
  location: string;
  description: string;
  personality: string[];
  healthCertified: boolean;
  registered: boolean;
  weight: number;
  height: number;
  color: string;
}

export const mockDogs: Dog[] = [
  {
    id: "1",
    name: "Max",
    breed: "Golden Retriever",
    age: 3,
    gender: "Male",
    image: "/api/placeholder/400/400",
    ownerName: "Sarah Johnson",
    location: "Los Angeles, CA",
    description: "Max is a beautiful, well-trained Golden Retriever with excellent lineage. He has a gentle temperament and loves children.",
    personality: ["Friendly", "Gentle", "Intelligent", "Loyal"],
    healthCertified: true,
    registered: true,
    weight: 65,
    height: 24,
    color: "Golden"
  },
  {
    id: "2",
    name: "Luna",
    breed: "Siberian Husky",
    age: 2,
    gender: "Female",
    image: "/api/placeholder/400/400",
    ownerName: "Michael Chen",
    location: "Seattle, WA",
    description: "Luna is an energetic and playful Husky with striking blue eyes. She comes from champion bloodlines.",
    personality: ["Energetic", "Playful", "Independent", "Alert"],
    healthCertified: true,
    registered: true,
    weight: 50,
    height: 22,
    color: "Black & White"
  },
  {
    id: "3",
    name: "Bella",
    breed: "French Bulldog",
    age: 4,
    gender: "Female",
    image: "/api/placeholder/400/400",
    ownerName: "Emma Rodriguez",
    location: "Miami, FL",
    description: "Bella is a charming French Bulldog with a loving personality. Perfect for apartment living and great with families.",
    personality: ["Affectionate", "Calm", "Sociable", "Adaptive"],
    healthCertified: true,
    registered: true,
    weight: 22,
    height: 12,
    color: "Fawn"
  },
  {
    id: "4",
    name: "Rocky",
    breed: "German Shepherd",
    age: 5,
    gender: "Male",
    image: "/api/placeholder/400/400",
    ownerName: "David Miller",
    location: "Austin, TX",
    description: "Rocky is a noble German Shepherd with excellent protection instincts and unwavering loyalty to his family.",
    personality: ["Loyal", "Courageous", "Confident", "Versatile"],
    healthCertified: true,
    registered: true,
    weight: 75,
    height: 26,
    color: "Black & Tan"
  },
  {
    id: "5",
    name: "Daisy",
    breed: "Labrador Retriever",
    age: 1,
    gender: "Female",
    image: "/api/placeholder/400/400",
    ownerName: "Jennifer White",
    location: "Denver, CO",
    description: "Daisy is a young, vibrant Labrador with endless energy and a love for water activities. Great family companion.",
    personality: ["Outgoing", "Active", "Friendly", "Obedient"],
    healthCertified: true,
    registered: true,
    weight: 55,
    height: 22,
    color: "Yellow"
  },
  {
    id: "6",
    name: "Zeus",
    breed: "Rottweiler",
    age: 4,
    gender: "Male",
    image: "/api/placeholder/400/400",
    ownerName: "Robert Taylor",
    location: "Chicago, IL",
    description: "Zeus is a powerful and confident Rottweiler with excellent temperament. Well-socialized and family-friendly.",
    personality: ["Confident", "Calm", "Devoted", "Alert"],
    healthCertified: true,
    registered: true,
    weight: 110,
    height: 27,
    color: "Black & Mahogany"
  },
  {
    id: "7",
    name: "Rosie",
    breed: "Poodle",
    age: 3,
    gender: "Female",
    image: "/api/placeholder/400/400",
    ownerName: "Lisa Anderson",
    location: "San Francisco, CA",
    description: "Rosie is an elegant Standard Poodle with hypoallergenic coat. Highly intelligent and great for active families.",
    personality: ["Intelligent", "Athletic", "Trainable", "Proud"],
    healthCertified: true,
    registered: true,
    weight: 60,
    height: 24,
    color: "Apricot"
  },
  {
    id: "8",
    name: "Cooper",
    breed: "Border Collie",
    age: 2,
    gender: "Male",
    image: "/api/placeholder/400/400",
    ownerName: "Mark Thompson",
    location: "Portland, OR",
    description: "Cooper is an exceptionally intelligent Border Collie with herding instincts. Perfect for active owners who enjoy training.",
    personality: ["Intelligent", "Energetic", "Alert", "Responsive"],
    healthCertified: true,
    registered: true,
    weight: 45,
    height: 21,
    color: "Black & White"
  },
  {
    id: "9",
    name: "Mia",
    breed: "Cavalier King Charles Spaniel",
    age: 3,
    gender: "Female",
    image: "/api/placeholder/400/400",
    ownerName: "Amanda Davis",
    location: "Nashville, TN",
    description: "Mia is a sweet and gentle Cavalier with a silky coat. She loves cuddles and is wonderful with children.",
    personality: ["Gentle", "Affectionate", "Graceful", "Friendly"],
    healthCertified: true,
    registered: true,
    weight: 18,
    height: 13,
    color: "Blenheim"
  },
  {
    id: "10",
    name: "Bruno",
    breed: "Boxer",
    age: 4,
    gender: "Male",
    image: "/api/placeholder/400/400",
    ownerName: "Kevin Wilson",
    location: "Phoenix, AZ",
    description: "Bruno is a playful and energetic Boxer who loves to play and exercise. Great guard dog with a loving heart.",
    personality: ["Playful", "Energetic", "Loyal", "Confident"],
    healthCertified: true,
    registered: true,
    weight: 70,
    height: 25,
    color: "Fawn"
  },
  {
    id: "11",
    name: "Coco",
    breed: "Yorkshire Terrier",
    age: 2,
    gender: "Female",
    image: "/api/placeholder/400/400",
    ownerName: "Patricia Brown",
    location: "Boston, MA",
    description: "Coco is a tiny but mighty Yorkshire Terrier with a big personality. Perfect lap dog with lots of spunk.",
    personality: ["Feisty", "Affectionate", "Bold", "Energetic"],
    healthCertified: true,
    registered: true,
    weight: 7,
    height: 8,
    color: "Blue & Tan"
  },
  {
    id: "12",
    name: "Oscar",
    breed: "Australian Shepherd",
    age: 3,
    gender: "Male",
    image: "/api/placeholder/400/400",
    ownerName: "Christopher Lee",
    location: "Colorado Springs, CO",
    description: "Oscar is a beautiful Australian Shepherd with striking blue eyes. Highly intelligent and loves outdoor activities.",
    personality: ["Intelligent", "Work-oriented", "Exuberant", "Versatile"],
    healthCertified: true,
    registered: true,
    weight: 55,
    height: 23,
    color: "Blue Merle"
  }
];