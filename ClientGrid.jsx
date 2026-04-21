window.ClientGrid = function ClientGrid() {
  const clients = [
    ['Nimbus Studio','Design agency · 14 seats'],
    ['Quill & Co.','Legal practice · 8 seats'],
    ['Harbor Clinic','Dental group · 6 locations'],
    ['Patel Textiles','SME · 22 seats + warehouse Wi-Fi'],
    ['Kettle Coffee','Café chain · 9 branches POS'],
    ['North Wing Films','Post-production · 12 workstations'],
  ];
  return (
    <section id="clients" style={{padding:'120px 40px',borderBottom:'1px solid rgba(245,242,236,.08)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:64}}>
        <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.3em',color:'rgba(245,242,236,.55)',textTransform:'uppercase'}}>(04) A few people we look after</div>
        <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.2em',color:'rgba(245,242,236,.4)'}}>Currently active · 2026</div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
        {clients.map(([n,d],i)=>(
          <div key={n} style={{padding:'56px 24px',borderTop:'1px solid rgba(245,242,236,.12)',borderLeft:i%3?'1px solid rgba(245,242,236,.12)':'none',position:'relative',overflow:'hidden'}}>
            <div style={{fontFamily:'"Fraunces",serif',fontSize:'1.8rem',color:'#F5F2EC',letterSpacing:'-0.02em'}}>{n}</div>
            <div style={{fontFamily:'"Inter",sans-serif',fontSize:12,letterSpacing:'.15em',color:'rgba(245,242,236,.45)',textTransform:'uppercase',marginTop:10}}>{d}</div>
          </div>
        ))}
      </div>
      <div style={{borderTop:'1px solid rgba(245,242,236,.12)'}}/>
    </section>
  );
};
