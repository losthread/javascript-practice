// each file can only have one default export

// JSX objects
const person = {
  name: 'Gregorio Y. Zara',
  theme: { // style in jsx
    backgroundColor: 'black',
    color: 'red'
  }
};

// we can use javascript using curly braces
export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img 
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="John Rabbit" 
        className="photo"
      />

      <ul>
        <li>Defeat The honored one</li>
      </ul>
    </div>
  )
}