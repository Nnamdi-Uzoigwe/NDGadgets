import { Award, ShieldCheck, ShoppingCart, Tag } from "lucide-react"

export default function Features() {
    const data = [
        {
            id: 1,
            content: "FREE DELIVERY",
            iconName: <ShoppingCart className="text-blue-400" />,
            desc: "Consectetur adipi elit lorem ipsum dolor sit amet."
        },
        {
            id: 2,
            content: "QUALITY GUARANTEE",
            iconName: <Award className="text-blue-400" />,
            desc: "Dolor sit amet orem ipsu mcons ectetur adipi elit."
        },
        {
            id: 3,
            content: "DAILY OFFERS",
            iconName: <Tag className="text-blue-400" />,
            desc: "Amet consectetur adipi elit loreme ipsum dolor sit."
        },
        {
            id: 4,
            content: "100% SECURE PAYMENT",
            iconName: <ShieldCheck className="text-blue-400" />,
            desc: "Rem Lopsum dolor sit amet, consectetur adipi elit."
        }
    ]

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 px-6 lg:px-60 gap-6 py-20">
            {data.map((item) => (
                <div key={item.id} className="flex gap-3">
                    <div>{item.iconName}</div>
                    <div>
                        <h3 className="font-semibold">{item.content}</h3>
                        <p className="text-gray-500">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}