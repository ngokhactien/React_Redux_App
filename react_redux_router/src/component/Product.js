export default function Product(props) {
  const {match} = props ;
  const name = match.params.name
  console.log(match);

  return (
    <h1>
      Đây là Chi tiết sản phẩm {name}
    </h1>
  );
}
