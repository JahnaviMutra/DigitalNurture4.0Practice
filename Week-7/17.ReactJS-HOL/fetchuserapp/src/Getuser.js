import React from "react";

class Getuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null, 
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.randomuser.me/");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      const user = data.results[0];
      this.setState({ user, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { user, loading, error } = this.state;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const { title, first } = user.name;
    const imageUrl = user.picture.large;

    return (
      <div style={{ textAlign: "center", paddingTop: 40 }}>
        <div>
          <h1 style={{ fontWeight: "bold", fontSize: 32 }}>
            Mr Donato Nunes
          </h1>
        
          <h1 style={{ fontWeight: 'bold', fontSize: 32 }}>
            {title} {first}
          </h1>
          <img
            src={imageUrl}
            alt={`${title} ${first}`}
            style={{
              width: 120,
              height: 120,
              objectFit: "cover",
              borderRadius: 8,
              marginTop: 14,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Getuser;
