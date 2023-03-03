
function Title({title, name}) {


    return (
        <h2 className="title">{title}
            <a name={name}></a>
          </h2>
    );
}

export default Title;