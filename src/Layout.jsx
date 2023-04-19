import React from 'react'

const Layout = () =>{
    return(
    <div className="App">
      <div className="dex">
        <BrowserRouter>
        <Routes>
              <div className="link_div">
              <Route path="/PocketMonster" element={<PocketMonster/>}/>
              <Route path="/layout" element={<Layout/>}/>
              </div>

        </Routes>
              
              <Link to="/PocketMonster">details</Link>
              <Link to="/layout">index</Link>
        </BrowserRouter>
 

          {pokemon.map((pokemon, index) =>
          ( <Pokemon key={index} pokemon={pokemon} />)
          )}
        </div>
    </div>
        
    )
}

export default Layout;