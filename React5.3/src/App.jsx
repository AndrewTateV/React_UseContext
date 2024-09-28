import React,{createContext} from 'react'
import {
  ComponentA,
  ComponentB,
  ComponentC,
  ComponentD,
  ComponentE
} from './ComponentA'

export const ThemeContext = createContext()
export default function App() {
const [theme,SetTheme]=React.useState('light')
 return(
 <ThemeContext.Provider value={{theme ,SetTheme}}>

<ComponentA>
  <ComponentB>
    <ComponentC>
      <ComponentD>
        <ComponentE />
      </ComponentD>
    </ComponentC>
  </ComponentB>
</ComponentA>

 </ThemeContext.Provider>)
}
