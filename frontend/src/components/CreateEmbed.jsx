import React from "react";

function Embed(props) {
    const update = (newValue, key) => {
        const dummy = [...props.content];
        dummy[props.id][key] = newValue;
        props.setContent(dummy);
    };

    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-md-4">
                    <label>Section</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Section name"
                        onInput={(e) => update(e.target.value, "section")}
                    />
                </div>
                <div className="col-md-5">
                    <label>URL</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="URL"
                        onInput={(e) => update(e.target.value, "url")}
                    />
                </div>
                <div className="form-group col-md-3">
                    <label for="type">Type</label>
                    <select
                        className="form-control"
                        onChange={(e) => update(e.target.value, "type")}
                    >
                        <option selected>Link</option>
                        <option>YouTube</option>
                        <option>PowerPoint</option>
                    </select>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Embed;
