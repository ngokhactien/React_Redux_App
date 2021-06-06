export default function Massage(props) {
    var {massage} = props ;
    return (
        <h3>
            <span className="badge amber darken-2"> { massage } </span>
        </h3>
    );
}
