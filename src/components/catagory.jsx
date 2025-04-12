import "../styles/catagory.css"


export default function Catagories(){

    const catagoryArray = [
        {
            image:'/src/assets/pets.png',
            title:'Summer'
        },
        {
            image:'/src/assets/pets.png',
            title:'Winter'
        },
        {
            image:'/src/assets/pets.png',
            title:'Rain'
        },
        {
            image:'/src/assets/pets.png',
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