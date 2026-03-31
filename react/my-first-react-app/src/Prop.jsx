import { getImageUrl } from './utils.js';

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="rounded-full block"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="p-5 border-2 border-black rounded-xl inline-block bg-gray-100">
      {children}
    </div>
  );
}