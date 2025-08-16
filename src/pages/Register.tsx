import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileUpload } from "@/components/ui/file-upload";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Dog Information
    dogName: "",
    breed: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    color: "",
    description: "",
    personality: "",
    
    // Owner Information
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
    // Health & Registration
    healthCertified: false,
    registered: false,
    vaccinated: false,
  });

  const [documents, setDocuments] = useState<File[]>([]);
  const [photos, setPhotos] = useState<File[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.dogName || !formData.breed || !formData.ownerName || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Registration Successful!",
      description: "Your dog has been registered successfully. We'll review your application and get back to you soon.",
    });

    // Navigate back to home
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-background to-warm-gray pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-warm-gold to-pet-blue bg-clip-text text-transparent">
            Register Your Dog
          </h1>
          <p className="text-lg text-muted-foreground">
            Join our premium breeding community and find the perfect match for your dog
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Dog Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-warm-gold">Dog Information</CardTitle>
              <CardDescription>
                Tell us about your beautiful companion
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="dogName">Dog Name *</Label>
                  <Input
                    id="dogName"
                    name="dogName"
                    value={formData.dogName}
                    onChange={handleInputChange}
                    placeholder="Enter your dog's name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="breed">Breed *</Label>
                  <Input
                    id="breed"
                    name="breed"
                    value={formData.breed}
                    onChange={handleInputChange}
                    placeholder="e.g., Golden Retriever"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age (years)</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Age in years"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select onValueChange={(value) => handleSelectChange("gender", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (lbs)</Label>
                  <Input
                    id="weight"
                    name="weight"
                    type="number"
                    value={formData.weight}
                    onChange={handleInputChange}
                    placeholder="Weight in pounds"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height (inches)</Label>
                  <Input
                    id="height"
                    name="height"
                    type="number"
                    value={formData.height}
                    onChange={handleInputChange}
                    placeholder="Height in inches"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="color">Color/Markings</Label>
                <Input
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                  placeholder="e.g., Golden, Black & White, Fawn"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Tell us about your dog's background, lineage, and special qualities..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="personality">Personality Traits</Label>
                <Input
                  id="personality"
                  name="personality"
                  value={formData.personality}
                  onChange={handleInputChange}
                  placeholder="e.g., Friendly, Intelligent, Loyal, Energetic"
                />
              </div>
            </CardContent>
          </Card>

          {/* Owner Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-pet-blue">Owner Information</CardTitle>
              <CardDescription>
                Your contact details and location
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Full Name *</Label>
                  <Input
                    id="ownerName"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street address"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Health & Registration */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-warm-gold">Health & Registration</CardTitle>
              <CardDescription>
                Important certifications and health information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="healthCertified"
                    checked={formData.healthCertified}
                    onCheckedChange={(checked) => handleCheckboxChange("healthCertified", checked as boolean)}
                  />
                  <Label htmlFor="healthCertified">Health Certified by Veterinarian</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="registered"
                    checked={formData.registered}
                    onCheckedChange={(checked) => handleCheckboxChange("registered", checked as boolean)}
                  />
                  <Label htmlFor="registered">AKC or Breed Registry Registered</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vaccinated"
                    checked={formData.vaccinated}
                    onCheckedChange={(checked) => handleCheckboxChange("vaccinated", checked as boolean)}
                  />
                  <Label htmlFor="vaccinated">Up-to-date on Vaccinations</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-pet-blue">Documents</CardTitle>
              <CardDescription>
                Upload health certificates, registration papers, and other relevant documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FileUpload onChange={setDocuments} />
            </CardContent>
          </Card>

          {/* Photos Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-warm-gold">Photos</CardTitle>
              <CardDescription>
                Upload high-quality photos of your dog (at least 3 photos recommended)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FileUpload onChange={setPhotos} />
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-warm-gold to-pet-blue text-white px-12 py-3 text-lg hover:shadow-lg transition-all duration-300"
            >
              Register My Dog
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;