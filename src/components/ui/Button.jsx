import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-bold uppercase transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-[#f28d35] text-white hover:bg-[#ea580c] disabled:bg-gray-400 focus:ring-orange-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400 focus:ring-gray-500',
  };
  
  const sizes = {
    small: 'px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm xl:px-5 xl:py-2 xl:text-sm',
    medium: 'px-[20px] py-[8px] text-[14px] sm:px-6 sm:py-2 sm:text-base xl:px-7 xl:py-2.5 xl:text-base',
    large: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg xl:px-10 xl:py-5 xl:text-xl',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants?.[variant]} 
    ${sizes?.[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'cursor-not-allowed' : ''} 
    ${className}
  `?.trim()?.replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes?.node,
  onClick: PropTypes?.func,
  variant: PropTypes?.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes?.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes?.bool,
  type: PropTypes?.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes?.bool,
  className: PropTypes?.string,
};

export default Button;