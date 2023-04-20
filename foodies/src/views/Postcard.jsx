import React, { useState } from 'react';

export default function Post() {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    console.log({ image, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" value={image} onChange={handleImageChange} required />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} required />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}


