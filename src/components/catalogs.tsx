import { useEffect, useState } from "react"

interface IPost {
    id: string
    title: string
    body: string
}

export const Catalogs = () => {

    const [catalogsData, setCatalogsData] = useState<IPost[] | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((data) => data.json())
            .then((data) => setCatalogsData(data))
    }, []);

    return (
        <div>{catalogsData?.map((post) => { 
            return <div key={post.id}>{post.title}</div>
        })}</div>
    )
}

