import { Link } from "react-router-dom"
import BlogCard from "../../components/BlogCard"

export default function BlogSection() {
    const data = [
        {
            id: 1,
            caption: "GET SOME COOL GADGETS IN 2025",
            date: "22 FEB, 2025",
            category: "GADGETS",
            imageSrc: "/consoleImg.png"
        },
        {
            id: 2,
            caption: "TECHNOLOGY HACK YOU WON'T GET",
            date: "27 FEB, 2025",
            category: "TECHNOLOGY",
            imageSrc: "/earbuds.png"
        },
        {
            id: 3,
            caption: "GET SOME COOL GADGETS IN 2025",
            date: "22 MARCH, 2025",
            category: "CAMERA",
            imageSrc: "/camera.png"
        },
    ]
    return (
        <div className="px-6 lg:px-60 py-14">
            <header className="flex items-center mb-10 justify-between">
                    <h4 className="text-lg font-medium">LATEST POSTS</h4>
                    <Link
                      to="/blog"
                      className="text-sm border-b-2 border-gray-300 text-gray-600 font-medium"
                    >
                      READ BLOGS
                    </Link>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4">
                {data.map((item) => (
                    <BlogCard 
                        key={item.id}
                        imageSrc={item.imageSrc}
                        caption={item.caption}
                        category={item.category}
                        date={item.date}
                    />
                ))}
            </div>
        </div>
    )
}