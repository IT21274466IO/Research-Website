import React from 'react';

interface TeamMember {
    name: string;
    position: string;
    image: string;
    department: string;
    scholarLink?: string;
    email?: string;
}

function MeetOurTeam() {
    const ourTeamPanl: TeamMember[] = [
        {
            name: 'Mrs. Thamali Kelagama',
            position: 'Supervisor',
            image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=iboExbsAAAAJ&citpid=1',
            department: 'Information Technology',
            scholarLink: 'https://scholar.google.com/citations?user=iboExbsAAAAJ&hl=en&oi=ao',
            email: 'mailto:thamali.k@sliit.lk'
        },
        {
            name: 'Mrs. Aparna Jayawardhana',
            position: 'Co_Supervisor',
            image: 'https://media.licdn.com/dms/image/v2/D5603AQG0zBuWs29UmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668785164359?e=1753920000&v=beta&t=F4yAx7QarDjOJ3048zqVE2JGiQyyO4-DL2MeCSt3bgk',
            department: 'Software Engineering',
            scholarLink: 'https://scholar.google.com/citations?user=19Hb50UAAAAJ&hl=en&oi=ao',
            email: 'mailto:aparna.j@sliit.lk'
        },
        {
            name: 'Dr. Sameera Madushan',
            position: 'External_Supervisor',
            image: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/498234773_29902139799399420_4397964605442721451_n.jpg?stp=cp6_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeFhyp-hsujkiqmjyRSBVn_d1KfwJHJVURDUp_AkclVREN7uJWLFsoLgYhBL9aHP_i3Sl8FtEPD3agy0gt-wfIQK&_nc_ohc=VKx0rTf_LuMQ7kNvwHQciPg&_nc_oc=AdmLOCUCW392zIhMqN301HEYh909HjMLoGqTmmxHs3rIaBgiz5EWZgk7GYhZHIR6EnkT0kzoc47dkXj5iHMP3s0E&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=mstv5dmDOYGzABeKPwc-iA&oh=00_AfJKWPJx7vkzNuDt0K7bdlLZdY-gA5rpc3iICr_e2j4AFA&oe=6838EBC1',
            department: 'University of Colombo and Professor Senaka Bibile Memorials Hospital',
            scholarLink: '',
            email: 'mailto:aparna.j@sliit.lk'
        }
    ];

    const ourTeamMem: TeamMember[] = [
        {
            name: 'Lahiru Inudsara',
            position: 'Group Leader',
            image: '/Lahiru.jpg',
            department: 'Information Technology',
            email: 'mailto:lahiru.inudsara11@gmail.com'

        },
        {
            name: 'Imantha Oshadha',
            position: 'Group Member',
            image: '/imnatha-2.png',
            department: 'Information Technology',
            email: 'mailto:imanthaoshadha27@gmail.com'
        },
        {
            name: 'Chanuka Kashmira',
            position: 'Group Member',
            image: '/chanuka-2.jpg',
            department: 'Information Technology',
            email: 'mailto:www.thrakaarawinda999@gmail.com'
        },
        {
            name: 'Tharaka Arawinda',
            position: 'Group Member',
            image: '/Tharaka-2.jpg',
            department: 'Information Technology',
            email: 'mailto:Chanukajayalath18@gmail.com'
        }
    ];

    const renderCard = (person: TeamMember, showScholar: boolean) => (
    <div className="col-xs-12 col-sm-3" key={person.name}>
        <div className="card d-flex flex-column h-100">
            <a className="img-card">
                <img src={person.image} alt={person.name} />
            </a>
            <div className="card-content">
                <h4 className="card-title mb-3">{person.name}</h4>
                <img
                    className="mb-2"
                    src={`https://img.shields.io/badge/-${person.position}-807e7e`}
                    alt="badge"
                />
                <p style={{ fontSize: '14px' }}>
                    Sri Lanka Institute of Information Technology
                </p>
                <p style={{ fontSize: '14px' }}>
                    <span style={{ fontWeight: 700 }}>Department</span>
                    <br />
                    {person.department}
                </p>
            </div>
            <div
                className="card-read-more d-flex justify-content-center gap-3"
                style={{ paddingBottom: '10px' }}
            >
                {showScholar && person.scholarLink && (
                    <a
                        href={person.scholarLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '14px', color: 'green' }}
                        className="btn btn-link"
                    >
                        <i className="fab fa-google me-1"></i> G-Scholar
                    </a>
                )}
                {person.email && (
                    <a
                        href={person.email}
                        style={{ fontSize: '14px', color: 'green' }}
                        className="btn btn-link"
                    >
                        <i className="fas fa-envelope-open-text me-1"></i> E-Mail
                    </a>
                )}
            </div>
        </div>
    </div>
);


    return (
        <section className="mt-5 meetteam" id="aboutus">
            <h1 style={{ marginLeft: '8%' }}>Meet Our Team !</h1>
            <div className="container mt-5">
                <div className="row">
                    {ourTeamPanl.map(member => renderCard(member, true))}
                </div>
                <div className="row mt-5">
                    {ourTeamMem.map(member => renderCard(member, false))}
                </div>
            </div>
        </section>
    );
}

export default MeetOurTeam;