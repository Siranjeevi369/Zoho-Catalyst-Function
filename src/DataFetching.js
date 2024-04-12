import React, {useState , useEffect} from "react";
import Axios from 'axios';

function Datafetching(){
    const [post , setPost] = useState({})
    // const [posts , setPost1] = useState([])
    const [id, setId] = useState(1)
    const[idFromButtonClick , setIdFromButtonClick] = useState(1)
    const  handleClick  = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        Axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res);
            setPost(res.data)
            // setPost1(res.data)

        })
        .catch(err => {
            console.log(err);
        })
    }, [idFromButtonClick])

    return(
        <div>
            <input type="text" value={id} onChange={ e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch post</button>
            <div>{post.body}</div>
            {/* <ul>
                {
                    posts.map(po => (
                        <li>{po.title}</li>
                     ) )
                }
            </ul> */}
        </div>
    )
}

export default Datafetching
