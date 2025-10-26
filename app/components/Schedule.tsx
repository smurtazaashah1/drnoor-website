'use client';

import React, { useState } from 'react';

interface ScheduleEntry {
  day: string;
  subject: string;
  time: string;
  group?: string;
}

interface LocationSchedule {
  [key: string]: ScheduleEntry[];
}

const Schedule: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState('Online');

  const locations = [
    'Online',
    'Bahadurabad',
    'North Nazimabad',
    'Malir',
    'Gulshan',
    'Johar',
  ];

  const scheduleData: LocationSchedule = {
    Online: [
      {
        day: 'Tuesday & Thursday',
        subject: 'AS Chemistry',
        time: '4-5 PM',
        group: '',
      },
      {
        day: 'Tuesday & Thursday',
        subject: 'OL/IGCSE Chemistry',
        time: '5-6 PM',
        group: 'Group A',
      },
      {
        day: 'Tuesday & Thursday',
        subject: 'OL/IGCSE Biology',
        time: '6-7 PM',
        group: 'Group B',
      },
      {
        day: 'Monday & Wednesday',
        subject: 'A2 Chemistry',
        time: '8-9 PM',
        group: '',
      },
      {
        day: 'Thursday & Friday',
        subject: 'OL/IGCSE Biology',
        time: '8-9 PM',
        group: 'Group A',
      },
      {
        day: 'Tuesday',
        subject: 'OL/IGCSE Chemistry',
        time: '8-9 PM',
        group: 'Group B',
      },
      {
        day: 'Friday',
        subject: 'OL/IGCSE Chemistry',
        time: '6-7 PM',
        group: '',
      },
      {
        day: 'Saturday & Sunday',
        subject: 'AS Biology',
        time: '5:30-6:30 PM',
        group: '',
      },
      {
        day: 'Saturday & Sunday',
        subject: 'A2 Biology',
        time: '6:45-7:45 PM',
        group: '',
      },
    ],
    Bahadurabad: [
      {
        day: 'Tuesday & Thursday',
        subject: 'AS Chemistry',
        time: '4-5 PM',
        group: '',
      },
      {
        day: 'Tuesday & Thursday',
        subject: 'OL/IGCSE Chemistry',
        time: '5-6 PM',
        group: 'Group A',
      },
      {
        day: 'Tuesday & Thursday',
        subject: 'OL/IGCSE Biology',
        time: '6-7 PM',
        group: 'Group B',
      },
    ],
    'North Nazimabad': [
      {
        day: 'Monday & Wednesday',
        subject: 'OL/IGCSE Biology',
        time: '4-5 PM',
        group: '',
      },
      {
        day: 'Monday & Wednesday',
        subject: 'OL/IGCSE Biology',
        time: '6-7 PM',
        group: '',
      },
      {
        day: 'Monday & Wednesday',
        subject: 'OL/IGCSE Chemistry',
        time: '7-8 PM',
        group: '',
      },
      {
        day: 'Monday & Wednesday',
        subject: 'A2 Chemistry',
        time: '8-9 PM',
        group: '',
      },
    ],
    Malir: [
      {
        day: 'Tuesday',
        subject: 'OL/IGCSE Chemistry',
        time: '8-9 PM',
        group: '',
      },
      {
        day: 'Friday',
        subject: 'OL/IGCSE Chemistry',
        time: '6-7 PM',
        group: '',
      },
    ],
    Gulshan: [
      { day: 'Friday', subject: 'OL/IGCSE Biology', time: '3-4 PM', group: '' },
      {
        day: 'Saturday',
        subject: 'OL/IGCSE Biology',
        time: '4-5 PM',
        group: '',
      },
      {
        day: 'Saturday',
        subject: 'OL/IGCSE Chemistry',
        time: '8-9 PM',
        group: '',
      },
      {
        day: 'Sunday',
        subject: 'OL/IGCSE Chemistry',
        time: '4:30-5:30 PM',
        group: '',
      },
      {
        day: 'Saturday & Sunday',
        subject: 'AS Biology',
        time: '5:30-6:30 PM',
        group: '',
      },
      {
        day: 'Saturday & Sunday',
        subject: 'A2 Biology',
        time: '6:45-7:45 PM',
        group: '',
      },
    ],
    Johar: [
      {
        day: 'Saturday & Sunday',
        subject: 'OL/IGCSE Chemistry',
        time: '12:30-1:30 PM',
        group: '',
      },
      {
        day: 'Saturday & Sunday',
        subject: 'OL/IGCSE Biology',
        time: '1:30-2:30 PM',
        group: '',
      },
      {
        day: 'Saturday & Sunday',
        subject: 'AS Biology',
        time: '2:30-3:30 PM',
        group: '',
      },
    ],
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Class Schedule
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check your class timings by location.
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full"></div>
        </div>

        {/* Location Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => setActiveLocation(location)}
                className={`px-4 py-3 md:px-6 md:py-3 rounded-xl font-medium text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                  activeLocation === location
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-white shadow-lg shadow-amber-400/30'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                }`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {activeLocation} Schedule
            </h3>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-lg">
                      Day
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-lg">
                      Subject
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-lg">
                      Time
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-lg">
                      Group
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData[activeLocation].map((entry, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <td className="py-4 px-6 text-gray-800 font-medium">
                        {entry.day}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                          {entry.subject}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-700 font-mono">
                        {entry.time}
                      </td>
                      <td className="py-4 px-6">
                        {entry.group && (
                          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-100 text-amber-800">
                            {entry.group}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {scheduleData[activeLocation].map((entry, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-100"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-semibold text-gray-600">
                        Day:
                      </span>
                      <span className="text-sm text-gray-800 font-medium text-right flex-1 ml-2">
                        {entry.day}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-600">
                        Subject:
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                        {entry.subject}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-600">
                        Time:
                      </span>
                      <span className="text-sm text-gray-700 font-mono">
                        {entry.time}
                      </span>
                    </div>
                    {entry.group && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-600">
                          Group:
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-100 text-amber-800">
                          {entry.group}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {scheduleData[activeLocation].length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2m-8 0V7"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">
                  No classes scheduled for this location.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
