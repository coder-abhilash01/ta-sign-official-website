 import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Utilities from '../pages/Utilities'
import DscRates from '@/pages/DscRates'
import AuthorizationLetters from '@/pages/AuthorizationLetters'
import ISOPage from '@/pages/ISOPage'
import BuyTokenPage from '@/pages/BuyTokenPage'
import TrademarkPage from '@/pages/TrademarkPage'
import TempMailPage from '@/pages/TempMailPage'
import Blog from '@/pages/Blog'
import BlogDetails from '@/pages/BlogDetails'
import MoreServices from '@/pages/MoreServices'
import WebsiteDevelopment from '@/pages/WebsiteDevelopment'
import PageNotFound from '@/pages/PageNotFound'
 
 const MainRoutes = () => {
   return (

     
       <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path='/home' element={<Home />} />
            <Route path='/dsc-pricing' element={<DscRates />} />
            <Route path='/dsc-utilities' element={<Utilities />} />
            <Route path= '/authorization-letters' element={<AuthorizationLetters />} />
            <Route path='/buy-iso' element={ <ISOPage/>} />
            <Route path='/buy-trademark' element={<TrademarkPage/>}/>
            <Route path='/services' element={<MoreServices/>}/>
            <Route path='/buy-token' element={<BuyTokenPage/>}/>
            <Route path="/temp-mail" element={<TempMailPage/>}/>
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:slug" element={<BlogDetails />}/>
            <Route path="/website-development" element={<WebsiteDevelopment />} />
            <Route path="*" element={<PageNotFound/>} />

       </Routes>
    
   )
 }
 
 export default MainRoutes
 