const survey = [{
    "name": "Pump Check Survey",
    "linkCode": "s3cr3t",
    "imageUrl": "",
    "questions":[{
        content: "Are you having a problem with your pump?  ",
        id: 1,
        imageurl: "",
        stem: "Are you having a problem with your pump?  ",
        uid: ""

        },
        {
        content: "Is your pump beeping?  ",
        id: 2,
        imageurl: "",
        stem: "Yes",
        uid: "1"

        },
        {
        content: "PRESS SILENCE ",
        id: 3,
        imageurl: "",
        stem: "Yes",
        uid: "2"
        },
        {
        content: "No Actions Needed",
        id: 4,
        imageurl: "",
        stem: "No",
        uid: "1"
        },
        {
        content: "What does your pump say?",
        id: 5,
        imageurl: "",
        stem: "No",
        uid: "2"
        },
        {
        content: "Is there a kink or blockage in your tubing (given instructions on what to look for)? ",
        id: 6,
        imageurl: "",
        stem: "DISTAL OCCLUSION",
        uid: "5"
        },
        {
        content: "Remove Kink",
        id: 7,
        imageurl: "",
        stem: "Yes",
        uid: "6"
        },
        {
        content: "Is there a problem with your IV site (given instructions on how to assess IV site)?  ",
        id: 8,
        imageurl: "",
        stem: "No",
        uid: "6"

        },
        {
        content: "call clinic nurses at ### to arrange for new IV site",
        id: 9,
        imageurl: "",
        stem: "Yes",
        uid: "8"

        },
        {
        content: "Then we also do not know what is the problem",
        id: 10,
        imageurl: "",
        stem: "No",
        uid: "8"
        }

    ]}

];

export function getSurvey() {
    return survey;
  }

