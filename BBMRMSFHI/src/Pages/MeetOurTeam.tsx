import React from 'react'

function MeetOurTeam() {
    const ourTeamPanl = [
        {
            name: 'Mrs. Thamali Kelegama',
            position: 'Supervisor',
            image: 'https://media.licdn.com/dms/image/sync/v2/D5627AQE9ifSCZKAZgg/articleshare-shrink_480/articleshare-shrink_480/0/1724270621402?e=1748790000&v=beta&t=ntRt7vmIFTYcZSw1w2OOFiOW9TPi1WrE53ym0ykltT8',
            department: 'Information Technology'
        },
        {
            name: 'Mrs. Aparna Jayawardana',
            position: 'Co_Supervisor',
            image: 'https://media.licdn.com/dms/image/v2/D5603AQG0zBuWs29UmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668785164359?e=1753920000&v=beta&t=F4yAx7QarDjOJ3048zqVE2JGiQyyO4-DL2MeCSt3bgk',
            department: 'Software Engineering'
        },
        {
            name: 'Dr. Samreea Madushan',
            position: 'External_Supervisor',
            image: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/498234773_29902139799399420_4397964605442721451_n.jpg?stp=cp6_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeFhyp-hsujkiqmjyRSBVn_d1KfwJHJVURDUp_AkclVREN7uJWLFsoLgYhBL9aHP_i3Sl8FtEPD3agy0gt-wfIQK&_nc_ohc=VKx0rTf_LuMQ7kNvwHQciPg&_nc_oc=AdmLOCUCW392zIhMqN301HEYh909HjMLoGqTmmxHs3rIaBgiz5EWZgk7GYhZHIR6EnkT0kzoc47dkXj5iHMP3s0E&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=mstv5dmDOYGzABeKPwc-iA&oh=00_AfJKWPJx7vkzNuDt0K7bdlLZdY-gA5rpc3iICr_e2j4AFA&oe=6838EBC1',
            department: 'University of Colombo and Professor Senaka Bibile Memorials Hospital'
        }
    ]

    const ourTeamMem = [
        {
            name: 'Lahiru Indusara',
            position: 'Group Leader',
            image: '/Lahiru.jpg',
            department: 'Information Technology'
        },
        {
            name: 'Imantha Oshadha',
            position: 'Group Member',
            image: '/imnatha-2.png',
            department: 'Information Technology'
        },

        {
            name: 'Chanuka Kashmira',
            position: 'Group Member',
            image: '/chanuka-2.jpg',
            department: 'Information Technology'
        },
        {
            name: 'Tharaka Arawinda',
            position: 'Group Member',
            image: '/Tharaka-2.jpg',
            department: 'Information Technology'
        },
    ]

    return (
        <section className='mt-5 meetteam' id='aboutus'>
            <h1 style={{ marginLeft: '8%' }}>Meet Our Team !</h1>
            <div className="container mt-5">
                <div className="row">
                    {ourTeamPanl.map((ourTeamm) => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="card d-flex flex-column h-100">
                                <a className="img-card">
                                    <img src={ourTeamm?.image} alt='' />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeamm?.name}</h4>
                                    <img className='mb-2' src={`https://img.shields.io/badge/-${ourTeamm?.position}-807e7e`} />
                                    <p style={{ fontSize: '14px' }}>
                                        Sri Lanka Institute of Information Technology
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: '700' }}>Department</span>
                                        <br />
                                        {ourTeamm?.department}
                                    </p>
                                </div>
                                <div className="card-read-more">
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block ms-2">
                                        <i className="fab fa-google me-1 mb-5"></i> G-Scholar
                                    </a>
                                    {/* <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block">
                                        <i className="fas fa-envelope-open-text me-1 mt-5"></i> E-Mail
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-5">
                    {ourTeamMem.map((ourTeamm) => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="card d-flex flex-column h-100">
                                <a className="img-card">
                                    <img src={ourTeamm?.image} alt='' />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeamm?.name}</h4>
                                    <img className='mb-2' src={`https://img.shields.io/badge/-${ourTeamm?.position}-807e7e`} />
                                    <p style={{ fontSize: '14px' }}>
                                        Sri Lanka Institute of Information Technology
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: '700' }}>Department</span>
                                        <br />
                                        {ourTeamm?.department}
                                    </p>
                                </div>
                                <div className="card-read-more">
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block ms-2">
                                        <i className="fab fa-google me-1 mb-5"></i> G-Scholar
                                    </a>
                                    {/* <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block">
                                        <i className="fas fa-envelope-open-text me-1 mt-5" ></i> E-Mail
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MeetOurTeam