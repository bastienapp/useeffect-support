import React, { useEffect } from 'react';

// Mount, Update, Unmount
function Test() {
  const [count, setCount] = React.useState(0);
  const [otherCount, setOtherCount] = React.useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function incrementOtherCount() {
    setOtherCount(otherCount + 1);
  }

  useEffect(() => {
    console.log('inside useEffect');
  });

  useEffect(() => {
    console.log('componentDidMount');

    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate count');
  }, [count]);

  useEffect(() => {
    console.log('componentDidUpdate otherCount');
  }, [otherCount]);

  console.log('inside component');

  return (
    <div className='Test'>
      <button type='button' onClick={incrementCount}>
        +1 count
      </button>
      <p>{count}</p>
      <br />
      <button type='button' onClick={incrementOtherCount}>
        +1 otherCount
      </button>
      <p>{otherCount}</p>
      <br />
      <button
        type='button'
        onClick={() => {
          incrementCount();
          incrementOtherCount();
        }}
      >
        Increment both
      </button>
    </div>
  );
}

export default Test;
