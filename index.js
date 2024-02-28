const Notification = props => {
  //  Write your code here.
  const {className, imageUrl, message} = props;
  return {
    <div className={className}}>
      <img className="icon" src={imageUrl}/>
      <p>{message}</p>
    </div>
  }
}

const element = (
  //  Write your code here. 
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-container">
      <Notification className="Information-container" imageUrl=""
      message="Information Message"/>

      <Notification className="Success-container" imageUrl=""
      message="Success Message"/>

      <Notification className="warning-container" imageUrl=""
      message="warning Message"/>

      <Notification className="error-container" imageUrl=""
      message="error Message"/>
    </div>
  </div>  
)

ReactDOM.render(element, document.getElementById('root'))
