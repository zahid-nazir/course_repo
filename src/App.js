import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { createContext, useEffect, useState } from 'react';
import { getCourseList } from './store/course-slice';
import { useDispatch } from 'react-redux';

export const themes = {
  light: {
    foreground: "#000000",
    background: "#ffffff",
  },
  dark: {
    foreground: "#ffffff",
    background: "#000000",
  }
};

export const ThemeContext = createContext();

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(themes.dark);
  const [themeToggle, setThemeToggle] = useState('dark');

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }
    console.log("one");
    dispatch(getCourseList());
    console.log("two");
  },[dispatch]);

  const changeTheme = () => {

    if(themeToggle === 'dark') {
      setTheme(themes.light);
      setThemeToggle('light');
    } else {
      setTheme(themes.dark);
      setThemeToggle('dark');
    }
  }

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{theme, themeToggle, changeTheme}}>
          <Navbar />
            <AppRoutes />
          <Footer />
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
