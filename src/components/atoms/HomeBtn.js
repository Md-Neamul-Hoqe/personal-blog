'use client'

import { useRouter } from "next/navigation";

const HomeBtn = () => {
    const { push } = useRouter()
    return (
        <button onClick={() => push('/blog')} className="btn btn-primary">
            My Blog
        </button>
    );
};

export default HomeBtn;