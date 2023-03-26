import { useState, useEffect } from "react"
const ApiCall = () => {

const [state, setState] = useState([]);

useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
    .then(res => res.json())
    .then(data => setState(data.results));
}, [])

  return (
    <tbody>        
        {
            state.map((e, idx) => {
                return (
                    <tr>
                        <td>
                            <img src={e.picture.medium} alt="no-img" />
                        </td>
                        <td>{e.name.first}</td>
                        <td>{e.email}</td>
                        <td>{e.gender}</td>
                    </tr>
                )
            })
        }
    </tbody>
  )
}

export default ApiCall