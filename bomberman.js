


const   cellWidth     = 40
      , nbBlocks      = 64
      , emptyRadius   = 3
      , map           = document.querySelector('.map')
      , mapWidth      = map.offsetWidth
      , mapHeight     = map.offsetHeight
      , nbColumns     = mapWidth / cellWidth
      , nbRows        = mapHeight / cellWidth
      , play          = document.querySelector('#play');

let timeout;

/**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
 > INIT
**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****/

play.addEventListener('click', e => {

  e.preventDefault();

  map.style.dislay = 'block';

  play.parentNode.removeChild(play);

  init()

})

const init = () => {

  setSound();
  setContours();
  setBlocks();
  setPlayers();

}


/**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
 > SOUNDS
**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****/

const setSound = () => new Audio(`assets/sounds/${getSound()}.wav`).play()

const getSound = () => {

  const sounds = [

      'xp'
    , 'vista'

  ];

  return sounds[Math.floor(Math.random() * sounds.length)];

}


/**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
 > CONTOURS
**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****/

const setContours = () => {

  const contour = `assets/cli.png`;

  let html = ``;

  for(let i = 0; i < mapWidth; i += cellWidth) {

    // top
    html += `<img class="cell" src="${contour}" style="top:-${cellWidth}px;left:${i}px">`;

    // bottom
    html += `<img class="cell" src="${contour}" style="top:${mapHeight}px;left:${i}px">`;

  }

  for(let i = -cellWidth; i < mapHeight + cellWidth; i += cellWidth) {

    // left
    html += `<img class="cell" src="${contour}" style="top:${i}px;left:-${cellWidth}px">`;

    // right
    html += `<img class="cell" src="${contour}" style="top:${i}px;left:${mapWidth}px">`;

  }

  map.insertAdjacentHTML('afterbegin', html);

}


/**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
 > BLOCKS
**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****/

const setBlocks = () => {

  const   indexes   = getRandomIndexes(grid, nbBlocks)
        , length    = indexes.length
        , textures  = ['excel', 'powerpoint', 'store', 'word'];

  let html = ``;

  for(let i = 0; i < length; i++) {

    let   index   = indexes[i]
        , cell    = grid[index]
        , texture = textures[Math.floor(Math.random() * textures.length)];

    cell.block = true;

    html += `<img id="block-${index}" class="cell" src="assets/${texture}.png" style="top:${cell.top}px;left:${cell.left}px">`;

  }

  map.insertAdjacentHTML('afterbegin', html);

}

const getRandomIndexes = (arr, nb) => {

  const   length  = arr.length
        , empty   = getRadius(emptyRadius);

  let indexes = [];

  for(let i = 0; i < nb; i++) {

    const index = Math.floor(Math.random() * length);

    if(!empty.includes(index))
      if(!indexes.includes(index))
        indexes.push(index);

  }

  return indexes;

}

const getRadius = nb => {

  let   startLines  = []
      , endLines    = []
      , empty       = [];

  for(let i = 0; i < nb; i++) {

    startLines.push(nbColumns * i);
    endLines.push((nbColumns * nbRows) - (nbColumns * (i + 1)));

  }

  for(let i = 0; i < nb; i++) {

    for(let j = 0; j < nb; j++) {

      empty.push(startLines[i] + j);
      empty.push(startLines[i] + nbColumns - 1 - j);
      empty.push(endLines[i] + j);
      empty.push(endLines[i] + nbColumns - 1 - j);

    }

  }

  return empty;

}


/**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
 > PLAYERS
**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****/

const setPlayers = () => {

  const   corners       = getCorners()
        , cornerPlayer  = corners[Object.keys(corners)[Math.floor(Math.random() * Object.keys(corners).length)]];

  let cornerEnemy;

  do {

    cornerEnemy = corners[Object.keys(corners)[Math.floor(Math.random() * Object.keys(corners).length)]];

  } while(cornerPlayer == cornerEnemy)

  const html = `

          <img id="player" class="cell" src="assets/tux.png" style="top:${cornerPlayer.top}px;left:${cornerPlayer.left}px">
          <img id="enemy" class="cell" src="assets/windows.png" style="top:${cornerEnemy.top}px;left:${cornerEnemy.left}px">

        `;

  map.insertAdjacentHTML('afterbegin', html);

  document.addEventListener('keydown', checkMoves, true)
  loopEnemy();

}

const getCorners = () => {

  return {

      topLeft:      grid[0]
    , topRight:     grid[nbColumns - 1]
    , bottomLeft:   grid[nbColumns * (nbRows - 1)]
    , bottomRight:  grid[(nbColumns * nbRows) - 1]

  }

}


/**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
 > HUMAN
**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****/

const checkMoves = e => {

  const   player      = document.querySelector('#player')
        , maxRight    = mapWidth - cellWidth
        , maxBottom   = mapHeight - cellWidth;

  e.preventDefault();

  const keyCode = e.keyCode;

  switch(keyCode) {

    case 32:
      setBomb(player);
      break;

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

}

const moveTop = player => {

  const   currentTop  = player.offsetTop
        , next        = nextBlock(player, 'top');

  if(!next.hasOwnProperty('block')) {

    checkEnemyCollision();

    if(currentTop !== 0) {

      player.style.top = `${currentTop - cellWidth}px`;

      if(next.hasOwnProperty('fire'))
        return displayEnd('Windows');

    }

  }

  return false;

}

const moveRight = (player, maxRight) => {

  const   currentLeft = player.offsetLeft
        , next        = nextBlock(player, 'right');

  if(!next.hasOwnProperty('block')) {

    checkEnemyCollision();

    if(currentLeft !== maxRight) {

      player.style.left = `${currentLeft + cellWidth}px`;

      if(next.hasOwnProperty('fire'))
        return displayEnd('Windows');

    }

  }

  return false;

}

const moveBottom = (player, maxBottom) => {

  const   currentTop  = player.offsetTop
        , next        = nextBlock(player, 'bottom');

  if(!next.hasOwnProperty('block')) {

    checkEnemyCollision();

    if(currentTop !== maxBottom) {

      player.style.top = `${currentTop + cellWidth}px`;

      if(next.hasOwnProperty('fire'))
        return displayEnd('Windows');

    }

  }

  return false;

}

const moveLeft = player => {

  const   currentLeft = player.offsetLeft
        , next        = nextBlock(player, 'left');

  if(!next.hasOwnProperty('block')) {

    checkEnemyCollision();

    if(currentLeft !== 0) {

      player.style.left = `${currentLeft - cellWidth}px`;

      if(next.hasOwnProperty('fire'))
        return displayEnd('Windows');

    }

  }

  return false;

}

const setBomb = player => {

  if(!document.querySelector('.bomb')) {

    const   left          = player.offsetLeft
          , currentCell   = getCurrentCell(player)
          , topCell       = currentCell - nbColumns
          , rightCell     = currentCell + 1
          , bottomCell    = currentCell + nbColumns
          , leftCell      = currentCell - 1
          , aroundCells   = [ topCell, rightCell, bottomCell, leftCell ]
          , filtered      = aroundCells.filter(cell => cell > 0 && cell < grid.length)
          , borders       = getBorders()
          , fire          = getFire(left, filtered, getBorders())
          , htmlBomb      = `<img class="bomb" src="assets/bomb.png" style="top:${player.offsetTop};left:${left}">`;

    map.insertAdjacentHTML('afterbegin', htmlBomb);

    setTimeout(() => {

      const   bomb  = document.querySelector('.bomb')
            , boom  = `<img class="boom" src="assets/boom.png" style="top:${bomb.offsetTop};left:${bomb.offsetLeft}">`;

      bomb.parentNode.removeChild(bomb);
      map.insertAdjacentHTML('afterbegin', boom);
      map.insertAdjacentHTML('afterbegin', fire);

      makeExplosion(filtered);
      filtered.push(currentCell);
      checkOnFire(filtered);

    }, 1024)

  }

}

const getBorders = () => {

  let     leftBorders   = []
        , rightBorders  = []
        , length        = grid.length;

  for(let i = 0; i < length; i += nbColumns) {

    leftBorders.push(i - 1);
    rightBorders.push(i);

  }

  return { left: leftBorders, right: rightBorders };

}

const getFire = (left, filtered, borders) => {

  let   length  = filtered.length
      , fire    = ``;

  for(let i = 0; i < length; i++) {

    const cell = grid[filtered[i]];

    if(left < cellWidth * 2) {

      if(!borders.left.includes(filtered[i]))
        fire += `<img class="boom" src="assets/boom.png" style="top:${cell.top};left:${cell.left}">`;

    } else {

      if(!borders.right.includes(filtered[i]))
        fire += `<img class="boom" src="assets/boom.png" style="top:${cell.top};left:${cell.left}">`;

    }

  }

  return fire;

}

const makeExplosion = cells => {

  const length = cells.length;

  for(let i = 0; i < length; i++) {

    const cell = grid[cells[i]];

    cell.fire = true;

    if(cell.hasOwnProperty('block')) {

      delete cell.block;

      let block = document.getElementById(`block-${cells[i]}`);

      block.parentNode.removeChild(block);

    }

  }

  setTimeout(() => {

    const   booms   = document.querySelectorAll('.boom')
          , length  = booms.length;

    for(let i = 0; i < length; i++) {

      delete grid[cells[i]].fire;
      booms[i].parentNode.removeChild(booms[i]);

    }

  }, 400)

}


/**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
 > ENEMY
**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****/

const loopEnemy = () => {

  timeout = setTimeout(() => {

    moveEnemy();
    loopEnemy();

  }, randomTiming())

}

const moveEnemy = () => {

  const   enemy             = document.querySelector('#enemy')
        , maxRight          = mapWidth - cellWidth
        , maxBottom         = mapHeight - cellWidth
        , currentTop        = enemy.offsetTop
        , currentLeft       = enemy.offsetLeft
        , direction         = ['top', 'bottom', 'left', 'right'][Math.floor(Math.random() * 4)]
        , next              = nextBlock(enemy, direction);

  if(!next.hasOwnProperty('block')) {

    checkPlayerCollision();

    switch(direction) {

      case 'top':
        if(currentTop !== 0) {

          enemy.style.top = `${currentTop - cellWidth}px`;

          if(next.hasOwnProperty('fire'))
            return displayEnd('Linux');

        }
        break;

      case 'right':
        if(currentLeft !== maxRight) {

          enemy.style.left = `${currentLeft + cellWidth}px`;

          if(next.hasOwnProperty('fire'))
            return displayEnd('Linux');

        }
        break;

      case 'bottom':
        if(currentTop !== maxBottom) {

          enemy.style.top = `${currentTop + cellWidth}px`;

          if(next.hasOwnProperty('fire'))
            return displayEnd('Linux');

        }
        break;

      case 'left':
        if(currentLeft !== 0) {

          enemy.style.left = `${currentLeft - cellWidth}px`;

          if(next.hasOwnProperty('fire'))
            return displayEnd('Linux');

        }
        break;

      default: return false;

    }

  }

}

const randomTiming = () => {

  const timings = [

      '50'
    , '100'
    , '150'
    , '200'
    , '250'
    , '300'
    , '350'
    , '400'
    // , '450'
    // , '500'
    // , '550'
    // , '600'
    // , '650'
    // , '700'
    // , '750'
    // , '800'

  ];

  return timings[Math.floor(Math.random() * timings.length)];

}

/**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
 > COMMON
**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****/

const getGrid = () => {

  let grid = [];

  for(let i = 0; i < mapHeight; i += cellWidth) {

    for(let j = 0; j < mapWidth; j += cellWidth) {

      grid.push({ top: i, left: j });

    }

  }

  return grid;

}

let grid = getGrid();

const nextBlock = (player, direction) => {

  const   top     = player.offsetTop
        , left    = player.offsetLeft
        , length  = grid.length;

  for(let i = 0; i < length; i++) {

    let item = grid[i];

    if(direction === 'top')
      if(item.top === top - cellWidth && item.left === left)
        return grid[i];

    if(direction === 'right')
      if(item.top === top && item.left === left + cellWidth)
        return grid[i];

    if(direction === 'bottom')
      if(item.top === top + cellWidth && item.left === left)
        return grid[i];

    if(direction === 'left')
      if(item.top === top && item.left === left - cellWidth)
        return grid[i];

  }

  return false;

}

const getCurrentCell = player => {

  const   top     = player.offsetTop
        , left    = player.offsetLeft
        , length  = grid.length;

  for(let i = 0; i < length; i++) {

    let item = grid[i];

    if(item.top === top && item.left === left)
      return i;

  }

  return false;

}

const checkPlayerCollision = () => {

  const   playerPosition  = getCurrentCell(document.querySelector('#player'))
        , enemyPosition   = getCurrentCell(document.querySelector('#enemy'));

  if(playerPosition === enemyPosition)
    return displayEnd('Linux');

  return false;

}

const checkEnemyCollision = () => {

  const   playerPosition  = getCurrentCell(document.querySelector('#player'))
        , enemyPosition   = getCurrentCell(document.querySelector('#enemy'));

  if(playerPosition === enemyPosition)
    return displayEnd('Windows');

  return false;

}

const checkOnFire = cells => {

  const   player  = document.querySelector('#player')
        , enemy   = document.querySelector('#enemy')
        , length  = cells.length;

  for(let i = 0; i < length; i++) {

    const   top   = grid[cells[i]].top
          , left  = grid[cells[i]].left;

    if(enemy.offsetTop === top && enemy.offsetLeft === left)
      return displayEnd('Linux');

    if(player.offsetTop === top && player.offsetLeft === left)
      return displayEnd('Windows');

  }

}

const displayEnd = winner => {

  clearTimeout(timeout)
  document.removeEventListener('keydown', checkMoves, true)

  const   player  = document.querySelector('#player')
        , enemy   = document.querySelector('#enemy')
        , img     = winner === 'Linux' ? 'tux' : 'windows'

  img === 'tux' ?
    player.parentNode.removeChild(player)
  :
    enemy.parentNode.removeChild(enemy)

  const modal = `

    <div id="modal">
      <div class="content-modal">
        <div class="winner">
          <img class="i-winner" src="assets/${img}.png">
          <p>Win</p>
        </div>
        <button id="replay">Replay</button>
      </div>
    </div>

  `

  document.body.insertAdjacentHTML('afterbegin', modal)

  eventReplay()

}

const eventReplay = () => {

  document.querySelector('#replay').addEventListener('click', e => {

    document.location.reload(true)

  })

}
