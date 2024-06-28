import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Banner() {
    const authStatus = useSelector((state) => state.auth.status);
    return (
        <div className="text-center my-32">
            <h1 className="text-4xl font-bold tracking-tight text-[#EBE6C8] sm:text-6xl">
                <Typewriter
                    options={{
                        strings: [
                            "Your ideas, Your platform – OpenPost it now.",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <p className="mt-6 text-md leading-8 text-[#EBE6C8]">
                Unleash your creativity and share your unique perspectives on
                OpenPost, the ultimate platform for bloggers. With seamless
                login and publishing, your ideas can inspire and connect with a
                vibrant community instantly – OpenPost it now.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
                {authStatus ? (
                    <Link to="/add-post">
                        <button
                            type="button"
                            className="rounded-lg px-6 py-3 text-base font-semibold bg-[#EBE6C8] shadow-sm text-[#001f3f] "
                        >
                            Write a Post
                        </button>
                    </Link>
                ) : (
                    <Link to="/login">
                        <button
                            type="button"
                            className="rounded-lg px-6 py-3 text-base font-semibold bg-[#EBE6C8] shadow-sm text-[#001f3f] "
                        >
                            Get Started
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Banner;
