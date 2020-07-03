import React, { ReactNode } from 'react';
import Button from '@material-ui/core/Button';

interface IButtonProps {
    /**
    * The content of the button.
    */
    children: ReactNode;
    /**
    * Disables the button.
    */
    disabled?: boolean;
    /**
    * Handler function
    */
    onClickHandler: () => void;
    /**
    * Give color to button
    */
    color?: "primary" | "inherit" | "secondary" | "default";
    /**
    * variant
    */
    variant?: 'text' | 'outlined' | 'contained';
    /**
    * size
    */
    size?: 'small' | 'medium' | 'large';
}

const ButtonComponent = ({children, disabled, 
    color = 'primary', 
    variant = 'contained', size, onClickHandler} : IButtonProps) =>{
    return (
        <Button variant={variant} color={color} size={size} onClick={onClickHandler} disabled={disabled}>
            {children}
        </Button>
    );
}

export default ButtonComponent;