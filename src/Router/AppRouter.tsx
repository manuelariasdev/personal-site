import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../components/about'
import { Exp } from '../components/exp'
import { Main } from '../components/main'
import { Work } from '../components/work'



export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='exp' element={<Exp/>}/>
      <Route path='work' element={<Work/>}/>

      <Route path='*' element={<>Error</>}/>
    </Routes>
  )
}
