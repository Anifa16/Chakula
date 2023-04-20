import React, { useState } from "react";

export default function Post() {
  const [isloading, setIsloading] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleVideoChange = (event) => {
    setVideo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsloading(true);
    console.log({ image, title, video, description });
  };

  return (
    <form className="cardwidth" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="image"
          value={image}
          onChange={handleImageChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="video"
          value={video}
          onChange={handleVideoChange}
          required
        />
      </div>
      <div>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </div>
      <button type="submit">Post</button>
    </form>
  );
}
