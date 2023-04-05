function Form() {
  return (
    <div className='form'>
      <h2>My Form</h2>
      <div className='info'>
        <div className='inputs'>
          <label>First Name</label>
          <input type='text' />
        </div>
        <div className='inputs'>
          <label>Last Name</label>
          <input type='text' />
        </div>
        <div className='inputs'>
          <label>Email Address</label>
          <input type='text' />
        </div>
        <div className='inputs'>
          <label>Phone number</label>
          <input type='text' />
        </div>
        <div className='inputs'>
          <label for='Age'>Age:</label>
          <input type='number' name='Age' id='Age' />
        </div>

        <div className='inputs'>
          <label>Set a password</label>
          <input type='text' />
        </div>
        <button className='button'>Submit</button>
      </div>
    </div>
  )
}
export default Form
