import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const Experience = ({ data }) => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A track record of progressive leadership roles and technical excellence across leading organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {data.map((job, index) => (
            <div key={job.id} className="relative">
              {/* Timeline line */}
              {index !== data.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-blue-200 z-0"></div>
              )}
              
              <Card className="mb-8 relative z-10 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900 mb-1">
                          {job.position}
                        </CardTitle>
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">
                          {job.company}
                        </h3>
                        <div className="flex items-center text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{job.duration}</span>
                          <Badge variant="secondary" className="ml-3 text-xs">
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleCard(job.id)}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {expandedCards[job.id] ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  {expandedCards[job.id] && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;