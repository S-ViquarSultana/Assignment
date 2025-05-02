'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, User, ShoppingCart, Search, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-sm text-gray-500 hidden md:block">
            🏥 Access world-class healthcare services
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-700 hidden md:block">
              <Link href="#" className="hover:text-purple-600">Need Help?</Link>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <User size={16} className="mr-1" />
              <Link href="#" className="hover:text-purple-600">Login / Sign up</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-purple-700">
                Apollo<span className="text-purple-500">247</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-purple-600 font-medium flex items-center">
              Doctors <ChevronDown size={16} className="ml-1" />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600 font-medium flex items-center">
              Pharmacy <ChevronDown size={16} className="ml-1" />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600 font-medium flex items-center">
              Lab Tests <ChevronDown size={16} className="ml-1" />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600 font-medium flex items-center">
              Health Records <ChevronDown size={16} className="ml-1" />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600 font-medium flex items-center">
              Circle <ChevronDown size={16} className="ml-1" />
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative">
              <input 
                type="text" 
                placeholder="Search doctors, medicines, etc."
                className="border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={18} className="absolute right-3 text-gray-400" />
            </div>
            <div className="flex items-center">
              <ShoppingCart size={20} className="text-gray-700" />
              <span className="ml-1 text-sm hidden md:inline">Cart</span>
            </div>
            <button onClick={toggleMenu} className="lg:hidden text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 flex flex-col pt-20 px-4 lg:hidden transform transition-transform duration-300",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <button 
          onClick={toggleMenu} 
          className="absolute top-4 right-4 text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="mb-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search doctors, medicines, etc."
              className="border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={18} className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
        
        <nav className="flex flex-col space-y-4">
          <Link 
            href="#" 
            className="text-gray-700 hover:text-purple-600 py-2 border-b border-gray-100 font-medium"
            onClick={toggleMenu}
          >
            Doctors
          </Link>
          <Link 
            href="#" 
            className="text-gray-700 hover:text-purple-600 py-2 border-b border-gray-100 font-medium"
            onClick={toggleMenu}
          >
            Pharmacy
          </Link>
          <Link 
            href="#" 
            className="text-gray-700 hover:text-purple-600 py-2 border-b border-gray-100 font-medium"
            onClick={toggleMenu}
          >
            Lab Tests
          </Link>
          <Link 
            href="#" 
            className="text-gray-700 hover:text-purple-600 py-2 border-b border-gray-100 font-medium"
            onClick={toggleMenu}
          >
            Health Records
          </Link>
          <Link 
            href="#" 
            className="text-gray-700 hover:text-purple-600 py-2 border-b border-gray-100 font-medium"
            onClick={toggleMenu}
          >
            Circle
          </Link>
        </nav>
        
        <div className="mt-auto mb-8">
          <div className="py-4 border-t border-gray-100">
            <Link href="#" className="text-purple-600 font-medium">
              Login / Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;