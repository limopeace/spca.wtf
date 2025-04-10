import React, { useState } from 'react';
import { 
  FiMail, FiPhone, FiUsers, FiUserX, FiUserPlus, 
  FiAlertTriangle, FiFileText, FiPhoneOff, FiTool, 
  FiDollarSign, FiShoppingBag, FiFeather, FiUserMinus, 
  FiGlobe, FiChevronRight, FiChevronDown 
} from 'react-icons/fi';
import Link from 'next/link';

// Type definitions
type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  category: string;
  description: string;
  keyPoints: string[];
  relatedDocumentId?: string;
  icon: string;
};

interface TimelineProps {
  events: TimelineEvent[];
}

// Helper function to render the appropriate icon
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'mail': return <FiMail className="h-5 w-5" />;
    case 'phone': return <FiPhone className="h-5 w-5" />;
    case 'users': return <FiUsers className="h-5 w-5" />;
    case 'user-x': return <FiUserX className="h-5 w-5" />;
    case 'user-plus': return <FiUserPlus className="h-5 w-5" />;
    case 'alert-triangle': return <FiAlertTriangle className="h-5 w-5" />;
    case 'file-text': return <FiFileText className="h-5 w-5" />;
    case 'phone-off': return <FiPhoneOff className="h-5 w-5" />;
    case 'tool': return <FiTool className="h-5 w-5" />;
    case 'dollar-sign': return <FiDollarSign className="h-5 w-5" />;
    case 'shopping-bag': return <FiShoppingBag className="h-5 w-5" />;
    case 'feather': return <FiFeather className="h-5 w-5" />;
    case 'user-minus': return <FiUserMinus className="h-5 w-5" />;
    case 'globe': return <FiGlobe className="h-5 w-5" />;
    default: return <FiFileText className="h-5 w-5" />;
  }
};

// Helper function to get category color
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Administrative': return 'bg-red-100 text-red-800';
    case 'Medical': return 'bg-blue-100 text-blue-800';
    case 'Operational': return 'bg-yellow-100 text-yellow-800';
    case 'Infrastructure': return 'bg-green-100 text-green-800';
    case 'Financial': return 'bg-purple-100 text-purple-800';
    case 'Positive': return 'bg-teal-100 text-teal-800';
    case 'Public Awareness': return 'bg-indigo-100 text-indigo-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

// Format date from YYYY-MM-DD to Month DD, YYYY
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const toggleEvent = (eventId: string) => {
    if (expandedEvent === eventId) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(eventId);
    }
  };

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
      
      <div className="space-y-12">
        {events.map((event, index) => (
          <div 
            key={event.id} 
            className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary flex items-center justify-center z-10">
              {getIcon(event.icon)}
            </div>
            
            {/* Content */}
            <div 
              className={`ml-20 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'
              } md:w-5/12`}
            >
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-3">
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
                
                <div className="text-sm text-gray-500 mb-2">{formatDate(event.date)}</div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900">{event.title}</h3>
                
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <button 
                  onClick={() => toggleEvent(event.id)}
                  className="flex items-center text-primary font-medium hover:underline mb-4"
                >
                  {expandedEvent === event.id ? (
                    <>
                      <span>Hide Details</span>
                      <FiChevronDown className="ml-1" />
                    </>
                  ) : (
                    <>
                      <span>Show Details</span>
                      <FiChevronRight className="ml-1" />
                    </>
                  )}
                </button>
                
                {expandedEvent === event.id && (
                  <div className="mt-2 mb-4 bg-gray-50 p-4 rounded-md">
                    <h4 className="font-semibold text-gray-700 mb-2">Key Points:</h4>
                    <ul className="space-y-2">
                      {event.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <span className="text-primary mr-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {event.relatedDocumentId && (
                  <Link href={`/documents/${event.relatedDocumentId}`} className="inline-block mt-2 text-sm bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                    View Related Document
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 