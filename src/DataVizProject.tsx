import React, { useState } from 'react';
import { ArrowLeft, BarChart, AlertTriangle, Activity, Database, PieChart, LineChart, Terminal, Code, Shield, TrendingUp, Map, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

function DataVizProject() {
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
              Global Energy Trends Dashboard
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Tableau</span>
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Power BI</span>
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Data Analysis</span>
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-cyan-900/50 border border-cyan-700 px-3 py-1 rounded-full text-sm">Sustainability</span>
            </div>
            <p className="text-xl text-gray-300">
              An interactive data visualization project analyzing global energy consumption patterns and renewable energy adoption trends.
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
                The Global Energy Trends Dashboard is a comprehensive data visualization project that transforms complex energy consumption 
                data into actionable insights. Using Tableau and Power BI, this dashboard provides an interactive exploration of worldwide 
                energy usage patterns, renewable energy adoption rates, and their environmental impact.
              </p>
              <p className="text-lg mb-6">
                This project combines data from multiple sources, including the World Bank, International Energy Agency, and various 
                environmental organizations, to create a holistic view of global energy trends and their implications for sustainability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-cyan-400 mr-2" />
                    Challenge
                  </h3>
                  <p className="text-gray-300">
                    Making complex energy data accessible and actionable for stakeholders while highlighting critical sustainability trends and opportunities.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Zap className="h-6 w-6 text-cyan-400 mr-2" />
                    Solution
                  </h3>
                  <p className="text-gray-300">
                    Interactive dashboards with drill-down capabilities, predictive analytics, and clear visual storytelling of energy trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="mb-12 bg-gray-700 p-4 rounded-lg shadow-lg">
              <div className="aspect-video bg-gray-800 rounded flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Energy consumption dashboard" 
                  className="rounded max-h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-400 mt-2 text-center">Interactive Energy Consumption Dashboard</p>
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
                  <Map className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold">Geographic Analysis</h3>
                </div>
                <p className="text-gray-300">
                  Interactive maps showing energy consumption patterns and renewable energy adoption rates across different regions.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold">Trend Analysis</h3>
                </div>
                <p className="text-gray-300">
                  Time-series visualizations showing historical trends and future projections of energy consumption and renewable adoption.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <PieChart className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold">Energy Mix Analysis</h3>
                </div>
                <p className="text-gray-300">
                  Detailed breakdown of energy sources and their relative contributions to total energy consumption.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Activity className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold">Impact Metrics</h3>
                </div>
                <p className="text-gray-300">
                  Environmental impact indicators and sustainability metrics linked to energy consumption patterns.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <BarChart className="h-6 w-6 text-cyan-400 mr-2" />
                Visualization Components
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span><strong>Interactive World Map:</strong> Color-coded visualization of energy consumption and renewable energy adoption by country.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span><strong>Time Series Charts:</strong> Historical trends and future projections with customizable date ranges.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span><strong>Comparative Analysis:</strong> Side-by-side comparisons of different regions or time periods.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span><strong>KPI Cards:</strong> Key performance indicators showing critical metrics and goals.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Technical Implementation</h2>
            
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Code className="h-6 w-6 text-cyan-400 mr-2" />
                Technologies Used
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Visualization Tools:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Tableau Desktop</li>
                    <li>• Power BI</li>
                    <li>• D3.js</li>
                    <li>• Python (Plotly)</li>
                    <li>• Custom CSS Animations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Data Processing:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Python (Pandas)</li>
                    <li>• SQL</li>
                    <li>• R (Data Cleaning)</li>
                    <li>• Excel (Initial Analysis)</li>
                    <li>• Custom ETL Scripts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Terminal className="h-6 w-6 text-cyan-400 mr-2" />
                Data Processing Pipeline
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-gray-300 font-mono text-sm">
{`import pandas as pd
import plotly.express as px
from datetime import datetime

def process_energy_data(raw_data_path):
    """Process raw energy consumption data and prepare for visualization"""
    # Load and clean data
    df = pd.read_csv(raw_data_path)
    
    # Data cleaning and transformation
    df['date'] = pd.to_datetime(df['date'])
    df['consumption'] = pd.to_numeric(df['consumption'], errors='coerce')
    
    # Calculate key metrics
    df['renewable_percentage'] = (df['renewable_energy'] / df['total_energy']) * 100
    df['yoy_change'] = df.groupby('country')['consumption'].pct_change() * 100
    
    # Create time-based features
    df['year'] = df['date'].dt.year
    df['month'] = df['date'].dt.month
    
    # Calculate rolling averages
    df['consumption_ma'] = df.groupby('country')['consumption'].rolling(
        window=12, min_periods=1
    ).mean().reset_index(0, drop=True)
    
    return df

def create_choropleth(df):
    """Create an interactive choropleth map"""
    fig = px.choropleth(
        df,
        locations='country_code',
        color='renewable_percentage',
        hover_name='country',
        color_continuous_scale='viridis',
        title='Global Renewable Energy Adoption'
    )
    
    fig.update_layout(
        title_x=0.5,
        geo=dict(showframe=False, showcoastlines=True),
        width=1000,
        height=600
    )
    
    return fig

def generate_trend_analysis(df):
    """Generate trend analysis visualizations"""
    # Create time series plot
    fig = px.line(
        df,
        x='date',
        y='consumption_ma',
        color='country',
        title='Energy Consumption Trends by Country'
    )
    
    fig.update_layout(
        xaxis_title='Date',
        yaxis_title='Energy Consumption (TWh)',
        legend_title='Country',
        hovermode='x unified'
    )
    
    return fig

def calculate_sustainability_metrics(df):
    """Calculate sustainability-related metrics"""
    metrics = {
        'total_renewable_energy': df['renewable_energy'].sum(),
        'average_adoption_rate': df['renewable_percentage'].mean(),
        'top_performers': df.nlargest(5, 'renewable_percentage')[
            ['country', 'renewable_percentage']
        ].to_dict('records'),
        'year_over_year_growth': df.groupby('year')['renewable_percentage'].mean().pct_change().iloc[-1]
    }
    
    return metrics`}
                </pre>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                This code snippet shows the data processing pipeline used to prepare energy consumption data for visualization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact and Results */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Impact & Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Reduced data analysis time by 75% through automated visualization pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Identified potential energy savings of 30% through pattern analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Increased stakeholder engagement by 200% with interactive dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Featured in sustainability reports of multiple organizations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Future Enhancements</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Integration with real-time energy consumption data feeds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Machine learning-based prediction models for energy trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Enhanced mobile responsiveness for on-the-go access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Additional customization options for different user roles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
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

export default DataVizProject;