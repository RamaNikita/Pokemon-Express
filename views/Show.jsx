const React = require("react");
const myStyle = {
  backgroundColor: "#768fc4",
  // backgroundColor: "#125478",
  // height: "100px",
  display: "flex",
  textalign: "center",
};
const backStyle = {
  backgroundColor: "#125478",
  heigth: "100px",
};
const aStyle = {
  fontSize: "30px",
  textDecoration: "none",
  color: "#ffffff",
};
const myStyle2 = {
  textAlign: "center",
  backgroundColor: "#125478",
  //   height: "100px",
  //   marginTop: "5px",
  //   width: "400px",
};
class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    console.log(pokemon);
    return (
      <body style={myStyle}>
        <div style={myStyle2}>
          <h1>"Gotta Catch 'Em All"</h1>
          <h2>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
          <img
            style={myStyle2}
            src={`http://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
            alt={pokemon.name}
          ></img>
          <div>
            <a style={aStyle} href="/pokemon">
              Back
            </a>
          </div>
        </div>
      </body>
    );
  }
}
module.exports = Show;
