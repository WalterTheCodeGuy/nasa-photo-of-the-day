import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";

export default function Apod() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=ZONhTx3Ol6tuDVpilHxKlUvega2aDezCXbo5Izxl`)
      .then(response => {
        console.log(response.data);
        setTitle(response.data.title);
        setUrl(response.data.url);
        setDate(response.data.date);
        setExplanation(response.data.explanation);
      })
      .catch(error => {
        console.log("No stars for you", error);
      });
  }, []);

  return (
    <div className="container">
      <PhotoCard
        getTitle={title}
        getUrl={url}
        getDate={date}
        getExplanation={explanation}
      />
    </div>
  );
}