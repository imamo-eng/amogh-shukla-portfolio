import React from "react";
import { Mail, Linkedin, MapPin, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Hero = ({ personal }) => {
  const handleDownloadCV = () => {
    // Create a temporary link to download the CV
    const link = document.createElement('a');
    link.href = 'https://customer-assets.emergentagent.com/job_d9fe3cc9-e5a6-47db-820a-100b1c630ac2/artifacts/95hue8le_Profile%20%282%29.pdf';
    link.download = 'Amogh_Shukla_Resume.pdf';
    link.target = '_blank';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
                {personal.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
                {personal.title}
              </h2>
              <div className="flex items-center justify-center lg:justify-start text-slate-600 mb-6">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">{personal.location}</span>
              </div>
            </div>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personal.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={handleContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadCV}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href={`mailto:${personal.email}`}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-1 bg-white shadow-xl">
              <div className="w-80 h-80 rounded-lg bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-slate-200 flex items-center justify-center">
                  <span className="text-6xl font-bold text-slate-600">
                    {personal.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;