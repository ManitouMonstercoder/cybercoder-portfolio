import React, { useState } from 'react';
import { ArrowLeft, BarChart, Code, Database, FileSpreadsheet, GitBranch, Terminal, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

function VisitorMetricsProject() {
  const [showLinkedInMessage, setShowLinkedInMessage] = useState(false);

  const handleLinkedInClick = (e) => {
    e.preventDefault();
    setShowLinkedInMessage(true);
    setTimeout(() => {
      setShowLinkedInMessage(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* LinkedIn Message */}
      {showLinkedInMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-md shadow-lg z-50 border border-cyan-500">
          <p className="flex items-center">
            <span className="mr-2">Sorry, LinkedIn is not available. Please use the Email Me button for contact.</span>
          </p>
        </div>
      )}

      {/* Project Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 flex items-center">
              <BarChart className="h-10 w-10 text-cyan-400 mr-4" />
              Visitor Metrics Scraper & Dashboard
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Data Pipeline</span>
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Excel</span>
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">HTML</span>
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Automation</span>
            </div>
            <p className="text-xl text-gray-300">
              A Python-based data pipeline that automates traffic data collection, validation, and reporting with enhanced accuracy and efficiency.
            </p>
          </div>
        </div>
      </header>

      {/* Project Overview */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Overview</h2>
            
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg mb-12">
              <p className="text-lg mb-6">
                The Visitor Metrics Scraper & Dashboard is an automated solution designed to streamline the collection, 
                validation, and reporting of website traffic data. By implementing robust validation logic and automated 
                processing, the system significantly reduced reporting errors and improved data accuracy.
              </p>
              <p className="text-lg mb-6">
                This project demonstrates the power of combining data engineering with visualization to create 
                meaningful insights from raw traffic data, while ensuring data quality through automated validation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Terminal className="h-6 w-6 text-cyan-400 mr-2" />
                    Challenge
                  </h3>
                  <p className="text-gray-300">
                    Manual data collection and reporting processes were time-consuming and prone to errors, 
                    leading to inconsistent reporting and delayed insights.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Code className="h-6 w-6 text-cyan-400 mr-2" />
                    Solution
                  </h3>
                  <p className="text-gray-300">
                    Developed an automated pipeline with built-in validation logic, reducing errors by 50% 
                    and generating standardized reports in multiple formats.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="mb-12 bg-gray-700 p-4 rounded-lg shadow-lg">
              <div className="aspect-video bg-gray-800 rounded flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Data pipeline visualization" 
                  className="rounded max-h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-400 mt-2 text-center">Automated Data Pipeline Architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Database className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold">Automated Data Collection</h3>
                </div>
                <p className="text-gray-300">
                  Python scripts automatically collect and aggregate traffic data from multiple sources, 
                  ensuring consistent and timely data gathering.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold">Validation Logic</h3>
                </div>
                <p className="text-gray-300">
                  Implemented comprehensive validation rules to catch anomalies and ensure data quality 
                  before processing and reporting.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <FileSpreadsheet className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold">Multi-format Reporting</h3>
                </div>
                <p className="text-gray-300">
                  Generates detailed reports in both Excel and HTML formats, providing flexible options 
                  for different stakeholder needs.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <GitBranch className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold">Version Control</h3>
                </div>
                <p className="text-gray-300">
                  Implemented version control for both code and data, enabling easy tracking of changes 
                  and data lineage.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Terminal className="h-6 w-6 text-cyan-400 mr-2" />
                Technical Implementation
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Data Collection:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Automated web scraping using Python's requests and BeautifulSoup libraries</li>
                    <li>• API integration for real-time data collection</li>
                    <li>• Scheduled data gathering using cron jobs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Data Processing:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Custom validation rules for data quality assurance</li>
                    <li>• Automated data cleaning and transformation</li>
                    <li>• Error logging and notification system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Reporting:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Excel report generation using pandas and openpyxl</li>
                    <li>• HTML dashboard creation with interactive charts</li>
                    <li>• Automated email distribution of reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results and Impact */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Results & Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Reduced reporting errors by 50% through automated validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Decreased report generation time from hours to minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Improved data accuracy and consistency across reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Enhanced stakeholder satisfaction with multi-format reporting</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Future Enhancements</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Integration with additional data sources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Machine learning for anomaly detection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Real-time dashboard updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Advanced visualization features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-cyan-400 mr-2" />
            <span className="font-bold text-xl">CyberCoder</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} • Computer Engineer & Data Visualizer • All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default VisitorMetricsProject;