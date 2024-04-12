import Image from 'next/image';
// import recentPostFeatureImage from '@/assets/travel-banner-bg-02.jpg'
// import recentPostFeatureImage from '@/assets/travel-banner-bg.jpg'
import recentPostFeatureImage from '@/assets/recent-blog-post-feature-image.png'
import LinkToDetailsPost from '../atoms/linkToDetailsPost';

const recentPost = {
    _id: '1',
    author: "Md. Neamul Hoqe",
    featuredImage: recentPostFeatureImage,
    title: 'Title goes here',
    date: "Sunday, 1 Jan 2023",
    description: [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis necessitatibus fugit placeat accusantium quam ad veritatis. Fuga, placeat praesentium molestias illo modi provident quas! Commodi similique ipsum ullam nam voluptates.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis necessitatibus fugit placeat accusantium quam ad veritatis. Fuga, placeat praesentium molestias illo modi provident quas! Commodi similique ipsum ullam nam voluptates.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis necessitatibus fugit placeat accusantium quam ad veritatis. Fuga, placeat praesentium molestias illo modi provident quas! Commodi similique ipsum ullam nam voluptates.",
    ],
    tags: [ 'food', 'food', 'food' ]
}

const RecentPost = () => {
    return (
        <section className='flex flex-col gap-3 md:gap-6 mb-10'>
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 items-stretch'>
                <aside>
                    <div className="card bordered rounded-none gap-5 bg-base-100 h-full">
                        <figure><Image className='object-center min-w-full' src={recentPost.featuredImage?.src} alt="Shoes" width={200} height={250} /></figure>
                        <div className="card-body p-0">
                            <small className="text-secondary" >{recentPost?.author} {recentPost?.date}</small>
                            <h2 className="card-title text-cyan-50">
                                {recentPost?.title}
                                <div><LinkToDetailsPost detailsLink={`/blog/${recentPost?._id}`} /></div>
                            </h2>
                            <p>
                                {
                                    recentPost?.description?.length
                                        ? recentPost?.description?.[ 0 ].length > 100
                                            ? recentPost?.description?.[ 0 ].slice(0, 100) + '...' : recentPost?.description?.[ 0 ] : null
                                }
                            </p>
                            {/* <p>{recentPost?.descriptions?.length ? recentPost?.description?.[ 0 ].length > 100 ? recentPost?.description?.[ 0 ].slice(0, 100) + '...' : recentPost?.description?.[ 0 ] : null} <LinkToDetailsPost detailsLink={`/${recentPost?.type}/${recentPost?._id}`} /></p> */}
                            <div className="card-actions">
                                {recentPost?.tags?.length > 0 && recentPost?.tags.map((T, idx) => <div key={idx} className="badge badge-outline">{T}</div>)}
                            </div>
                        </div>
                    </div>
                </aside>
                <aside className='flex flex-col gap-3 md:gap-6'>
                    <div className="card md:card-side bordered rounded-none gap-5 bg-base-100 shadow-xl">
                        <figure><Image className='object-center h-full w-full' src={recentPost.featuredImage?.src} alt="Shoes" width={200} height={250} /></figure>
                        <div className="card-body p-0">
                            <small className="text-secondary" >{recentPost?.author} {recentPost?.date}</small>
                            <h2 className="card-title text-cyan-50">
                                {recentPost?.title}
                                <div><LinkToDetailsPost detailsLink={`/blog/${recentPost?._id}`} /></div>
                            </h2>
                            <p>
                                {
                                    recentPost?.description?.length
                                        ? recentPost?.description?.[ 0 ].length > 100
                                            ? recentPost?.description?.[ 0 ].slice(0, 100) + '...' : recentPost?.description?.[ 0 ] : null
                                }
                            </p>
                            {/* <p>{recentPost?.descriptions?.length ? recentPost?.description?.[ 0 ].length > 100 ? recentPost?.description?.[ 0 ].slice(0, 100) + '...' : recentPost?.description?.[ 0 ] : null} <LinkToDetailsPost detailsLink={`/${recentPost?.type}/${recentPost?._id}`} /></p> */}
                            <div className="card-actions">
                                {recentPost?.tags?.length > 0 && recentPost?.tags.map((T, idx) => <div key={idx} className="badge badge-outline">{T}</div>)}
                            </div>
                        </div>
                    </div>
                    <div className="card md:card-side bordered rounded-none gap-5 bg-base-100 shadow-xl">
                        <figure><Image className='object-center h-full w-full' src={recentPost.featuredImage?.src} alt="Shoes" width={200} height={250} /></figure>
                        <div className="card-body p-0">
                            <small className="text-secondary" >{recentPost?.author} {recentPost?.date}</small>
                            <h2 className="card-title text-cyan-50">
                                {recentPost?.title}
                                <div><LinkToDetailsPost detailsLink={`/blog/${recentPost?._id}`} /></div>
                            </h2>
                            <p>
                                {
                                    recentPost?.description?.length
                                        ? recentPost?.description?.[ 0 ].length > 100
                                            ? recentPost?.description?.[ 0 ].slice(0, 100) + '...' : recentPost?.description?.[ 0 ] : null
                                }
                            </p>
                            {/* <p>{recentPost?.descriptions?.length ? recentPost?.description?.[ 0 ].length > 100 ? recentPost?.description?.[ 0 ].slice(0, 100) + '...' : recentPost?.description?.[ 0 ] : null} <LinkToDetailsPost detailsLink={`/${recentPost?.type}/${recentPost?._id}`} /></p> */}
                            <div className="card-actions">
                                {recentPost?.tags?.length > 0 && recentPost?.tags.map((T, idx) => <div key={idx} className="badge badge-outline">{T}</div>)}
                            </div>
                        </div>
                    </div>
                </aside>
            </section>
            <section>
                <div className="card lg:card-side bordered rounded-none gap-5 md:gap-6 bg-base-100 shadow-xl">
                    <figure><Image className='object-center h-full w-full' src={recentPost.featuredImage?.src} alt="Shoes" width={200} height={250} /></figure>
                    <div className="card-body p-0">
                        <small className="text-secondary" >{recentPost?.author} {recentPost?.date}</small>
                        <h2 className="card-title text-cyan-50">
                            {recentPost?.title}
                            <div><LinkToDetailsPost detailsLink={`/blog/${recentPost?._id}`} /></div>
                        </h2>
                        <p>
                            {
                                recentPost?.description?.length
                                    ? recentPost?.description?.[ 0 ].length > 100
                                        ? recentPost?.description?.[ 0 ].slice(0, 100) + '...' : recentPost?.description?.[ 0 ] : null
                            }
                        </p>
                        <div className="card-actions">
                            {recentPost?.tags?.length > 0 && recentPost?.tags.map((T, idx) => <div key={idx} className="badge badge-outline">{T}</div>)}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default RecentPost;