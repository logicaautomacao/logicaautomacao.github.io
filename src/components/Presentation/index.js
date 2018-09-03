import React from 'react';

const Presentation = ({ presentation: {'texto': presentationText} }) => (
  <div className="Presentation">
    <p>{ presentationText }</p>
  </div>
);

export default Presentation;
