This application is a prototype to bridge the gap between a UX designer and a UI developer. This gap is created by disconnected tools used by the UX designers and the UI developers. UX designers use tools like Sketch to create designs and InVision to share the designs with the teams. The UI developers use tools like Visual Studio, Atom, Sublime, WebStorm etc to write their UI code.

Tools like InVision have Inspect Mode that lets you select any layer in the design and inspect their CSS. The typical workflow for a UI developer is to use this Inspect Mode to copy and paste the CSS from InVision to their application code. Due to errors with copy-paste, forgetting to add certain CSS properties leads to differences between the created UI and the design.

This application along with the companion skeleton web service remove the burden of manually inspecting the CSS from tools like InVision and copy pasting the CSS into the UI code by parsing the SketchApp file (.sketch extension) and its content and generating an intermediate element language JSON. This intermediate element language JSON has representation of the HTML structure based on the layers in the Sketch file with the CSS applied from the Sketch file. The application uses this JSON to generate a React component with the HTML structure and the CSS thus forming a working skeleton component based on design.

### Todo list

- Add ability to upload a SketchApp file.
- Add ability to expand the SketchApp file into its constituent JSON documents.
- Make the component creation a plugin architecture. The current supported component is React based. In the future we should be able to add plugins that can create Angular, Vue or pure HTML/CSS based components.
- Add parsing rules for interpreting the Sketch file layers e.g. Artboard maps to a div, ShapeGroup maps to a div etc.
- Add support for multiple Artboards, currently only a single Artboard is supported.