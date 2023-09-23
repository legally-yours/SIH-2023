import "../styles/SummaryShortcuts.css";
import ServiceIcon from "./ServiceIcon";
const SummaryShortcuts = () => {
  return (
    <section className="summary-shortcuts">
        <div className="summary"><h1>Discover Legal Services</h1>
        <p>Are you in need of legal assistance? Look no further! Legallyours is your one-stop destination to find a wide range of legal service providers, including advocates, arbitrators, mediators, notaries, and document writers. Our platform simplifies the process of connecting with experienced professionals who can address your specific legal needs.
</p><iframe className="chatbot"
      allow="microphone;"
      width="350"
      height="430"
      src="https://console.dialogflow.com/api-client/demo/embedded/70e4b56d-d946-4db8-ac0d-0287432d0787">
  </iframe></div>
<div className="shortcuts"><h1>Our services</h1>
<ServiceIcon></ServiceIcon>
<ServiceIcon></ServiceIcon>
<ServiceIcon></ServiceIcon>
<ServiceIcon></ServiceIcon>
</div>
    </section>
  )
}

export default SummaryShortcuts;