import { useEffect, useState } from "react";

type User = { id: number; name: string; email: string; };

function UserSearch() { const [userId, setUserId] = useState("1"); const [user, setUser] = useState<User | null>(null); const [loading, setLoading] = useState(false); const [error, setError] = useState("");

useEffect(() => { const controller = new AbortController();

async function fetchUser() { setLoading(true); setError(""); setUser(null);

try { const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal: controller.signal });

if (!response.ok) { throw new Error("Käyttäjää ei löytynyt."); }

const data: User = await response.json(); setUser(data); } catch (err) { if (err instanceof Error && err.name !== "AbortError") { setError(err.message); } } finally { if (!controller.signal.aborted) { setLoading(false); } } }

fetchUser();

return () => controller.abort(); }, [userId]);

return ( <div> <h2>Hae käyttäjä</h2>

<label> Käyttäjän tunniste (1–10): <input type="number" min="1" max="10" value={userId} onChange={(event) => setUserId(event.target.value)} /> </label>

{loading && <p>Ladataan...</p>} {error && <p>{error}</p>}

{user && ( <div> <p>Nimi: {user.name}</p> <p>Sähköposti: {user.email}</p> </div> )} </div> ); }

export default UserSearch;