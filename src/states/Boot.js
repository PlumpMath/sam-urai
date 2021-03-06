import Phaser from 'phaser'

export default class extends Phaser.State {
  preload () {
    game.load.spritesheet('samurai', './assets/img/samurai.png', 80, 58)
    game.load.spritesheet('fireball', './assets/img/fireball.png')
    game.load.spritesheet('explosion', './assets/img/explosion.png', 32, 32)
  }

  create () {
    game.time.advancedTiming = true

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    game.stage.backgroundColor = '#fefefe'

    game.physics.startSystem(Phaser.Physics.ARCADE)

    game.__highscore = localStorage.getItem('__highscore')

    if (game.__highscore === null) {
      localStorage.setItem('__highscore', 0)
      game.__highScore = 0
    }

    game.state.start('Title')
  }
}
