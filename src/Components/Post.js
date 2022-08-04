import "../styles.css";

export default function Post(props) {
  return (
    <>
      <div className="Post">
        <div className="top">
          <h4>
            {props.Pname} - By {props.Aname}
          </h4>
          <p>{props.time}</p>
        </div>
        <p>{props.desc}</p>
        <button>APPLY</button>
      </div>
    </>
  );
}
