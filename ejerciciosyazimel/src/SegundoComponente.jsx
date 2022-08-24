const SegundoComponente = ({ texto }) => {
  return (
    <>
      <div>{texto}</div>
      <textarea
        value={texto}
        name="Aca se proyecta lo que quieras.."
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </>
  );
};
export default SegundoComponente;
