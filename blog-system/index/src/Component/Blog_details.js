import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

function Details() {

    let [item, setItem] = useState([])
    let [active ,setactive] =useState(true)

    let {id} = useParams("")

    useEffect(() => {
        if(active){
            fetch('http://localhost:3001/blog/'+id, {
            }).then(res => {
                res.json().then(record => {
                    let dataRecord = [record]
                    setItem(dataRecord);
                    setactive(false)
                })
            }).catch(err => { console.log(err) })
        }
    })

    return (
        <div>

            <div>
                <div>
                    {item.map((v, i) => {
                        return (
                            <div>
                                <div className="blog-img1">
                                    <img src={require("../asset/assests/images/" + v.images)} alt="img" />
                                    <h3>{v.title}</h3>
                                    <h4>{v.category}</h4>
                                    <h5>{v.des}</h5>
                                    <p>{v.s_des}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>

                </div>
                <div>
                    <NavLink to='/'><button>Back Home</button></NavLink>
                </div>
            </div>
        </div>
    )
}
export default Details;


