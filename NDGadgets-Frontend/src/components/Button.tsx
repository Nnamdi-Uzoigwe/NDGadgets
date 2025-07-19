interface childrenProps {
    children: string
}

export default function Button({ children }: childrenProps) {
    return (
        <div className="bg-black text-white px-8 py-3 cursor-pointer w-fit">
            {children}
        </div>
    )
}