import React, { useEffect } from 'react';

const Rohan = () => {
  useEffect(() => {
    // Load the Google Translate API script
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
      }, 1000); // Adjust the delay time if needed
    };

    // Append the script to the document
    document.head.appendChild(script);

    // Clean up when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <span id="google_translate_element"></span>
  );
}

export default Rohan;
