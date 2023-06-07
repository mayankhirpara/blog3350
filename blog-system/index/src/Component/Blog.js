    import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Style from '../asset/Style.css';


function Blog() {

    let [item, setItem] = useState(null);
    let [search, setNewSearch] = useState("");
    let [active, setactive] = useState(true)
    let navigate = useNavigate()

    useEffect(() => {
        if (active) {
            fetch('http://localhost:3001/blog', {
            }).then(res => {
                res.json().then(record => {
                    setItem(record);
                })
            })
            .catch(err => { console.log(err) })
        }
    })


    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };


    const filterItems = async (cateItem) => {
        await fetch('http://localhost:3001/blog', {
        }).then(res => {
            res.json().then(record => {
                setactive(false);
                if (cateItem) {
                    let updateData = record.filter((v, index) => {
                        if (v.category == cateItem) {
                            return v;
                        }
                    });
                    setItem(updateData)
                }
                else {
                    setItem(record);
                }
            });
        }).catch(err => { console.log(err) })
    }

    return (
        <div>
            <div>
                <span>News</span><br/><br/>
                <input type="text" value={search} onChange={handleSearchChange} placeholder="Search Task" />
                <br /><br />
                <button onClick={() => filterItems('')}>All</button>
                <button onClick={() => filterItems('Sports')}>Sports</button>
                <button onClick={() => filterItems('Technology')}>Technology</button>
                <button onClick={() => filterItems('Food')}>food</button>


                <section>
                    <div className='row , d-flex'>
                        {item != null ? item.filter((v) => {
                            if (search === '') {
                                return v;
                            }
                            else if (v.category.toLowerCase().includes(search.toLowerCase())) {
                                return v;
                            }
                        }).map((v, i) => {
                            return (
                                <div className="col-lg-4 p1">
                                            <div className="blog-img1 from-control mt-3">
                                                <img className="img-fluid" src={require("../asset/assests/images/" + v.images)}/>
                                                <div>
                                                    <h5>{v.category}</h5>
                                                    <a href="#">{v.title}</a>
                                                    <p>{v.des}</p>
                                                    <div className='send'>
                                                    <NavLink to={'/readmore/'+v.id}><button>Read More</button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            )
                        }) : "Not Found"}
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Blog
