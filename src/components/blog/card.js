import Image from 'next/image';

import postThumbImage from '@/assets/travel-banner-bg.jpg'
import postThumbImage01 from '@/assets/banner_blog_1.jpg'
import postThumbImage02 from '@/assets/travel-banner-bg-02.jpg'
import LinkToDetailsPost from '../atoms/linkToDetailsPost';

const PostCard = ({ post }) => {
    /* Static data */
    const images = [
        postThumbImage, postThumbImage01, postThumbImage02,
    ]

    return (
        <div className="card bordered rounded-none gap-5 bg-base-100 shadow-xl">
            <figure><Image className='object-center min-w-full' src={images[ getRandomNumber() ]?.src} alt="Shoes" width={200} height={250} /></figure>
            <div className="card-body p-0">
                <small className="text-secondary" >{post?.author} {post?.date}</small>
                <h2 className="card-title">
                    {post?.title}
                    <div><LinkToDetailsPost detailsLink={`/blog/${post?._id}`} /></div>
                </h2>
                <p>
                    {
                        post?.descriptions?.length
                            ? post?.description?.[ 0 ].length > 100
                                ? post?.description?.[ 0 ].slice(0, 100) + '...' : post?.description?.[ 0 ] : null
                    }
                </p>
                {/* <p>{post?.descriptions?.length ? post?.description?.[ 0 ].length > 100 ? post?.description?.[ 0 ].slice(0, 100) + '...' : post?.description?.[ 0 ] : null} <LinkToDetailsPost detailsLink={`/${post?.type}/${post?._id}`} /></p> */}
                <div className="card-actions">
                    {post?.tags?.length > 0 && post?.tags.map((T, idx) => <div key={idx} className="badge badge-outline">{T}</div>)}
                </div>
            </div>
        </div>
    );
};

export default PostCard;

/* for Static data */
function getRandomNumber() {
    return Math.floor(Math.random() * 3); // Returns 0, 1, or 2
}

// const randomResult = getRandomNumber();
// console.log(`Random number: ${randomResult}`);