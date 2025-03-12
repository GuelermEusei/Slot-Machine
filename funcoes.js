function AlienSelector() {
    const Aliens = ["Heatblast", "Wildmutt", "Diamondhead", "XLR8", "Grey Matter", "Four Arms", "Stinkfly", "Ripjaws", "Upgrade", "Ghostfreak", "Cannonbolt", "Wildvine", "Blitzwolfer", "Snare-oh", "Frankenstrike", "Upchuck", "Ditto", "Eye Guy", "Way Big", "Spitter", "Arctiguana", "Buzzshock", "Swampfire", "Echo Echo", "Humungousaur", "Jetray", "Big Chill", "Chromastone", "Brainstorm", "Spider Monkey", "Goop", "Alien X", "Lodestar", "Rath", "Nanomech", "Water Hazard", "Ampfibian", "Armodrillo", "Terraspin", "NRG", "Fasttrack", "Clockwork", "Chamalien", "Shocksquatch", "Eatle", "Jury Rigg", "Feedback", "Bloxx", "Gravattack", "Crash Hopper", "Ball Weevil", "Walkatrout", "Pesky Dust", "Molestache", "The Worst", "Kickin Hawk", "Astrodactyl", "Surge", "Gax", "Shock-Rock", "Overflow"]

    const Quantity = Aliens.length

    let Spin = Aliens[Math.floor(Math.random() * Quantity)]

    const linha = document.getElementById('AlienResult');

    linha.innerText = Spin;

    console.log(Spin)
}