import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SongItem from "./components/SongItem";

function App() {
  const [count, setCount] = useState(0);
  const data = [
    {
      id: "1",
      title: "Oo Antava Oo Oo Antava – from Pushpa: The Rise",
      artist: "Indravathi Chauhan",
      image:
        "https://c.saavncdn.com/000/Pushpa-The-Rise-Telugu-2023-20230403210942-500x500.jpg",
    },
    {
      id: "2",
      title: "Srivalli – from Pushpa: The Rise",
      artist: "Sid Sriram",
      image:
        "https://cdn.bollywoodbubble.com/wp-content/uploads/2024/04/Rashmika-Mandanna-as-Srivalli-in-Pushpa-2-the-rule-poster.jpg",
    },
    {
      id: "3",
      title: "Naatu Naatu – from RRR",
      artist: "Rahul Sipligunj & Kaala Bhairava",
      image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Naatu_Naatu.jpg",
    },
    {
      id: "4",
      title: "Butta Bomma – from Ala Vaikunthapurramuloo",
      artist: "Armaan Malik",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Butta_Bomma.jpg/250px-Butta_Bomma.jpg",
    },
    {
      id: "5",
      title: "Inthandham – from Sita Ramam",
      artist: "S. P. B. Charan",
      image:
        "https://c.saavncdn.com/309/Inthandham-From-Sita-Ramam-Telugu-Telugu-2022-20220704185958-500x500.jpg",
    },
    {
      id: "6",
      title: "Jambalakidi Jaaru Mithaya – from DJ Tillu",
      artist: "Penchal Das",
      image:
        "https://c.saavncdn.com/432/Jambalakidi-JAARU-MITAYA-Telugu-2022-20230101190008-500x500.jpg",
    },
    {
      id: "7",
      title: "Samajavaragamana – from Ala Vaikunthapurramuloo",
      artist: "Sid Sriram",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/90/Samajavaragamana.jpg",
    },
  ];

  return (
    <>
      <h2>🎵 My Music Playlist</h2>
      {data.map((song) => (
        <SongItem
          title={song.title}
          artist={song.artist}
          id={song.id}
          image={song.image}
        />
      ))}
    </>
  );
}

export default App;
