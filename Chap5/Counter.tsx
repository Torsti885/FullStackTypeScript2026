import { useState } from "react";

function Counter() { const [count, setCount] = useState(0);

return ( <div> <h2>Laskuri: {count}</h2>

<button onClick={() => setCount(count + 1)}> Lisää yksi </button>

<button onClick={() => setCount(0)}> Nollaa </button> </div> ); }

export default Counter;