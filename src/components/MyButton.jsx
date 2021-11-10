// new component
function MyButton(props) {
    // component logic
    console.log('MyButtom props',props)
    //const veryImportantNuber = 54 * 78;
    //return <button>I am a MyButton from component {veryImportantNuber}</button>;
    const btnStyle = {
      margin: '1rem',
      fontSize: '1,2rem',
      color: props.color
    }
    return <button style={btnStyle} > {props.text}</button>
  }
  
  export default MyButton;