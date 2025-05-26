import React from 'react'

function ResearchGap() {
    return (
        <section className='mt-2' id='researchgap'>
            <h1 style={{ marginLeft: '8%' }}>Research Gap</h1>
            <p style={{ marginLeft: '8%' }}>Following areas are the research gaps found in most of the recent researches.</p>
            <div className="achievements">
                <div className="work">
                    <i className="fas fa-search"></i>
                    <p className="work-heading">Identification & Classification</p>
                    <p className="work-text">The system uses deep learning (Restnet CNN) to accurately classify medical images into multiple disease categories. NLP techniques extract critical medical entities from doctor-patient conversations, enabling precise identification of symptoms and diagnoses.</p>
                </div>
                <div className="work">
                    <i className="fas fa-chart-line"></i>
                    <p className="work-heading">Severity Assessment</p>
                    <p className="work-text">Advanced AI models analyze both image data and extracted clinical information to predict risk levels (low, medium, high). This risk categorization supports timely clinical decisions by highlighting patients requiring urgent attention.</p>
                </div>
                <div className="work">
                    <i className="fas fa-comments"></i>
                    <p className="work-heading">Information Sharing</p>
                    <p className="work-text">Secure blockchain technology ensures tamper-proof storage and controlled access to medical records. Patients retain ownership of their data, while authorized healthcare providers can seamlessly retrieve and share records, enhancing interoperability and privacy.</p>
                </div>
            </div>
        </section>
    )
}

export default ResearchGap