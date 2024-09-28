import React, { useContext } from 'react'
import{ThemeContext} from './App'
export const ComponentA = (props) => {
  const { children } = props;

  return (
    <div>ComponentA{children}</div>
  );
}

export const ComponentB = (props) => {
  const { children } = props;

  return (
    <div>ComponentB{children}</div>
  );
}

export const ComponentC = (props) => {
  const { children } = props;

  return (
    <div>ComponentC{children}</div>
  );
}

export const ComponentD = (props) => {
  const { children } = props;

  return (
    <div>ComponentD{children}</div>
  );
}

export const ComponentE = (props) => {
  const { children } = props;
const {theme} =useContext(ThemeContext)
  return (
    <div>ComponentE{children}{theme}</div>
  );
}
