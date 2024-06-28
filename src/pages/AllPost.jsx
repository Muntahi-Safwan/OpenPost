import appwriteService from "../appwrite/config";
import { useState } from "react";
import { useEffect } from "react";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <div className="w-full py-8">
            <Container>
                <div className="container mx-auto my-6">
                    <h1 className=" text-center py-2 text-5xl font-bold text-[#EBE6C8] my-4">
                        All Post
                    </h1>
                    <hr className="container mx-auto w-full border-t-2 border-[#EBE6C8]" />
                </div>
                <div className="container my-12 mx-auto grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
                    {posts?.map((post) => (
                        <div
                            className="container mx-auto  gap-4 p-4"
                            key={post.$id}
                        >
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
