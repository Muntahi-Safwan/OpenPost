import { Link } from "react-router-dom";
import appWriteService from "../appwrite/config.js";
import parse from "html-react-parser";

function PostCard({ $id, title, featuredImage, content }) {
    return (
        <div className="lg:w-[360px] md:w-[300px] sm:w-[200px]h-[450px] rounded-md border bg-[#EBE6C8] container mx-auto ">
            <img
                src={appWriteService.getFilePreview(featuredImage)}
                alt="Laptop"
                className="h-[300px] w-full rounded-md object-cover"
            />
            <div className="p-4 flex flex-col">
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="mt-3 text-sm text-gray-600 flex">
                    {parse(content.slice(0, 40))}...
                </p>
                <Link to={`/post/${$id}`}>
                    <button
                        type="button"
                        className="container mx-auto mt-4 px-5 py-2 text-base font-semibold bg-[#001f3f] text-[#EBE6C8] rounded-lg shadow-sm justify-center items-end order-4"
                    >
                        Read
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default PostCard;
