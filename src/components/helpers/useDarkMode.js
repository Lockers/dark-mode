import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue = false) => {
    
    const [value, setValue] = useLocalStorage('dark', initialValue)
    useEffect(() => {
            value ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [value])
    return [value, setValue]
    };

