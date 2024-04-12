import bannerImage from '@/assets/banner_blog_1.jpg'
import avatarStand from '@/assets/avatar_stand.png';
import Image from 'next/image'
import HomeBtn from '../atoms/HomeBtn';
import TypeWrite from '../atoms/TypeWriter';
import { blogger } from '@/utils/constants';

const typewriterContents = [
    'Exploring Local Flavors and Hidden Destinations',
    'Uncovering Culinary Delights and Untold Travel Treasures.',
    'Discovering Gastronomic Gems and Off-the-Beaten-Path Adventures.',
    'Embracing Local Cuisine and Exotic Destinations Beyond the Map.',
    'Indulging in Authentic Tastes and Secret Getaways Await Your Exploration.',
    'Immersing in Flavorful Journeys and Unveiling Hidden Wonders of the World.',
]

const HomeBanner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImage.src})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <Image width={'100'} height='100' src={`${avatarStand.src}`} alt='avatar' className="mx-auto w-56 max-w-sm rounded-lg" />
                </div>
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Welcome to <span className='text-cyan-200 italic'>{blogger}&apos;s</span> Blog</h1>

                    <div className="py-6 text-base">
                        <TypeWrite textContents={typewriterContents} />
                    </div>

                    <HomeBtn />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;