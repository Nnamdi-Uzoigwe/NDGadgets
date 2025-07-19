import { Link } from "react-router-dom";
import HomeCard from "../../components/HomeCard";

export default function MobileSection() {
    const data = [
        {
            id: 1,
            name: "IPHONE 10",
            price: 980,
            image: "/iphonex.png"
        },
        {
            id: 2,
            name: "IPHONE 11",
            price: 1100,
            image: "/iphone11.png"
        },
        {
            id: 3,
            name: "IPHONE 8",
            price: 780,
            image: "/iphone8.png"
        },
        {
            id: 4,
            name: "IPHONE 13",
            price: 1500,
            image: "/iphone13.png"
        }
    ]
    return (
        <div className="px-6 lg:px-60">
            <header className="flex items-center mb-10 justify-between">
                <h4 className="text-lg font-medium">MOBILE PRODUCTS</h4>
                <Link to="/shop" className="text-sm border-b-2 border-gray-300 text-gray-600 font-medium">GO TO SHOP</Link>
            </header>

            <div className="grid grid-cols-1 justify-items-center lg:grid-cols-4 gap-3">
                {data.map((item) => (
                    <HomeCard 
                    key={item.id}
                    itemName={item.name}
                    price={item.price}
                    imageSrc={item.image}
                    />
                ))
            }
            </div>
        </div>
    )
}