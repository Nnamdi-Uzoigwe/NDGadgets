import { Link } from "react-router-dom";
import HomeCard from "../../components/HomeCard";

export default function WatchSection() {
const data = [
        {
            id: 1,
            name: "PINK WATCH",
            price: 870,
            image: "/watch1.png"
        },
        {
            id: 2,
            name: "HEAVY WATCH",
            price: 680,
            image: "/watch2.png"
        },
        {
            id: 3,
            name: "SPOTTED WATCH",
            price: 750,
            image: "/watch3.png"
        },
        {
            id: 4,
            name: "BLACK WATCH",
            price: 1500,
            image: "/watch4.png"
        }
    ]
  return (
    <div className="px-6 lg:px-60 py-10">
      <header className="flex items-center mb-10 justify-between">
        <h4 className="text-lg font-medium">SMART WATCHES</h4>
        <Link
          to="/shop"
          className="text-sm border-b-2 border-gray-300 text-gray-600 font-medium"
        >
          GO TO SHOP
        </Link>
      </header>

      <div className="grid grid-cols-1 justify-items-center  lg:grid-cols-4 gap-3">
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
  );
}
