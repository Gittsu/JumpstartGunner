
Module.setPlayerModels = function() {
  //JumpstartGunner.setPlayerModelInfo("frankie", "frankie", "frankie", 0, "nada", 0, 0, 0, 0, "frankie", "frankie", "frankie", false);
  JumpstartGunner.setPlayerModelInfo("snoutx10k", "snoutx10k", "snoutx10k", "snoutx10k/hudguns", 0, 0, 0, 0, 0, "snoutx10k", "snoutx10k", "snoutx10k", true);
};

Module.tweakDetail = function() {
  JumpstartGunner.execute('fog 10000'); // disable fog
  JumpstartGunner.execute('maxdebris 10');
  if (Module.benchmark) {
    JumpstartGunner.execute('shaderdetail 1');
    JumpstartGunner.execute('maxdynlights 0');
  }
};

Module.loadDefaultMap = function() {
  if (Module.benchmark) {
    var bots = [];
    for (var i = 0; i < 30; i++) {
      bots.push('addbot ' + (i+50));
    }
    JumpstartGunner.execute('showfps 0 ; sleep 10 [ effic colos ; ' + bots.join(' ; ') + ' ]');
  } else {
    JumpstartGunner.execute('sleep 10 [ effic colos ; sleep 20000 [ addbot 50 ] ]');
  }
};

