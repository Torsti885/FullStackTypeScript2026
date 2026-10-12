import { useState } from "react";

type User = { id: number; name: string; email: string; };

function UserForm() { const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [users, setUsers] = useState<User[]>([]);

function handleSubmit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault();

const user: User = { id: Date.now(), name, email, };

setUsers((prevUsers) => [...prevUsers, user]);

setName(""); setEmail(""); }

return ( <div> <h1>Lisää käyttäjä</h1>

<form onSubmit={handleSubmit}> <div> <label htmlFor="name">Nimi:</label> <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} required /> </div>

<div> <label htmlFor="email">Sähköposti:</label> <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /> </div>

<button type="submit">Lisää käyttäjä</button> </form>

<h2>Käyttäjät</h2>

{users.length === 0 ? ( <p>Ei vielä lisättyjä käyttäjiä.</p> ) : ( <ul> {users.map((user) => ( <li key={user.id}> {user.name} – {user.email} </li> ))} </ul> )} </div> ); }

export default UserForm;