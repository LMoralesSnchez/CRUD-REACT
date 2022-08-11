import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, nombre: "Viaje a la luna", autor: "Julio Verme" },
  { id: 2, nombre: "Viaje a centro de la tierra", autor: "Julio Verme" }
];

class App extends React.Component {
  state = {
    data: data,
    form:{
      id:'',
      nombre:'',
      autor:''
    },
    modalInsertar: false,
  };

  handlerChange = e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });

  }
  mostrarModalInsertar=()=>{
    this.setState({modalInsertar: true})
  }
  ocultarModalInsertar=()=>{
    this.setState({modalInsertar: false})
  }

  insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista,modalInsertar:false})
  }

  render() {
    return (
      <>
        <Container>
          <br />

          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar Nuevo Libro</Button>
          <br />

          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>AUTOR</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.nombre}</td>
                  <td>{elemento.autor}</td>
                  <td>
                    <Button color="primary">Editar</Button>
                    {"  "}
                    <Button color="danger">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>ID:</label>
              <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
            </FormGroup>

            <FormGroup>
              <label>NOMBRE:</label>
              <input className="form-control" name="nombre" type="text" onChange={this.handlerChange}/>
            </FormGroup>

            <FormGroup>
              <label>AUTOR:</label>
              <input className="form-control" name="autor" type="text" onChange={this.handlerChange} />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={()=>this.insertar()}>Insertar</Button>
            <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default App;
