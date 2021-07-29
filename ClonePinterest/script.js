const grids = document.querySelectorAll('.grid')
const headings = document.querySelectorAll('.heading .wrapper .text')

function enterScreen(index) {
    const grid = grids[index]
    const heading = headings[index]
    const gridColums = grid.querySelectorAll('.column')

    grid.classList.add('active')

    gridColums.forEach(element => {
        element.classList.remove('animate-before', 'animate-after')
    })

    heading.classList.remove('animate-before')
}
function exitScreen(index, exitDelay) {
    const grid = grids[index]
    const heading = headings[index]
    const gridColums = grid.querySelectorAll('.column')

    gridColums.forEach(element => {
        element.classList.add('animate-after')
    })

    heading.classList.add('animate-after')

    setTimeout(() => {
        grid.classList.remove('active')
    }, exitDelay)
}

function setupAnimationCycle({ timePerScreen, exitDelay }) {
    const cycleTime = timePerScreen + exitDelay;
    let nextIndex = 0;

    function nextCycle() {
        const indextCurrent = nextIndex

        enterScreen(indextCurrent)

        setTimeout(() => exitScreen(indextCurrent, exitDelay), timePerScreen)

        //1,2 3 e 4 - tem 4 telas para mostrar
        nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1
    }

    setInterval(nextCycle, cycleTime)
}

setupAnimationCycle({
    //initialScreenIndex: 0,
    timePerScreen: 2000, //2segundos
    exitDelay: 200 * 7
})