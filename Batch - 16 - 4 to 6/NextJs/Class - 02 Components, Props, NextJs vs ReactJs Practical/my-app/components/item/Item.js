function Item({ arr }) {
    let item = arr.map(item => {
        return <li key={item}>{item}</li>
    })
  return (
    <>
      {item}
    </>
  );
}

export default Item;
