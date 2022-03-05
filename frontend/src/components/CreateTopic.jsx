import React from "react";

function EdForm(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <label>Category</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Category Name"
                        onChange={(newTopic) => props.setTopic(newTopic)}
                    />
                </div>
                <div className="col-md-3">
                    <label>Route</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Optional custom route"
                        onChange={(newRoute) => props.setRoute(newRoute)}
                    />
                </div>
            </div>
        </div>
    );
}

export default EdForm;
