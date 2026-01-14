import { createContext, useReducer, useEffect } from "react";

// Check localStorage for a saved theme, otherwise default to false (Light)
const INITIAL_STATE = {
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": return { darkMode: false };
    case "DARK": return { darkMode: true };
    case "TOGGLE": return { darkMode: !state.darkMode };
    default: return state;
  }
};

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  // SAVE to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem("darkMode", state.darkMode);
  }, [state.darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};