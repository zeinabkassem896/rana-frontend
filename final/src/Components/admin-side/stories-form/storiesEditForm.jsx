import { useState, useEffect } from "react";
import axios from "axios";
import "./storiesEditForm.css";

const EditStoryForm = ({ refresh, setIsOpen, singleStory }) => {
  const [data, setData] = useState(singleStory);

  useEffect(() => {
    setData(singleStory);
  }, [singleStory]);

  const handleEditStory = async (e) => {
    e.preventDefault();
    try {
      const fData = new FormData();
      fData.append("image", data.image);
      fData.append("title", data.title);
      fData.append("text", data.text);

      const response = await axios.put(
        import.meta.env.VITE_API_ENDPOINT + `api/stories/${data._id}`,
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
    <div className="form-container-edit-story">
      <form onSubmit={handleEditStory} className="form-edit-story">
        <div className="inputs-container-edit">
          <div className="input-label-container-story-edit">
            <label className="label-story-edit">
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
          <div className="input-label-container-story-edit">
            <img
              src={import.meta.env.VITE_API_ENDPOINT + data.image}
              width={"700px"}
              height={"300px"}
              alt={data._id}
            />
          </div>
          <div className="input-label-container-story">
            <label className="label-story-edit">
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
          <div className="input-label-container-story-edit">
            <label className="label-story-edit">
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
          <div className="edit-story-1">
            <button className="edit-button-story" type="submit">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditStoryForm;
