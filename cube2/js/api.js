// TODO: make game-setup use this

var JumpstartGunner = {
  init: function() {
    JumpstartGunner.setPlayerModelInfo = Module.cwrap('_ZN4game18setplayermodelinfoEPKcS1_S1_S1_S1_S1_S1_S1_S1_S1_S1_S1_b', null,
      ['string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'number']);
    JumpstartGunner.execute = Module.cwrap('_Z7executePKc', 'number', ['string']);
    JumpstartGunner.executeString = Module.cwrap('_Z10executestrPKc', 'string', ['string']);

    var forceCamera = Module.cwrap('setforcecamera', null, ['number', 'number', 'number', 'number', 'number', 'number']);
    JumpstartGunner.forceCamera = function(position, orientation) {
      forceCamera(position[0], position[1], position[2], orientation[0], orientation[1], orientation[2]);
    };

    JumpstartGunner.PARTICLE = {};
    var i = 0;
    JumpstartGunner.PARTICLE.BLOOD = (i++);
    JumpstartGunner.PARTICLE.WATER = (i++);
    JumpstartGunner.PARTICLE.SMOKE = (i++);
    JumpstartGunner.PARTICLE.STEAM = (i++);
    JumpstartGunner.PARTICLE.FLAME = (i++);
    JumpstartGunner.PARTICLE.FIREBALL1 = (i++);
    JumpstartGunner.PARTICLE.FIREBALL2 = (i++);
    JumpstartGunner.PARTICLE.FIREBALL3 = (i++);
    JumpstartGunner.PARTICLE.STREAK = (i++);
    JumpstartGunner.PARTICLE.LIGHTNING = (i++);
    JumpstartGunner.PARTICLE.EXPLOSION = (i++);
    JumpstartGunner.PARTICLE.EXPLOSION_BLUE = (i++);
    JumpstartGunner.PARTICLE.SPARK = (i++);
    JumpstartGunner.PARTICLE.EDIT = (i++);
    JumpstartGunner.PARTICLE.SNOW = (i++);
    JumpstartGunner.PARTICLE.MUZZLE_FLASH1 = (i++);
    JumpstartGunner.PARTICLE.MUZZLE_FLASH2 = (i++);
    JumpstartGunner.PARTICLE.MUZZLE_FLASH3 = (i++);
    JumpstartGunner.PARTICLE.HUD_ICON = (i++);
    JumpstartGunner.PARTICLE.HUD_ICON_GREY = (i++);
    JumpstartGunner.PARTICLE.TEXT = (i++);
    JumpstartGunner.PARTICLE.METER = (i++);
    JumpstartGunner.PARTICLE.METER_VS = (i++);
    JumpstartGunner.PARTICLE.LENS_FLARE = (i++);
    var splash = Module.cwrap('bb_splash', null, ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number']);
    JumpstartGunner.splash = function(type, color, radius, num, fade, p, size, gravity) {
      splash(type, color, radius, num, fade, p[0], p[1], p[2], size, gravity);
    };

    var playSoundName = Module.cwrap('bb_playsoundname', null, ['string', 'number', 'number', 'number']);
    JumpstartGunner.playSound = function(name, position) {
      playSoundName(name, position[0], position[1], position[2]);
    };
  },
};

Module.postRun.push(JumpstartGunner.init);

