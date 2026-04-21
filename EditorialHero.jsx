window.EditorialHero = function EditorialHero() {
  const [mouse, setMouse] = React.useState({x:0.5,y:0.5});
  const ref = React.useRef(null);
  return (
    <section
      ref={ref}
      onMouseMove={e=>{const r=ref.current.getBoundingClientRect();setMouse({x:(e.clientX-r.left)/r.width,y:(e.clientY-r.top)/r.height});}}
      style={{minHeight:'100vh',position:'relative',padding:'140px 40px 50px',display:'flex',flexDirection:'column',justifyContent:'space-between',overflow:'hidden'}}>

      {/* layered blobs that follow the cursor */}
      <div aria-hidden style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:0}}>
        <div style={{position:'absolute',width:720,height:720,borderRadius:'50%',background:'radial-gradient(circle,#4338ca 0%,transparent 65%)',filter:'blur(90px)',opacity:.55,left:`calc(${mouse.x*100}% - 360px)`,top:`calc(${mouse.y*100}% - 360px)`,transition:'left 1.2s cubic-bezier(.2,.8,.2,1),top 1.2s cubic-bezier(.2,.8,.2,1)'}}/>
        <div style={{position:'absolute',width:520,height:520,borderRadius:'50%',background:'radial-gradient(circle,#0ea5e9 0%,transparent 65%)',filter:'blur(90px)',opacity:.35,right:`calc(${(1-mouse.x)*30}% - 260px)`,bottom:`calc(${(1-mouse.y)*30}% - 260px)`,transition:'right 1.6s cubic-bezier(.2,.8,.2,1),bottom 1.6s cubic-bezier(.2,.8,.2,1)'}}/>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(245,242,236,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,242,236,.04) 1px, transparent 1px)',backgroundSize:'80px 80px',maskImage:'radial-gradient(circle at center, #000 30%, transparent 75%)',WebkitMaskImage:'radial-gradient(circle at center, #000 30%, transparent 75%)'}}/>
      </div>

      {/* orbit ring */}
      <div aria-hidden style={{position:'absolute',right:-200,top:'50%',transform:'translateY(-50%)',width:900,height:900,border:'1px solid rgba(245,242,236,.06)',borderRadius:'50%',pointerEvents:'none',zIndex:0}}>
        <div style={{position:'absolute',inset:80,border:'1px solid rgba(245,242,236,.05)',borderRadius:'50%'}}>
          <div style={{position:'absolute',inset:140,border:'1px dashed rgba(99,102,241,.18)',borderRadius:'50%',animation:'spin 60s linear infinite'}}/>
        </div>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>

      <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.3em',color:'rgba(245,242,236,.55)',textTransform:'uppercase',position:'relative',zIndex:2,display:'flex',gap:24,alignItems:'center'}}>
        <span style={{width:10,height:10,borderRadius:'50%',background:'#22c55e',boxShadow:'0 0 14px #22c55e'}}/>
        <span>(01) — IT, billed monthly · Chennai → Pan-India</span>
      </div>

      <h1 style={{fontFamily:'"Fraunces",serif',fontWeight:400,fontSize:'clamp(4.5rem,14vw,14rem)',lineHeight:.92,margin:'40px 0',letterSpacing:'-0.045em',color:'#F5F2EC',position:'relative',zIndex:2}}>
        <span style={{display:'block'}}>Your team</span>
        <span style={{display:'block',fontStyle:'italic'}}>deserves better</span>
        <span style={{display:'block',background:'linear-gradient(90deg,#a5b4fc,#38bdf8,#f0abfc)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundSize:'200% 100%',animation:'shimmer 6s linear infinite'}}>hardware.</span>
        <style>{`@keyframes shimmer{0%{background-position:0 0}100%{background-position:200% 0}}`}</style>
      </h1>

      <div style={{position:'relative',zIndex:2,display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr',gap:40,alignItems:'end',borderTop:'1px solid rgba(245,242,236,.1)',paddingTop:32}}>
        <div style={{fontFamily:'"Fraunces",serif',fontSize:'1.2rem',color:'rgba(245,242,236,.78)',lineHeight:1.5,maxWidth:520}}>
          We put laptops, monitors, Wi-Fi and meeting-room kit in your office — and one clean monthly invoice in your inbox. No capex. No IT team required.
        </div>
        <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.25em',color:'rgba(245,242,236,.55)',textTransform:'uppercase'}}>
          <div style={{marginBottom:6}}>Sectors</div>
          <div style={{fontSize:13,letterSpacing:'.12em',color:'#F5F2EC'}}>Startups · Studios · SMEs</div>
        </div>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <a href="#contact" style={{display:'inline-flex',alignItems:'center',gap:14,padding:'18px 26px',borderRadius:9999,background:'#F5F2EC',color:'#0A0A0B',fontFamily:'"Inter",sans-serif',fontSize:12,letterSpacing:'.25em',textTransform:'uppercase',textDecoration:'none',fontWeight:500}}>Request a setup <span style={{fontFamily:'"Fraunces",serif',fontStyle:'italic',textTransform:'none',fontSize:16,letterSpacing:0}}>→</span></a>
        </div>
      </div>
    </section>
  );
};
