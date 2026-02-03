// Component to display individual user information
export default function User({ name, mail, image }) {
  // Render user details: image, name, and email - given as props
  return (
    <div className="user-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{mail}</p>
    </div>
  );
}
