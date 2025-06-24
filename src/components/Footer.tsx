
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
      <div className="flex items-center justify-center gap-2 text-gray-600 font-playful">
        <span>Made with</span>
        <Heart className="w-4 h-4 text-red-500 fill-current" />
        <span>for food lovers everywhere</span>
      </div>
    </footer>
  );
};

export default Footer;
