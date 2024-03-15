import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
    const { id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='blog-container space-y-4'>
            <img className='w-full my-5 rounded-lg' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex items-center gap-4'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='text-sm'>
                        <h3 >{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBookmarks(blog)} className='text-xl'><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-xl">{title}</h2>
            <p className='text-sm '>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(id, reading_time)}
                className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}
export default Blog;