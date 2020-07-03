import React from 'react';
import { action } from '@storybook/addon-actions';
import ButtonComponent from './ButtonComponent';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default {
  title: 'Button',
  component: ButtonComponent,
};

export const ButtonTextSecondary = () => <ButtonComponent onClickHandler={action('clicked')} variant={"contained"} color={"secondary"} size={'medium'} >Increase steps</ButtonComponent>;

export const ButtonTextPrimary = () => <ButtonComponent onClickHandler={action('clicked')} variant={"outlined"} color={"primary"} size={'small'} >Increase steps</ButtonComponent>;

export const ButtonGroupElement = () => {
return(
  <div>
    <ButtonGroup color="primary" aria-label="outlined primary button group">
    <ButtonComponent onClickHandler={action('clicked')} variant={"contained"} color={"primary"} size={'small'} >Primary Button</ButtonComponent>;
    <ButtonComponent onClickHandler={action('clicked')} variant={"outlined"} color={"secondary"} size={'small'} >Secondary Button</ButtonComponent>;
    </ButtonGroup>
  </div>
)}