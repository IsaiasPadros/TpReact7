import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

const empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://i.pinimg.com/564x/19/87/90/198790eb7e08830027c1ae1686496c72--avatar.jpg" },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://img.freepik.com/vector-premium/perfil-avatar-ilustraciones-vectoriales-sitio-web-redes-sociales-icono-perfil-usuario_495897-226.jpg" },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/2EUGQCXHJFAXHNAZI6VZYTYYJY.jpg" },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://cdn.create.vista.com/api/media/small/465896942/stock-photo-avatar-modern-cute-young-guy" },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://static.vecteezy.com/system/resources/previews/005/897/944/non_2x/cartoon-woman-avatar-young-beautiful-girl-with-long-red-hairs-and-chocker-necklate-punk-rock-lady-with-big-green-eyes-vector.jpg" },
  { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://us.123rf.com/450wm/agnessz/agnessz1608/agnessz160800208/61146275-mujer-elegante-con-el-pelo-rizado.jpg?ver=6" },
  { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://i.pinimg.com/originals/2c/88/2c/2c882c647db35098d198918481141422.png" },
  { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://i.pinimg.com/236x/1c/c8/c6/1cc8c601e99af7be3841d284af8c9a26.jpg" },
  { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://icones.pro/wp-content/uploads/2021/03/avatar-de-personne-icone-homme.png" },
];

const EmpleadoAvatar = ({ pic }) => {
  return <img src={pic} alt="Avatar" className="avatar" />;
};

const EmpleadoRow = ({ empleado }) => {
  return (
    <Row className="empleado-row">
      <Col xs={2}>
        <EmpleadoAvatar pic={empleado.pic} />
      </Col>
      <Col xs={10} className="info">
        <p className="full-name">{empleado.fullName}</p>
        <div className="title-department">
          <p className="title">{empleado.title}</p>
          <p className="department">{empleado.department}</p>
        </div>
      </Col>
    </Row>
  );
};

const EmpleadoList = ({ empleados }) => {
  return (
    <Container>
      {empleados.map((empleado) => (
        <EmpleadoRow key={empleado.id} empleado={empleado} />
      ))}
    </Container>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Lista de Empleados</h1>
      <EmpleadoList empleados={empleados} />
    </div>
  );
}

export default App;


