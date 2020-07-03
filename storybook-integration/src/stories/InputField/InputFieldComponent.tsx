import React from 'react';
import TextField from '@material-ui/core/TextField';

interface IInputFieldProps {
    /**
     * Input field readonly
     */
    readOnly?: boolean;
    /**
     * onChangeHandler
     */
    onChangeHandler: () => void;
    /**
     * Type of input field
     */
    inputType?: string;
    /**
     * variant of input field
     */
    variant?: "outlined" | "standard" | "filled";

    /**
     * Support textarea field
     */
    multiline?: boolean

    /**
     * rows for multiline
     */
    rowsMax?: number;
}

const InputFieldComponent = ({readOnly, onChangeHandler, inputType = 'text', variant, multiline, rowsMax}: IInputFieldProps) =>{
    return (
        <TextField InputProps={{ readOnly: readOnly}} onChange={onChangeHandler} type={inputType}
        variant={variant} multiline={multiline} rowsMax={rowsMax}></TextField>
    );
}

export default InputFieldComponent;