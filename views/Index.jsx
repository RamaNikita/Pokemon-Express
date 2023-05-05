const React = require("react");
const myStyle = {
  textAlign: "center",
  color: "#ffffff",
  backgroundColor: "#000000",
  // backgroundColor: "#125478",
  // height: "100px",
};
const aStyle = {
  fontSize: "30px",
  // textDecoration: "none",
  color: "#145865",
  textAlign: "center",
};
const ulStyle = {
  marginLeft: "40%",
  marginRight: "50%",

  fontSize: "20px",
};
class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <body>
        {" "}
        <div style={myStyle}>
          <h1>'See All The Pokemon!'</h1>
        </div>
        <a style={aStyle} href="/pokemon/new">
          Add new Pokemon
        </a>
        <ul style={ulStyle}>
          {pokemon.map((pokemonName, i) => {
            console.log(pokemonName);
            return (
              <li key={i}>
                <a href={`/pokemon/${pokemonName._id}`}>
                  {pokemonName.name.charAt(0).toUpperCase() +
                    pokemonName.name.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      </body>
    );
  }
}
module.exports = Index;
