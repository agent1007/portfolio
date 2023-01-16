import projects from '../../utils/projects';

function Project() {

    let project = projects.map(function (e) {

        return <div className="project" key={e.id}>
            <img className="project__image" src={e.img} alt="Проект" />
            <a className="project__link" href={e.url} target="_blank" rel="noreferrer">
                <h2 className="project__title">Посмотреть проект</h2>
            </a>
        </div>
    })
    return (
        <>
            {project}
        </>
    );
}

export default Project;