import React from 'react';
import { ChevronDown, Download, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-6">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            AS
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            {data.name}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-600 font-medium mb-6">
            {data.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-transform hover:scale-105"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <a 
            href="/amogh-resume.pdf" 
            download="Amogh_Shukla_Resume.pdf"
            className="inline-flex items-center justify-center border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg transition-transform hover:scale-105 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md font-medium"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <a 
            href={data.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a 
            href={`mailto:${data.email}`}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Mail className="h-8 w-8" />
          </a>
        </div>

        <button 
          onClick={scrollToNext}
          className="animate-bounce text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ChevronDown className="h-8 w-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;