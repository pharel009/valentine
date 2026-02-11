import Image from "next/image"
import logo from "../../public/love_logo.jpg";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-5 mb-8 text-center text-white/70">
        <div className="p-1 rounded-3xl bg-white/70 shadow-md">
        <Image 
            src={logo}
            alt="love logo"
            width={70}
            quality={100}
            placeholder="blur"
            className="rounded-2xl"
        />
        </div>
        <h1 className="text-3xl font-semibold text-center italic leading-relaxed tracking-wide">Something Special Just for You</h1>
    </header>
  )
}

export default Header