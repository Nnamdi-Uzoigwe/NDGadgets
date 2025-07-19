import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

function FooterExtension() {
    return (
        <div className="absolute w-full left-0 py-4 border-t-2 border-gray-400 px-6 lg:px-60 flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col items-center lg:flex-row gap-8">
                <div className="flex gap-3 items-center">
                    We ship with:
                    <img src="/dhl.png" alt="" width={80} />
                    <img src="/naruto.png" alt="" width={50} />
                </div>

                <div className="flex gap-3 items-center">
                    Payment Options:
                    <img src="/visa.png" alt="" width={50} />
                    <img src="/mastercard.png" alt="" width={50} />
                    <img src="/paypal.png" alt="" width={50} />
                </div>
            </div>

            <div className="text-gray-400">
                &copy; Copyright NDGadgets. Design by <span className="underline text-gray-600">TemplatesJungle</span>
            </div>
        </div>
    )
}

export default function Footer() {
  return (
    <div className="px-6 lg:px-60 py-10">
      <div className=" py-10 px-6 w-full bg-[#272727] flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-center lg:justify-between">
        <div>
          <h5 className="text-white text-center lg:text-left text-2xl">
            SUBSCRIBE TO US NOW
          </h5>
          <p className="text-[#a7a5a5] text-center lg:text-left ">
            Get latest news, updates and deals directly mailed to your inbox.
          </p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Your email address here"
            className="bg-white p-2 w-[250px]"
          />
          <input
            type="submit"
            value="SUBSCRIBE"
            className="bg-[#72AEC8] py-2 text-white px-4"
          />
        </div>
      </div>

      <div className="mt-20">
        <h4 className="text-center mb-4 text-xl">SHOP OUR INSTA</h4>
        <div className="grid grid-cols-2 justify-items-center lg:grid-cols-5 gap-4">
          <img src="/iphonex.png" alt="" className="w-[200px] h-[180px]" />
          <img src="/watch2.png" alt="" className="w-[200px] h-[180px]" />
          <img src="/iphone13.png" alt="" className="w-[200px] h-[180px]" />
          <img src="/earbuds.png" alt="" className="w-[200px] h-[180px]" />
          <img src="/camera.png" alt="" className="w-[200px] h-[180px]" />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 justify-items-center gap-4">

        <div className="col-span-1 lg:col-span-2 justify-items-center lg:justify-items-start">
          <h3 className="text-xl lg:text-3xl mb-2">NDGadgets</h3>
          <p className="w-[80%] text-gray-400">
            Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
            Gravida massa volutpat aenean odio erat nullam fringilla.
          </p>
            <div className="mt-2 flex gap-2">
                <FaFacebookF className="text-gray-400 hover:text-[#72AEC8]" />
                <FaInstagram className="text-gray-400 hover:text-[#72AEC8]" />
                <FaTwitter className="text-gray-400 hover:text-[#72AEC8]" />
                <FaLinkedin className="text-gray-400 hover:text-[#72AEC8]" />
                <FaYoutube className="text-gray-400 hover:text-[#72AEC8]" />
            </div>
        </div>

        <div className="justify-items-center lg:justify-items-start">
            <h5 className="mb-2 text-xl">QUICK LINKS</h5>
            <p className="hover:text-[#72aec8] cursor-pointer text-sm mb-1">HOME</p>
            <p className="hover:text-[#72aec8] cursor-pointer text-sm mb-1">ABOUT</p>
            <p className="hover:text-[#72aec8] cursor-pointer text-sm mb-1">SHOP</p>
            <p className="hover:text-[#72aec8] cursor-pointer text-sm mb-1">BLOGS</p>
            <p className="hover:text-[#72aec8] cursor-pointer text-sm">CONTACT</p>
        </div>

        <div className="justify-items-center lg:justify-items-start">
            <h5 className="mb-2 text-xl">HELP & INFO</h5>
            <p className="hover:text-[#72aec8] cursor-pointer text-sm mb-1">TRACK YOUR ORDER</p>
            <p className="hover:text-[#72aec8] cursor-pointer text-sm mb-1">RETURNS POLICIES</p>
            <p className="hover:text-[#72aec8] cursor-pointer text-sm mb-1">SHIPPING + DELIVERY</p>
            <p className="hover:text-[#72aec8] cursor-pointer text-sm mb-1">CONTACT US</p>
            <p className="hover:text-[#72aec8] cursor-pointer text-sm">FAQS</p>
        </div>

        <div className="justify-items-center lg:justify-items-start">
            <h5 className="mb-2 text-xl">CONTACT US</h5>
            <p className="text-md text-gray-400">Do you have any queries or <br /> suggestions?</p>
            <p className="underline">yourinfo@gmail.com</p>
            <p className="mt-2 text-gray-400">If you need support? Just give us a call. </p>
            <p className="underline">+55 111 222 33344</p>
        </div>
      </div>

    <div className="mt-4">
    <FooterExtension />
    </div>

    </div>
  );
}
