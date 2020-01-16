import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    useEffect(() =>{
        const body = document.querySelector('body');
        if(darkMode){
            body.classList.add('dark-mode')
        }else{
            body.classList.remove('dark-mode')
        }
    },[darkMode])

    return [darkMode, setDarkMode];
}