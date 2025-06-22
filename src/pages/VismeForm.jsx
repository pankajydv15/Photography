import { useEffect } from "react";

const VismeForm = () => {
  useEffect(() => {
    // Check if script is already added
    if (!document.querySelector("#visme-script")) {
      const script = document.createElement("script");
      script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      script.id = "visme-script";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="visme_d"
      data-title="Website Contact Form"
      data-url="ojoedod7-website-contact-form"
      data-domain="forms"
    //   data-full-page="true"
      data-min-height="600px"
      data-form-id="13573"
    ></div>
  );
};

export default VismeForm;
