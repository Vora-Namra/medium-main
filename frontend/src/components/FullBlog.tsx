
import { Appbar } from './Appbar';
import { Blog } from '../hooks';
import { Avatar } from './BlogCard';

// Utility function to parse content for paragraphs, line breaks, and bold text
const formatContent = (content: string) => {
    // Step 1: Handle `**bold text**` with <strong> tags
    let formattedContent = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Step 2: Replace double line breaks with <p> tags for paragraphs
    formattedContent = formattedContent
        .split('\n\n')
        .map(paragraph => `<p class="text-lg leading-relaxed mb-4">${paragraph}</p>`)
        .join('');

    return formattedContent;
};

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <Appbar />
            <div className="flex justify-center mx-40 mt-20">
                <div className="grid grid-cols-12 w-full max-w-screen-2xl">

                    {/* Main Content */}
                    <div className="col-span-8">
                        <h1 className="text-5xl font-extrabold">{blog.title}</h1>
                        <p className="text-slate-500 pt-4">Posted on 2nd Nov 2024</p>
                        <div
                            className="pt-4 text-justify"
                            dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
                        ></div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-span-4 pl-6">
                        <h2 className="text-slate-600 text-lg">Author</h2>
                        <div className="flex items-center space-x-2">
                            <Avatar name={blog.author.name || "Anonymous"} />
                            <span className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </span>
                        </div>
                        <p className="pt-1 text-slate-500">
                            Working for Self | Motivated to Learn and Grow | Focused | Tech Enthusiast
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FullBlog;
