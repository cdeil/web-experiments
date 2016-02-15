import React from 'react';
import { Input } from 'react-bootstrap';
import Select from 'react-select';

export default (props) => {
  const sourceName = props.data.Source_Name;
  const options = Object.keys(sourceName).map((e) => {
    return {
      value: e,
      label: sourceName[e],
    };
  });

  return (
    <div>
      <Input type="select" label="Catalog">
        <option value={props.catalog}>{props.catalog}</option>
      </Input>
      <p>Source Name</p>
      <Select
        name="Source Name"
        value={props.sourceName && props.sourceName.value}
        options={options}
        onChange={props.sourceNameChange}
      />
    </div>
  );
};
