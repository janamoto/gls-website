window.EditorialHeader = function EditorialHeader() {
  return (
    <header style={{position:'fixed',top:0,left:0,right:0,zIndex:50,padding:'22px 40px',display:'grid',gridTemplateColumns:'1fr auto 1fr',alignItems:'center',borderBottom:'1px solid rgba(245,242,236,0.08)',background:'rgba(10,10,11,0.55)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)'}}>
      <div style={{fontFamily:'"Inter",system-ui,sans-serif',fontSize:11,letterSpacing:'.3em',color:'#F5F2EC',textTransform:'uppercase'}}>GLS / INFOTECH</div>
      <div style={{fontFamily:'"Fraunces",serif',fontStyle:'italic',fontSize:14,color:'rgba(245,242,236,.55)'}}>workplaces, wired.</div>
      <nav style={{display:'flex',justifyContent:'flex-end',gap:32,fontFamily:'"Inter",system-ui,sans-serif',fontSize:11,letterSpacing:'.25em',textTransform:'uppercase'}}>
        {['Solutions','Pricing','Clients','Contact'].map(l=><a key={l} href={'#'+l.toLowerCase()} style={{color:'#F5F2EC',textDecoration:'none'}}>{l}</a>)}
      </nav>
    </header>
  );
};
