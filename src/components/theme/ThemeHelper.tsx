import { hover } from '@testing-library/user-event/dist/hover';
import {useState,useEffect} from 'react'

const ThemeHelper = () => {
    const [theme="light",setTheme]=useState<string>();
    const [hover=false,setHover]=useState<boolean>();
    useEffect(()=>{
        if(localStorage.getItem('theme')){
            let theme=localStorage.getItem('theme')||'light';
            setTheme(localStorage.getItem('theme')||'light')
            document.documentElement.setAttribute('color-scheme',theme)
            console.log("Has stored variable.")
        }else{
            localStorage.setItem('theme','light')
        }
    },[
        theme
    ])

    function toggleTheme(){
        if(localStorage.getItem('theme')==='light'){
            setTheme('dark');
            localStorage.setItem('theme','dark');
            document.documentElement.setAttribute('color-scheme',theme)
        }

        else{
            setTheme('light');
            localStorage.setItem('theme','light');
            document.documentElement.setAttribute('color-scheme',theme)
        }
    }
  return (
    <div style={{
        position:'fixed',
        top:0,
        right:0,
        margin:15,
    }}>
        <button 

        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        style={{
            background:hover?'':'transparent',
            color:hover?'initial':'var(--textColor)',
            filter:hover?'':'brightness(50%)',
            padding:10,
            margin:10
        }}
        onClick={()=>toggleTheme()}>{theme==='light'?'dark':'light'}</button>
    </div>
  )
}

export default ThemeHelper