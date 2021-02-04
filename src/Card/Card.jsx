import React from "react";
// Cambiamos el guion por camelCase, los valores que tendra serán strings.
// Definir los estilos del componente al inicio del archivo es buena practica.
// en ya en vez de pasarle los estilos desde css, le pasamos el objeto que creamos
/*
.types {
  display: inline-block;
  background-color: red;
  padding: 5px 10px;
  margin-right: 10px;
  color: #fff;
  border-radius: 4px;
}
 */

const styles = {
  types: {
    display: "inline-block",
    padding: "5px 10px",
    marginRight: "10px",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer"
  },
  name: {
    backgroundColor: "#AAFFEC",
    borderRadius: "12px",
    padding: "5px"
  }
};

export default function Card(props) {
  return (
    <div className="card">
      <h2 style={styles.name}>{props.name}</h2>
      <img src={props.image} alt="pokemon" className="ajust" />
      <div className="description">
        <ul>
          <li type="square">Hp: {props.base.HP}</li>
          <li type="square">Ataque: {props.base.Attack}</li>
          <li type="square">Defensa: {props.base.Defense}</li>
          <li type="square">Velocidad: {props.base.Speed}</li>
        </ul>
      </div>
      <div style={styles.types}>
        {props.types.map((type) => {
          if (type == ["Normal"]) {
            return (
              <span
                style={{
                  backgroundColor: "Black",
                  display: "inline-block",
                  padding: "8px 15px",
                  marginRight: "10px",
                  color: "#fff",
                  borderRadius: "4px"
                }}
              >
                {type}
              </span>
            );
          } else if (type == ["Water"]) {
            return (
              <span
                style={{
                  backgroundColor: "Blue",
                  display: "inline-block",
                  padding: "8px 15px",
                  marginRight: "10px",
                  color: "#fff",
                  borderRadius: "4px"
                }}
              >
                {type}
              </span>
            );
          } else if (type == ["Grass"]) {
            return (
              <span
                style={{
                  backgroundColor: "Green",
                  display: "inline-block",
                  padding: "8px 15px",
                  marginRight: "10px",
                  color: "#fff",
                  borderRadius: "4px"
                }}
              >
                {type}
              </span>
            );
          } else if (type == ["Fire"]) {
            return (
              <span
                style={{
                  backgroundColor: "red",
                  display: "inline-block",
                  padding: "8px 15px",
                  marginRight: "10px",
                  color: "#fff",
                  borderRadius: "4px"
                }}
              >
                {type}
              </span>
            );
          } else if (type == ["Poison"]) {
            return (
              <span
                style={{
                  backgroundColor: "Purple",
                  display: "inline-block",
                  padding: "8px 15px",
                  marginRight: "10px",
                  color: "#fff",
                  borderRadius: "4px"
                }}
              >
                {type}
              </span>
            );
          } else if (type == ["Flying"]) {
            return (
              <span
                style={{
                  backgroundColor: "Gray",
                  display: "inline-block",
                  padding: "8px 15px",
                  marginRight: "10px",
                  color: "#fff",
                  borderRadius: "4px"
                }}
              >
                {type}
              </span>
            );
          } else if (type == ["Bug"]) {
            return (
              <span
                style={{
                  backgroundColor: "Yellow",
                  display: "inline-block",
                  padding: "8px 15px",
                  marginRight: "10px",
                  color: "Black",
                  borderRadius: "4px"
                }}
              >
                {type}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
}

// import React from "react";
// export default function Card() {
//   return (
//     <div className="card">
//       <h2>Nombre del pokemon</h2>
//       <img src="/" alt="pokemon" />
//       <p>nombre: </p>
//       <p>imagen: </p>
//       <p>defensa: </p>
//       <p>speed: </p>
//       <div>
//         <button className="types" >Hola </button> <button className="types" >Hola </button>
//       </div>
//     </div>
//   );
// }
