import { state } from '../state';

import { acrid } from './acrid';
import { aerial } from './aerial';
import { azure } from './azure';
import { bean } from './bean';
import { black } from './black';
import { comet } from './comet';
import { corsair } from './corsair';
import { dash } from './dash';
import { deco } from './deco';
import { earthquake } from './earthquake';
import { funkadelic } from './funkadelic';
import { grimm } from './grimm';
import { hive } from './hive';
import { hypnos } from './hypnos';
import { infrared } from './infrared';
import { kapow } from './kapow';
import { koto } from './koto';
import { lex } from './lex';
import { macaroon } from './macaroon';
import { marker } from './marker';
import { midnight } from './midnight';
import { mint } from './mint';
import { nighttab } from './nighttab';
import { nord } from './nord';
import { obsidian } from './obsidian';
import { origin } from './origin';
import { outrun } from './outrun';
import { pepper } from './pepper';
import { pumpkin } from './pumpkin';
import { replica } from './replica';
import { rumble } from './rumble';
import { savage } from './savage';
import { scoria } from './scoria';
import { snow } from './snow';
import { sol } from './sol';
import { steel } from './steel';
import { stria } from './stria';
import { terra } from './terra';
import { trine } from './trine';
import { vanadium } from './vanadium';
import { viper } from './viper';
import { white } from './white';

const themePreset = {};

themePreset.get = () => {
  return [
    nighttab,
    black,
    white,
    acrid,
    aerial,
    azure,
    bean,
    comet,
    corsair,
    dash,
    deco,
    earthquake,
    funkadelic,
    grimm,
    hive,
    hypnos,
    infrared,
    kapow,
    koto,
    lex,
    macaroon,
    marker,
    midnight,
    mint,
    nord,
    obsidian,
    origin,
    outrun,
    pepper,
    pumpkin,
    replica,
    rumble,
    savage,
    scoria,
    snow,
    sol,
    steel,
    stria,
    terra,
    trine,
    vanadium,
    viper
  ];
};

export { themePreset };
