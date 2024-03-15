import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='blog-container'>
            <img className='w-[645px] my-5' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='text-sm'>
                        <h3 >{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-xl">{title}</h2>
            <p className='text-sm '>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;