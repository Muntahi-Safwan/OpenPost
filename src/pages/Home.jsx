import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import PostCard from "../components/PostCard";
import Container from "../components/container/Container";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    const popularPosts = posts.slice(0, 3);

    // if (posts.length === 0) {
    //     return (
    //         <div className="w-full py-8 mt-4 text-center">
    //             <Container>
    //                 <div className="flex flex-wrap">
    //                     <div className="p-2 w-full">
    //                         <h1 className="text-2xl font-bold hover:text-gray-500">
    //                             Login to read posts
    //                         </h1>
    //                     </div>
    //                 </div>
    //             </Container>
    //         </div>
    //     );
    // }
    return (
        <div className="w-full py-8">
            <Container>
                <Banner />
                <div className="container mx-auto">
                    <h1 className=" text-center py-2 text-5xl font-bold text-[#EBE6C8] my-4">
                        Most Popular Posts
                    </h1>
                    <hr className="container mx-auto w-full border-t-2 border-[#EBE6C8]" />
                </div>
                <div className="container my-12 mx-auto grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
                    {popularPosts.map((post) => (
                        <div key={post.$id} className="container mx-auto  p-4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                <div>
                    <FAQ />
                </div>
            </Container>
        </div>
    );
}

export default Home;
