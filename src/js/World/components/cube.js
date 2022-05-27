import { BoxBufferGeometry, Mesh, MeshStandardMaterial, TextureLoader } from 'three'
import textureBW from '../../../Assets/textures/uv-test-bw.png'

let box
// Move 30degrees per second
const radiansPerSecond = 30 * (Math.PI / 180)

const SPEC = {
  color: 'purple',
}

function createMaterial() {
  const textureLoader = new TextureLoader()

  const texture = textureLoader.load(textureBW)

  const material = new MeshStandardMaterial({
    map: texture,
  })

  return material
}

function createCube() {
  // Create a geometry
  const geometry = new BoxBufferGeometry(1, 1, 1)

  const material = createMaterial()

  // Create a Mesh containing the geometry and material
  box = new Mesh(geometry, material)

  return box
}

let cubeTick = {
  tick: (delta) => {
    box.rotation.z += radiansPerSecond * delta
    box.rotation.x += radiansPerSecond * delta
    box.rotation.y += radiansPerSecond * delta
  },
}

// function cubeTick(){
//   // Increase the cube's rotation
//   box.rotation.z += 0.01;
//   box.rotation.x += 0.01;
//   box.rotation.y += 0.01;
// }

export { createCube, cubeTick }
