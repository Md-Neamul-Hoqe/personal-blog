'use client'
import Link from 'next/link';

const DetailsPost = ({ detailsLink }) => {
    return (
        <Link href={detailsLink} className='text-sm text-red-500'>Read more &#x27F9;</Link>
    );
};

export default DetailsPost;