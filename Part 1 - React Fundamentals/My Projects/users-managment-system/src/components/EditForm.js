export default function EditForm({ setName, setPass, selectedLoggedUser }) {
  return (
    <div className="edit-details">
      <h1>Edit Selected User Details</h1>
      <div className="edit-grid">
        <label>Name</label>
        <label>Password</label>
        <input
          value={selectedLoggedUser.name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={selectedLoggedUser.pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <button>Update Details</button>
    </div>
  );
}
