
function User(props){
    console.log(props);
    return (
        <h3>I'm {props.name}, I'm {props.age}</h3>
    );
}

export default User;