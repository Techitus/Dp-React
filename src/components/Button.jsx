/* eslint-disable react/prop-types */
import PropTpes from 'prop-types'
const Button = (props) => {
  return (
    <>
        <button>{props.name}</button>
        </>
  )
}
Button.defaultProps = {
    name : 'button'
}
Button.PropTpes = {
    name : PropTpes.string.isRequired
}
export default Button