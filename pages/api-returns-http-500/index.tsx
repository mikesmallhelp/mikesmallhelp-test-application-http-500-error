import React, { useState } from 'react';
import PageTemplate from '../../components/PageTemplate';
import { fetchData } from '../../util/util';

const IndexComponent = () => {
  const [loading, setLoading] = useState(true);

  const handleButtonClick = async () => {
    try {
      await fetchData('500', setLoading);
    } catch (error) {
      console.error(error);
    }
  };
  
  const PageContent = (
    <div>
        <input />

        <select name="someValues" id="someValues">
            <option value="aaa">aaa</option>
            <option value="bbb">bbb</option>
        </select>

        <button onClick={handleButtonClick}>HTTP 500 button</button>
        
        <a href='/'>Back to main page</a>
    </div>
  );

  return (
    <>
      <PageTemplate title={'Page 2, where a HTTP 500 error occurs'} content={PageContent} loading={loading} setLoading={setLoading} />
    </>
  );
};

export default IndexComponent;
