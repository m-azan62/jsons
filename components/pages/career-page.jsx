'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';
import { Upload } from 'lucide-react';

import Header from '@/components/header';
import Footer from '@/components/footer';
import PageBanner from '@/components/page-banner';

export default function CareerPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    experience: '',
    availability: '',
    salary: '',
    coverLetter: '',
    agreeTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <PageBanner
        title="Careers at JSons Communications"
        description="Join our award-winning telemarketing team and help businesses grow."
        image="/placeholder.svg?height=600&width=1200&text=Careers"
      />

      <section className="py-20 bg-white flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Card className="shadow-xl">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="text-2xl">Career Application Form</CardTitle>
              <CardDescription className="text-green-100">
                Fill out the form below to apply for a position with our team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="position">Position Applying For</Label>
                  <Select
                    value={formData.position}
                    onValueChange={(value) =>
                      setFormData({ ...formData, position: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="telemarketer">Telemarketer</SelectItem>
                      <SelectItem value="lead-generation">Lead Generation Specialist</SelectItem>
                      <SelectItem value="sales-rep">Sales Representative</SelectItem>
                      <SelectItem value="team-lead">Team Lead</SelectItem>
                      <SelectItem value="account-manager">Account Manager</SelectItem>
                      <SelectItem value="customer-service">Customer Service Representative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Experience</Label>
                  <RadioGroup
                    value={formData.experience}
                    onValueChange={(value) =>
                      setFormData({ ...formData, experience: value })
                    }
                  >
                    <div className="flex flex-wrap gap-4 mt-2">
                      {['0-1', '2-3', '4-5', '5+'].map((val) => (
                        <div key={val} className="flex items-center space-x-2">
                          <RadioGroupItem value={val} id={`exp-${val}`} />
                          <Label htmlFor={`exp-${val}`}>{val} years</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Select
                      value={formData.availability}
                      onValueChange={(value) =>
                        setFormData({ ...formData, availability: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="salary">Expected Salary</Label>
                    <Select
                      value={formData.salary}
                      onValueChange={(value) =>
                        setFormData({ ...formData, salary: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30-40k">$30,000 - $40,000</SelectItem>
                        <SelectItem value="40-50k">$40,000 - $50,000</SelectItem>
                        <SelectItem value="50-60k">$50,000 - $60,000</SelectItem>
                        <SelectItem value="60k+">$60,000+</SelectItem>
                        <SelectItem value="negotiable">Negotiable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="resume">Upload Resume</Label>
                  <div className="border-2 border-dashed border-gray-300 p-6 rounded-md text-center">
                    <Upload className="mx-auto h-10 w-10 text-gray-400" />
                    <Button type="button" variant="outline" className="mt-4">
                      Choose File
                    </Button>
                    <p className="mt-2 text-sm text-gray-500">
                      PDF, DOC, DOCX up to 5MB
                    </p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    rows={4}
                    value={formData.coverLetter}
                    onChange={(e) =>
                      setFormData({ ...formData, coverLetter: e.target.value })
                    }
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, agreeTerms: checked })
                    }
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions *
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                  disabled={!formData.agreeTerms}
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
