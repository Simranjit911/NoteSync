import  { useEffect } from 'react';
import Darkmode from 'darkmode-js';

function DarkModeC() {
  useEffect(() => {
    const options = {
      // Customize your dark mode settings here
      bottom: '35px', // default: '32px'
      right: 'unset', // default: '32px'
      left: '15px', // default: 'unset'
      time: '1s', // default: '0.3s'
      mixColor: '#555', // default: '#fff'
      backgroundColor: '#fff    ',  // default: '#fff'
      buttonColorDark: '#000',  // default: '#100f2c'
      buttonColorLight: '#999', // default: '#fff'
      saveInCookies: false, // default: true,
      label: '🌓', // default: ''
      autoMatchOsTheme: true // default: true
    };

    const darkmode = new Darkmode(options);
    darkmode.showWidget(); // Display dark mode if preferred

    return () => {
      darkmode.destroy(); // Cleanup when the component unmounts
    };
  }, []);

  return <></>; // Empty fragment, as this component doesn't render anything
}

export default DarkModeC;