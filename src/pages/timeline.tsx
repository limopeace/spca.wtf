import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Timeline from '../components/features/Timeline';
import { FiFilter, FiX } from 'react-icons/fi';

// Type definition for timeline events
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

// Get unique categories from events
const getUniqueCategories = (events: TimelineEvent[]): string[] => {
  const categoriesSet = new Set<string>();
  events.forEach(event => categoriesSet.add(event.category));
  return Array.from(categoriesSet);
};

const TimelinePage: React.FC = () => {
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<TimelineEvent[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Fetch timeline data
    fetch('/data/timeline.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch timeline data');
        }
        return response.json();
      })
      .then(data => {
        setTimelineEvents(data.timelineEvents);
        setFilteredEvents(data.timelineEvents);
        setCategories(getUniqueCategories(data.timelineEvents));
        setIsLoading(false);
      })
      .catch(err => {
        setError('Error loading timeline data. Please try again later.');
        setIsLoading(false);
        console.error('Error fetching timeline data:', err);
      });
  }, []);

  // Apply filters when selected categories change
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredEvents(timelineEvents);
    } else {
      setFilteredEvents(
        timelineEvents.filter(event => selectedCategories.includes(event.category))
      );
    }
  }, [selectedCategories, timelineEvents]);

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <>
      <Head>
        <title>Timeline | SPCA.wtf</title>
        <meta 
          name="description" 
          content="A chronological timeline of events and issues related to SPCA Chandigarh from December 2023 to April 2025."
        />
      </Head>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 bg-primary bg-opacity-20 text-primary rounded-md text-sm font-medium mb-4">
              The Sequence of Events
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              SPCA Chandigarh <span className="title-gradient">Timeline</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              A chronological record of key events, issues, and interventions at SPCA Chandigarh from December 2023 to April 2025.
            </p>
          </div>

          {/* Filter button (mobile) */}
          <div className="mb-6 flex justify-end md:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-primary bg-primary bg-opacity-10 rounded-md hover:bg-opacity-20"
            >
              <FiFilter className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          
          {/* Filters section */}
          <div className={`md:flex md:items-center md:justify-between mb-10 ${showFilters ? 'block' : 'hidden md:flex'}`}>
            <div className="mb-4 md:mb-0">
              <span className="text-sm font-medium text-gray-700">Filter by category:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedCategories.includes(category)
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {selectedCategories.length > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                <FiX className="mr-1" />
                Clear filters
              </button>
            )}
          </div>
          
          {/* Loading state */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-gray-600">Loading timeline...</p>
            </div>
          )}
          
          {/* Error state */}
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {error}
              </div>
            </div>
          )}
          
          {/* Timeline */}
          {!isLoading && !error && (
            <>
              <div className="mb-4 text-right text-sm text-gray-500">
                Showing {filteredEvents.length} of {timelineEvents.length} events
              </div>
              <Timeline events={filteredEvents} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TimelinePage; 