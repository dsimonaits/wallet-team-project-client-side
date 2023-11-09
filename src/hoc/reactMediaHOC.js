import React, { useState, useEffect } from 'react';
import Media from 'react-media';

const withMediaHOC = ({ queries, mediaProps = {}, children }) => {
  const WithMedia = props => {
    const [isRendered, setRendered] = useState(false);

    useEffect(() => {
      setRendered(true);
    }, []);

    return (
      <>
        {isRendered && (
          <Media queries={queries} {...mediaProps}>
            {children}
          </Media>
        )}
      </>
    );
  };

  return WithMedia;
};

export default withMediaHOC;
