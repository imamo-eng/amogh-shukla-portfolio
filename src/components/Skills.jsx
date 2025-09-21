import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Users, TrendingUp } from 'lucide-react';

const Skills = ({ data }) => {
  const skillCategories = {
    DevOps: { icon: Code, color: 'bg-blue-500' },
    Systems: { icon: Code, color: 'bg-green-500' },
    Programming: { icon: Code, color: 'bg-purple-500' },
    Database: { icon: TrendingUp, color: 'bg-orange-500' },
    Cloud: { icon: Code, color: 'bg-cyan-500' },
    Virtualization: { icon: Code, color: 'bg-pink-500' },
    Collaboration: { icon: Users, color: 'bg-indigo-500' }
  };

  const groupedSkills = data.technical.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical expertise built through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {Object.entries(groupedSkills).map(([category, skills]) => {
              const categoryInfo = skillCategories[category] || { icon: Code, color: 'bg-gray-500' };
              const IconComponent = categoryInfo.icon;
              
              return (
                <Card key={category} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-lg">
                      <div className={`w-8 h-8 ${categoryInfo.color} rounded-lg flex items-center justify-center mr-3`}>
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership & Soft Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {data.soft.map((skill, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <Badge variant="secondary" className="mt-3 text-xs">
                    {skill.level}% Proficiency
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;