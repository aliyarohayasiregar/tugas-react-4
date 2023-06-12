import React from 'react'

const Tombol = ({anak, ...props}) => {
    return (
        <button className="button" {...props}>
          {anak}
        </button>
      );
}

export default Tombol