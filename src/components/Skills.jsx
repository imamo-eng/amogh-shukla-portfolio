import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Users, Wrench, Brain } from "lucide-react";

const Skills = ({ skills }) => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: skills.technical,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: skills.soft,
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive skill set built over 13+ years of hands-on experience in IT operations and leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg mr-4 ${category.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm py-2 px-3 bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Strengths Highlight */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-50 to-slate-50 border-blue-200">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <Brain className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">
                    Core Strengths
                  </h3>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">13+</div>
                  <p className="text-slate-600 font-medium">Years Experience</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <p className="text-slate-600 font-medium">Team Members Led</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <p className="text-slate-600 font-medium">System Uptime</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;