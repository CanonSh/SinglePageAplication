
export const Cabecera = () => {
  return (
    <div>
        <nav className="navbar" style={{backgroundColor: '#000000ff',borderRadius: '10px',width:'60vw'}}>
            <div className="container-fluid">
                <a className="navbar-brand" style={{color:'white'}}>K-music</a>
                <form className="d-flex" role="search" style={{backgroundColor: 'transparent'}}>
                    <input className="form-control-plaintext text-white " type="search" placeholder=" Buscar" aria-label="Search" style={{backgroundColor: 'transparent',border:"1px solid white",borderRadius:"5px"}}/>
                    <button className="btn " type="submit" style={{backgroundColor: 'transparent', color: 'white',border:"1px solid white",marginLeft:"1rem"}}>Buscar</button>
                </form>
            </div>
        </nav>
      
    </div>
  )
}

