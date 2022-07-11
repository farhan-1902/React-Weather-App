import React from 'react';

function Form () {
  
    const [text, setText] = React.useState("");

    function onChange(event) {
        setText(event.target.value);
    }

    function submit (event) {
        event.preventDefault();

        try {
            let res = fetch("/home", {
              method: "POST",
              body: JSON.stringify({
                input: text
              }),
            });
            let resJson = res.json();
            if (res.status === 200) {
                setText(text)
            } else {
              console.log("error")
            }
          } catch (err) {
            console.log(err);
          }
        };

    return (
        <form className="form" onSubmit={submit}>
            <input type="text" name="textvalue" placeholder="enter text" onChange={onChange} value={text}></input>
            <button type="submit">submit</button>
        </form>
    );

}

export default Form;