

function ContentList(props) {
  console.log(props);
  return (
    <div>content{props.id[0]}</div>
  )
}

export default ContentList;