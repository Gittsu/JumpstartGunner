
Module.setPlayerModels = function() {
  JumpstartGunner.setPlayerModelInfo("snoutx10k", "snoutx10k", "snoutx10k", "snoutx10k/hudguns", 0, 0, 0, 0, 0, "snoutx10k", "snoutx10k", "snoutx10k", true);
};

Module.tweakDetail = function() {
  JumpstartGunner.execute('maxdebris 10');
  JumpstartGunner.execute('glare 1');
};

Module.loadDefaultMap = function() {
  JumpstartGunner.execute('sleep 10 [ effic cyber1 ; sleep 20000 [ addbot 50 ] ]');
};

