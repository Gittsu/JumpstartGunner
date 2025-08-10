
Module.setPlayerModels = function() {
  JumpstartGunner.setPlayerModelInfo("snoutx10k", "snoutx10k", "snoutx10k", "snoutx10k/hudguns", 0, 0, 0, 0, 0, "snoutx10k", "snoutx10k", "snoutx10k", true);
};

Module.autoexec = function() {
  JumpstartGunner.execute('aniso 16');
};

Module.tweakDetail = function() {
  JumpstartGunner.execute('maxdebris 25');
  JumpstartGunner.execute('glare 1');
  JumpstartGunner.execute('glarescale 1.75');
  JumpstartGunner.execute('blurglare 7');
  JumpstartGunner.execute('waterreflect 1');
  JumpstartGunner.execute('waterrefract 1');
};

Module.loadDefaultMap = function() {
  JumpstartGunner.execute('sleep 10 [ effic zoom ]');
};

