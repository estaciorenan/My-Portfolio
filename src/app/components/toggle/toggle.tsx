'use client'
import { DarkModeSwitch } from 'animated-toggle-button';
import { Context } from '@/app/contexts/auth';
import { useContext } from 'react';

export default function Toggle() {
    const { themeDark, setThemeDark } = useContext(Context)

    const toggleDarkMode = (checked: boolean) => {
        setThemeDark(!checked);
    };
    return (
        <DarkModeSwitch
            checked={!themeDark? true: false}
            onChange={toggleDarkMode}
            size={30}
        />
    )
}