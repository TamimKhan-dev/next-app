"use client";
import React from 'react'
import { Github, Mail, Dribbble, Linkedin, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Profile() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-50 p-8 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-32 h-32 sm:w-36 sm:h-36 bg-gray-100 rounded-2xl overflow-hidden">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Body */}
                <rect x="50" y="120" width="100" height="80" fill="#5b9bd5" rx="10"/>
                
                {/* Head */}
                <ellipse cx="100" cy="80" rx="35" ry="40" fill="#2c2c2c"/>
                
                {/* Face */}
                <ellipse cx="100" cy="90" rx="28" ry="32" fill="#f5d5b8"/>
                
                {/* Eyes */}
                <line x1="88" y1="85" x2="88" y2="92" stroke="#2c2c2c" strokeWidth="3" strokeLinecap="round"/>
                <line x1="112" y1="85" x2="112" y2="92" stroke="#2c2c2c" strokeWidth="3" strokeLinecap="round"/>
                
                {/* Smile */}
                <path d="M 90 105 Q 100 112 110 105" stroke="#2c2c2c" strokeWidth="2" fill="none" strokeLinecap="round"/>
                
                {/* Beard */}
                <ellipse cx="100" cy="115" rx="22" ry="18" fill="#2c2c2c"/>
                
                {/* Collar */}
                <path d="M 70 140 L 80 130 L 90 140" fill="#2c3e50"/>
                <path d="M 130 140 L 120 130 L 110 140" fill="#2c3e50"/>
              </svg>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Johnny Wayne
            </h1>
            <div className="space-y-2 mb-4">
              <p className="text-gray-600 font-medium">Hi There!</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                I am Johnny, Senior Developer. Focusing heavily on product development and interactive design.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-3 mt-4">
              <a href="#" className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                <Dribbble className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                <Github className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                <Mail className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6 sm:p-8 space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                defaultValue="admin@comtech.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your email"
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
                type="text"
                defaultValue='tamimKhan@#$'
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition-all pr-12"
                placeholder="Enter your password"
              />
          </div>

          {/* Submit Button */}
          <button onClick={() => toast.error("Feature didn't added yet")} className="w-full bg-lime-200 cursor-pointer font-semibold py-3 px-6 rounded-lg  duration-200 shadow-lg hover:shadow-xl">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  )
}
