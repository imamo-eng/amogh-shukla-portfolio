import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = ({ workExperience }) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Over 13 years of progressive experience in IT operations, automation, and team leadership
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md transform md:-translate-x-2 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 pl-12 md:pl-0" : "md:pl-12 pl-12"}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-slate-800 mb-2">
                            {job.position}
                          </h3>
                          <div className="flex items-center text-blue-600 font-medium mb-2">
                            <Building size={16} className="mr-2" />
                            {job.company}
                          </div>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          {job.period}
                        </Badge>
                      </div>

                      <div className="flex items-center text-slate-500 text-sm mb-4">
                        <Calendar size={14} className="mr-2" />
                        <span className="mr-4">{job.duration}</span>
                        <MapPin size={14} className="mr-2" />
                        <span>{job.location}</span>
                      </div>

                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      {job.achievements && job.achievements.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {job.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="text-slate-600 text-sm flex items-start"
                              >
                                <span className="text-blue-600 mr-2 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;