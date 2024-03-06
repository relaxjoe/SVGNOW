
const createSvg = (text, textColor, shape, shapeColor) => {
  let shapeSvg = '';
  switch (shape) {
    case 'circle':
      shapeSvg = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
      break;
    case 'triangle':
      shapeSvg = `<polygon points="150,20 280,180 20,180" fill="${shapeColor}" />`;
      break;
    case 'square':
      shapeSvg = `<rect x="50" y="50" width="200" height="100" fill="${shapeColor}" />`;
      break;
    default:
      console.log('Invalid shape');
      process.exit(1);
  }

const main = async () => {
  const text = await askQuestion("Enter up to three characters: ");
  const textColor = await askQuestion("Enter the text color (name or hex): ");
  const shape = await askQuestion("Choose a shape (circle, triangle, square): ");
  const shapeColor = await askQuestion("Enter the shape's color (name or hex): ");

  const svgContent = createSvg(text.substring(0, 3), textColor, shape, shapeColor);

main();
