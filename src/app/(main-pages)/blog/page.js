'use client'
import PostCard from "@/components/blog/card";
import RecentPost from "@/components/blog/recent";
import { useEffect, useState } from "react";

const BlogPage = () => {
    const [ posts, setPosts ] = useState(null)

    // console.log(posts);

    useEffect(() => {
        fetch('/json.json').then(res => res.json()).then(data => setPosts(data))
    }, [])

    return (
        <section className="py-20 max-w-5xl xl:mx-auto mx-3 md:mx-5">
            <h1 className="text-xl mb-5">Recent posts</h1>
            <RecentPost />

            {posts ? <>
                <h1 className="text-xl">All blog posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 rounded-xl my-5">
                    {posts?.length > 0
                        ? posts.map(post => <PostCard key={post?._id} post={post} />)
                        : 'No post found'}
                </div>
            </> : null}
        </section>
    );
};

export default BlogPage;