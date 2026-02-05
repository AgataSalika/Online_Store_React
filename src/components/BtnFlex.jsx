import React from 'react'

const BtnFlex = ({setShowPopUp}) => {
  return (
    <div>
    <div className="btnFlex">
              <button
              onClick={function () {
                setShowPopUp(true);
              }}
              className="deleteBtn"
            >
              Удалить все товары
            </button>
        </div>

    </div>
  )
}

export default BtnFlex