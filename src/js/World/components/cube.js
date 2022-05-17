import { BoxBufferGeometry, Mesh, MeshBasicMaterial, Color } from 'three'

function createCube() {
  // Create a geometry
  const geometry = new BoxBufferGeometry(1, 1, 1)

  // Create a default (white) Basic material
  const material = new MeshBasicMaterial({ color: new Color(0xffffff) })

  // Create a Mesh containing the geometry and material
  const box = new Mesh(geometry, material)

  return box
}

export { createCube }
