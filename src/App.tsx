import { useEffect, useState } from "react";
import "./App.css";
import { GithubLogo } from "./GithubLogo";
import { YoutubeEmbed } from "./YoutubeEmbed";

function App() {
  const [logoWasClicked, setLogoWasClicked] = useState(false);
  const handleLogoClick = () => {
    if (!logoWasClicked) {
      alert("You clicked the logo!");
      setLogoWasClicked(true);
    } else {
      alert("You clicked the logo again, you must be some kind of badass!");
    }
  };

  const handleButtonClick = () => {
    // redirect to github url
    window.location.href = "https://github.com/sebastiancarlos/manpdf";
  };

  // When an element with class "animateOnViewport" enters the viewport, toggle simple animation
  // by adding the class "inViewport" to the element.
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("inViewport", entry.isIntersecting);
      });
    });
    document.querySelectorAll(".animateOnViewport").forEach((el) => {
      observer.observe(el);
    });
  });

  const scrollToSection = (scrollTo: "features" | "endorsement") => {
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <section className="main">
        <div className="background-image" />
        <div className="background-blur" />
        <div className="logo animateOnViewport">
          <img
            onClick={handleLogoClick}
            src="man-pdf.webp"
            alt="man-pdf"
            className="man-pdf"
          />
        </div>
        <h1>ManPDF</h1>
        <GithubLogo />
        <h2 className="gradient-text animateOnViewport">
          Read Man Pages On PDF <br />
          Right From Your Terminal
        </h2>
        <div className="button-container animateOnViewport">
          <button className="main" onClick={() => scrollToSection("features")}>
            Get Started
          </button>
          <button onClick={() => scrollToSection("endorsement")}>
            Why ManPDF?
          </button>
        </div>
      </section>
      <section id="features">
        <h3 className="gradient-text animateOnViewport">Give your man page a manicure <span className="inline-icon" >💅🏻</span></h3>
        <p className="animateOnViewport">
          It's time for a new beginning in man pages for the entire UNIX ecosystem. Man pages are viewed over 3 billion times per day. It's become an integral part of computing. But it's time to go all-in on PDF. <span className="inline-icon" >🚀</span>
        </p>
        <YoutubeEmbed embedId="9M0-506_dF4"/>
        <div className="box-container animateOnViewport">
          <div className="box animateOnViewport">
            <img className="icon animateOnViewport" src="bars-icon.svg" />
            <h3>Higher quality</h3>
            <p>
              Let's face it, if it's good enough for print, it's good enough for you.
              PDFs are just easier to read, trust me bro. No monospace except for the code parts.
            </p>
          </div>
          <div className="box animateOnViewport">
            <img className="icon animateOnViewport" src="ecosystem-icon.svg" />
            <h3>Ecosystem-friendly</h3>
            <p>
              Cross-platform support is a must. It works with every man page
              implementation, including mandoc, man-db, and that old non-GPL version on macOS.
            </p>
          </div>
          <div className="box animateOnViewport">
            <img className="icon animateOnViewport" src="lightning-icon.svg" />
            <h3>Blazingly Fast</h3>
            <p>
              ManPDF generates and opens the PDF in the same command.
              If you just want the PDF file, there's a flag. No one man should have all that power!
            </p>
          </div>
          <div className="box animateOnViewport">
            <img className="icon animateOnViewport" src="multi-icon.svg" />
            <h3>Powered by Groff/Troff</h3>
            <p>
              The wisdom of the UNIX ancients is alive at ManPDF. We use the
              oldest and fastest formatting software known to man to make your PDFs.
            </p>
          </div>
          <div className="box animateOnViewport">
            <img className="icon animateOnViewport" src="server-icon.svg" />
            <h3>Made with Bash</h3>
            <p>
              ManPDF uses the cross-platform standard for scripting. It's
              a single file, so you can easily modify it to your needs.
            </p>
          </div>
          <div className="box animateOnViewport">
            <img className="icon animateOnViewport" src="ecosystem-icon.svg" />
            <h3>PDF Compliant</h3>
            <p>
              ManPDF is compliant with PDF 1.7 and PDF 2.0.
              As specified by ISO 32000-2. Even Adobe would be impressed!
            </p>
          </div>
        </div>
      </section>
      <section id="endorsement">
        <h2 className="gradient-text animateOnViewport">
          Manifest Destiny
        </h2>
        <p className="animateOnViewport">
          Folks, as a former president who has always championed the importance of education, I am excited to endorse a remarkable open-source application called ManPDF. This wonderful tool allows users to view man pages as PDF files directly from their terminal, thus making it much easier to access and utilize the vast wealth of knowledge stored in these pages.
        </p>
        <p className="animateOnViewport">
          The creators of ManPDF have demonstrated a commitment to openness, collaboration, and accessibility. By developing this open-source software, they have not only made it available for everyone to use, but they are also providing an opportunity for other developers to contribute and improve it over time, just like the collective progress we strive for.
        </p>
        <p className="animateOnViewport">
          In today's fast-paced, ever-changing world, having access to accurate and concise information at our fingertips is more important than ever. ManPDF is a shining example of the innovation, resourcefulness, and determination that has shaped our world.
        </p>
        <div className="signature animateOnViewport">
          <div className="image-container">
            <img src="obama.webp" alt="obama" />
          </div>
          <div className="name-container">
            <img
              className="pen"
              src="obama-signature.svg"
              alt="obama signature"
            />
            <p className="name">
              Barack Obama
              <span className="title">44th President of the United States</span>
            </p>
          </div>
        </div>
        <button className="main animateOnViewport" onClick={handleButtonClick}>
          Get ManPDF
        </button>
      </section>
      <section className="footer">
        <div className="logo">
          <img
            onClick={handleLogoClick}
            src="man-pdf.webp"
            alt="man-pdf"
            className="man-pdf"
          />
        </div>
        <p className="copyright">© 2023 ManPDF, Inc. All rights reserved.</p>
      </section>
    </div>
  );
}

export default App;
