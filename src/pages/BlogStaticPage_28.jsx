import { FaGlobe } from "react-icons/fa";
import { FaMugSaucer } from "react-icons/fa6";

const BlogStaticPage_28 = () => {
  return (
    <section class="blogs">
      <div class="section-title">
        <h2>latest blogs --yuwen,212410228</h2>
      </div>
      <div class="blogs-center">
        <article class="blog">
          <img
            src="/images/photo-1.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>lifestyle <FaMugSaucer />
            </span>
            <h3>seven reasons why coffee is awesome</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article class="blog">
          <img
            src="/images/photo-2.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>
              travel <FaGlobe />
            </span>
            <h3>travel to paris</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article class="blog">
          <img
            src="/images/photo-3.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>
              lifestyle <FaMugSaucer />
            </span>
            <h3>seven reasons why coffee is awesome</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article class="blog">
          <img
            src="/images/photo-4.jpg"
            alt="Coffee photo"
            class="img blog-img"
          />
          <div class="blog-content">
            <span>
              lifestyle <FaMugSaucer />
            </span>
            <h3>seven reasons why coffee is awesome</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default BlogStaticPage_28;