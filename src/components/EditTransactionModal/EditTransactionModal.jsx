
const EditTransactionModal = () => {
    return (
      <div>
          <h1>Add transaction</h1>
      <form action="">
       <p>Income</p>
          <input type="radio" name="color" value="red" checked />
        <p>Expense</p>
       {/* <select name="month" id="month">
          <optgroup label="Summer">
            <option value="s6">June</option>
            <option value="s7">July</option>
            <option value="s8">August</option>
          </optgroup>
        </select>   */}
              <input
          type="number"
          name="cash"
          min="0"
          max="150"
          step="0.1"
          value="0"
              />
              
        {/* <input type="text" name="username" placeholder="Jacob Mercer" /> */}
        
        <input type="date" min="2023-01-01" max="2025-01-01" />
        <textarea
          name="comment"
          rows="3"
          placeholder="Comment"
        ></textarea>
        <button>ADD</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};
export default EditTransactionModal;
