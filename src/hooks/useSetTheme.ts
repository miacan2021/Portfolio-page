import { useCallback, useState } from 'react';

type Value = {
    modeTheme: string;
    setModeTheme: React.Dispatch<React.SetStateAction<string>>;
    setNextMode: (current: string) => void;
}

export const useSetTheme = (): Value => {
  const mode: string| null = localStorage.getItem('mode')
  const [modeTheme, setModeTheme] = useState<string>(mode || 'light')

  const setNextMode = useCallback((current: string): void => {
      if(current === 'light'){
        localStorage.setItem('mode', 'dark')
        return setModeTheme('dark')
      }else if(current === 'dark'){
        localStorage.setItem('mode', 'light');
        return setModeTheme('light')
      }else{
        console.log('theme err:', current)
      }
    }, [])

  return {modeTheme, setModeTheme, setNextMode}
};

