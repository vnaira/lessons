function Name(props){
    return (
        <span>{props.name}</span>
    );
}

function Surname(props){
    return (
        <span>{props.surname}</span>
    );
}

function User(props){
    console.log(props);

    return (
        <div>

        <h3>I'm <Name name={props.name}/> <Surname surname={props.surname || 'no-surname'}/> </h3>

        </div>
    );
}

export default User;