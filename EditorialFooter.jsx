window.EditorialFooter = function EditorialFooter() {
  return (
    <footer style={{padding:'40px',display:'flex',justifyContent:'space-between',alignItems:'center',fontFamily:'"Inter",sans-serif',fontSize:10,letterSpacing:'.3em',color:'rgba(245,242,236,.45)',textTransform:'uppercase'}}>
      <div>© 2026 GLS Infotech</div>
      <div>Chennai — Pan-India</div>
      <div style={{display:'flex',gap:24}}>{['Instagram','LinkedIn','Twitter'].map(s=><a key={s} href="#" style={{color:'inherit',textDecoration:'none'}}>{s}</a>)}</div>
    </footer>
  );
};
