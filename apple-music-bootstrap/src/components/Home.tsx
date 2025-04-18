import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Row, Col, Card } from "react-bootstrap";

import Image from "../assets/Images/1a.png";
import Image1 from "../assets/Images/1b.png";

import episodio1 from "../assets/Images/2a.png";
import episodio2 from "../assets/Images/2b.png";
import episodio3 from "../assets/Images/2c.png";
import episodio4 from "../assets/Images/2d.png";
import episodio5 from "../assets/Images/2e.png";

const Images = [episodio1, episodio2, episodio3, episodio4, episodio5];

interface Track {
  id: number;
  title: string;
  artist: {
    name: string;
  };
  album: {
    cover_medium: string;
  };
}

export default function Home() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
        );
        const data = await response.json();
        setTracks(data.data);
      } catch (error) {
        console.error("Errore nel recupero dati Deezer", error);
      }
    };

    fetchTracks();
  }, []);

  return (
    <main className="bg-black text-white min-vh-100 px-3 pb-5">
      <h1 className="fw-bold display-6 mb-3">Novità</h1>
      <hr className="my-4 border-light opacity-50" />

      
      <section className="mb-4">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <h6>NUOVA STAZIONE RADIO</h6>
            <p className="fw-semibold">
              Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
            </p>
            <img
              src={Image}
              alt="Apple Music Chill"
              className="img-fluid rounded-4 mb-3"
            />
          </div>

          <div className="col-12 col-md-6">
            <h6>NUOVA STAZIONE RADIO</h6>
            <p className="fw-semibold">Ecco la nuova casa della musica latina</p>
            <img
              src={Image1}
              alt="Musica Latina"
              className="img-fluid rounded-4 mb-3"
            />
          </div>
        </div>
      </section>

     
      <section className="mb-4">
        <h5 className="fw-semibold mb-3">Nuovi episodi radio</h5>

      
        <div className="d-block d-md-none overflow-auto">
          <div className="d-flex gap-3">
            {Images.map((img, i) => (
              <Card key={i} className="flex-shrink-0" style={{ width: 200 }}>
                <Card.Img
                  variant="top"
                  src={img}
                  alt={`Episodio ${i + 1}`}
                  style={{ height: 120, objectFit: "cover" }}
                />
                <Card.Body className="p-2">
                  <Card.Text className="text-center small fw-medium mb-0">
                    Titolo episodio {i + 1}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop: griglia responsiva */}
        <Row className="d-none d-md-flex g-3">
          {Images.map((img, i) => (
            <Col md={4} lg={3} xl={2} key={i}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={img}
                  alt={`Episodio ${i + 1}`}
                  style={{ height: 120, objectFit: "cover" }}
                />
                <Card.Body className="p-2">
                  <Card.Text className="text-center small fw-medium mb-0">
                    Titolo episodio {i + 1}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* NUOVE USCITE */}
      <section className="mb-5">
        <h5 className="fw-semibold mb-3">Nuove uscite</h5>
        <div className="row row-cols-2 g-3">
          {tracks.slice(0, 6).map((track) => (
            <div key={track.id} className="col">
              <div className="bg-secondary rounded-3 p-2">
                <img
                  src={track.album.cover_medium}
                  alt={track.title}
                  className="img-fluid rounded-2 mb-2"
                />
                <p className="mb-0 small fw-medium">{track.title}</p>
                <p className="mb-0 small text-muted">{track.artist.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ALTRO DA ESPLORARE */}
      <section className="mb-4">
        <h5 className="fw-semibold mb-3">Altro da esplorare</h5>
        {[
          "Esplora per genere",
          "Decenni",
          "Attività e stati d’animo",
          "Worldwide",
          "Classifiche",
          "Audio spaziale",
          "Video musicali",
          "Nuovi artisti",
          "Hit del passato",
        ].map((item, idx) => (
          <div
            key={idx}
            className="d-flex justify-content-between align-items-center bg-secondary rounded-3 px-3 py-2 mb-2"
          >
            <span className="text-danger">{item}</span>
            <i className="bi bi-chevron-right text-danger"></i>
          </div>
        ))}
      </section>
    </main>
  );
}
