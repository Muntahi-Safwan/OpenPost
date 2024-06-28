import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config.js";
import Button from "../components/Button";
import Container from "../components/container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingD, setLoadingD] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        setLoadingD(true);
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            } else {
                setLoadingD(false);
            }
        });
    };

    const handleEdit = () => {
        setLoading(true);
        navigate(`/edit-post/${post.$id}`);
    };

    return post ? (
        <div className="py-8 h-screen">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl w-[650px]"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6 ">
                            <Button
                                bgColor="bg-green-500"
                                className="mr-3 w-[100px]"
                                onClick={handleEdit}
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Edit"}
                            </Button>
                            <Button
                                bgColor="bg-red-500"
                                onClick={deletePost}
                                className="w-[100px]"
                                disabled={loading}
                            >
                                {loadingD ? "Loading..." : "Delete"}
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-4 flex justify-center flex-col items-center ">
                    <h1 className="text-2xl font-bold text-[#EBE6C8]">
                        {post.title}
                    </h1>
                    <div className="w-[50%] h-[2px] bg-[#EBE6C8] m-1"></div>
                </div>
                <div className="min-h-32 border rounded-xl px-3 py-4  bg-[#EBE6C8]">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
