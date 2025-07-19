import Button from "../../components/Button";

export default function SaleSection() {
    return (
        <div className="px-6 lg:px-60 bg-[#EDF1F3] py-2 flex flex-col lg:flex-row justify-between items-center">
            <div>
                <div className="flex items-center gap-3 text-xl text-gray-600">
                         ------
                        <span>10% OFF</span>
                </div>
                <h2 className="text-4xl mt-3 mb-5">NEW YEAR SALE</h2>
                <Button>SHOP SALE</Button>
            </div>

            <img src="/saleImg.png" alt="" className="w-[60%]" />
        </div>
    )
}