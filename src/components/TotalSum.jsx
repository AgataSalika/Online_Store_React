import React from 'react'

const TotalSum = ({calculateSingleSum}) => {
  return (
         <div className="total-sum">
          <p>
            Итого: <span>{calculateSingleSum()} руб</span>
          </p>
        </div>
  )
}

export default TotalSum