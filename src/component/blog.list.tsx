import { useBlog } from "./blog.provider"


export const BlogList = () => {
    const { blogs } = useBlog();
    return (
        <div>
            <h1>
                My Blog:
            </h1>
            <div>{blogs.map((blog) => {
                return <div key={blog.id}>{blog.title}</div>
            })}</div>
        </div>
    )
}



