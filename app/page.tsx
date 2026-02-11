import Link from "next/link";
import Container from "./components/container";
import Header from "./components/header";

const Home = () => {
  return (
    <div>
      <Container>
        <Header />
        <div className="mb-8 text-center">
          <h2 className="text-xl font-medium mb-4 text-gray-800">
            Hey Beautiful,
          </h2>
          <br />
          <div className="leading-relaxed text-white/70">
            <p>
              {
                "Valentine's Day is almost here, and I couldn't resist creating a little surprise just for you."
              }
              {"It's simple, but it comes straight from my heart 💖."}
            </p>
            <br />
            <p>
              When you have a moment, click the button below and let me see that
              beautiful smile of yours 🙂
            </p>
          </div>
        </div>

        {/* button */}
        <Link href={"/surprise"}>
          <div className="flex items-center justify-center mb-8">
            <button className="bg-white/70 shadow-2xl py-3 px-8 text-center rounded-2xl text-gray-700 font-semibold flex items-center gap-3 transition-all duration-300 ease-out hover:bg-red-600 hover:scale-150 active:scale-95 cursor-pointer">
              <span className="animate-slow-bounce">😍</span>
              <span>Open Your Surprise</span>
              <span className="animate-slow-bounce">😍</span>
            </button>
          </div>
        </Link>

        {/* closing */}
        <div className="text-center text-gray-700 space-y-2">
          <p className="italic">{"I can't wait to see your reaction"} 😃</p>

          <div className="pt-4">
            <h4 className="font-medium">All my love,</h4>
            <p className="font-semibold text-gray-800">Forever Yours</p>
          </div>
        </div>

        {/* footer
         */}
        <div className="mt-10 pt-4 border-t border-white/60 text-center">
          <p className="text-xs text-gray-800 font-light tracking-wide">
            ⛔ Try clicking NO… if you dare 😃
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
