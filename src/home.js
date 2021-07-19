import { useState, useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'Blog 1', body: 'bla bla 1', author: 'LS', id: 1},
        {title: 'Blog 2', body: 'bla bla 2', author: 'LS', id: 2},
        {title: 'Blog 3', body: 'bla bla 3', author: 'MK', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('useEffect ran'); 
    });


    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'LS')} title="LS's blogs" /> */}
        </div>
     );
}
 
export default Home;