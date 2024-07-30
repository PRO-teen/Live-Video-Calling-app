// import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [roomCode , setRoomCode] = useState('')
    const navigate = useNavigate();
    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        navigate(`/room/${roomCode}`);
    }
  return (
    <div className="homepage">
      <form onSubmit={handleFormSubmit} className="form">
      <div >
        <h2 className="text-center text-xl font-semibold mb-4">Enter Room Code </h2>
        <input 
        value={roomCode}
        onChange={(e)=>setRoomCode(e.target.value)}
        type="text" 
         required
          placeholder="enter room code" 
            className="border rounded px-4 py-2 text-center"
          />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enter room</button>
      </form>
    </div>
  );
}

export default HomePage;
