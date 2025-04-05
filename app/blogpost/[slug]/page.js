
import fs from 'fs';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';


import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers';
import OnThisPage from '@/components/onthispage';

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'


export default async function Page({ params }) {

    // const blog = {
    //     title: "Blog Post 1",
    //     description: "This is the description for blog post 1.",
    //     slug: "blog-post-1",
    //     date: "2023-10-01",
    //     author: "Author 1",
    //     content: "<p>This is the content of blog post 1.</p>",
    //     image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    // }


    const filepath = `content/${params.slug}.md`
    if (!fs.existsSync(filepath)) {
        notFound()
        return
    }

    const fileContent = fs.readFileSync(filepath, "utf-8")
    const { data, content } = matter(fileContent)
    const blog = data;

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypePrettyCode, {
            // See Options section below.
            theme: 'github-dark',
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                })
            ]
        })

    const htmlContent = (await processor.process(content)).toString()



    return (
        <div className="lg:max-w-6xl md:max-w-3xl  mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-600 text-base mb-2 border-l-4 border-gray-500 pl-4 italic ">&quot;{blog.description}"</p>
            <div className="flex items-center gap-2">
                <p className="text-gray-800 mb-4 text-sm">{blog.author}</p>
                <p className="text-gray-800 mb-4 text-sm">{blog.date}</p>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert" >
            </div>
            <OnThisPage htmlContent={htmlContent} />
        </div>
    )
}