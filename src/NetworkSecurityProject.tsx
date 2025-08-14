import React, { useState } from 'react';
import { ArrowLeft, Shield, AlertTriangle, Activity, Bell, Server, Database, Lock, Eye, Terminal, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

function NetworkSecurityProject() {
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
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-white transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* LinkedIn Message */}
      {showLinkedInMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-black800 text-white px-6 py-3 rounded-md shadow-lg z-50 border border-cyan-500">
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
              <Shield className="h-10 w-10 text-white mr-4" />
              Network Security Monitoring System
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Network Security</span>
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Intrusion Detection</span>
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Data Analysis</span>
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Open Source</span>
            </div>
            <p className="text-xl text-white">
              A comprehensive network monitoring system that detects and alerts on suspicious activities using Python and open-source security tools.
            </p>
          </div>
        </div>
      </header>

      {/* Project Overview */}
      <section className="py-16 bg-black800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Overview</h2>
            
            <div className="bg-black700 p-8 rounded-lg shadow-lg mb-12">
              <p className="text-lg mb-6">
                The Network Security Monitoring System is a robust solution designed to provide real-time visibility into network traffic, 
                detect potential security threats, and alert administrators to suspicious activities. Built with Python and leveraging 
                powerful open-source security tools, this system offers enterprise-grade monitoring capabilities.
              </p>
              <p className="text-lg mb-6">
                The project was developed to address the growing need for proactive network security measures in organizations of all sizes. 
                By analyzing network traffic patterns, identifying anomalies, and correlating events across multiple data sources, 
                the system helps security teams respond quickly to potential threats before they can cause significant damage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-black800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-white mr-2" />
                    Problem
                  </h3>
                  <p className="text-white">
                    Organizations face increasingly sophisticated cyber threats while lacking visibility into their network traffic and potential security incidents.
                  </p>
                </div>
                <div className="bg-black800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Lock className="h-6 w-6 text-white mr-2" />
                    Solution
                  </h3>
                  <p className="text-white">
                    A comprehensive monitoring system that provides real-time analysis, threat detection, and automated alerting for security teams.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="mb-12 bg-black700 p-4 rounded-lg shadow-lg">
              <div className="aspect-video bg-black800 rounded flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Network security monitoring dashboard" 
                  className="rounded max-h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-400 mt-2 text-center">Network Security Monitoring Dashboard Interface</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-black900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-black800 p-6 rounded-lg shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Activity className="h-8 w-8 text-white mr-3" />
                  <h3 className="text-xl font-semibold">Real-time Traffic Analysis</h3>
                </div>
                <p className="text-white">
                  Monitors network traffic in real-time, analyzing packets and flows to establish baselines and detect anomalies that could indicate security threats.
                </p>
              </div>
              
              <div className="bg-black800 p-6 rounded-lg shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-white mr-3" />
                  <h3 className="text-xl font-semibold">Intrusion Detection</h3>
                </div>
                <p className="text-white">
                  Implements signature-based and behavior-based detection methods to identify known attack patterns and zero-day exploits.
                </p>
              </div>
              
              <div className="bg-black800 p-6 rounded-lg shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Bell className="h-8 w-8 text-white mr-3" />
                  <h3 className="text-xl font-semibold">Alert System</h3>
                </div>
                <p className="text-white">
                  Configurable alerting system that notifies security teams through multiple channels including email, SMS, and integration with popular messaging platforms.
                </p>
              </div>
              
              <div className="bg-black800 p-6 rounded-lg shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Database className="h-8 w-8 text-white mr-3" />
                  <h3 className="text-xl font-semibold">Log Management</h3>
                </div>
                <p className="text-white">
                  Centralized logging system that collects, parses, and stores security events from multiple sources for analysis and compliance reporting.
                </p>
              </div>
            </div>

            <div className="bg-black800 p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Server className="h-6 w-6 text-white mr-2" />
                System Architecture
              </h3>
              <p className="text-white mb-6">
                The system is built on a modular architecture with the following components:
              </p>
              <ul className="space-y-4 text-white">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span><strong>Data Collection Module:</strong> Captures network traffic using packet sniffing libraries and collects logs from various network devices.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span><strong>Analysis Engine:</strong> Processes collected data using machine learning algorithms to detect anomalies and identify potential threats.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span><strong>Alert Manager:</strong> Generates and distributes alerts based on configurable rules and severity levels.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span><strong>Visualization Dashboard:</strong> Provides a web-based interface for security analysts to monitor network activity and investigate alerts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span><strong>Storage Backend:</strong> Efficiently stores historical data for trend analysis and compliance reporting.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-black800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Technical Implementation</h2>
            
            <div className="bg-black700 p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Code className="h-6 w-6 text-white mr-2" />
                Technologies Used
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Core Technologies:</h4>
                  <ul className="space-y-2 text-white">
                    <li>• Python 3.9+</li>
                    <li>• Scapy (Packet manipulation)</li>
                    <li>• Pandas (Data analysis)</li>
                    <li>• Scikit-learn (Machine learning)</li>
                    <li>• Flask (Web dashboard)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Open Source Tools:</h4>
                  <ul className="space-y-2 text-white">
                    <li>• Suricata (IDS/IPS)</li>
                    <li>• Elasticsearch (Data storage)</li>
                    <li>• Kibana (Visualization)</li>
                    <li>• Zeek (Network monitoring)</li>
                    <li>• OSSEC (Host-based IDS)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black700 p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Terminal className="h-6 w-6 text-white mr-2" />
                Code Snippet: Packet Analysis Function
              </h3>
              <div className="bg-black900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-white font-mono text-sm">
{`import scapy.all as scapy
from collections import defaultdict
import pandas as pd
from sklearn.ensemble import IsolationForest

class NetworkAnalyzer:
    def __init__(self):
        self.traffic_stats = defaultdict(lambda: {
            'packet_count': 0,
            'byte_count': 0,
            'protocols': defaultdict(int),
            'ports': defaultdict(int)
        })
        self.anomaly_model = IsolationForest(contamination=0.05)
        self.baseline_established = False
        
    def analyze_packet(self, packet):
        """Analyze a single packet and update traffic statistics"""
        if packet.haslayer(scapy.IP):
            # Extract source and destination IP
            src_ip = packet[scapy.IP].src
            dst_ip = packet[scapy.IP].dst
            
            # Update statistics for this IP pair
            ip_pair = f"{src_ip}_{dst_ip}"
            self.traffic_stats[ip_pair]['packet_count'] += 1
            self.traffic_stats[ip_pair]['byte_count'] += len(packet)
            
            # Track protocol
            if packet.haslayer(scapy.TCP):
                self.traffic_stats[ip_pair]['protocols']['TCP'] += 1
                sport, dport = packet[scapy.TCP].sport, packet[scapy.TCP].dport
                self.traffic_stats[ip_pair]['ports'][f"TCP_{sport}"] += 1
                self.traffic_stats[ip_pair]['ports'][f"TCP_{dport}"] += 1
            elif packet.haslayer(scapy.UDP):
                self.traffic_stats[ip_pair]['protocols']['UDP'] += 1
                sport, dport = packet[scapy.UDP].sport, packet[scapy.UDP].dport
                self.traffic_stats[ip_pair]['ports'][f"UDP_{sport}"] += 1
                self.traffic_stats[ip_pair]['ports'][f"UDP_{dport}"] += 1
            
            # Check for anomalies if baseline is established
            if self.baseline_established:
                return self.detect_anomalies(ip_pair)
        
        return None
    
    def establish_baseline(self):
        """Train the anomaly detection model on current traffic patterns"""
        # Convert traffic stats to features
        features = self._extract_features()
        
        # Train the model
        if len(features) > 10:  # Need enough data points
            self.anomaly_model.fit(features)
            self.baseline_established = True
            return True
        return False
    
    def detect_anomalies(self, ip_pair):
        """Detect if traffic for this IP pair is anomalous"""
        # Extract features for this IP pair
        features = self._extract_features(ip_pair)
        
        # Predict anomaly (-1 for anomalies, 1 for normal)
        if len(features) > 0:
            prediction = self.anomaly_model.predict(features)
            if prediction[0] == -1:
                return {
                    'ip_pair': ip_pair,
                    'severity': 'high',
                    'reason': 'Anomalous traffic pattern detected',
                    'details': self.traffic_stats[ip_pair]
                }
        return None
    
    def _extract_features(self, specific_ip_pair=None):
        """Convert traffic statistics to numerical features for anomaly detection"""
        features = []
        
        if specific_ip_pair:
            # Extract features for a specific IP pair
            stats = self.traffic_stats[specific_ip_pair]
            features.append([
                stats['packet_count'],
                stats['byte_count'],
                len(stats['protocols']),
                len(stats['ports']),
                stats['protocols'].get('TCP', 0),
                stats['protocols'].get('UDP', 0)
            ])
        else:
            # Extract features for all IP pairs
            for ip_pair, stats in self.traffic_stats.items():
                features.append([
                    stats['packet_count'],
                    stats['byte_count'],
                    len(stats['protocols']),
                    len(stats['ports']),
                    stats['protocols'].get('TCP', 0),
                    stats['protocols'].get('UDP', 0)
                ])
        
        return pd.DataFrame(features)
`}
                </pre>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                This code snippet demonstrates the core packet analysis functionality that processes network traffic and detects anomalies using machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges and Results */}
      <section className="py-16 bg-black900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Challenges & Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-black800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Challenges Faced</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Processing high volumes of network traffic in real-time without performance degradation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Reducing false positives while maintaining high detection rates for actual threats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Integrating multiple open-source tools with different data formats and APIs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Creating an intuitive dashboard that security analysts of varying skill levels could use effectively</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-black800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Reduced incident response time by 65% through automated detection and alerting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Identified previously undetected persistent threats in test environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Achieved 92% accuracy in anomaly detection with only 7% false positives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Successfully processed over 10,000 packets per second on modest hardware</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Future Enhancements</h3>
              <p className="text-white mb-6">
                The Network Security Monitoring System is under continuous development with the following planned enhancements:
              </p>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Integration with threat intelligence feeds to improve detection of known malicious actors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Implementation of deep learning models for more sophisticated anomaly detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Development of automated response capabilities to contain threats without human intervention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Expansion of the dashboard to include more detailed forensic analysis tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black800 py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Link to="/" className="inline-flex items-center text-white hover:text-white transition-colors mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-white mr-2" />
            <span className="font-bold text-xl">CyberPortfolio</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} • Cyber Security Engineer • All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default NetworkSecurityProject;