import banner from "../assets/contact.jpg"
export default function About()
{
    return(
        <>
        <h1 style={{'color':'green'}}>feel free to contact us</h1>
        <img style={{'width':'33%', 'display':'block'}} src={banner}/>
        <button>call</button>
        <button>email</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum quod repellendus ea, dolor quasi molestiae perspiciatis? Rem, id ducimus.</p>
        </>
    )
}