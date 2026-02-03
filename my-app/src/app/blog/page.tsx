import Link from "next/link";
import { BLOGS } from "@/lib/blogs";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export default function BlogListing() {
    return (
        <div className="max-w-[1000px] mx-auto px-6 py-12 relative min-h-screen">

            <div className="flex flex-col gap-2 mb-12">
                <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
                <p className="text-gray-500 dark:text-gray-400">Thoughts, tutorials, and deep dives into code.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {BLOGS.map((blog) => (
                    <Link
                        key={blog.slug}
                        href={`/blog/${blog.slug}`}
                        className="group relative flex flex-col gap-4 p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex gap-2 mb-2">
                                {blog.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {blog.title}
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                            {blog.description}
                        </p>

                        <div className="mt-auto pt-4 flex items-center gap-4 text-xs font-mono text-gray-500">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {blog.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {blog.readTime}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}