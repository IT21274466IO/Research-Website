import React from 'react'

function Downloads() {

    const documents = [
        {
            name: 'Topic Assessment',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1GtjSvNsOnAKp0AzWQB8NkCl9KoUEOy4T?usp=drive_link'
            
        },
        {
            name: 'Project Charter',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1ZDyG58QuLf0EAO_WMok5ZS1drKtdiHU9?usp=drive_link'
        },
        {
            name: 'Project Proposal',
            submittionDate: '2025-05-25',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1hO5xyckOqH6QQxVUFB4Iayl0Xo9_b5mT?usp=drive_link'
        },
        {
            name: 'Status Documents I',
            submittionDate: '2025-05-25',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1pnvChzWQk-9wSmf8w877ZxKaf_UsU0vf?usp=drive_link'
        },
        {
            name: 'Status Documents II',
            submittionDate: '2025-05-25',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1lS2ofchTC5ZACKOe2gsxASrAcEQu2bm3?usp=drive_link'
            
        },
        {
            name: 'Research Paper',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1JFxOGj_9RF9AKbM2lA7n0oA8zIubZcR5?usp=drive_link'
        },
        {
            name: 'Final Report',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/11tXbNvWesVb-5L8Klt5pp315bb15yaNi?usp=drive_link'
        },
        {
            name: 'Poster',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1Stk-spaYzjD_LQE8OrZVlYyZtVpuLEI6?usp=drive_link'
        }
    ]

    const presentations = [
        {
            name: 'Project Proposal',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1sH-ZUofyFg0Eg-UX3M-2H1ep5nbG8Dl3?usp=drive_link'
        },
        {
            name: 'Progress Presentation I',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1ZfQI_YTdtve7sH47TVk-xYodE5fRoKNO?usp=drive_link'
        },
        {
            name: 'Progress Presentation II',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1rTODUwXREQl8ZNYgEEOQlk1kNh2l8rSy?usp=drive_link'
        },
        {
            name: 'Final Presentation',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1Vop5sj9z5HWhK6jGObE-E1AO6f9q7yx4?usp=drive_link'
        }
    ]

    return (
        <section className='mt-5 meetteam' style={{ backgroundColor: '#69fac0', padding: '30px' }} id='Documents'>
            <h1 style={{ marginLeft: '8%' }} className='mb-5'>Downloads</h1>

            <h4 style={{ marginLeft: '10%' }}>Documents</h4>
            <p style={{ marginLeft: '10%' }}>Please find all documents related to this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {documents.map((document) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {document?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {document?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {document?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${document?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h4 style={{ marginLeft: '10%' }} id='Presentations'>Presentations</h4>
            <p style={{ marginLeft: '10%' }}>Please find all presentations related this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {presentations.map((presentation) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {presentation?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {presentation?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {presentation?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${presentation?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Downloads