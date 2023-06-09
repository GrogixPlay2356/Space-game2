import { game } from '../../app.js';

import {
    BOMBS_NOTIFICATION,
    CLOCK_NOTIFICATION,
    DAMAGE_NOTIFICATION,
    BOMBS_PAUSE,
    CLOCK_PAUSE,
    DAMAGE_PAUSE,
    EMP_PAUSE,
    LOOPERS_PAUSE,
    METALSHIELD_PAUSE,
    NITROGEN_PAUSE,
    DARTS_PAUSE,
    ROCKET_PAUSE,
    SEEKERS_PAUSE,
    SPRAY_PAUSE,
    TIMEFREEZE_PAUSE,
    URANIUM_PAUSE,
    EMP_NOTIFICATION,
    BOMBS_ICON,
    CLOCK_ICON,
    DAMAGE_ICON,
    EMP_ICON,
    LOOPERS_ICON,
    METALSHIELD_ICON,
    NITROGEN_ICON,
    DARTS_ICON,
    ROCKET_ICON,
    SEEKERS_ICON,
    SPRAY_ICON,
    TIMEFREEZE_ICON,
    URANIUM_ICON,
    LOOPERS_NOTIFICATION,
    METALSHIELD_NOTIFICATION,
    NITROGEN_NOTIFICATION,
    DARTS_NOTIFICATION,
    ROCKET_NOTIFICATION,
    SEEKERS_NOTIFICATION,
    SPRAY_NOTIFICATION,
    TIMEFREEZE_NOTIFICATION,
    URANIUM_NOTIFICATION,
    GREED_ICON,
    GREED_PAUSE,
    GREED_NOTIFICATION,
    MACHINEGUN_ICON,
    MACHINEGUN_PAUSE,
    MACHINEGUN_NOTIFICATION,
    TOXIC_ICON,
    TOXIC_NOTIFICATION,
    TOXIC_PAUSE,
    AIRSTRIKE_ICON,
    AIRSTRIKE_PAUSE,
    AIRSTRIKE_NOTIFICATION,
    SHOTGUN_ICON,
    SHOTGUN_PAUSE,
    SHOTGUN_NOTIFICATION,
} from '../Assets/Hud.js';

export const ITEMS = {
    airstrike: {
        name: 'airstrike',
        activate: () => (game.itemactioncontroller.airstrike = true),
        icon: AIRSTRIKE_ICON,
        pause: AIRSTRIKE_PAUSE,
        notification: AIRSTRIKE_NOTIFICATION,
    },
    bomb: {
        name: 'bomb',
        activate: () => (game.itemactioncontroller.bomb = true),
        icon: BOMBS_ICON,
        pause: BOMBS_PAUSE,
        notification: BOMBS_NOTIFICATION,
    },
    clock: {
        name: 'clock',
        activate: () => (game.player.clock.owned = true),
        icon: CLOCK_ICON,
        pause: CLOCK_PAUSE,
        notification: CLOCK_NOTIFICATION,
    },
    darts: {
        name: 'darts',
        activate: () => (game.itemactioncontroller.darts = true),
        icon: DARTS_ICON,
        pause: DARTS_PAUSE,
        notification: DARTS_NOTIFICATION,
    },
    emp: {
        name: 'emp',
        activate: () => (game.itemactioncontroller.emp = true),
        icon: EMP_ICON,
        pause: EMP_PAUSE,
        notification: EMP_NOTIFICATION,
    },
    greed: {
        name: 'greed',
        activate: () => (game.itemactioncontroller.greed = true),
        icon: GREED_ICON,
        pause: GREED_PAUSE,
        notification: GREED_NOTIFICATION,
    },
    loopers: {
        name: 'loopers',
        activate: () => (game.itemactioncontroller.loopers = true),
        icon: LOOPERS_ICON,
        pause: LOOPERS_PAUSE,
        notification: LOOPERS_NOTIFICATION,
    },
    machinegun: {
        name: 'machinegun',
        activate: () => (game.itemactioncontroller.machinegun = true),
        icon: MACHINEGUN_ICON,
        pause: MACHINEGUN_PAUSE,
        notification: MACHINEGUN_NOTIFICATION,
    },
    metalshield: {
        name: 'metalshield',
        activate: () => (game.itemactioncontroller.metalshield = true),
        icon: METALSHIELD_ICON,
        pause: METALSHIELD_PAUSE,
        notification: METALSHIELD_NOTIFICATION,
    },
    multiplydamage: {
        name: 'multiplydamage',
        activate: () => game.itemactioncontroller.incrementDamageMultiplier(),
        icon: DAMAGE_ICON,
        pause: DAMAGE_PAUSE,
        notification: DAMAGE_NOTIFICATION,
    },
    nitrogen: {
        name: 'nitrogen',
        activate: () => (game.itemactioncontroller.nitrogen = true),
        icon: NITROGEN_ICON,
        pause: NITROGEN_PAUSE,
        notification: NITROGEN_NOTIFICATION,
    },
    rocket: {
        name: 'rocket',
        activate: () => (game.itemactioncontroller.rocket = true),
        icon: ROCKET_ICON,
        pause: ROCKET_PAUSE,
        notification: ROCKET_NOTIFICATION,
    },
    seekers: {
        name: 'seekers',
        activate: () => (game.itemactioncontroller.seekers = true),
        icon: SEEKERS_ICON,
        pause: SEEKERS_PAUSE,
        notification: SEEKERS_NOTIFICATION,
    },
    shotgun: {
        name: 'shotgun',
        activate: () => (game.player.shotgun.owned = true),
        icon: SHOTGUN_ICON,
        pause: SHOTGUN_PAUSE,
        notification: SHOTGUN_NOTIFICATION,
    },
    spray: {
        name: 'spray',
        activate: () => game.itemactioncontroller.spray++,
        icon: SPRAY_ICON,
        pause: SPRAY_PAUSE,
        notification: SPRAY_NOTIFICATION,
    },
    timefreeze: {
        name: 'timefreeze',
        activate: () => (game.slowmocontroller.slowmorate = 0.05),
        icon: TIMEFREEZE_ICON,
        pause: TIMEFREEZE_PAUSE,
        notification: TIMEFREEZE_NOTIFICATION,
    },
    toxic: {
        name: 'toxic',
        activate: () => (game.itemactioncontroller.toxic = true),
        icon: TOXIC_ICON,
        pause: TOXIC_PAUSE,
        notification: TOXIC_NOTIFICATION,
    },
    uranium: {
        name: 'uranium',
        activate: () => (game.itemactioncontroller.uranium = true),
        icon: URANIUM_ICON,
        pause: URANIUM_PAUSE,
        notification: URANIUM_NOTIFICATION,
    },
};
