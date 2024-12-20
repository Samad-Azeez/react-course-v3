import { useState } from 'react';

type Link = { id: number; url: string; text: string };

const navlinks = [
  {
    id: 1,
    url: 'some url',
    text: 'some text',
  },
  {
    id: 2,
    url: 'some url',
    text: 'some text',
  },
  {
    id: 3,
    url: 'some url',
    text: 'some text',
  },
];

function Component() {
  const [text, setText] = useState('Hello World');
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navlinks);

  return (
    <div>
      <h2 className='mb-1'>React & Typescript</h2>
      <button
        className='btn btn-center'
        onClick={() => {
          setText('typeScript');
          setLinks([...links, { id: 4, url: 'some url', text: 'some text' }]);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
