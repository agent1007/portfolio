import skills from '../../utils/skills';

function Skill() {

    let skill = skills.map(function (e) {

        return <div className="skill" key={e.id}>
            <img className="skill__image" src={e.img} alt="Картинка" />
            <h3 className="skill__title">{e.title}</h3>
            <p className="skill__text">{e.text}
            </p>
        </div>
    })
    
    return (
        <div className="skills__container">
            {skill}
        </div>
    );
}

export default Skill;