import "./Item.css";
export default function Item(props) {
    const {data , deleteStudent} = props
  return (
    <>
      <li key={data.id} className={data.gender}>
        <h1>
          {data.name}
        </h1>
        <button className="delete" onClick={() => deleteStudent(data.id)}>
          Del
        </button>
      </li>{" "}
    </>
  );
}
