type GreetingProps = { name: string; };

function Greeting({ name }: GreetingProps) { return ( <div> <h2>Hei, {name}!</h2> </div> ); }

export default Greeting;