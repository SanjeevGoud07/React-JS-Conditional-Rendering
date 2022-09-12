import './index.css'

const Welcome = props => {
  const {name, greeting, text} = props
  return (
    <h1 className="message">
      {greeting}, {name} you {text}
    </h1>
  )
}

Welcome.defaultProps = {
  greeting: 'Hi',
  name: 'Sanjeev',
  text: 'Logged In Or Out',
}

export default Welcome
