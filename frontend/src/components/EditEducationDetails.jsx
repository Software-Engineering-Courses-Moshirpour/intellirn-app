import React from "react";
import { putCall } from "../helpers/putCall";
import { deleteCall } from "../helpers/deleteCall";

function EditEducationDetails(props) {
    const otherOption = (type) => {
        if (type === "Link") {
            return "YouTube";
        }
        return "Link";
    };

    const updateEducation = (newEducation) => {
        const url = "api/education";
        const message = {
            category: props.category,
            education: newEducation,
        };
        putCall(url, message).then((result) => {
            window.alert(result["data"]["message"]);
        });
    };

    const deleteEducation = (title) => {
        const url = "api/education";
        const message = {
            category: props.category,
            education: title,
        };
        // need delete w/ payload or param route
    };

    return (
        <form class="form-horizontal">
            <div class="table-responsive">
                <table class="table table-bordered table-striped table-highlight">
                    <thead>
                        <th>Title</th>
                        <th>URL</th>
                        <th>Type</th>
                        <th>Route</th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>
                        {props.educations.map((education) => {
                            return (
                                <tr>
                                    <td>{education.title}</td>
                                    <td>
                                        <input
                                            type="text"
                                            id="url"
                                            className="form-control"
                                            placeholder={education.url}
                                        />
                                    </td>
                                    <td>
                                        <select
                                            className="form-control"
                                            id="type"
                                        >
                                            <option selected="selected">
                                                {education.type}
                                            </option>
                                            <option>
                                                {otherOption(education.type)}
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="route"
                                            className="form-control"
                                            placeholder={education.route}
                                        />
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-primary"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const newEducation = {
                                                    title: education.title,
                                                    url: document.getElementById(
                                                        "url"
                                                    ).value,
                                                    type: document.getElementById(
                                                        "type"
                                                    ).value,
                                                    route: document.getElementById(
                                                        "route"
                                                    ).value,
                                                };
                                                updateEducation(newEducation);
                                            }}
                                        >
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                deleteEducation(
                                                    education.title
                                                );
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </form>
    );
}

export default EditEducationDetails;
