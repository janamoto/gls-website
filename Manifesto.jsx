window.Manifesto = function Manifesto() {
  return (
    <section style={{padding:'140px 40px',display:'grid',gridTemplateColumns:'1fr 3fr',gap:80,borderBottom:'1px solid rgba(245,242,236,.08)',position:'relative'}}>
      <div aria-hidden style={{position:'absolute',left:'30%',top:-120,width:280,height:280,borderRadius:'50%',background:'radial-gradient(circle,rgba(99,102,241,.18),transparent 70%)',filter:'blur(60px)'}}/>
      <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.3em',color:'rgba(245,242,236,.55)',textTransform:'uppercase',paddingTop:12,position:'relative'}}>(02) Why GLS</div>
      <div style={{fontFamily:'"Fraunces",serif',fontWeight:300,fontSize:'clamp(1.5rem,2.6vw,2.4rem)',lineHeight:1.3,color:'#F5F2EC',letterSpacing:'-0.01em',position:'relative'}}>
        Most growing teams in India are still stuck choosing between <span style={{fontStyle:'italic',color:'#94a3b8'}}>buying laptops outright</span> — tying up lakhs of rupees in depreciating boxes — or chasing <span style={{fontStyle:'italic',color:'#94a3b8'}}>vendors across cities</span> every time Wi-Fi breaks. We exist to end both problems. GLS is your <span style={{fontStyle:'italic',color:'#6366f1'}}>outsourced IT desk:</span> devices, software, networking and support bundled into a single monthly contract. You focus on the work. We keep the workplace running.
      </div>
    </section>
  );
};
