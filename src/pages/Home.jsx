import React from 'react'
import FeaturedProduct from '../components/global/cards/FeaturedProduct'
import LatestProduct from '@/components/global/cards/LatestProduct'
import Offers from '@/components/global/cards/Offers'
import TopCategories from '@/components/global/cards/TopCategories'

export default function Home() {
  return (
        <>
        <FeaturedProduct/>
        <LatestProduct/>
        <Offers/>
        <TopCategories/>
        </>
  )
}
