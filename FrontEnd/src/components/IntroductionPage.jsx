 import React from 'react'
import { NavLink } from 'react-router-dom';
const IntroductionPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Welcome to Educational Institute Management</h1>

      {/* Student Section */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Student Section</h2>
        <div className="grid grid-cols-2 gap-4">
          <NavLink to={"/addstudent"}>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-4 px-8 mr-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          type="button"
          >
            Student Registration
            </button>
            </NavLink>
        <NavLink to ={"/studentlist"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          type="button">
            Student Profiles
          </button>
          </NavLink>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Course Registration
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Grading and Progress Tracking
          </button>
        </div>
      </div>

      {/* Faculty Section */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Faculty Section</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            Recruitment
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            Course Assignment
          </button>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Curriculum Section</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Course Catalog
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Curriculum Planning
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Timetable Generation
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
