import BlogSection from "../sections/Home/BlogSection";
import Features from "../sections/Home/Features";
import Hero from "../sections/Home/Hero";
import MobileSection from "../sections/Home/MobileSection";
import SaleSection from "../sections/Home/SaleSection";
import WatchSection from "../sections/Home/WatchSection";

export default function Home() {
    return (
        <div>
            <Hero />
            <Features />
            <MobileSection />
            <WatchSection />
            <SaleSection />
            <BlogSection />
        </div>
    )
}