import { SearchIcon, UserIcon } from "lucide-react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="px-6 lg:px-60 h-[80px] flex flex-col lg:flex-row items-center justify-between">
            <div className="text-xl font-semibold">NDGadgets</div>

            <div className="flex gap-14">
                <div className="flex gap-8 text-sm font-semibold">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/blog">BLOGS</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>

                <div className="flex gap-4">
                    <div>
                        <SearchIcon />
                    </div>
                    <div>
                        <UserIcon />
                    </div>
                    <div>
                        <BiCart size={24} />
                    </div>
                </div>

            </div>
        </div>
    )
}