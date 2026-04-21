window.PullQuote = function PullQuote() {
  return (
    <section style={{padding:'160px 10%',borderBottom:'1px solid rgba(245,242,236,.08)',textAlign:'center',position:'relative',overflow:'hidden'}}>
      <div aria-hidden style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 30% 40%, rgba(99,102,241,.14), transparent 50%), radial-gradient(circle at 70% 60%, rgba(14,165,233,.12), transparent 55%)',filter:'blur(60px)'}}/>
      <div style={{fontFamily:'"Fraunces",serif',fontStyle:'italic',fontSize:'clamp(1.8rem,3.4vw,3.2rem)',fontWeight:300,lineHeight:1.3,color:'#F5F2EC',letterSpacing:'-0.02em',position:'relative'}}>
        “We moved into our new office on a Monday morning. Laptops on desks, Wi-Fi covering every corner, the printer already on the network. It felt like magic — it was just GLS.”
      </div>
      <div style={{fontFamily:'"Inter",sans-serif',fontSize:11,letterSpacing:'.3em',color:'rgba(245,242,236,.5)',textTransform:'uppercase',marginTop:40,position:'relative'}}>Priya M. — Operations, Nimbus Studio</div>
    </section>
  );
};
