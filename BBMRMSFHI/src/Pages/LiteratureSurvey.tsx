import React from "react";

function LiteratureSurvey() {
  return (
    <section className="mt-5" id="Literature">
      <h1 style={{ marginLeft: "8%" }}>Literature Survey</h1>
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p style={{ textAlign: "justify" }} className="me-5">
                The rapid advancement of artificial intelligence (AI) and
                blockchain technology has significantly impacted healthcare data
                management, leading to more secure, efficient, and intelligent
                systems for handling medical records. Several studies have
                explored the application of blockchain, machine III. METHODOLOGY
                learning, natural language processing (NLP), and computer vision
                to enhance various aspects of healthcare, including medical
                record storage, risk assessment, categorization, and decision
                support systems.
                <br />
                <br />
                Blockchain technology has emerged as a secure and decentralized
                solution for storing and managing medical data, ensuring data
                integrity, privacy, and accessibility. Early implementations,
                such as MedRec [1], demonstrated the potential of blockchain for
                Electronic Health Records (EHRs) but did not address challenges
                related to large, unstructured data like medical images.
                Subsequent research has highlighted the role of blockchain in
                addressing data fragmentation and interoperability challenges in
                healthcare systems [2], while also noting limitations in
                scalability and integration with existing infrastructures [3].
                <br />
                <br />
                Deep learning techniques, particularly Convolutional Neural
                Networks (CNNs), have significantly advanced medical image
                analysis. A comprehensive survey by Litjens et al. [4]
                demonstrated CNNs' effectiveness in disease detection and
                classification. However, challenges remain in integrating these
                models into clinical workflows and ensuring their
                interpretability [5]. Additionally, the need for large,
                annotated datasets poses scalability issues for diverse patient
                populations [3].
                <br />
                <br />
                The automation of clinical documentation using NLP-based
                transcription has been explored to reduce physician workload and
                improve accuracy. Studies have demonstrated the effectiveness of
                Automatic Speech Recognition (ASR) models in real-time
                transcription of doctor-patient conversations [6]. Furthermore,
                Named Entity Recognition (NER) techniques have been employed to
                extract key medical entities such as symptoms, diagnoses, and
                treatments from unstructured text [4]. However, existing models
                often lack decision support integration and face challenges in
                real-time multilingual transcription, limiting their
                applicability in diverse healthcare settings like Sri Lanka [7].
                <br />
                <br />
                <br />
                AI-based symptom analysis systems have shown promise in
                preliminary diagnosis but often lack secure data storage
                mechanisms, raising privacy concerns [6]. Machine learning
                models for physician recommendation have improved referral
                accuracy but face data fragmentation challenges across
                healthcare systems [7]. Existing pre-appointment advisory
                systems provide personalized guidance but may lack robust
                security measures, making them vulnerable to data breaches [8].
                Optical Character Recognition (OCR) technology has enabled
                automated extraction of critical health indicators from medical
                reports, reducing manual errors in diagnosis [9]. However, data
                security and interoperability remain challenges in traditional
                medical storage systems. Moreover, machine learning models
                require large, annotated datasets, which limit their scalability
                for diverse patient populations [10].
                
              </p>
            </div>
            <div className="col-lg-6">
              <p style={{ textAlign: "justify" }} className="me-5">
                
                The integration of blockchain and AI technologies holds
                significant potential for transforming healthcare data
                management. However, existing research indicates that challenges
                such as data security, interoperability, scalability, and the
                need for large, annotated datasets must be addressed to fully
                realize this potential. Future research should focus on
                developing integrated solutions that combine the strengths of
                these technologies while mitigating their limitations.
                <br />
                <br />
                
                <span style={{ fontSize: "12px" }}>
                  References <br />
                  
                  [1]A. Azaria, A. Ekblaw, T. Vieira, and A. Lippman, "MedRec:
                  Using blockchain for medical data access and permission
                  management," in Proceedings of the 2016 2nd International
                  Conference on Open and Big Data (OBD), pp. 25-30, 2016.
                  <br />
                  [2] T. T. Kuo, H. E. Kim, and L. Ohno-Machado, "Blockchain
                  distributed ledger technologies for biomedical and health care
                  applications," Journal of the American Medical Informatics
                  Association, vol. 24, no. 6, pp. 1211-1220, 2017.
                  <br />
                  [3] H. Smith, "Blockchain in Healthcare: Challenges and
                  Opportunities," IEEE Transactions on Medical Informatics, vol.
                  37, no. 4, pp. 1001 1014, 2023.
                  <br />
                  [4] G. Litjens et al., "A survey on deep learning in medical
                  image analysis," Medical Image Analysis, vol. 42, pp. 60-88,
                  2017.
                  <br />
                  [5] A. Brown, "Deep Learning for Medical Image Processing,"
                  Journal of AI in Medicine, vol. 29, no. 2, pp. 56-73, 2022.
                  <br />
                  [6] L. Wang, S. Kumar, and Y. Zhang, "Natural language
                  processing for symptom analysis: Accuracy and limitations in
                  clinical settings," Journal of Medical AI Systems, vol. 15,
                  no. 3, pp. 412-429, 2021.
                  <br />
                  [7] D. Silva and S. Fernando, "Challenges in implementing
                  multilingual NLP systems for healthcare in Sri Lanka,"
                  International Journal of Health Information Systems, vol. 15,
                  no. 2, pp. 134-142, 2022.
                  <br />
                  [8] R. Martinez, A. Thompson, and H. Patel, "Machine learning
                  approaches to physician recommendation: Improving referral
                  accuracy in specialized care," Healthcare Informatics
                  Quarterly, vol. 29, no. 2, pp. 183-197, 2022.
                  <br />
                  [9] M. Johnson, K. Lee, and T. Davis, "Conversational agents
                  for pre appointment patient preparation: Impact on clinical
                  efficiency and data security considerations," AI in Medical
                  Practice, vol. 12, no. 4, pp. 351 367, 2022.
                  <br />
                  [10] H. Smith, "Blockchain in Healthcare: Challenges and
                  Opportunities," IEEE Transactions on Medical Informatics, vol.
                  37, no. 4, pp. 1001 1014, 2023.
                </span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiteratureSurvey;
