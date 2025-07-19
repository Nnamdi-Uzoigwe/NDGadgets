import Button from "../../components/Button";

export default function Hero() {
    return (
        <div className="bg-[#EDF1F3] px-6 lg:px-60 flex flex-col lg:flex-row items-center h-[650px]">
            <div>
                <h1 className="text-5xl">Welcome to NDGadgets Store!</h1>
                <p className="text-2xl my-5">Shop the latest Smartphones, Watches, Laptops and more on our platform.</p>
                <Button>SHOP PRODUCT</Button>
            </div>
            <img src="/heroImg.png" alt="" className="w-[50%]" />
        </div>
    )
}