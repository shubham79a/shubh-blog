import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import fs, { readFileSync } from 'fs';
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content", "utf-8")
console.log(dirContent);

const blogs = dirContent.map((file) => {
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const { data } = matter(fileContent)
    return data
})

// const blogs = [
//     {
//         title: "Blog Post 1",
//         description: "This is the description for blog post 1.",
//         slug: "blog-post-1",
//         date: "2023-10-01",
//         author: "Author 1",
//         image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         title: "Blog Post 2",
//         description: "This is the description for blog post 2.",
//         slug: "blog-post-2",
//         date: "2023-10-02",
//         author: "Author 2",
//         image: "https://images.pexels.com/photos/330771/pexels-photo-330771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         title: "Blog Post 2",
//         description: "This is the description for blog post 2.",
//         slug: "blog-post-2",
//         date: "2023-10-02",
//         author: "Author 2",
//         image: "https://images.pexels.com/photos/330771/pexels-photo-330771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     // Add more blog objects as needed
// ];

const Blog = () => {
    return (
        <div className="container mx-auto sm:p-4 max-sm:p-3 ">
            <h1 className="text-3xl font-bold mb-6">Blog Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div className=" shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 dark:border-2" key={blog.slug}>
                        <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                            <p className="text-gray-600 mb-4">{blog.description}</p>
                            <p className="text-gray-500 text-sm mb-4">
                                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString()}</span>
                            </p>
                            <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Click Here</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;