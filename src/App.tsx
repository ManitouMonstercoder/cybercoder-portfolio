import React, { useState } from 'react';
import { Shield, Code, Cpu, Wrench, Github, Linkedin, Mail, ExternalLink, Terminal, BookOpen, Award, BarChart, Brain, Users } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NetworkSecurityProject from './NetworkSecurityProject';
import VulnerabilityScanner from './VulnerabilityScanner';
import DataVizProject from './DataVizProject';
import VisitorMetricsProject from './VisitorMetricsProject';

function Home() {
  const [showLinkedInMessage, setShowLinkedInMessage] = useState(false);

  const handleLinkedInClick = (e) => {
    e.preventDefault();
    setShowLinkedInMessage(true);
    setTimeout(() => {
      setShowLinkedInMessage(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black border-b border-white py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-white" />
            <span className="font-bold text-xl text-white">CyberCoder</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
            <a href="#skills" className="text-white hover:text-gray-300 transition-colors">Skills</a>
            <a href="#projects" className="text-white hover:text-gray-300 transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* LinkedIn Message */}
      {showLinkedInMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 border-2 border-white">
          <p className="flex items-center">
            <span className="mr-2">Sorry, LinkedIn is not available. Please use the Email Me button for contact.</span>
          </p>
        </div>
      )}

      {/* Hero Section */}
      <header className="bg-black py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <img 
                  src="/w.png" 
                  alt="Profile" 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-lg object-contain border-2 border-white shadow-lg bg-white p-2"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  Computer Engineer & Data Visualizer
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8">
                  Transforming complex data into actionable insights
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a 
                    href="#contact" 
                    className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-medium transition-colors border-2 border-white"
                  >
                    Get in Touch
                  </a>
                  <a 
                    href="#projects" 
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-black border-t border-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="bg-black border-2 border-white p-8 rounded-lg">
              <p className="text-lg mb-6 text-white">
                Since I began learning about technology, I have become interested in the point where hardware and software can come together to solve a problem. Whether it meant soldering the first circuit board, debugging a microcontroller with the C programming language, or implementing a Python-based backend service to supply a real-time data dashboard, I've always gravitated toward problems nobody seems to want to deal with.
              </p>
              <p className="text-lg mb-6 text-white">
                In my opinion, a real challenge is not seen as a barrier but a problem to solve. Proper engineering goes beyond the single acts well as effective.
              </p>
              <div className="flex flex-col md:flex-row justify-between mt-8">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold mb-3 flex items-center text-white">
                    <BookOpen className="mr-2 h-5 w-5 text-white" />
                    Background
                  </h3>
                  <ul className="text-white">
                    <li>Self-taught problem solver</li>
                    <li>Continuous learner</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center text-white">
                    <Award className="mr-2 h-5 w-5 text-white" />
                    What I Do
                  </h3>
                  <p className="text-white">Whatever it takes to get the job done right</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black border-t border-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black border-2 border-white p-6 rounded-lg transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <BarChart className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Data Visualization</h3>
              </div>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <img src="https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" alt="Tableau" className="w-6 h-6 mr-3 bg-white rounded" />
                  Tableau
                </li>
                <li className="flex items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" className="w-6 h-6 mr-3" />
                  Power BI
                </li>
                <li className="flex items-center">
                  <BarChart className="w-6 h-6 mr-3 text-white" />
                  Data Analysis
                </li>
                <li className="flex items-center">
                  <BarChart className="w-6 h-6 mr-3 text-white" />
                  UX/UI Dashboard Design
                </li>
                <li className="flex items-center">
                  <BarChart className="w-6 h-6 mr-3 text-white" />
                  Data Storytelling
                </li>
              </ul>
            </div>
            
            <div className="bg-black border-2 border-white p-6 rounded-lg transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Programming</h3>
              </div>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6 mr-3" />
                  Python
                </li>
                <li className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-6 h-6 mr-3" />
                  C++
                </li>
                <li className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-6 h-6 mr-3" />
                  HTML5
                </li>
                <li className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-6 h-6 mr-3" />
                  CSS3
                </li>
                <li className="flex items-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6 mr-3" />
                  JavaScript
                </li>
              </ul>
            </div>
            
            <div className="bg-black border-2 border-white p-6 rounded-lg transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Professional</h3>
              </div>
              <ul className="space-y-2 text-white">
                <li>• Problem Solving</li>
                <li>• Critical Thinking</li>
                <li>• Communication</li>
                <li>• Team Collaboration</li>
                <li>• Project Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black border-t border-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-black border-2 border-white rounded-lg overflow-hidden">
              <div className="h-48 bg-black flex items-center justify-center border-b border-white">
                <Terminal className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Network Security Monitoring System</h3>
                <p className="text-white mb-4">
                  Developed a comprehensive network monitoring system with integrated visual reporting dashboards for real-time security insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm flex items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-4 h-4 mr-2" />
                    Python
                  </span>
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm">Security</span>
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm">Visualization</span>
                </div>
                <Link to="/project/network-security" className="text-white hover:text-gray-300 flex items-center">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-black border-2 border-white rounded-lg overflow-hidden">
              <div className="h-48 bg-black flex items-center justify-center border-b border-white">
                <Wrench className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Automated Vulnerability Scanner</h3>
                <p className="text-white mb-4">
                  Created a vulnerability scanning tool with interactive dashboards for clear risk assessment and visualization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm flex items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-4 h-4 mr-2" />
                    Python
                  </span>
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm">Security</span>
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm">Dashboard</span>
                </div>
                <Link to="/project/vulnerability-scanner" className="text-white hover:text-gray-300 flex items-center">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-black border-2 border-white rounded-lg overflow-hidden">
              <div className="h-48 bg-black flex items-center justify-center border-b border-white">
                <BarChart className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Global Energy Trends Dashboard</h3>
                <p className="text-white mb-4">
                  Built interactive Tableau and Power BI dashboards analyzing worldwide energy consumption patterns and sustainability metrics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm flex items-center">
                    <img src="https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" alt="Tableau" className="w-4 h-4 mr-2" />
                    Tableau
                  </span>
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" className="w-4 h-4 mr-2" />
                    Power BI
                  </span>
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm flex items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-4 h-4 mr-2" />
                    Python
                  </span>
                </div>
                <Link to="/project/data-viz" className="text-white hover:text-gray-300 flex items-center">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-black border-2 border-white rounded-lg overflow-hidden">
              <div className="h-48 bg-black flex items-center justify-center border-b border-white">
                <BarChart className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Visitor Metrics Scraper & Dashboard</h3>
                <p className="text-white mb-4">
                  Built a Python-based data pipeline for traffic aggregation with validation logic and Excel/HTML outputs, reducing reporting errors by 50%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm flex items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-4 h-4 mr-2" />
                    Python
                  </span>
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm">Data Pipeline</span>
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" alt="Excel" className="w-4 h-4 mr-2" />
                    Excel
                  </span>
                </div>
                <Link to="/project/visitor-metrics" className="text-white hover:text-gray-300 flex items-center">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-20 bg-black border-t border-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
            <div className="bg-black border-2 border-white p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl font-semibold text-white">Key Achievements</h3>
              </div>
              <ul className="space-y-4 text-white">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Applied strong analytical and visualization skills to develop actionable insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Collaborated with cross-functional teams to present data-driven reports and recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Designed intuitive dashboards for stakeholders using Tableau and Power BI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Led multiple successful data visualization projects from conception to deployment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black border-t border-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="bg-black border-2 border-white p-8 rounded-lg">
              <p className="text-center text-lg mb-8 text-white">
                Ready to tackle your next challenge? Let's connect and make things happen.
              </p>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                <a 
                  href="mailto:fideleamazing@gmail.com" 
                  className="flex items-center justify-center bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg transition-colors border-2 border-white"
                >
                  <Mail className="mr-2 h-5 w-5 text-black" />
                  Email Me
                </a>
                <a 
                  href="https://github.com/ManitouMonstercoder" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg transition-colors border-2 border-white"
                >
                  <Github className="mr-2 h-5 w-5 text-black" />
                  GitHub
                </a>
                <a 
                  href="#" 
                  onClick={handleLinkedInClick}
                  className="flex items-center justify-center bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg transition-colors border-2 border-white"
                >
                  <Linkedin className="mr-2 h-5 w-5 text-black" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-white mr-2" />
            <span className="font-bold text-xl text-white">CyberCoder</span>
          </div>
          <p className="text-white">
            © {new Date().getFullYear()} • Computer Engineer & Data Visualizer • All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/network-security" element={<NetworkSecurityProject />} />
        <Route path="/project/vulnerability-scanner" element={<VulnerabilityScanner />} />
        <Route path="/project/data-viz" element={<DataVizProject />} />
        <Route path="/project/visitor-metrics" element={<VisitorMetricsProject />} />
      </Routes>
    </Router>
  );
}

export default App;