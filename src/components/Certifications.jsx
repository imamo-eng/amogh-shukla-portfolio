import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = ({ certifications }) => {
  const handleCertificationClick = (cert) => {
    // Mock functionality - will be enhanced in backend integration
    alert(`Certificate details for: ${cert.name}\nIssuer: ${cert.issuer}\nYear: ${cert.year}`);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Certifications & Learning
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        {/* Featured Certification */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-4 bg-white/20 rounded-lg mr-6">
                    <Award className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Microsoft Certified: Azure Fundamentals
                    </h3>
                    <div className="flex items-center text-blue-100">
                      <Calendar size={16} className="mr-2" />
                      <span>2024 • Microsoft</span>
                    </div>
                    <Badge className="mt-2 bg-white/20 text-white hover:bg-white/30">
                      AZ-900
                    </Badge>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="text-right">
                    <div className="text-3xl font-bold">LATEST</div>
                    <div className="text-blue-100">Certification</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.slice(1).map((cert) => (
            <Card
              key={cert.id}
              className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
              onClick={() => handleCertificationClick(cert)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Award className="text-blue-600" size={20} />
                  </div>
                  <ExternalLink className="text-slate-400" size={16} />
                </div>
                
                <h3 className="font-semibold text-slate-800 mb-3 line-clamp-2">
                  {cert.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar size={14} className="mr-2" />
                    <span>{cert.year}</span>
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {cert.issuer}
                  </div>
                </div>

                {cert.credentialId && (
                  <Badge variant="outline" className="text-xs">
                    {cert.credentialId}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Stats */}
        <div className="mt-16">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                  Continuous Learning Journey
                </h3>
                <p className="text-slate-600">
                  Committed to staying current with industry trends and technologies
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {certifications.length}
                  </div>
                  <p className="text-slate-600 font-medium">Professional Certifications</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <p className="text-slate-600 font-medium">Years of Continuous Learning</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <p className="text-slate-600 font-medium">Hours of Training</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;