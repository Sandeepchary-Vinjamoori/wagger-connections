import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Search, MessageCircle, Star, CheckCircle, Users, Award, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockDogs } from "@/data/mockDogs";
import goldenRetriever from "@/assets/dogs/golden-retriever.jpg";
import husky from "@/assets/dogs/husky.jpg";
import frenchBulldog from "@/assets/dogs/french-bulldog.jpg";
import germanShepherd from "@/assets/dogs/german-shepherd.jpg";
import labrador from "@/assets/dogs/labrador.jpg";
import borderCollie from "@/assets/dogs/border-collie.jpg";

const dogImages = [goldenRetriever, husky, frenchBulldog, germanShepherd, labrador, borderCollie];

const Index = () => {
  const navigate = useNavigate();

  const featuredDogs = mockDogs.slice(0, 6).map((dog, index) => ({
    ...dog,
    image: dogImages[index % dogImages.length]
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream via-background to-warm-gray pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Find the Perfect{" "}
              <span className="bg-gradient-to-r from-warm-gold to-pet-blue bg-clip-text text-transparent">
                Match
              </span>{" "}
              for Your Dog
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Connect with verified breeders and dog owners in our premium community. 
              Professional breeding services with complete health records and documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-warm-gold to-pet-blue text-white px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
              >
                Register Your Dog
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white px-8 py-4 text-lg transition-all duration-300"
              >
                Browse Dogs
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-gold">1,200+</div>
                <div className="text-sm text-muted-foreground">Registered Dogs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pet-blue">500+</div>
                <div className="text-sm text-muted-foreground">Successful Matches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-gold">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to find the perfect breeding partner for your dog
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-warm-gold/20">
              <CardContent className="space-y-6 pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-warm-gold to-pet-blue rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-warm-gold">1. Create Profile</h3>
                <p className="text-muted-foreground">
                  Register your dog with complete health records, photos, and detailed information about lineage and temperament.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-pet-blue/20">
              <CardContent className="space-y-6 pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pet-blue to-warm-gold rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pet-blue">2. Browse Matches</h3>
                <p className="text-muted-foreground">
                  Our advanced matching system finds compatible partners based on breed, location, health, and breeding goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-warm-gold/20">
              <CardContent className="space-y-6 pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-warm-gold to-pet-blue rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-warm-gold">3. Connect</h3>
                <p className="text-muted-foreground">
                  Connect directly with other dog owners, schedule meetings, and arrange professional breeding services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Dogs */}
      <section className="py-20 px-4 bg-gradient-to-br from-warm-gray to-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Dogs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet some of our beautiful dogs looking for their perfect breeding partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDogs.map((dog) => (
              <Card key={dog.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={dog.image}
                    alt={dog.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-warm-gold text-white">
                      {dog.healthCertified ? 'Health Certified' : 'Registered'}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-foreground">{dog.name}</h3>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                      <Heart className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-pet-blue">{dog.breed}</p>
                    <p className="text-muted-foreground">{dog.age} years old • {dog.gender}</p>
                    <p className="text-muted-foreground">{dog.location}</p>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {dog.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {dog.personality.slice(0, 3).map((trait) => (
                      <Badge key={trait} variant="secondary" className="text-xs">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-pet-blue text-pet-blue hover:bg-pet-blue hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              View All Dogs
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from happy dog owners who found their perfect match
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="space-y-6 pt-6">
                <div className="flex text-warm-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "PawMatch helped us find the perfect breeding partner for our Golden Retriever. The entire process was professional and the health documentation gave us complete peace of mind."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-warm-gold to-pet-blue rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Golden Retriever Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="space-y-6 pt-6">
                <div className="flex text-warm-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "The quality of dogs and owners on PawMatch is exceptional. We found a wonderful breeding partner for our Husky and now have beautiful, healthy puppies."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pet-blue to-warm-gold rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Siberian Husky Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="space-y-6 pt-6">
                <div className="flex text-warm-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Amazing platform! The verification process ensures all dogs are healthy and well-cared for. We've made lifelong connections through PawMatch."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-warm-gold to-pet-blue rounded-full flex items-center justify-center text-white font-bold">
                    E
                  </div>
                  <div>
                    <p className="font-semibold">Emma Rodriguez</p>
                    <p className="text-sm text-muted-foreground">French Bulldog Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-cream to-warm-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose PawMatch?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium features that make finding the right breeding partner safe and easy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-warm-gold to-pet-blue rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Verified Profiles</h3>
              <p className="text-sm text-muted-foreground">
                All dogs are verified with health certificates and registration papers
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pet-blue to-warm-gold rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                Only champion bloodlines and registered purebreds in our network
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-warm-gold to-pet-blue rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Health Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                Complete health records and genetic testing documentation provided
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pet-blue to-warm-gold rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Expert Support</h3>
              <p className="text-sm text-muted-foreground">
                Professional breeding guidance and ongoing support throughout the process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-warm-gold to-pet-blue rounded-full"></div>
                <span className="text-2xl font-bold">PawMatch</span>
              </div>
              <p className="text-sm text-gray-300">
                Premium dog breeding community connecting verified breeders and dog owners worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-warm-gold transition-colors cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pet-blue transition-colors cursor-pointer">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-warm-gold transition-colors cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Browse</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300 hover:text-warm-gold cursor-pointer transition-colors">All Dogs</p>
                <p className="text-gray-300 hover:text-warm-gold cursor-pointer transition-colors">By Breed</p>
                <p className="text-gray-300 hover:text-warm-gold cursor-pointer transition-colors">By Location</p>
                <p className="text-gray-300 hover:text-warm-gold cursor-pointer transition-colors">Featured Dogs</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300 hover:text-pet-blue cursor-pointer transition-colors">Breeding Requests</p>
                <p className="text-gray-300 hover:text-pet-blue cursor-pointer transition-colors">Health Records</p>
                <p className="text-gray-300 hover:text-pet-blue cursor-pointer transition-colors">Genetic Testing</p>
                <p className="text-gray-300 hover:text-pet-blue cursor-pointer transition-colors">Expert Consultation</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Email: hello@pawmatch.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Pet Street<br />San Francisco, CA 94102</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 PawMatch. All rights reserved. | Privacy Policy | Terms of Service | Cookie Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;