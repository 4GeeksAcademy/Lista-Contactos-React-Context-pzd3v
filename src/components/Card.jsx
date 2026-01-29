export const Card = () => {
  return (
    <div className="text-center mt-5 d-flex">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.xtrafondos.com%2Fwallpapers%2Fvertical%2Frick-sanchez-foto-policial-de-rick-y-morty-6533.jpg&f=1&nofb=1&ipt=a8ca0c6b9829e065552417b2b48b0da3867aaf40b90b426cb481542443337a43"
        alt=""
        style={{
          height: "150px",
          width: "150px",
          borderRadius: "50%",
        }}
      ></img>
      <div className="mx-5">
        <h5>Name</h5>
        <p>
          <i className="fa fa-location-dot btn">Location</i>
        </p>
        <p>
          <i className="fa-solid fa-phone-flip">Phone</i>
        </p>
        <p>
          <i className="fa-solid fa-envelope">Email</i>
        </p>
      </div>
      <div className="d-flex mx-5">
        <i className="fa-solid fa-pen-to-square mx-4"></i>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
  
}