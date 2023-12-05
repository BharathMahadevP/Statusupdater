function createImage() {
    const status1 = document.querySelector(".status1");

    // Create a new XMLSerializer
    const serializer = new XMLSerializer();
    // Serialize the HTML content of the element
    const source = serializer.serializeToString(status1);

    // Create a new DOMParser
    const parser = new DOMParser();
    // Parse the serialized HTML back into a DOM document
    const doc = parser.parseFromString(source, "image/svg+xml");

    // Create a new Blob with the SVG content
    const blob = new Blob([source], { type: "image/svg+xml" });
    
    // Create a data URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an image element
    const img = new Image();
    // Set the source of the image to the data URL
    img.src = url;

    // Set the image as the content of the button
    const button = document.querySelector("button");
    button.innerHTML = "";
    button.appendChild(img);
  }