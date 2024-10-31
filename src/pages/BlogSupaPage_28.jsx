import { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { FaMugSaucer } from "react-icons/fa6";

// let api_url = 'http://localhost:3000/api/blog_28';

import { supabase } from "../assets/db/clientSupabase";

const BlogSupaPage_28 = () => {
  const [name, setNmae] = useState(['YuWen'])
  const [id, setId] = useState(2124102228)
  const [blogs, setBlogs] = useState([])

  const fetchBlogsFromSupabase = async() => {
    try {
      let { data, error } = await supabase.from('blog_28').select('*')
      // const response = await fetch(api_url);
      // const data = await response.json();
      console.log('supabase blogs', data)
      setBlogs(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    fetchBlogsFromSupabase()
  }, [])

  return (
    <section className="blogs">
      <div className="section-title">
        <h2>latest blogs from Node Server</h2>
        <h2 style={{ fontSize: '1.2rem', marginBottom:'1rem'}}>
            {name}, {id}
          </h2>
      </div>
      <div class="blogs-center">
        {blogs?.map((blog) => {
          const { id, title, img, category, descrip } = blog
          return (
            <article key={id} className='blog'>
              <img src={img} alt='Coffee photo'
              className='img blog-img' />
              <div className='blog-content'>
                <span>
                  {category}
                  {category === 'lifestyle' ? (
                     <FaMugSaucer />
                  ) : category === 'travel' ? (
                     <FaGlobe />
                  ) : (
                    ''
                  )}
                </span>
                <h3>{title}</h3>
                <p>{descrip}</p>
                <a href='#'>read more</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  );
};

export default BlogSupaPage_28;