import { useState } from 'react';

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData));
  };

  return (
    <section>
      <h2>events example</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input mb-1'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          name='text'
        />
        {/* second input to handle email value */}
        <input
          type='email'
          className='form-input mb-1'
          value={email}
          onChange={handleChange}
          name='email'
        />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </section>
  );
}
export default Component;
