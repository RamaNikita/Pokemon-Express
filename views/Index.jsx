const React = require("react");
const myStyle = {
  textAlign: "center",
  color: "#ffffff",
  backgroundColor: "#000000",
  // backgroundColor: "#125478",
  // height: "100px",
};
const bodyStyle = {
  backgroundColor: "#768fc4",
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
        <ul style={ulStyle}>
          {pokemon.map((pokemonName, i) => {
            return (
              <li key={i}>
                <a href={`/pokemon/${i}`}>
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
