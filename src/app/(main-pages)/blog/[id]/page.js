import getThePostById from "@/utils/getThePostById";

export async function generateStaticParams() {
    // Generate two pages at build time and the rest (3-100) on-demand
    return [ { id: '1' }, { id: '2' } ];
}

const PostDetails = async ({ params }) => {
    const post = await getThePostById(params?.id)

    return (
        <div className="pt-20">
            The title goes here: {post?.title}
        </div>
    );
};

export default PostDetails;