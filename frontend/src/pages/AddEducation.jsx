import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Embed from "../components/CreateEmbed";
import Topic from "../components/CreateTopic";
import { postCall } from "../helpers/postCall";
import useDidMountEffect from "../helpers/customHook";

function AddEducation(props) {
    const [content, setContent] = useState([]);
    const [embedings, setEmbedings] = useState([]);
    const [topic, setTopic] = useState("");
    const onAddBtnClick = (event) => {
        setContent(
            content.concat({
                section: "",
                url: "",
                type: "Link",
            })
        );
    };

    useDidMountEffect(() => {
        setEmbedings(
            embedings.concat(
                <Embed
                    key={embedings.length}
                    id={embedings.length}
                    content={content}
                    setContent={setContent}
                />
            )
        );
    }, [content.length]);

    const onSubmit = (event) => {
        console.log(content);
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
                                <li>Add Education</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="inner-page">
                    <div className="container">
                        <Topic setTopic={setTopic} />
                        <button
                            onClick={onAddBtnClick}
                            className="btn btn-primary my-2"
                        >
                            Add Content
                        </button>
                        {embedings}
                        <br></br>
                        {embedings.length > 0 && (
                            <button
                                type="submit"
                                onClick={onSubmit}
                                className="btn btn-danger my-2"
                            >
                                Complete
                            </button>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </React.Fragment>
    );
}

export default AddEducation;
