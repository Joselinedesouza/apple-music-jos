import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

interface Track {
  id: number;
  title: string;
  artist: { name: string };
  album: { cover_medium: string };
}

export default function NewReleases() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=latest"
    )
      .then((res) => res.json())
      .then((data) => setTracks(data.data.slice(0, 6)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="mt-5">
      <Container>
        <h2 className="text-white fw-semibold mb-4">Nuove uscite</h2>
        <Row xs={2} md={3} lg={3} className="g-4">
          {tracks.map((track) => (
            <Col key={track.id}>
              <Card bg="dark" text="white" className="h-100 border-0">
                <Card.Img
                  variant="top"
                  src={track.album.cover_medium}
                  alt={track.title}
                  className="rounded"
                />
                <Card.Body className="text-center">
                  <Card.Title className="fs-6 mb-1">{track.title}</Card.Title>
                  <Card.Text className="text-muted small">
                    {track.artist.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}