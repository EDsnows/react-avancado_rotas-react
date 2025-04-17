import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

async function getPosts() {
    // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
    const response = await fetch(`/json/posts.json`);
    return await response.json();
}

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const posts = await getPosts();
            setPosts(posts.data);
        }

        fetchData();
    }, []);

    return (
        <section>
            {posts.map((post, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <div key={index}>
                    <Link to={`/post/${post.id}`}>
                        <img src={post.image} alt='' />
                        <h2>{post.title}</h2>
                    </Link>
                </div>
            ))}
        </section>
    );
};

export {PostsList};
