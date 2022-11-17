import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Time(props) {
  return (
    <Form>
        {props.time.map(t => (
        
        <Form.Check 
            type="radio"
            id="custom-switch"
            name="radiob"
            label={t}
            value = {t}
            onClick = {props.method}
      />
      ))
      }
    </Form>
  )
}
