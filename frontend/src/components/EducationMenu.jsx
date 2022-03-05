import React from "react";

function EducationMenu(props) {
    return (
        <div className="container">
            <div class="form-group">
                <label>Title</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Education Title"
                    onChange={(e) => props.setTitle(e.target.value)}
                    required
                />
                <div class="invalid-feedback">Please enter education name.</div>
            </div>
            <div class="form-group">
                <label>Education URL</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Link to more infromation"
                    onChange={(e) => props.setEducation(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Embedded information"
                    onChange={(e) => props.setDescription(e.target.value)}
                ></textarea>
            </div>
            <div class="form-group">
                <label>Image URL</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Link to education image"
                    onChange={(e) => props.setImage(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label>Video URL</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Link to embedded youtube video"
                    onChange={(e) => props.setVideo(e.target.value)}
                />
            </div>
            <br></br>
        </div>
    );
}

export default EducationMenu;
