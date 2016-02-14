import React from 'react';
import { Input } from 'react-bootstrap';
export default (props) => {
  console.log(props.data);
  const sourceName = props.data.Source_Name;
  const options = Object.keys(sourceName).map((e, key) => {
    return <option value={sourceName[e]} key={key}>{sourceName[e]}</option>;
  });
  return (
    <div>
      <Input type="select" label="Catalog" >
        <option value={props.catalog}>{props.catalog}</option>
      </Input>
      <Input type="select" label="Source Name" >
        {options}
      </Input>
    </div>
  );
};
