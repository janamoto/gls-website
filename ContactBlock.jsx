window.ContactBlock = function ContactBlock() {
  return (
    <section id="contact" style={{padding:'160px 40px 120px',borderBottom:'1px solid rgba(245,242,236,.08)',position:'relative',overflow:'hidden'}}>
      <div aria-hidden style={{position:'absolute',right:-200,top:-100,width:700,height:700,borderRadius:'50%',background:'radial-gradient(circle,rgba(99,102,241,.18),transparent 70%)',filter:'blur(90px)'}}/>
      <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.3em',color:'rgba(245,242,236,.55)',textTransform:'uppercase',marginBottom:40,position:'relative'}}>(06) Moving offices? Hiring fast? Wi-Fi broken?</div>
      <h2 style={{fontFamily:'"Fraunces",serif',fontWeight:400,fontSize:'clamp(4rem,12vw,11rem)',lineHeight:.95,letterSpacing:'-0.04em',color:'#F5F2EC',margin:'0 0 80px',position:'relative'}}>
        Ring <span style={{fontStyle:'italic',color:'#6366f1'}}>us.</span>
      </h2>
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:48,borderTop:'1px solid rgba(245,242,236,.12)',paddingTop:40,position:'relative'}}>
        <div>
          <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.3em',color:'rgba(245,242,236,.5)',textTransform:'uppercase',marginBottom:16}}>Email</div>
          <a href="mailto:hello@glsinfotech.com" style={{fontFamily:'"Fraunces",serif',fontSize:'clamp(1.6rem,3vw,2.6rem)',color:'#F5F2EC',textDecoration:'underline',textUnderlineOffset:8,textDecorationThickness:1,letterSpacing:'-0.02em'}}>hello@glsinfotech.com</a>
        </div>
        <div>
          <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.3em',color:'rgba(245,242,236,.5)',textTransform:'uppercase',marginBottom:16}}>Office</div>
          <div style={{fontFamily:'"Fraunces",serif',fontSize:'1.3rem',color:'#F5F2EC',lineHeight:1.4}}>Chennai<br/>Tamil Nadu, IN</div>
        </div>
        <div>
          <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.3em',color:'rgba(245,242,236,.5)',textTransform:'uppercase',marginBottom:16}}>Coverage</div>
          <div style={{fontFamily:'"Fraunces",serif',fontSize:'1.3rem',color:'#F5F2EC',lineHeight:1.4}}>Pan-India<br/>On-site · Remote</div>
        </div>
      </div>
    </section>
  );
};
