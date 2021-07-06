import axios from 'axios'
import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid';

const Content = () => {

    // const [questions, setquestions] = useState([])
    const [tag, settag] = useState("dp");
    const [levelA, setlevelA] = useState([])
    const [levelB, setlevelB] = useState([])
    const [levelC, setlevelC] = useState([])
    const [levelD, setlevelD] = useState([])
    const [levelE, setlevelE] = useState([])
    const [levelF, setlevelF] = useState([])

    useEffect(() => {

        async function getData() {
            const res = await axios.get(`https://codeforces.com/api/problemset.problems?tags=${tag}`);
            const problem_set = res.data.result.problems;
            // console.log(problem_set);
            const level_a = await problem_set.filter((ele) => {
                return ele.index === 'A';
            })
            const final_level_a =  await  level_a.map((ele) => {
                return (
                    <tr key={uuid()} >


                        <td><a href={`https://codeforces.com/problemset/problem/${ele.contestId}/${ele.index}`}>{ele.name}</a></td>
                        <td>{ele.rating}</td>
                        {/* <td>@mdo</td> */}
                    </tr>
                )
            })
            const level_b = await problem_set.filter((ele) => {
                return ele.index === 'B';
            })
            const final_level_b =  await  level_b.map((ele) => {
                return (
                    <tr key={uuid()} >


                        <td><a href={`https://codeforces.com/problemset/problem/${ele.contestId}/${ele.index}`}>{ele.name}</a></td>
                        <td>{ele.rating}</td>
                        {/* <td>@mdo</td> */}
                    </tr>
                )
            })

               const level_c = await problem_set.filter((ele) => {
                return ele.index === 'C';
            })
            const final_level_c =  await  level_c.map((ele) => {
                return (
                    <tr key={uuid()} >


                        <td><a href={`https://codeforces.com/problemset/problem/${ele.contestId}/${ele.index}`}>{ele.name}</a></td>
                        <td>{ele.rating}</td>
                        {/* <td>@mdo</td> */}
                    </tr>
                )
            })



            const level_d = await problem_set.filter((ele) => {
                return ele.index === 'D';
            })
            const final_level_d =  await  level_d.map((ele) => {
                return (
                    <tr key={uuid()} >


                        <td><a href={`https://codeforces.com/problemset/problem/${ele.contestId}/${ele.index}`}>{ele.name}</a></td>
                        <td>{ele.rating}</td>
                        {/* <td>@mdo</td> */}
                    </tr>
                )
            })
            const level_e = await problem_set.filter((ele) => {
                return ele.index === 'E';
            })
            const final_level_e =  await  level_e.map((ele) => {
                return (
                    <tr key={uuid()} >


                        <td><a href={`https://codeforces.com/problemset/problem/${ele.contestId}/${ele.index}`}>{ele.name}</a></td>
                        <td>{ele.rating}</td>
                        {/* <td>@mdo</td> */}
                    </tr>
                )
            })
            const level_f = await problem_set.filter((ele) => {
                return ele.index === 'F';
            })
            const final_level_f =  await  level_f.map((ele) => {
                return (
                    <tr key={uuid()} >


                        <td><a href={`https://codeforces.com/problemset/problem/${ele.contestId}/${ele.index}`}>{ele.name}</a></td>
                        <td>{ele.rating}</td>
                        {/* <td>@mdo</td> */}
                    </tr>
                )
            })
            setlevelA([...final_level_a]);
            setlevelB([...final_level_b]);
            setlevelC([...final_level_c]);
            setlevelD([...final_level_d]);
            setlevelE([...final_level_e]);
            setlevelF([...final_level_f]);
            // setquestions([...problem_set]);


        }
        getData();
    }, [tag]);
    const call_me=(e)=>{
        // console.log(e.target.attributes.value.nodeValue)
        settag(e.target.attributes.value.nodeValue);
        // setar(4);
    }


    return (
        <>
        <h1 >{tag}</h1>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Change Question Category</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{width:'40%'}}>
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <button className="btn btn-primary" onClick={call_me}  value="2-sat" style={{margin:'5px'}}>2-sat</button>
    <button className="btn btn-primary" onClick={call_me}  value="binary search" style={{margin:'5px'}}>Binary search</button>
    <button className="btn btn-primary" onClick={call_me}  value="bitmasks" style={{margin:'5px'}}>Bitmasks</button>
    <button className="btn btn-primary" onClick={call_me}  value="brute force" style={{margin:'5px'}}>Brute force</button>
    <button className="btn btn-primary" onClick={call_me}  value="chinese remainder theorem" style={{margin:'5px'}}>Chinese remainder theorem</button>
    <button className="btn btn-primary" onClick={call_me}  value="combinatorics" style={{margin:'5px'}}>Combinatorics</button>
    <button className="btn btn-primary" onClick={call_me}  value="constructive algorithm" style={{margin:'5px'}}>Constructive algorithm</button>
    <button className="btn btn-primary" onClick={call_me}  value="greedy" style={{margin:'5px'}}>Greedy</button>
    <button className="btn btn-primary" onClick={call_me}  value="dp" style={{margin:'5px'}}>Dynamic Programming</button>
    <button className="btn btn-primary" onClick={call_me}  value="data structures" style={{margin:'5px'}}>Data structures</button>
    <button className="btn btn-primary" onClick={call_me}  value="dfs and similar" style={{margin:'5px'}}>Dfs and similar</button>
    <button className="btn btn-primary" onClick={call_me}  value="divide and conquer" style={{margin:'5px'}}>Divide and conquer</button>
    <button className="btn btn-primary" onClick={call_me}  value="dsu" style={{margin:'5px'}}>Disjoint set-union</button>
    <button className="btn btn-primary" onClick={call_me}  value="expression parsing" style={{margin:'5px'}}>Expression parsing</button>
    <button className="btn btn-primary" onClick={call_me}  value="two pointers" style={{margin:'5px'}}>Two pointers</button>
    <button className="btn btn-primary" onClick={call_me}  value="trees" style={{margin:'5px'}}>Trees</button>
    <button className="btn btn-primary" onClick={call_me}  value="ternary search" style={{margin:'5px'}}>Ternary search</button>
    <button className="btn btn-primary" onClick={call_me}  value="strings" style={{margin:'5px'}}>String</button>
    <button className="btn btn-primary" onClick={call_me}  value="sortings" style={{margin:'5px'}}>Sorting</button>
    <button className="btn btn-primary" onClick={call_me}  value="shortest paths" style={{margin:'5px'}}>Shortest paths</button>
    <button className="btn btn-primary" onClick={call_me}  value="geometry" style={{margin:'5px'}}>Geometry</button>
    <button className="btn btn-primary" onClick={call_me}  value="probabilities" style={{margin:'5px'}}>Probabilities</button>
    <button className="btn btn-primary" onClick={call_me}  value="number theory" style={{margin:'5px'}}>Number theory</button>
    <button className="btn btn-primary" onClick={call_me}  value="math" style={{margin:'5px'}}>Math</button>
    <button className="btn btn-primary" onClick={call_me}  value="graphs" style={{margin:'5px'}}>Graphs</button>
    <button className="btn btn-primary" onClick={call_me}  value="hashing" style={{margin:'5px'}}>Hashing</button>

    <button className="btn btn-primary" onClick={call_me}  value="implementation" style={{margin:'5px'}}>Implementation</button>


    
  </div>
</div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Level-A
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col">Problem_name</th>
                                        <th scope="col">Rating</th>
                                        {/* <th scope="col">Handle</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {levelA}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Level-B

                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        
                            <table className="table">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col">Problem_name</th>
                                        <th scope="col">Rating</th>
                                        {/* <th scope="col">Handle</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {levelB}
                                </tbody>
                            </table>
                        
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Level-C

                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        
                            
                            <table className="table">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col">Problem_name</th>
                                        <th scope="col">Rating</th>
                                        {/* <th scope="col">Handle</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {levelC}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            Level-D
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col">Problem_name</th>
                                        <th scope="col">Rating</th>
                                        {/* <th scope="col">Handle</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {levelD}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div><div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            Level-E
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse " aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col">Problem_name</th>
                                        <th scope="col">Rating</th>
                                        {/* <th scope="col">Handle</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {levelE}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div><div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                            Level-F
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse " aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col">Problem_name</th>
                                        <th scope="col">Rating</th>
                                        {/* <th scope="col">Handle</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {levelF}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Content
