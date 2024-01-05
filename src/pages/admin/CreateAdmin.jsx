// import { useState } from "react"
// import { createAdmin } from "../../api"
// import "bootstrap/dist/css/bootstrap.min.css"
// import daftar from "../../asset/daftar.jpg"

// export function CreateAdmin() {

//     const [adminid, setAdminID] = useState('')
//     const [nama, setNama] = useState('')
//     const [nim, setNim] = useState('')
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [email, setEmail] = useState('')
//     const [noHp, setNoHp] = useState('')
//     const [jenis_kelamin, setJenis_kelamin] = useState('')

//     const handleSubmit = async (ev) => {
//         ev.preventDefault()
//         const hasil = await createAdmin(adminidid, nama, nim, username, password, email, noHp, jenis_kelamin)
//         console.log(hasil)
//     }

//     const fullBackgroundStyle = {
//         backgroundImage: `url(${daftar})`, // Replace with the path to your background image
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh', // Set the height to 100% of the viewport height
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // You can add more styles as needed
//     }
//     return (
//         <div className="" style={fullBackgroundStyle}>
//             <div className="container mt-5">
//                 <div className="row justify-content-center ">
//                     <div className="col-md-6">
//                         <div className="card">
//                             <div className="card-body">
//                                 <form onSubmit={handleSubmit}>
//                                     <div class="mb-3">
//                                         <label for="exampleInputEmail1" class="form-label">userid</label>
//                                         <input type="text" onChange={ev => setUserID(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                                     </div>
//                                     <div class="mb-3">
//                                         <label for="exampleInputEmail1" class="form-label">username</label>
//                                         <input type="text" onChange={ev => setUsername(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                                     </div>
//                                     <div class="mb-3">
//                                         <label for="exampleInputEmail1" class="form-label">nama</label>
//                                         <input type="text" onChange={ev => setNama(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                                     </div>
//                                     <div class="mb-3">
//                                         <label for="exampleInputEmail1" class="form-label">nim</label>
//                                         <input type="text" onChange={ev => setNim(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                                     </div>
//                                     <div class="mb-3">
//                                         <label for="exampleInputEmail1" class="form-label">password</label>
//                                         <input type="password" onChange={ev => setPassword(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                                     </div>
//                                     <div class="mb-3">
//                                         <label for="exampleInputEmail1" class="form-label">email</label>
//                                         <input onChange={ev => setEmail(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                                     </div>
//                                     <div class="mb-3">
//                                         <label for="exampleInputEmail1" class="form-label">jenis_kelamin</label>
//                                         <input onChange={ev => setJenis_kelamin(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                                     </div>
//                                     <div class="mb-3">
//                                         <label for="exampleInputEmail1" class="form-label">no hp</label>
//                                         <input onChange={ev => setNoHp(ev.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                                     </div>
//                                     <button type="submit" class="btn btn-primary">Submit</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }