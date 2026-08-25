function About() {
  const attacks = [
    {
      name: "Normal",
      desc: "Legitimate network activity."
    },
    {
      name: "Flooding",
      desc: "Excessive packets causing resource exhaustion."
    },
    {
      name: "Blackhole",
      desc: "Malicious node drops packets."
    },
    {
      name: "Grayhole",
      desc: "Node selectively drops packets."
    },
    {
      name: "TDMA",
      desc: "Manipulation of TDMA scheduling."
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Attack Information</h1>

      {attacks.map((a) => (
        <div key={a.name}>
          <h3>{a.name}</h3>
          <p>{a.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default About;