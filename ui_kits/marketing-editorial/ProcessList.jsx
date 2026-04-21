window.ProcessList = function ProcessList() {
  const steps=[
    ['01','Walk your space','We visit (or video-call) your office, count the seats, check the Wi-Fi dead zones.'],
    ['02','One monthly proposal','Everything you need on one line item. GST on top, no hidden charges.'],
    ['03','We show up','Delivery, setup, cabling, Wi-Fi calibration, inductions for your team.'],
    ['04','Call us, always','One number for every IT problem. We fix it, replace it or escalate it — same day.'],
  ];
  return (
    <section style={{padding:'140px 40px',borderBottom:'1px solid rgba(245,242,236,.08)',position:'relative'}}>
      <div aria-hidden style={{position:'absolute',right:'10%',top:'20%',width:340,height:340,borderRadius:'50%',background:'radial-gradient(circle,rgba(14,165,233,.16),transparent 70%)',filter:'blur(70px)'}}/>
      <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.3em',color:'rgba(245,242,236,.55)',textTransform:'uppercase',marginBottom:64,position:'relative'}}>(05) From hello to handover</div>
      {steps.map(([n,t,d])=>(
        <div key={n} style={{display:'grid',gridTemplateColumns:'160px 1fr 2fr',alignItems:'baseline',padding:'40px 0',borderTop:'1px solid rgba(245,242,236,.12)',position:'relative'}}>
          <div style={{fontFamily:'"Fraunces",serif',fontSize:'clamp(3rem,6vw,5rem)',fontStyle:'italic',color:'#6366f1',letterSpacing:'-0.03em'}}>{n}</div>
          <div style={{fontFamily:'"Fraunces",serif',fontSize:'clamp(1.6rem,2.4vw,2.2rem)',color:'#F5F2EC',letterSpacing:'-0.02em'}}>{t}</div>
          <div style={{fontFamily:'"Inter",sans-serif',fontSize:15,color:'rgba(245,242,236,.6)',lineHeight:1.5}}>{d}</div>
        </div>
      ))}
      <div style={{borderTop:'1px solid rgba(245,242,236,.12)'}}/>
    </section>
  );
};
