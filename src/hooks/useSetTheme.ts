import { useCallback, useState } from 'react';

type returnValueType = {
    modeTheme: string|null;
    setModeTheme: React.Dispatch<React.SetStateAction<string|null>>;
    setNextMode: (current: string|null) => void;
}

export const useSetTheme = ():returnValueType => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const mode = isDarkMode ? "dark" : "light"
  const [modeTheme, setModeTheme] = useState<string|null>(localStorage.getItem('mode') === null ? mode : localStorage.getItem('mode'))

  const setNextMode = useCallback((current: string|null): void => {
      let modeLight: string|null;
      let modeDark: string|null;
      if(current === 'light'){
        localStorage.setItem('mode', 'dark')
        modeLight = localStorage.getItem('mode')
        console.log(modeLight)
        return setModeTheme(modeLight)
      }else if(current === 'dark'){
        localStorage.setItem('mode', 'light');
         modeDark = localStorage.getItem('mode')
         console.log(modeDark)
        return setModeTheme(modeDark)
      }else{
        console.log('theme err:', current)
      }
    }, [])

  return {modeTheme, setModeTheme, setNextMode}
};

