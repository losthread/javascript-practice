// React makes UI components separable as different file or function
// React lets us combine html, css and js in one single section called component
// Whole thing can be represented as a tree of components

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Scientists</h1>

      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}