const SegundaParte = ({ tareas, borrarTarea }) => {
  const borrarElemento = (n) => {
    borrarTarea(n);
  };

  return (
    <>
      <h3>Tareas</h3>

      <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
      <ul id="lista-tareas">
        {tareas.map((tarea) => {
          return (
            <li
              className={tarea?.prioridad}
              key={tarea?.id}
              onClick={() => borrarElemento(tarea)}
            >
              {tarea?.nombre}
            </li>
          );
        })}
      </ul>

      <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
    </>
  );
};
export default SegundaParte;
