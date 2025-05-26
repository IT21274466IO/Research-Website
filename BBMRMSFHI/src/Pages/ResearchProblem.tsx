import React from "react";

function ResearchProblem() {
  return (
    <section className="mt-1" id="Problem">
      <h1 style={{ marginLeft: "8%" }}>Research Problem & Solution</h1>
      <br />
      <br />
      <div className="container-fluid " id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h5 style={{ fontWeight: "700" }} className="ms-3">
                Proposed Problem
              </h5>
              <h5
                style={{ fontWeight: "700", color: "green" }}
                className="ms-3"
              >
                Is there a better way to handle patient medical records securely
                and efficiently?{" "}
              </h5>
              <p style={{ textAlign: "justify" }} className="ms-3 mt-4">
                Traditional healthcare record management systems face challenges
                such as data breaches, unauthorized access, fragmented data
                storage, poor interoperability, and inefficient clinical
                documentation processes. These issues lead to compromised data
                integrity, reduced diagnostic accuracy, and increased workload
                for healthcare professionals.
                <br />
                <br />
                Existing systems are time-consuming and impose a significant
                administrative burden and digital records face cybersecurity
                risks and require high costs and training.
              </p>
            </div>
            {/* <div className="col-lg-6 pb-4 pb-lg-0">
              <iframe
                style={{ marginLeft: "5%" }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/W-0lSiV-H7k?si=Ai0uKvQySVG78eJB"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div> */}
          </div>
          <h5 style={{ fontWeight: "700" }} className="ms-3 mt-3">
            Proposed Solution
          </h5>
          <p style={{ textAlign: "justify" }} className="ms-3 mt-4">
            This research proposes a Blockchain-Based Medical Record Management
            System that integrates AI-driven voice-to-text transcription, NLP
            for automatic extraction of medical information, deep learning for
            image classification and risk prediction, and AI-driven symptom
            analysis coupled with doctor recommendation. By leveraging
            blockchain’s decentralized and tamper-proof storage, the system
            ensures secure, immutable medical data management. Additionally, the
            solution improves workflow efficiency by automating clinical
            documentation, supporting decision-making, providing accurate doctor
            recommendations based on symptom analysis, and enabling seamless,
            patient-controlled information sharing among healthcare providers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResearchProblem;
