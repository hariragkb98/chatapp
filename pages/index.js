import Head from 'next/head'
import {useState} from "react";

export default function Home() {
    const [username, setUsername] = useState('');
    const [userEmail,setUserEmail]=useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
   
    return (
        <div className="container">
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
                      crossOrigin="anonymous"/>
                      <script src="https://cdn.socket.io/3.1.3/socket.io.min.js" integrity="sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh" crossorigin="anonymous"></script>

                      <script  src="script.js" type="module"></script>

            </Head>

            <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-grey">
                <div
                    className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                    <h2>Name:</h2>
                    <input className="fs-4 fw-bold" value={username} onChange={e => setUsername(e.target.value)}/>
                    <h2>Email:</h2>
                    <input className="fs-4 fw-bold" value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
                </div>
                <div id="message-container" className="list-group list-group-flush border-bottom scrollarea" style={{minHeight: "500px" }}>
                    {messages.map(message => {
                        return (
                            <div className="list-group-item list-group-item-action py-3 lh-tight">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <strong className="mb-1">{message.username}</strong>
                                </div>
                                <div className="col-10 mb-1 small">{message.message}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <form id="messageform">
                <input id="message-input" className="form-control" placeholder="Write a message" value={message}
                       onChange={e => setMessage(e.target.value)}
                />
            </form>
        </div>
    )
}