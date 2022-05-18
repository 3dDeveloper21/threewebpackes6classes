import { createCamera } from './components/camera'
import { createCube, cubeTick } from './components/cube'
import { createScene } from './components/scene'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'
import { Loop } from './systems/Loop'

// These variables are module-scoped: we can not access them
// from outside the module
let camera, renderer, scene, loop

class World {
  constructor(container, sizes) {
    camera = createCamera(sizes)
    scene = createScene()
    renderer = createRenderer(container, sizes)
    loop = new Loop(camera, scene, renderer)

    const cube = createCube()

    loop.updatables.push(cubeTick);


    scene.add(cube)

    const resizer = new Resizer(camera, renderer, sizes)
  
  }

  render() {
    // Draw a single frame
    renderer.render(scene, camera)
  }

  start(){
    loop.start();
  }

  stop(){
    loop.stop();
  }
}

export { World }
