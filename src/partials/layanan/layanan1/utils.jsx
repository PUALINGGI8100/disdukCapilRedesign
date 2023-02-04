const CostumOL = ({ arr }) => {
   return (
      <ol className="px-3 sm:px-5">
         {arr.map((v, i) => {
            return <li className="p-1 list-inside" key={i}>{v}</li>
         })}
      </ol>
   )
}

const CostumUL = ({ arr }) => {
   return (
      <ul className="px-5 text-xs sm:text-sm">
         {arr.map((v, i) => {
            return ( <li className="p-1 sm:mx-5 list-inside" key={i}>{v}</li> )
         })}
      </ul>
   )
}

export { CostumUL, CostumOL }