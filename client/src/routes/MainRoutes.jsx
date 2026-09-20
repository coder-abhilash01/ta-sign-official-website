import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// Public Pages
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
import ContactUs from '@/pages/ContactUs'
import About from '@/pages/About'

// Admin & Auth Imports
import AdminLogin from '@/pages/AdminLogin'

import ProtectedRoute from '@/components/ProtectedRoute'
import Dashboard from '@/pages/admin/Dashboard'

const MainRoutes = () => {
  return (
    <Routes>
      {/* 1. PUBLIC ROUTES */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/digital-signature-certificate" element={<DscRates />} />
      <Route path="/dsc-utilities" element={<Utilities />} />
      <Route path="/authorization-letters" element={<AuthorizationLetters />} />
      <Route path="/iso-certification" element={<ISOPage />} />
      <Route path="/trademark-registration" element={<TrademarkPage />} />
      <Route path="/services" element={<MoreServices />} />
      <Route path="/buy-token" element={<BuyTokenPage />} />
      <Route path="/temp-mail" element={<TempMailPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="/website-development" element={<WebsiteDevelopment />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />

      {/* Auth */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* admin dashboard */}
      <Route element={<ProtectedRoute />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default MainRoutes