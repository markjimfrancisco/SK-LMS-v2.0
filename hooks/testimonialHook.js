import { useState, useEffect } from "react";
// import fetch from "isomorphic-unfetch";
// import data from "../pages/api/contents/carousel.json";

export const useTestimonialHook = () => {
  const [testimonials, settestimonials] = useState(null);

  useEffect(() => {
    settestimonials([
      {
        "id": 0,
        "image": "images/dr-maria-magdalena-lim.svg",
        "name": "Dr. Maria Magdalena M. Lim",
        "description": "Schools Division Superintendent., DepEd Manilla ",
        "message": "Stock Knowledge is definitely a notable addition to the DepEd’s partners in the digital industry."
      },
      {
        "id": 1,
        "image": "images/fabien-benetou.svg",
        "name": "Fabien Benetou",
        "description": "WebXR Technical Adviser at UNICEF Innovation, New York,and  WebXR Consultant at European Parliament, Belgium",
        "message": "Virtual reality and augmented reality provide exciting new ways to discover and learn. Stock Knowledge on-going efforts to make this radically new kind of content to the widest audience is an example of leadership for the education world!"
      }
      ,
      {
        "id": 2,
        "image": "images/fayaz.svg",
        "name": "Fayaz King",
        "description": "United Nations Asst. Secretary-General",
        "message": "More gaming, please. Meet Stock Knowledge, a gamified learning platform that helps make the learning happen.",
        "source": "Twitter"
      }
    ]
    );
  }, []);

  return testimonials;
};
