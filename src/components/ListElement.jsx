export function ListElement(props){
  console.log(props)

  return(
  <li>
    <p>
    <strong>{props.title} </strong> {props.desc}
    </p>
  </li>
);}