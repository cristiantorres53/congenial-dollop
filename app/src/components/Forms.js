import axios from "axios";
import React, { useState } from "react";
import { url } from "../helpers/url";
import "../HomePage.css";
import { Row, Form, Button } from "react-bootstrap";


function Forms() {
  const [carro, setCarro] = useState({
    nombre: "",
    marca: "",
    tipo: "",
    linea: "",
    modelo: "",
    kilometraje: "",
    nombrePropietario: "",
    concesionario: "",
  });

  const { marca,tipo,linea,modelo,kilometraje,nombrePropietario,concesionario} = carro;

  const postData = () => {
    axios
      .post(url, carro)
      .then((response) => response.data)
      .catch((error) => error);
  };

  const handleChanged = ({ target }) => {
    setCarro({
      ...carro,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Row>
        <div className="cont-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 form-group" controlId="formBasicTrade">
              <Form.Label>Marca</Form.Label>
              
              <Form.Control
                name="marca"
                className="input-form"
                type="text"
                placeholder="ingresar marca"
                onChange={handleChanged}
                value={marca}
              />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicType">
              <Form.Label>Tipo Vehiculo</Form.Label>
              <Form.Control
                name="tipo"
                type="text"
                placeholder="ingresar tipo de vehiculo"
                onChange={handleChanged}
                value={tipo}
              />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicLine">
              <Form.Label>Linea</Form.Label>
              <Form.Control
                name="linea"
                className="input-form"
                type="text"
                placeholder="Ingresar linea"
                onChange={handleChanged}
                value={linea}
              />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicModel">
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                name="modelo"
                className="input-form"
                type="text"
                placeholder="Ingresar Modelo"
                onChange={handleChanged}
                value={modelo}
              />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicKm">
              <Form.Label>kilometraje</Form.Label>
              <Form.Control
                name="kilometraje"
                className="input-form"
                type="text"
                placeholder="Ingresar kilometraje"
                onChange={handleChanged}
                value={kilometraje}
              />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Nombre Propietario</Form.Label>
              <Form.Control
                name="nombrePropietario"
                className="input-form"
                type="text"
                placeholder="Ingresar Nombre Propietario"
                onChange={handleChanged}
                value={nombrePropietario}
              />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Concesionario</Form.Label>
              <Form.Control
                name="concesionario"
                className="input-form"
                type="text"
                placeholder="Ingresar Consecionario"
                onChange={handleChanged}
                value={concesionario}
              />
            </Form.Group>

            <Button onClick={() => postData()} variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </Row>
    </div>
  );
}

export default Forms;
