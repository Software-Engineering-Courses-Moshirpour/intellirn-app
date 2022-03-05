import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EditEducationDetails from "../components/EditEducationDetails";
import { useState } from "react";
import { getCall } from "../helpers/getCall";

function EditEducation(props) {
    const [educations, setEducations] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const url = "api/education";
        const message = {
            searchBy: "title",
            searchTerm: e.target.elements[0].value,
        };
        const [status, data] = getCall(url, message);
        if (status === 200) {
            setEducations(data);
        }
    };

    return (
        <React.Fragment>
            <Header />

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 style={{ visibility: "hidden" }}>
                                heading not to be displayed
                            </h4>
                            <ol>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/admin-menu">Admin menu</Link>
                                </li>
                                <li>Edit Education</li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section className="inner-page">
                    <div className="container justify-content-center text-center">
                        <form onSubmit={onSubmit}>
                            <div className="form-group mb-2">
                                <label className="sr-only">Topic</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by education topic"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-5"
                            >
                                Search
                            </button>
                            {educations.map((education, index) => {
                                return (
                                    <EditEducationDetails
                                        education={education}
                                    />
                                );
                            })}
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </React.Fragment>
    );
}

export default EditEducation;
