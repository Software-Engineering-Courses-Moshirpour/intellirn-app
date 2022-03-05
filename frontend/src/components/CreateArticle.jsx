import React from "react";

function Article(props) {
    const update = (newValue, key) => {
        const dummy = [...props.content];
        dummy[props.id][key] = newValue;
        props.setContent(dummy);
    };

    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-md-3">
                    <label>Title</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Article Title"
                        onInput={(e) => update(e.target.value, "title")}
                    />
                </div>
                <div className="col-md-3">
                    <label>URL</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="URL"
                        onInput={(e) => update(e.target.value, "url")}
                    />
                </div>
                <div className="form-group col-md-2">
                    <label for="type">Type</label>
                    <select
                        className="form-control"
                        onChange={(e) => update(e.target.value, "type")}
                    >
                        <option selected>Link</option>
                        <option>YouTube</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label>Route</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Optional custom route"
                        onInput={(e) => update(e.target.value, "route")}
                    />
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Article;
