interface BlogCardProps {
    imageSrc: string,
    date: string,
    category: string,
    caption: string
}

export default function BlogCard({ imageSrc, date, category, caption }: BlogCardProps) {
    return (
        <div className="w-[300px]">
            <img src={imageSrc} alt="" />
            <div className="flex gap-3 my-2 items-center">
                <p className="text-sm font-semibold text-gray-400">{date}</p>
                <p className="text-sm font-semibold text-gray-400">{category}</p>
            </div>
            <h4>{caption}</h4>
        </div>
    )
}