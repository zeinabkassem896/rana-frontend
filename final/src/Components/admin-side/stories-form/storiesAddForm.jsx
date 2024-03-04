import "./storiesAddForm.css";
import { useState } from "react";
import axios from "axios";

const StoriesAddForm = ({ refresh, setIsOpen }) => {
  const [data, setData] = useState({
    image: null,
    title: " ",
    text: " ",
  });

  const handleAddStory = async (e) => {
    e.preventDefault();

    try {
      const fData = new FormData();
      fData.append("image", data.image);
      fData.append("title", data.title);
      fData.append("text", data.text);

      const response = await axios.post(
        import.meta.env.VITE_API_ENDPOINT + "api/stories",
        fData
      );
      console.log(response);
      refresh("a");
      setIsOpen(false);
    } catch (error) {
      // Check if the response status is 400
      if (error.response && error.response.status === 400) {
        // Display the error message to the user
        alert(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="form-container-story">
      <form onSubmit={handleAddStory} className="form-submit-story">
        <div className="inputs-container">
          <div className="input-label-container-story">
            <label className="label-story">
              Story Title
              <input
                type="text"
                value={data.title || ""}
                onChange={(e) => {
                  setData({ ...data, title: e.target.value });
                }}
              />
            </label>
          </div>

          <div className="input-label-container-story">
            <label className="label-story">
              Story Image
              <input
                type="file"
                onChange={(e) => {
                  setData({ ...data, image: e.target.files[0] });
                }}
              />
              <div className="custom-file-input">Choose File</div>
              <div className="selected-file-name">
                {data.image ? data.image.name : "No file chosen"}
              </div>
            </label>
          </div>

          <div className="input-label-container-story">
            <label className="label-story">
             Story Text
              <textarea
                rows={5}
                cols={65}
                value={data.text || ""}
                onChange={(e) => {
                  setData({ ...data, text: e.target.value });
                }}
              />
            </label>
          </div>
        </div>
        <div className="story-buttons-container">
          <div className="cancel-story-1">
            <button
              className="cancel-button-story"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div className="add-story-1">
            <button className="add-button-story" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StoriesAddForm;
