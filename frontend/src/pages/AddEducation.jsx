import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Article from "../components/CreateArticle";
import Topic from "../components/CreateTopic";
import { postCall } from "../helpers/postCall";
import useDidMountEffect from "../helpers/customHook";

function AddEducation(props) {
    const [content, setContent] = useState([]);
    const [articles, setArticles] = useState([]);
    const [topic, setTopic] = useState("");
    const onAddBtnClick = (event) => {
        setContent(
            content.concat({
                title: "",
                url: "",
                type: "Link",
                route: "",
            })
        );
    };

    useDidMountEffect(() => {
        setArticles(
            articles.concat(
                <Article
                    key={articles.length}
                    id={articles.length}
                    content={content}
                    setContent={setContent}
                />
            )
        );
    }, [content.length]);

    const onSubmit = (event) => {
        console.log(content);
        const url = "api/education";
        const message = {
            title: topic,
            articles: content,
        };

        postCall(url, message).then((result) => {
            window.alert(result["data"]["message"]);
            if (result["status"] === 200) {
                setTopic("");
                setArticles([]);
            }
        });
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
                            className="btn btn-primary ml-2"
                        >
                            Add Article
                        </button>
                        {articles}
                        {articles.length > 0 && (
                            <button
                                type="submit"
                                onClick={onSubmit}
                                className="btn btn-danger ml-2"
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
