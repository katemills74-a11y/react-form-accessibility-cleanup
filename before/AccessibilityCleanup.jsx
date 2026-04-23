// BeforeForm.jsx
import { useState } from "react";

export default function AccessibilityCleanup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="form-container">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button>Send</button>
      </form>
    </div>
  );
}
