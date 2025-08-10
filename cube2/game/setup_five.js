
Module.setPlayerModels = function() {
  JumpstartGunner.setPlayerModelInfo("snoutx10k", "snoutx10k", "snoutx10k", "snoutx10k/hudguns", 0, 0, 0, 0, 0, "snoutx10k", "snoutx10k", "snoutx10k", true);
};

Module.tweakDetail = function() {
  JumpstartGunner.execute('fog 10000'); // disable fog
  JumpstartGunner.execute('maxdebris 10');
  JumpstartGunner.execute('glare 1');
  JumpstartGunner.execute('glarescale 1.75');
  JumpstartGunner.execute('blurglare 7');
};

Module.loadDefaultMap = function() {
  JumpstartGunner.execute('sleep 10 [ effic zoomout ; sleep 20000 [ addbot 50 ] ]');
};

