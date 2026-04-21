window.ServicesIndex = function ServicesIndex() {
  const rows = [
    ['01','Device-as-a-Service','MacBooks, ThinkPads, Latitudes — delivered configured, replaced when they break, upgraded when you grow'],
    ['02','Office Networking','Mesh Wi-Fi, switches, firewall, cabling — designed, installed and monitored by us'],
    ['03','Meeting Rooms & AV','Displays, conference cams, mics, room booking — end-to-end AV that actually works'],
    ['04','Managed IT Support','A help-desk number your team can call, plus on-site visits across Tamil Nadu and major metros'],
  ];
  const [hover,setHover]=React.useState(null);
  return (
    <section id="solutions" style={{padding:'120px 40px',borderBottom:'1px solid rgba(245,242,236,.08)'}}>
      <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.3em',color:'rgba(245,242,236,.55)',textTransform:'uppercase',marginBottom:80}}>(03) What's in your monthly invoice</div>
      {rows.map(([n,t,d],i)=>(
        <div key={n} onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)} style={{display:'grid',gridTemplateColumns:'80px 1fr 2fr 60px',alignItems:'center',padding:'38px 0',borderTop:'1px solid rgba(245,242,236,.12)',cursor:'pointer',transition:'.4s',background:hover===i?'linear-gradient(90deg,rgba(99,102,241,.06),transparent)':'transparent'}}>
          <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.3em',color:'rgba(245,242,236,.55)'}}>{n}</div>
          <div style={{fontFamily:'"Fraunces",serif',fontSize:'clamp(2rem,4vw,3.5rem)',fontWeight:400,color:'#F5F2EC',letterSpacing:'-0.03em',fontStyle:hover===i?'italic':'normal',transition:'.4s',transform:hover===i?'translateX(12px)':'translateX(0)'}}>{t}</div>
          <div style={{fontFamily:'"Inter",sans-serif',fontSize:14,color:'rgba(245,242,236,.6)',lineHeight:1.5}}>{d}</div>
          <div style={{fontFamily:'"Fraunces",serif',fontSize:28,color:hover===i?'#6366f1':'rgba(245,242,236,.4)',transition:'.4s',textAlign:'right',transform:hover===i?'translateX(0)':'translateX(-10px)'}}>→</div>
        </div>
      ))}
      <div style={{borderTop:'1px solid rgba(245,242,236,.12)'}}/>
    </section>
  );
};
