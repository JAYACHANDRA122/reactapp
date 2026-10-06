function portfolio(){
    const user={
    name:"Aarav kumar",
    picture:"C:\Users\jayac\OneDrive\Pictures\Camera Roll",
    description:"passionate frontend developer based in banglore."
    };
    return(
        <div>
            <h2>{user.name}</h2>
            <img src={user.picture}alt="profile"/>
            <p>{user.description}</p>
        </div>
    );
}
export default portfolio;