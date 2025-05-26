import React from "react";

function Methodology() {
  return (
    <section className="mt-5" id="Methodology">
      <h1 className="mb-5" style={{ marginLeft: "8%" }}>
        Methodology
      </h1>
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 pb-4 pb-lg-0 d-flex flex-column align-items-center">
              <img
                className="img-fluid rounded shadow mb-4"
                style={{
                  maxHeight: "300px",
                  maxWidth: "70%",
                  objectFit: "contain",
                  marginRight: "100px",
                }}
                src="/doctor-1.png"
                alt="Elephant illustration for Smart Farm Security System"
              />
              <img
                className="img-fluid rounded shadow mb-4"
                style={{
                  maxHeight: "300px",
                  maxWidth: "100%",
                  objectFit: "contain",
                  marginRight: "100px",
                }}
                src="/nurse-3.png"
                alt="Sensor illustration for Smart Farm Security System"
              />
              <img
                className="img-fluid rounded shadow"
                style={{
                  maxHeight: "280px",
                  maxWidth: "80%",
                  objectFit: "contain",
                  marginRight: "100px",
                }}
                src="/nurse-1.png"
                alt="Deterrent system illustration for Smart Farm Security System"
              />
            </div>
            <div className="col-lg-6">
              <div className="methodology-content">
                <p className="lead text-justify mb-4">
                  The proposed Blockchain-Based Medical Record Management System
                  consists of four main components:
                </p>
                <ol
                  className="list-group list-group-numbered mb-4"
                  style={{ fontWeight: 600 }}
                >
                  <li className="list-group-item border-0">
                    Blockchain-Integrated Medical Image Categorization and
                    Secure Retrieval
                  </li>
                  <li className="list-group-item border-0">
                    Voice-to-Text Transcription (NLP) and Conversational AI for
                    Treatment Recommender
                  </li>
                  <li className="list-group-item border-0">
                    AI-Driven Doctor Recommendation and Symptom Analysis
                  </li>
                  <li className="list-group-item border-0">
                    Risk Categorization Predictive Models for Medical System
                  </li>
                </ol>

                <div className="component-section mb-4">
                  <h4 className="fw-bold">
                    1. Blockchain-Integrated Medical Image Categorization and
                    Secure Retrieval
                  </h4>
                  <p className="text-justify">
                    This component classifies medical images such as MRI Scans,
                    CT Scans and X-rays into specific disease categories using a
                    lightweight ResNet CNN model. Categorized images are
                    securely stored and retrieved through blockchain technology,
                    ensuring tamper-proof and decentralized access for
                    healthcare providers.
                  </p>
                </div>

                <div className="component-section mb-4">
                  <h4 className="fw-bold">
                    2. Voice-to-Text Transcription (NLP) and Conversational AI
                    for Treatment Recommender
                  </h4>
                  <p className="text-justify">
                    This component leverages speech-to-text technologies to
                    transcribe doctor-patient conversations. NLP models then
                    extract structured medical information to generate
                    personalized treatment and medication recommendations,
                    improving clinical documentation and decision support.
                  </p>
                </div>

                <div className="component-section mb-4">
                  <h4 className="fw-bold">
                    3. AI-Driven Doctor Recommendation and Symptom Analysis
                  </h4>
                  <p className="text-justify">
                    Using AI models, this module analyzes patient symptoms and
                    offers personalized doctor recommendations and
                    pre-appointment advice. It enhances patient preparedness and
                    helps direct patients to the most suitable healthcare
                    specialists.
                  </p>
                </div>

                <div className="component-section">
                  <h4 className="fw-bold">
                    4. Risk Categorization Predictive Models for Medical System
                  </h4>
                  <p className="text-justify">
                    This component integrates machine learning models to
                    classify patient risk levels based on medical data and
                    imaging reports. Blockchain ensures secure data integrity,
                    while the model supports prioritization of patient care
                    through accurate risk assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Methodology;
