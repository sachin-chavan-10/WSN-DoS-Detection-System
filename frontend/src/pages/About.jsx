function About() {

  const attacks = [
    {
      name: "Normal",
      risk: "Low",
      icon: "✅",
      desc: "Legitimate network activity where sensor nodes communicate normally without malicious behavior."
    },
    {
      name: "Flooding",
      risk: "Critical",
      icon: "🚨",
      desc: "An attacker sends excessive packets to overwhelm network resources, causing congestion and denial of service."
    },
    {
      name: "Blackhole",
      risk: "High",
      icon: "⚫",
      desc: "A malicious node advertises itself as a valid route and then drops all received packets."
    },
    {
      name: "Grayhole",
      risk: "Medium",
      icon: "⚠️",
      desc: "A compromised node selectively drops packets, making detection more difficult than Blackhole attacks."
    },
    {
      name: "TDMA",
      risk: "Medium",
      icon: "⏱️",
      desc: "An attacker manipulates TDMA scheduling information, disrupting communication among sensor nodes."
    }
  ];

  return (
    <div className="about-container">

      <div className="about-hero">

        <h1>🛡 Attack Information Center</h1>

        <p>
          Learn about the attack categories detected by the
          Wireless Sensor Network DoS Detection System.
        </p>

      </div>

      <div className="attack-grid">

        {attacks.map((attack) => (

          <div
            key={attack.name}
            className="attack-card"
          >

            <h2>
              {attack.icon} {attack.name}
            </h2>

            <span className="risk-tag">
              {attack.risk} Risk
            </span>

            <p>
              {attack.desc}
            </p>

          </div>

        ))}

      </div>

      <div className="info-card">

        <h2>About the Dataset</h2>

        <p>
          This project uses the WSN-DS dataset to train machine learning
          models capable of detecting Denial of Service attacks in
          Wireless Sensor Networks.
        </p>

        <p>
          The system classifies network behavior into five categories:
          Normal, Flooding, Blackhole, Grayhole, and TDMA attacks.
        </p>

      </div>

    </div>
  );
}

export default About;