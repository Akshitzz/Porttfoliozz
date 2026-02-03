import { BLOGS } from "@/lib/blogs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all blogs to optimize build
export async function generateStaticParams() {
    return BLOGS.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const blog = BLOGS.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <article className="max-w-[800px] mx-auto px-6 py-12 relative min-h-screen">

            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
            </Link>

            <header className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-mono px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300">
                            <Tag className="w-3 h-3" />
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
                    {blog.title}
                </h1>

                <div className="flex items-center gap-6 text-sm font-mono text-gray-500 border-b border-gray-100 dark:border-gray-800 pb-8">
                    <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {blog.date}
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {blog.readTime}
                    </span>
                </div>
            </header>

            {/* Content */}
            <div
                className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Footer Navigation or Share could go here */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                <Link href="/blog" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                    ← More articles
                </Link>
            </div>

        </article>
    );
}
