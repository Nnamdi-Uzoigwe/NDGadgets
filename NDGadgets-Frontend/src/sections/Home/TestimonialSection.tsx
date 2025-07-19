import { IoStar } from "react-icons/io5";

export default function TestimonialSection() {
  return (
    <div className="px-6 lg:px-60 flex flex-col items-center">
      <img src="/quote.png" alt="" className="w-[60px] lg:w-[80px]" />
      <p className="text-xl lg:text-2xl text-center w-[90%] lg:w-[60%] text-gray-400">
        “Tempus oncu enim pellen tesque este pretium in neque, elit morbi
        sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi
        suspen dise sagittis lorem habi tasse morbi.”
      </p>

      <div className="mt-3">
        <div className="flex justify-center">
            <IoStar className="text-[#72AEC8]" />
            <IoStar className="text-[#72AEC8]" />
            <IoStar className="text-[#72AEC8]" />
            <IoStar className="text-[#72AEC8]" />
            <IoStar className="text-[#72AEC8]" />
        </div>
        <h4 className="mt-1">EMMA CHAMBERLAIN</h4>
      </div>
    </div>
  );
}
