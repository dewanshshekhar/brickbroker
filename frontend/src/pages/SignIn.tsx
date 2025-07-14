import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, Search, Key, Building2, Home, Handshake, Settings } from 'lucide-react';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'buyer' | 'agent' | 'company' | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleGoogleSignIn = () => {
    // Placeholder for Google OAuth integration
    console.log('Google Sign In clicked for role:', selectedRole);
    alert('Google Sign In integration will be implemented here');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in form submitted:', { ...formData, role: selectedRole });
    alert('Sign in functionality will be implemented here');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRoleSelect = (role: 'buyer' | 'agent' | 'company') => {
    setSelectedRole(role);
  };

  const handleBackToRoleSelection = () => {
    setSelectedRole(null);
    setFormData({ email: '', password: '' });
  };

  const roles = [
    {
      id: 'buyer' as const,
      title: 'Buyer',
      description: 'Browse listings and schedule visits for your dream property',
      icon: Search,
      gradient: 'from-blue-500/20 to-blue-600/10',
      hoverGradient: 'hover:from-blue-500/30 hover:to-blue-600/20',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      borderColor: 'border-blue-200/50 hover:border-blue-300/70',
      glowColor: 'hover:shadow-blue-500/25',
      accentColor: 'text-blue-600'
    },
    {
      id: 'agent' as const,
      title: 'Agent or Seller',
      description: 'Manage your listed properties and connect with buyers',
      icon: Key,
      gradient: 'from-[#BC8664]/20 to-[#A0734F]/10',
      hoverGradient: 'hover:from-[#BC8664]/30 hover:to-[#A0734F]/20',
      iconBg: 'bg-gradient-to-br from-[#BC8664] to-[#A0734F]',
      borderColor: 'border-[#BC8664]/30 hover:border-[#BC8664]/50',
      glowColor: 'hover:shadow-[#BC8664]/25',
      accentColor: 'text-[#BC8664]'
    },
    {
      id: 'company' as const,
      title: 'Company',
      description: 'Oversee agents, properties, and platform analytics',
      icon: Building2,
      gradient: 'from-purple-500/20 to-purple-600/10',
      hoverGradient: 'hover:from-purple-500/30 hover:to-purple-600/20',
      iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
      borderColor: 'border-purple-200/50 hover:border-purple-300/70',
      glowColor: 'hover:shadow-purple-500/25',
      accentColor: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with Real Estate Theme */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#F9F8F3] via-[#FEFDFB] to-[#F5F4EF]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(188, 134, 100, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(188, 134, 100, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(188, 134, 100, 0.04) 0%, transparent 50%),
            linear-gradient(135deg, transparent 25%, rgba(188, 134, 100, 0.02) 25%, rgba(188, 134, 100, 0.02) 50%, transparent 50%, transparent 75%, rgba(188, 134, 100, 0.02) 75%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 500px 500px, 60px 60px'
        }}
      />

      {/* Gurugram Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.03] overflow-hidden">
        <svg viewBox="0 0 1200 200" className="w-full h-full">
          <path d="M0,200 L0,150 L50,150 L50,120 L100,120 L100,80 L150,80 L150,100 L200,100 L200,60 L250,60 L250,90 L300,90 L300,70 L350,70 L350,110 L400,110 L400,85 L450,85 L450,130 L500,130 L500,95 L550,95 L550,75 L600,75 L600,105 L650,105 L650,65 L700,65 L700,115 L750,115 L750,90 L800,90 L800,125 L850,125 L850,85 L900,85 L900,140 L950,140 L950,100 L1000,100 L1000,120 L1050,120 L1050,160 L1100,160 L1100,180 L1200,180 L1200,200 Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#BC8664]/10 to-[#A0734F]/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/8 to-blue-600/4 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/6 to-purple-600/3 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-[#BC8664]/8 to-[#A0734F]/4 rounded-full blur-2xl animate-float"></div>
        
        {/* Property Icons Pattern */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#BC8664]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-purple-500/25 rounded-full animate-pulse delay-500"></div>
        
        {/* Building Icons */}
        <div className="absolute top-1/3 right-1/4 opacity-[0.02]">
          <Building2 size={40} className="text-[#BC8664]" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 opacity-[0.02]">
          <Home size={35} className="text-[#BC8664]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8">
          {/* Header */}
          <div className="text-center animate-fadeIn">
            <Link to="/" className="mb-8 inline-block group">
              <img 
                src="/logo.PNG" 
                alt="Brick Broker" 
                className="h-14 w-auto mx-auto transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
              />
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#484848] via-[#BC8664] to-[#484848] bg-clip-text text-transparent mb-6 leading-tight">
              Welcome Back
            </h1>
            <p className="text-xl text-[#7A7A7A] leading-relaxed max-w-lg mx-auto">
              {selectedRole 
                ? `Continue your journey as ${roles.find(r => r.id === selectedRole)?.title}` 
                : 'Choose your role to get started'
              }
            </p>
          </div>

          {/* Role Selection */}
          {!selectedRole && (
            <div className="relative animate-slideUp">
              {/* Main Card with Enhanced Glassmorphism */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 p-8 md:p-12 overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/50 rounded-3xl"></div>
                <div 
                  className="absolute inset-0 opacity-[0.02] rounded-3xl"
                  style={{
                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23BC8664"><circle cx="50" cy="50" r="2"/></svg>')`,
                    backgroundSize: '30px 30px'
                  }}
                />
                
                <div className="relative z-10">
                  {/* Section Header */}
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#484848] mb-4">
                      Select Your Role
                    </h2>
                    <p className="text-lg text-[#7A7A7A] max-w-md mx-auto">
                      Choose how you'd like to access the platform
                    </p>
                    
                    {/* Decorative Divider */}
                    <div className="flex items-center justify-center mt-6 mb-8">
                      <div className="h-px bg-gradient-to-r from-transparent via-[#BC8664]/30 to-transparent w-32"></div>
                      <div className="mx-4 w-2 h-2 bg-[#BC8664]/40 rounded-full"></div>
                      <div className="h-px bg-gradient-to-r from-transparent via-[#BC8664]/30 to-transparent w-32"></div>
                    </div>
                  </div>
                  
                  {/* Role Cards - Responsive Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {roles.map((role) => {
                      const Icon = role.icon;
                      return (
                        <button
                          key={role.id}
                          onClick={() => handleRoleSelect(role.id)}
                          className={`group relative overflow-hidden bg-gradient-to-br ${role.gradient} ${role.hoverGradient} rounded-2xl border-2 ${role.borderColor} p-6 md:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${role.glowColor} hover:-translate-y-2 active:scale-95 transform-gpu`}
                        >
                          {/* Card Background Effects */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl"></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Content */}
                          <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                            {/* Icon Container with Enhanced Animation */}
                            <div className="relative">
                              <div className={`${role.iconBg} p-5 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden`}>
                                {/* Icon Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                                <Icon size={32} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                              </div>
                              
                              {/* Floating Ring Effect */}
                              <div className="absolute inset-0 rounded-2xl border-2 border-white/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                              
                              {/* Pulse Animation */}
                              <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-10 scale-0 group-hover:scale-150 transition-all duration-700 animate-pulse"></div>
                            </div>
                            
                            {/* Text Content */}
                            <div className="space-y-3">
                              <h3 className={`font-bold text-xl md:text-2xl ${role.accentColor} group-hover:text-[#484848] transition-colors duration-300`}>
                                {role.title}
                              </h3>
                              <p className="text-sm md:text-base text-[#7A7A7A] leading-relaxed group-hover:text-[#666] transition-colors duration-300 px-2">
                                {role.description}
                              </p>
                            </div>
                            
                            {/* Selection Indicator with Radio Button Style */}
                            <div className="flex items-center justify-center">
                              <div className={`w-6 h-6 rounded-full border-2 ${role.borderColor.replace('hover:', '')} group-hover:border-current transition-all duration-300 flex items-center justify-center relative overflow-hidden`}>
                                <div className="w-3 h-3 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>
                                
                                {/* Ripple Effect */}
                                <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-20 scale-0 group-hover:scale-150 transition-all duration-500"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Hover Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Login Form - Only show when role is selected */}
          {selectedRole && (
            <div className="relative animate-slideUp">
              {/* Main Card with Glassmorphism */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 p-8 md:p-12 overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/50 rounded-3xl"></div>
                
                <div className="relative z-10">
                  {/* Back Button */}
                  <button
                    onClick={handleBackToRoleSelection}
                    className="mb-8 inline-flex items-center gap-3 text-[#BC8664] hover:text-[#A0734F] transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-xl border border-[#BC8664]/20 group-hover:border-[#BC8664]/40 group-hover:bg-[#BC8664]/5 transition-all duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15,18 9,12 15,6"></polyline>
                      </svg>
                    </div>
                    <span className="font-semibold">Change Role</span>
                  </button>

                  {/* Role Indicator */}
                  <div className="mb-10 p-6 bg-gradient-to-r from-[#BC8664]/15 via-[#BC8664]/8 to-transparent rounded-2xl border border-[#BC8664]/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                    <div className="relative z-10 flex items-center gap-5">
                      {(() => {
                        const selectedRoleData = roles.find(r => r.id === selectedRole);
                        const Icon = selectedRoleData?.icon || User;
                        return (
                          <>
                            <div className={`${selectedRoleData?.iconBg} p-4 rounded-2xl shadow-lg relative overflow-hidden`}>
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                              <Icon size={28} className="text-white relative z-10" />
                            </div>
                            <div>
                              <p className="font-bold text-[#484848] text-2xl mb-2">
                                Signing in as {selectedRoleData?.title}
                              </p>
                              <p className="text-[#7A7A7A] text-lg">
                                {selectedRoleData?.description}
                              </p>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  </div>

                  {/* Google Sign In Button */}
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center gap-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-[#BC8664]/30 text-[#484848] py-4 px-6 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:bg-white/95 mb-8 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 relative z-10" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="relative z-10">Continue with Google</span>
                  </button>

                  {/* Decorative Divider */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-6 py-2 bg-white/90 backdrop-blur-sm text-[#7A7A7A] rounded-full border border-gray-200/50 text-sm font-medium">
                        Or continue with email
                      </span>
                    </div>
                  </div>

                  {/* Email/Password Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#484848] mb-3">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 border border-gray-200/50 rounded-xl bg-gray-50/50 backdrop-blur-sm">
                          <Mail size={18} className="text-[#7A7A7A]" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-16 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-[#BC8664]/20 focus:border-[#BC8664] transition-all duration-300 bg-white/60 backdrop-blur-sm hover:border-gray-300/70 text-lg"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#484848] mb-3">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 border border-gray-200/50 rounded-xl bg-gray-50/50 backdrop-blur-sm">
                          <Lock size={18} className="text-[#7A7A7A]" />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full pl-16 pr-16 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-[#BC8664]/20 focus:border-[#BC8664] transition-all duration-300 bg-white/60 backdrop-blur-sm hover:border-gray-300/70 text-lg"
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 border border-gray-200/50 rounded-xl hover:border-[#BC8664]/30 transition-all duration-300 bg-gray-50/50 hover:bg-gray-100/50 backdrop-blur-sm"
                        >
                          {showPassword ? (
                            <EyeOff size={18} className="text-[#7A7A7A]" />
                          ) : (
                            <Eye size={18} className="text-[#7A7A7A]" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-5 w-5 text-[#BC8664] focus:ring-[#BC8664]/20 border-gray-300 rounded transition-colors"
                        />
                        <label htmlFor="remember-me" className="ml-3 block text-sm text-[#7A7A7A] font-medium">
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <a href="#" className="font-semibold text-[#BC8664] hover:text-[#A0734F] transition-colors">
                          Forgot password?
                        </a>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#BC8664] to-[#A0734F] hover:from-[#A0734F] hover:to-[#8B5E3C] text-white py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95 text-lg relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className="p-2 border border-white/30 rounded-xl bg-white/10 relative z-10">
                        <User size={18} />
                      </div>
                      <span className="relative z-10">Sign In</span>
                    </button>
                  </form>

                  {/* Footer */}
                  <div className="mt-8 text-center">
                    <p className="text-sm text-[#7A7A7A]">
                      Don't have an account?{' '}
                      <a href="#" className="font-semibold text-[#BC8664] hover:text-[#A0734F] transition-colors">
                        Sign up here
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Back to Home */}
          <div className="text-center animate-fadeIn">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 text-[#BC8664] hover:text-[#A0734F] transition-all duration-300 font-semibold group relative"
            >
              <div className="p-2 rounded-xl border border-[#BC8664]/20 group-hover:border-[#BC8664]/40 group-hover:bg-[#BC8664]/5 transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </div>
              <span className="relative">
                ← Back to Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BC8664] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SignIn;
