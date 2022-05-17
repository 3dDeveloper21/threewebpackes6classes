import { World } from './js/World/World'
import '@/styles/index.scss'

// Create the main function
function main() {
  const SIZES = { width: window.innerWidth, height: window.innerHeight }
  const container = document.querySelector('#scene-container')
  const world = new World(container, SIZES)
  world.render()
}

main()
