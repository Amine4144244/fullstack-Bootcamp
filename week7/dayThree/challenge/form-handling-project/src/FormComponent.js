import React from "react";

const FormComponent = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>Sample form</h1>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        Male
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        Female
      </label>

      <br />
      <label>
        Select your destination
        <br />
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="Germany">Germany</option>
        </select>
      </label>

      <br />
      <br />
      <label>
        <input
          type="checkbox"
          name="nutsFree"
          checked={formData.nutsFree}
          onChange={handleChange}
        />
        Nuts free
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={formData.lactoseFree}
          onChange={handleChange}
        />
        Lactose free
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="vegan"
          checked={formData.vegan}
          onChange={handleChange}
        />
        Vegan
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>

      <hr />

      <div style={{ background: "#144", color: "#fff", padding: "1rem" }}>
        <h2>Entered information:</h2>
        <p><em>Your name:</em> {formData.firstName} {formData.lastName}</p>
        <p><em>Your age:</em> {formData.age}</p>
        <p><em>Your gender:</em> {formData.gender}</p>
        <p><em>Your destination:</em> {formData.destination}</p>
        <p><em>Your dietary restrictions:</em></p>
        <ul>
          <li>**Nuts free : {formData.nutsFree ? "Yes" : "No"}</li>
          <li>**Lactose free : {formData.lactoseFree ? "Yes" : "No"}</li>
          <li>**Vegan meal : {formData.vegan ? "Yes" : "No"}</li>
        </ul>
      </div>
    </form>
  );
};

export default FormComponent;