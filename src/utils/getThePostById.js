export default async function getThePostById(id) {
    try {
        /* set the base url to get exact the file path from server side */
        const result = await fetch('http://localhost:3000/json.json')

        /* Get all posts */
        const data = await result.json();

        /* get the post of the id */
        const [ post ] = data.filter(P => P._id === id)
        return post
    } catch (error) {
        console.log(error);
    }
}