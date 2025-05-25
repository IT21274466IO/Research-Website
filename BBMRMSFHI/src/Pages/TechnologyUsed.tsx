import React from "react";

function TechnologyUsed() {
  const technologies = [
    {
      name: "Blockchain",
      image:
        "https://i0.wp.com/epthinktank.eu/wp-content/uploads/2018/09/shutterstock_1054622195.jpg?fit=1000%2C1000&ssl=1",
    },
    {
      name: "Ethereum",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/330px-Ethereum-icon-purple.svg.png",
    },
    {
      name: "Python",
      image:
        "https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/python.png",
    },
    {
      name: "Flask",
      image:
        "https://images.g2crowd.com/uploads/product/image/small_square/small_square_fa7be4026d11b111b7f256098497c49a/flask.png",
    },
    {
      name: "React",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
    },
    {
      name: "React Native",
      image:
        "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg",
    },
    {
      name: "Expo go",
      image:
        "https://images.seeklogo.com/logo-png/45/2/expo-go-app-logo-png_seeklogo-457073.png",
    },
    {
      name: "Tensorflow",
      image:
        "https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/tensorflow.png",
    },
    {
      name: "JavaScript",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      name: "JWT",
      image:
        "https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/jwt.png",
    },
    {
      name: "GitHub",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      name: "VS Code",
      image:
        "https://ih1.redbubble.net/image.1470587088.2816/st,small,507x507-pad,600x600,f8f8f8.jpg",
    },
    {
      name: "Ganache",
      image:
        "https://101blockchains.com/wp-content/uploads/2022/08/Ganache-1-150x150.png",
    },
    {
      name: "Figma",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
  ];

  return (
    <section className="mt-5" id="Technologies">
      <h1 style={{ marginLeft: "8%" }}>Technologies Used</h1>

      <div className=" mt-5" style={{ marginLeft: "10%", marginRight: "10%" }}>
        <div className="row row-cols-md-12">
          {technologies.map((technology) => (
            <div className="col-xs-12 col-sm-2">
              <div
                className="card d-flex flex-column h-100 mb-4"
                style={{ border: "0", marginLeft: "25%" }}
              >
                <a className="img-card">
                  <img
                    src={technology?.image}
                    alt=""
                    style={{
                      padding: "30px",
                      width: "100%",
                      borderRadius: "50%",
                      boxShadow: "1px 1px 10px 1px #D4D4D4",
                    }}
                  />
                </a>
                <div className="card-content">
                  <h4
                    className="card-title mb-3 mt-3"
                    style={{ fontSize: "16px" }}
                  >
                    {" "}
                    {technology?.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologyUsed;
