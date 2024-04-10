import avatarStand from '@/assets/avatar_about.png';
import { blogger } from '@/utils/constants';
import Image from 'next/image'

const AboutSection = () => {
    return (
        <section className="py-20 max-w-4xl mx-auto">
            <h1 className='capitalize text-3xl mb-5 text-cyan-200'>About my motivation</h1>
            <div className='flex '>
                <aside className="flex-1 text-justify">
                    <p className='text-base mb-5 text-base-content'>At {blogger}&apos;s Blog, we believe that exploring the world through its flavors and destinations is not just a hobby, but a way of life. Our passion for culinary delights and wanderlust adventures inspired us to create this platform where we can share our experiences, insights, and discoveries with fellow enthusiasts like you.</p>

                    <p className='text-base mb-5 text-base-content'>Through our meticulously crafted blog, we aim to ignite your sense of curiosity and inspire you to embark on your own gastronomic and travel journeys. Whether you&apos;re a seasoned foodie craving new tastes or an intrepid traveler seeking hidden gems off the beaten path, we&apos;ve got you covered</p>
                </aside>
                <aside className="flex-1">
                    <Image width={'100'} height='100' src={`${avatarStand.src}`} alt='avatar' className="mx-auto w-56 max-w-sm rounded-lg" />
                </aside>
            </div>
        </section>
    );
};

export default AboutSection;