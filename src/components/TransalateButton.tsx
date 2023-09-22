
import { useEffect } from 'react';

declare global {
  interface Window {
    google: any; // Replace 'any' with the correct type if available
  }
}


const TransalateButton = () => {
  useEffect(() => {
   
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js';
    script.async = true;    

    script.onload = () => {
      // Delay the execution of googleTranslateElementInit to ensure the 'google' object is available
      window.setTimeout(() => {
        function googleTranslateElementInit() {
          new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
        }
        googleTranslateElementInit();
      }, 1000); 
    };

    
    document.head.appendChild(script);

    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <span id="google_translate_element"></span>
  );
}

export default TransalateButton;