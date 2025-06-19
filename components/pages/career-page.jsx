"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageBanner from "@/components/page-banner";
import toast, { Toaster } from "react-hot-toast";

export default function CareerPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    position: "",
    experience: "",
    availability: "",
    salary: "",
    coverLetter: "",
    agreeTerms: false,
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    for (const key in formData) form.append(key, formData[key]);
    if (selectedFile) form.append("resume", selectedFile);

    try {
      const res = await fetch("/api/career", { method: "POST", body: form });
      const data = await res.json();
      if (res.ok) {
        toast.success("Application submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          position: "",
          experience: "",
          availability: "",
          salary: "",
          coverLetter: "",
          agreeTerms: false,
        });
        setSelectedFile(null);
      } else {
        toast.error(data.error || "Submission failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const expandInput =
    "transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500";

  return (
    <div className="flex min-h-screen flex-col">
      <Toaster
        position="top-center"
        toastOptions={{
          style: { background: "#16a34a", color: "white", fontWeight: "bold" },
        }}
      />
      <Header />
      <PageBanner
        title="Careers"
        description="Join our award-winning telemarketing team."
        image="/placeholder.png?height=600&width=1200&text=Careers"
      />

      <section className="py-20 bg-white flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Card className="shadow-xl">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="text-2xl">
                Career Application Form
              </CardTitle>
              <CardDescription className="text-green-100">
                Fill out the form below to apply for a position.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={expandInput}>
                    <Label>First Name</Label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className={expandInput}>
                    <Label>Last Name</Label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={expandInput}>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className={expandInput}>
                    <Label>Phone</Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className={expandInput}>
                  <Label>Address</Label>
                  <Input
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Position</Label>
                  <Select
                    value={formData.position}
                    onValueChange={(val) =>
                      setFormData({ ...formData, position: val })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "telemarketer",
                        "lead-generation",
                        "sales-rep",
                        "team-lead",
                        "account-manager",
                        "customer-service",
                      ].map((p) => (
                        <SelectItem key={p} value={p}>
                          {p.replace("-", " ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Experience</Label>
                  <RadioGroup
                    value={formData.experience}
                    onValueChange={(val) =>
                      setFormData({ ...formData, experience: val })
                    }
                    className="flex flex-wrap gap-4 mt-2"
                  >
                    {["0-1", "2-3", "4-5", "5+"].map((val) => (
                      <div key={val} className="flex items-center space-x-2">
                        <RadioGroupItem value={val} id={`exp-${val}`} />
                        <Label htmlFor={`exp-${val}`}>{val} years</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Availability</Label>
                    <Select
                      value={formData.availability}
                      onValueChange={(val) =>
                        setFormData({ ...formData, availability: val })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {["full-time", "part-time", "contract", "flexible"].map(
                          (opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Salary</Label>
                    <Select
                      value={formData.salary}
                      onValueChange={(val) =>
                        setFormData({ ...formData, salary: val })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Expected range" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "30-40k",
                          "40-50k",
                          "50-60k",
                          "60k+",
                          "negotiable",
                        ].map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label>Upload Resume</Label>
                  <div className="border-2 border-dashed border-gray-300 p-4 rounded-md text-center">
                    <Upload className="mx-auto h-10 w-10 text-gray-400" />
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setSelectedFile(e.target.files[0])}
                      required
                      className="mt-2 text-sm"
                    />
                  </div>
                </div>
                <div className={expandInput}>
                  <Label>Cover Letter</Label>
                  <Textarea
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
                    checked={formData.agreeTerms}
                    onCheckedChange={(val) =>
                      setFormData({ ...formData, agreeTerms: val })
                    }
                  />
                  <Label className="text-sm">
                    I agree to the terms and conditions *
                  </Label>
                </div>
                <Button
                  type="submit"
                  disabled={!formData.agreeTerms || loading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                >
                  {loading ? "Submitting..." : "Submit Application"}
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
