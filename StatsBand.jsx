window.StatsBand = function StatsBand() {
  const stats=[['One','Invoice · one vendor'],['7 days','From quote to desk'],['Same day','On-site response'],['Zero','Long contracts']];
  return (
    <section style={{borderBottom:'1px solid rgba(245,242,236,.08)',display:'grid',gridTemplateColumns:'repeat(4,1fr)',position:'relative'}}>
      <div aria-hidden style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',width:700,height:220,borderRadius:'50%',background:'radial-gradient(ellipse,rgba(99,102,241,.12),transparent 70%)',filter:'blur(60px)',pointerEvents:'none'}}/>
      {stats.map(([n,l],i)=>(
        <div key={n} style={{padding:'72px 32px',borderLeft:i?'1px solid rgba(245,242,236,.12)':'none',textAlign:'center',position:'relative'}}>
          <div style={{fontFamily:'"Fraunces",serif',fontSize:'clamp(2.5rem,5vw,4rem)',color:'#F5F2EC',letterSpacing:'-0.03em',lineHeight:1}}>{n}</div>
          <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.3em',color:'rgba(245,242,236,.5)',textTransform:'uppercase',marginTop:18}}>{l}</div>
        </div>
      ))}
    </section>
  );
};
