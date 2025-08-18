import { Persona2 } from "./persona2";
export function Persona({ name }) {
    return (
        <div>
            <h2> Persona </h2>
            hola {name}
            <Persona2 name={name} />
        </div>
    );
}