import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../helpers/url";
import { Card, Button } from "react-bootstrap";
import "../DataPage.css";

function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteData = (id) => {
    axios
      .delete(url + id)
      .then((response) => {
        getData();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="div-cards">
      {data.map((d) => (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{d.marca}-{d.modelo}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {d.linea}
            </Card.Subtitle>
            <Card.Text>
              Modelo: {d.modelo} <br/>
              Kilometraje: {d.kilometraje} <br/>
              Nombre Propietario: {d.nombrePropietario} <br/>
              Consecionario: {d.concesionario}
            </Card.Text>
            <Button variant="danger" onClick={() => deleteData(d.id)}>Eliminar</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default DataPage;
