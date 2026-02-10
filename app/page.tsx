import Link from "next/link";
import Container from "./components/container";
import Header from "./components/header";

const Home = () => {
  return (
    <div>
      <Container>
        <Header />
        <div className="text-grey-700 mb-8 text-center">
          <h2 className="text-xl font-medium mb-4">Hey Beautiful,</h2>
          <br />
          <p className="leading-relaxed">
            {
              "Valentine's Day is almost here, and I couldn't resist creating a little surprise just for you."
            }
            {"It's simple, but it comes straight from my heart 💖."}
          </p>
          <br />
          <p className="leading-relaxed">
            When you have a moment, click the button below and let me see that beautiful smile of yours 🙂
          </p>
        </div>

        {/* button */}
        <Link href={"/surprise"}>
          <div className="flex items-center justify-center mb-8">
            <button className="bg-red-400 py-3 px-8 text-center rounded-2xl text-white font-semibold flex items-center gap-3 transition-all duration-300 ease-out hover:bg-red-600 hover:scale-150 active:scale-95 cursor-pointer shadow-md">
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
            <p className="font-semibold text-red-400">Forever Yours</p>
          </div>
        </div>

        {/* footer
         */}
        <div className="mt-10 pt-4 border-t border-white/60 text-center">
          <p className="text-xs text-red-400 font-light tracking-wide">
            ⛔ Try clicking NO… if you dare 😃
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
