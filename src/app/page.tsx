"use client";

import About from '@/components/about'
import BannerAnimation from '@/components/banneranimation'
import Faqs from '@/components/faqs'
import FloatingContact from '@/components/floatingcontact'
import Gallery from '@/components/gallery'
import Maque from '@/components/maque'
import Pages from '@/components/pages'
import Services from '@/components/services'

const Home = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-4xl font-bold">
            <BannerAnimation />
            <Maque />
            <About />
            <Services />
            <Pages />
            <Gallery />
            <Faqs />
            <FloatingContact />
        </div>
    )
}

export default Home
