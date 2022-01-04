import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen()
{
	const [input, setInput] = useState()
	const [messages, setMessages] = useState([
			{
				name: "Will smith",
				image: "https://i.pinimg.com/originals/d8/c0/fc/d8c0fc67ae1abe3c3f2ca32065f51045.jpg",
				message: "Whatsup!",
			},
			{
				name: "Will smith",
				image: "https://i.pinimg.com/originals/d8/c0/fc/d8c0fc67ae1abe3c3f2ca32065f51045.jpg",
				message: "Hey! this is Jackie!",
			},
			{
				message: "Hows it going?",
			},

		]);

	const handleSend = e => {
		e.preventDefault();

		setMessages([...messages, { message: input}]);
		setInput("");
	}

		return <div className="chatScreen">
					
					<p className="chatScreen__timestamp">YOU MATCHED WITH JOAN ON 10/08/87</p>
					{messages.map((message)=> (
						message.name ? (
							<div className="chatScreen__message">
								<Avatar 
									className="chatScreen__avatar"
									src={message.image}
									alt={message.name}
								/>
								<p className="chatScreen__text">{message.message}</p>
							</div>
						): (
							<div className="chatScreen__message">
								<p className="chatScreen__textUser">{message.message}</p>
							</div>

						)
						
					))}
					
						<form className="chatScreen__input">
							<input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." className="chatScreen__inputField"/>
							<button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
						</form>
					
				</div>
}
export default ChatScreen