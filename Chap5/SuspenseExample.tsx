import { Suspense, use } from "react";

type Post = { id: number; title: string; body: string; };

const postPromise: Promise<Post> = fetch( "https://jsonplaceholder.typicode.com/posts/1" ).then((response) => { if (!response.ok) { throw new Error("Datan hakeminen epäonnistui."); }

return response.json() as Promise<Post>; });

function PostContent() { const post = use(postPromise);

return ( <div> <h2>{post.title}</h2> <p>{post.body}</p> </div> ); }

function SuspenseExample() { return ( <div> <h1>Julkaisu</h1>

<Suspense fallback={<p>Ladataan julkaisua...</p>}> <PostContent /> </Suspense> </div> ); }

export default SuspenseExample;