import Button from "./Button"

interface cardProps {
    imageSrc: string,
    itemName: string,
    price: number
}

export default function HomeCard({ imageSrc, itemName, price  }: cardProps) {
    return (
        <div className="w-[300px] lg:w-[250px] relative group">
            <img src={imageSrc} alt="" />

            <div className="flex justify-between items-center mt-2">
                <h5>{itemName}</h5>
                <h5 className="text-blue-400">${price}</h5>
            </div>

            <div className="hidden lg:block lg:absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Button>Add to Cart 🛒</Button>
            </div>

            <div className="flex lg:hidden my-2">
                <Button>Add to Cart 🛒</Button>
            </div>
        </div>
    )
}