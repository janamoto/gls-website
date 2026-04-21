window.Marquee = function Marquee() {
  const items = ['No capex','One monthly invoice','Same-week delivery','Dell · HP · Lenovo · Apple','Monitors & docks','Wi-Fi that works','On-site support','GST compliant','Swap when it breaks'];
  const row = items.concat(items).concat(items);
  return (
    <div style={{borderTop:'1px solid rgba(245,242,236,.12)',borderBottom:'1px solid rgba(245,242,236,.12)',padding:'28px 0',overflow:'hidden',whiteSpace:'nowrap',background:'linear-gradient(180deg,rgba(99,102,241,.04),transparent)'}}>
      <div style={{display:'inline-block',animation:'marquee 45s linear infinite'}}>
        {row.map((t,i)=>(
          <span key={i} style={{fontFamily:'"Fraunces",serif',fontStyle:'italic',fontSize:'3rem',color:i%2?'#6366f1':'#F5F2EC',margin:'0 32px',letterSpacing:'-0.02em'}}>{t} <span style={{color:'rgba(245,242,236,.28)'}}>✦</span></span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-33.33%)}}`}</style>
    </div>
  );
};
