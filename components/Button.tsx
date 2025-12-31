import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none transform active:scale-95";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/40 hover:-translate-y-1",
    secondary: "bg-accent-500 text-white hover:bg-accent-400 shadow-lg shadow-accent-500/40 hover:-translate-y-1",
    gradient: "bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-1 border border-transparent",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
    white: "bg-white text-primary-700 hover:bg-gray-50 shadow-lg hover:shadow-xl hover:-translate-y-1"
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;