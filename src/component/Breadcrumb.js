import React from 'react';

const breadcrumb = {
  backgroundColor: 'black',
  border: '1px solid rgba(0, 0, 0, 0.125)',
  borderRadius: '0.37rem',
  color:'white',

}

function Breadcrumb(props) {

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <nav className="row justify-content-center">
      <ol className="breadcrumb" style={ breadcrumb }>
        {
          props.crumbs.map((crumb, ci) => {
            const disabled = isLast(ci) ? 'disabled' : '';
            
            return (
              <li
                key={ ci }
                className="breadcrumb-item align-items-center"
              >
                <button className={ `btn btn-link ${ "disabled" }` } onClick={ () => props.selected(crumb) }>
                 <font color="White"> { crumb } </font>
                </button>
              </li>
            );
          })
        }
      </ol>
    </nav>
  );
}

export default Breadcrumb;