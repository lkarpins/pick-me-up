import * as React from 'react';
import { Button } from '../Button/Button';
import "./Navigation.css"


export interface NavigationProps {
    label: string;
}

export const Navigation = ({
    label
}: NavigationProps) => {
    return (
        <nav>
            <h1 className="logo">PickMeUp</h1>
            <Button label="See Favorites" />
        </nav>
    );
}