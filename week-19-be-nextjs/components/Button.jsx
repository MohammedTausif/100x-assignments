
const Button=({title, className,Link})=> {
  return (
    <div>
      <button className={className}>
       <a href={Link} >
       {title}
       </a> 
      </button>
    </div>
  )
}

export default Button
