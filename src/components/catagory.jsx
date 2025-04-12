import "../styles/catagory.css"


export default function Catagories(){

    const catagoryArray = [
        {
            image:'/pets.png',
            title:'Summer'
        },
        {
            image:'/pets.png',
            title:'Winter'
        },
        {
            image:'/pets.png',
            title:'Rain'
        },
        {
            image:'/pets.png',
            title:'Summer'
        },
        
    ]
    return(
        <div className="container">
            <div className="catagoryList" >
            {
                catagoryArray.map((item, index) => (
                    <div className="catagory" key={index}>
                        <img src={item.image} alt="" />
                        <h1 className="catagoryTitle">{item.title}</h1>
                    </div>
                ))
            }
            </div>
        </div>
    )
}