export default function MiddleBox(props) {
  const data3 = props.data3;
  console.log(data3);

  return (
    <div>
      <main
        style={{
          border: "2px solid red",
          maxWidth: "10%",
          maxHeight: "13%",
          padding: "7%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>{data3 ? <p>Climate:{data3}</p> : <p>Climate:normal</p>}</h4>
      </main>
    </div>
  );
}
