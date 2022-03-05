import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EducationMenu from "../components/EducationMenu";
import { postCall } from "../helpers/postCall";

function AddEducation(props) {
    const [education, setEducation] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");

    const onSubmit = (event) => {
      const url = 'api/education'
      const message = {
        education_url: education,
        title: title,
        description: description,
        image_url: image,
        video_url: video,
      };

      postCall(url, message).then((result) => {
        window.alert(result['data']['message']);
        if (result['status'] === 200) {
          setEducation('');
          setTitle('');
          setDescription('');
          setImage('');
          setVideo('');
        };
      })
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
                        <EducationMenu
                            setEducation={setEducation}
                            setTitle={setTitle}
                            setDescription={setDescription}
                            setImage={setImage}
                            setVideo={setVideo}
                        />
                        <button class="btn btn-primary" onClick={onSubmit}>
                            Submit
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </React.Fragment>
    );
}

export default AddEducation;
