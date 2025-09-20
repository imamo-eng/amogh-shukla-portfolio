import React from "react";
import { Card, CardContent } from "./ui/card";
import { GraduationCap, User } from "lucide-react";

const About = ({ personal, education }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Content */}
          <div>
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <User className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">
                    Professional Profile
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {personal.summary}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-slate-800">Languages:</span>
                    <span className="text-slate-600">
                      English (Professional), Hindi (Professional), Marathi (Native)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-slate-800">Location:</span>
                    <span className="text-slate-600">{personal.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-slate-800">Experience:</span>
                    <span className="text-slate-600">13+ Years in IT Industry</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div>
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">
                    Education
                  </h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={edu.id} className="relative">
                      {index < education.length - 1 && (
                        <div className="absolute left-4 top-8 w-0.5 h-16 bg-blue-200"></div>
                      )}
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-slate-800 mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-blue-600 font-medium mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-slate-500">
                            {edu.field} • {edu.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;