
const getGrid = () => {

  let grid = []

  for(let i = 0; i < mapHeight; i+=blockWidth) {

    for(let j = 0; j < mapWidth; j+=blockWidth) {

      // grid.push({ row: i , column: j })
      grid.push({ top: i, left: j })

    }

  }

  // console.log(grid)

  return grid

}

const   blockWidth  = 32
      , nbBlocks    = 50
      , map         = document.querySelector('.map')
      , mapWidth    = map.offsetWidth - (blockWidth * 2)
      , mapHeight   = map.offsetHeight - (blockWidth * 2)
      , nbColumns   = mapWidth / blockWidth
      , nbRows      = mapHeight / blockWidth

let grid = getGrid()

// console.log(mapWidth)
// console.log(mapHeight)
// console.log(nbColumns)
// console.log(nbRows)

const setBlocks = () => {

  let   length  = grid.length
      , html    = ``

  // console.log(grid)

  for(let i = 0; i < nbBlocks; i++) {

    const   index   = Math.floor(Math.random() * length)
          , random  = grid[index]

    grid[index].block = true

    // console.log(index)

    html += `<img class="brick" src="assets/brick.jpeg" style="top:${random.top}px;left:${random.left}px">`

  }

  map.insertAdjacentHTML('afterbegin', html)

}

const getCorners = () => {

  // let   width   = blockWidth * 3
  //     , height  = blockWidth * 3

  let corners = {

      topLeft:      grid[0]
    , topRight:     grid[nbColumns - 1]
    , bottomLeft:   grid[nbColumns * (nbRows - 1)]
    , bottomRight:  grid[(nbColumns * nbRows) - 1]

  }

  // console.log(corners)

  return corners

}

const setHumanPlayer = () => {

  const   corners   = getCorners()
        , corner    = corners[Object.keys(corners)[Math.floor(Math.random() * Object.keys(corners).length)]]
        , html      = `<img id="player" class="brick" src="assets/brick.jpg" style="top:${corner.top}px;left:${corner.left}px">`

  map.insertAdjacentHTML('afterbegin', html)

  const player = document.querySelector('#player')

  deplacements(player)

}


const deplacements = player => {

  const   maxRight    = map.offsetWidth - (blockWidth * 2)
        , maxBottom   = map.offsetHeight - (blockWidth * 2)

  document.addEventListener('keydown', e => {

    e.preventDefault();

    const keyCode = e.keyCode;

    switch(keyCode) {

      case 38:
        moveTop(player);
        break;

      case 39:
        moveRight(player, maxRight);
        break;

      case 40:
        moveBottom(player, maxBottom);
        break;

      case 37:
        moveLeft(player);
        break;

      default: return false;

    }

  })

}

const moveTop = player => { //console.log(player)

  const   currentTop    = player.offsetTop
        , currentLeft   = player.offsetLeft
        , next          = nextBlock({ top: currentTop, left: currentLeft - blockWidth })

  console.log(currentTop)
  console.log(currentLeft)
  console.log(next)

  if(!next.hasOwnProperty('block'))
    if(currentTop !== blockWidth)
      return player.style.top = `${currentTop - (blockWidth * 2)}px`;

  return false;

  // const currentTop = player.offsetTop
  //
  // if(currentTop !== blockWidth)
  //   return player.style.top = `${currentTop - (blockWidth * 2)}px`
  //
  // return false;

}

const moveRight = (player, maxRight) => { //console.log(player)

  const currentLeft = player.offsetLeft

  if(currentLeft !== maxRight)
    return player.style.left = `${currentLeft}px`;

  return false;

}

const nextBlock = obj => {

  const length = grid.length

  for(let i = 0; i < length; i++) {

    let item = grid[i]

    if(item.top === obj.top && item.left === obj.left)
      return grid[i]

  }

  return false

}

const moveBottom = (player, maxBottom) => { //console.log(player)

  const   currentTop    = player.offsetTop
        , currentLeft   = player.offsetLeft
        , next          = nextBlock({ top: currentTop, left: currentLeft - blockWidth })

  if(!next.hasOwnProperty('block'))
    if(currentTop !== maxBottom)
      return player.style.top = `${currentTop}px`;

  return false;

}

const moveLeft = player => { //console.log(player)

  const currentLeft = player.offsetLeft

  if(currentLeft !== blockWidth)
    return player.style.left = `${currentLeft - (blockWidth * 2)}px`

  return false;

}

const init = function() {

  setHumanPlayer()
  setBlocks()

}()
