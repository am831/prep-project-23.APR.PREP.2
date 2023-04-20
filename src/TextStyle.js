import React from 'react';
import "./App.css";

export function SmallText({text, color}) {
    return (
        <span className='small-text' style={{color: color}}>{text}</span>
    );
}

export function SmallTextBold({text, color}) {
    return (
        <span className='small-text-bold' style={{color: color}}>{text}</span>
    );
}

export function MainScreenTemp({text, color}) {
    return (
        <span className='main-screen-temp' style={{color: color}}>{text}</span>
    );
}

export function MainScreenCondition({text, color}) {
    return (
        <span className='main-screen-condition' style={{color: color}}>{text}</span>
    );
}

export function Title({text, color}) {
    return (
        <span className='title' style={{color: color}}>{text}</span>
    );
}