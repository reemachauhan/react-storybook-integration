import React from 'react';
import { action } from '@storybook/addon-actions';
import InputFieldComponent from './InputFieldComponent';

export default {
    title: 'InputField',
    component: InputFieldComponent,
};

export const OutlinedInputField = () => <InputFieldComponent variant="outlined" onChangeHandler={action('changed')}></InputFieldComponent>

export const ReadOnlyInputField = () => <InputFieldComponent variant="filled" readOnly={true} onChangeHandler={action('changed')}></InputFieldComponent>

export const TextAreaInputField = () => <InputFieldComponent variant="outlined" multiline={true} rowsMax={4} onChangeHandler={action('changed')}></InputFieldComponent>

export const PasswordInputField = () => <InputFieldComponent variant="outlined" inputType={"password"} onChangeHandler={action('changed')}></InputFieldComponent>