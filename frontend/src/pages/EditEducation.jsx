import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EditEducationDetails from "../components/EditEducationDetails";
import { useState } from "react";
import useDidMountEffect from "../helpers/customHook";
import { useFetch } from "../helpers/useFetch";

function EditEducation(props) {
    const [educations, setEducations] = useState([]);
    const [searched, setSearch] = useState(false);
    const [category, setCategory] = useState("");
    const Submit = (e) => {
        e.preventDefault();
        const url = `api/education?searchBy=categoryname&searchTerm=${category}`;

        // const [status, data] = useFetch(url);
        // if (status === 200) {
        //     setEducations(data);
        // }
        const mock = [
            { title: "title1", url: "url1", type: "Link", route: "/title1" },
            {
                title: "title2",
                url: "url2",
                type: "YouTube",
                route: "/customroute2",
            },
        ];
        console.log("in search button");
        setEducations(mock);
    };

    useDidMountEffect(() => {
        setSearch(true);
        console.log("in usemounteffect");
    }, [educations]);

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
                        <form onSubmit={Submit}>
                            <div className="form-group mb-2">
                                <label className="sr-only">Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by education topic"
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-5"
                            >
                                Search
                            </button>
                        </form>
                        {searched && (
                            <EditEducationDetails
                                educations={educations}
                                category={category}
                            />
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </React.Fragment>
    );
}

export default EditEducation;
