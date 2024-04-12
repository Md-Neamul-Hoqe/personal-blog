'use client'
import Link from 'next/link';

const LinkToDetailsPost = ({ detailsLink }) => {
    return (
        <Link className="text-4xl hover:text-blue-600" href={detailsLink}>
            &#x2197;
        </Link>
    );
};

export default LinkToDetailsPost;

