import Image from 'next/image';
import recentPostFeatureImage from '@/assets/recent-blog-post-feature-image.png'
import DetailsPost from '../atoms/detailsPost';

const RecentPost = () => {
    return (
        <section className='flex gap-6'>
            <aside className="flex-1">
                <Image width="100" height={300} src={recentPostFeatureImage.src} className='object-cover min-w-full' alt='Feature image of the recent post' />
            </aside>

            <aside className="flex-1 space-y-3">
                <h1 className='text-xl text-cyan-200 capitalize'>Title goes here</h1>

                <div className='flex gap-3 flex-wrap'>
                    <button type='button' className='rounded-2xl text-xs px-4 border lowercase leading-4'>food</button>
                    <button type='button' className='rounded-2xl text-xs px-4 border lowercase leading-4'>food</button>
                    <button type='button' className='rounded-2xl text-xs px-4 border lowercase leading-4'>food</button>
                </div>

                <div className='space-y-2 mb-32'>
                    <p className='text-base leading-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis necessitatibus fugit placeat accusantium quam ad veritatis. Fuga, placeat praesentium molestias illo modi provident quas! Commodi similique ipsum ullam nam voluptates.</p>
                    <p className='text-base leading-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis necessitatibus fugit placeat accusantium quam ad veritatis. Fuga, placeat praesentium molestias illo modi provident quas! Commodi similique ipsum ullam nam voluptates.</p>
                    <p className='text-base leading-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis necessitatibus fugit placeat accusantium quam ad veritatis. Fuga, placeat praesentium molestias illo modi provident quas! Commodi similique ipsum ullam nam voluptates.</p>
                </div>
                <DetailsPost detailsLink={'/'} />
            </aside>
        </section>
    );
};

export default RecentPost;