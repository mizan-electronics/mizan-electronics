import BrandMarquee from "./BrandMarquee"
import Hero from "./Hero"
import LatestArrivals from "./LatestArrivals"
import TestimonialsClients from "./TestimonialsClients"
import TopSellingProducts from "./TopSellingProducts"
import TopSellingServices from "./TopSellingServices"

const HomeComponent = () => {
  return (
    <>
        <Hero/>
        <BrandMarquee/>
        <LatestArrivals/>
        <TopSellingProducts/>
        <TopSellingServices/>
        <TestimonialsClients/>
    </>
  )
}

export default HomeComponent