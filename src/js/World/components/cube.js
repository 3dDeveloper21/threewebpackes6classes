import { BoxBufferGeometry, Mesh, MeshBasicMaterial, Color } from 'three'

let box;
// Move 30degrees per second
const radiansPerSecond = 30 * (Math.PI / 180);
console.log(radiansPerSecond)

function createCube() {
  // Create a geometry
  const geometry = new BoxBufferGeometry(1, 1, 1)

  // Create a default (white) Basic material
  const material = new MeshBasicMaterial({ color: new Color(0xffffff) })

  // Create a Mesh containing the geometry and material
  box = new Mesh(geometry, material)

  return box
}

let cubeTick = {
  tick: (delta)=>{
      box.rotation.z += radiansPerSecond * delta;
      box.rotation.x += radiansPerSecond * delta;
      box.rotation.y += radiansPerSecond * delta;
    }
}

// function cubeTick(){
//   // Increase the cube's rotation 
//   box.rotation.z += 0.01;
//   box.rotation.x += 0.01;
//   box.rotation.y += 0.01;
// }

export { createCube, cubeTick }
