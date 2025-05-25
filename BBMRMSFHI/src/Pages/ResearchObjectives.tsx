import React from "react";

function ResearchObjectives() {
  return (
    <section className="mt-5 objectives " id="Objectives">
      <h1 style={{ marginLeft: "8%" }}>Research Objectives</h1>
      <div className="mt-5" style={{ marginLeft: "15%", marginRight: "15%" }}>
        <div className="container mt-5">
          <div className="row align-items-center  d-flex">
            <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
              <div className="circle font-weight-bold">1</div>
            </div>
            <div className="col-6">
              <h5>
                {" "}
                Blockchain-Integrated Medical Image Categorization and Secure
                Retrieval
              </h5>
              <p style={{ textAlign: "justify" }}>
                This component classifies medical images like MRIs and X-rays
                into specific disease categories using a lightweight deep
                learning model. It securely stores and retrieves these
                categorized images on a blockchain, ensuring data integrity and
                tamper-proof access for healthcare professionals.
              </p>
            </div>
          </div>

          <div className="row timeline">
            <div className="col-2">
              <div className="corner top-right"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner left-bottom"></div>
            </div>
          </div>

          <div className="row align-items-center justify-content-end  d-flex">
            <div className="col-6 text-right">
              <h5>
                {" "}
                Voice-to-Text Transcription (NLP) and Conversational AI for
                Treatment Recommender{" "}
              </h5>
              <p style={{ textAlign: "justify" }}>
                {" "}
                This component transcribes doctor-patient conversations into
                text using AI-driven speech recognition. It then extracts
                important medical information using natural language processing
                to provide customized treatment and medication recommendations.{" "}
              </p>
            </div>
            <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
              <div className="circle font-weight-bold">2</div>
            </div>
          </div>

          <div className="row timeline">
            <div className="col-2">
              <div className="corner right-bottom"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner top-left"></div>
            </div>
          </div>

          <div className="row align-items-center  d-flex">
            <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
              <div className="circle font-weight-bold">3</div>
            </div>
            <div className="col-6">
              <h5>AI-Driven Doctor Recommendation and Symptom Analysis</h5>
              <p style={{ textAlign: "justify" }}>
                This module analyzes patient symptoms through AI to offer
                personalized doctor recommendations and pre-appointment advice.
                It helps patients prepare better for consultations by
                interpreting reported symptoms accurately.
              </p>
            </div>
          </div>

          <div className="row timeline">
            <div className="col-2">
              <div className="corner top-right"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner left-bottom"></div>
            </div>
          </div>

          <div className="row align-items-center justify-content-end  d-flex">
            <div className="col-6 text-right">
              <h5>Risk Categorization Predictive Models for Medical System</h5>
              <p style={{ textAlign: "justify" }}>
                This component predicts and categorizes patient risk levels
                (low, medium, high) by analyzing medical data and images using
                machine learning. It aids clinicians in prioritizing patient
                care while ensuring secure data handling through blockchain
                integration.
              </p>
            </div>
            <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
              <div className="circle font-weight-bold">4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResearchObjectives;
