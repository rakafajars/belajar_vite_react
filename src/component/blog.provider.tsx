import { createContext, useContext, useEffect, useState } from "react"


interface IBlog {
    userId: string;
    id: number;
    title: string;
    body: string;
}


export const BlogContext = createContext<{ blogs: IBlog[] }>({
    blogs: [],
});

const api = "https://jsonplaceholder.typicode.com/posts";

export const BlogProvider = ({ children }: React.PropsWithChildren) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function getBlogs() {

            try {
                const res = await fetch(api);
                const data = await res.json();
                setBlogs(data);
            } catch (error) {
                console.log(error);
            }
        }

        getBlogs();
    }, []);

    return <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
}

export const useBlog = () => useContext(BlogContext);