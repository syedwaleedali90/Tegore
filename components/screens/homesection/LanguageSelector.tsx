import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { 
      code: 'en', 
      name: 'English', 
      flag: (
        <svg className="w-5 h-4" viewBox="0 0 28 20" fill="none">
          <rect width="28" height="20" fill="#012169"/>
          <path d="M0 0L28 20M28 0L0 20" stroke="white" strokeWidth="4"/>
          <path d="M0 0L28 20M28 0L0 20" stroke="#C8102E" strokeWidth="2.5"/>
          <path d="M14 0V20M0 10H28" stroke="white" strokeWidth="6.5"/>
          <path d="M14 0V20M0 10H28" stroke="#C8102E" strokeWidth="4"/>
        </svg>
      )
    },
    { 
      code: 'es', 
      name: 'Español', 
      flag: (
        <svg className="w-5 h-4" viewBox="0 0 28 20" fill="none">
          <rect width="28" height="20" fill="#C60B1E"/>
          <rect y="5" width="28" height="10" fill="#FFC400"/>
        </svg>
      )
    },
    { 
      code: 'fr', 
      name: 'Français', 
      flag: (
        <svg className="w-5 h-4" viewBox="0 0 28 20" fill="none">
          <rect width="28" height="20" fill="#ED2939"/>
          <rect width="9.33" height="20" fill="#002395"/>
          <rect x="9.33" width="9.34" height="20" fill="white"/>
        </svg>
      )
    },
    { 
      code: 'de', 
      name: 'Deutsch', 
      flag: (
        <svg className="w-5 h-4" viewBox="0 0 28 20" fill="none">
          <rect width="28" height="20" fill="#FFCE00"/>
          <rect width="28" height="6.67" fill="black"/>
          <rect y="6.67" width="28" height="6.66" fill="#DD0000"/>
        </svg>
      )
    },
    { 
      code: 'zh', 
      name: '中文', 
      flag: (
        <svg className="w-5 h-4" viewBox="0 0 28 20" fill="none">
          <rect width="28" height="20" fill="#DE2910"/>
          <path d="M7 4L7.5 5.5L9 6L7.5 6.5L7 8L6.5 6.5L5 6L6.5 5.5L7 4Z" fill="#FFDE00"/>
        </svg>
      )
    },
  ];

  // const handleLanguageSelect = (language) => {
  //   setSelectedLanguage(language.name);
  //   setIsOpen(false);
  // };

  const selectedLang = languages.find(lang => lang.name === selectedLanguage);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center">{selectedLang?.flag}</span>
        <span className="text-sm font-medium text-gray-700">
          {selectedLanguage}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  selectedLanguage === language.name ? 'bg-gray-100' : ''
                }`}
              >
                <span className="flex items-center">{language.flag}</span>
                <span className="text-sm font-medium text-gray-700">
                  {language.name}
                </span>
              </button>
            ))}
          </div>
        </>
      )} */}
    </div>
  );
}