// ---------------- 空洞骑士 Data Constant Objects ----------------- //
/*
    This is the whole database for the tool, based on the .json save file data
*/

const HK = {

  saveAnalyzed: false,

  sections: {

    /* ################ Intro ################### */

    intro: {
      h2: "游戏完成度",
      id: "hk-intro",

      percent: 0,
      maxPercent: 112,
      maxPercentDefault: 112,
      maxPercentBaseGame: 100,
      maxPercentGrimmTroupe: 106,
      maxPercentLifeblood: 107,

      extendedCompletionDone: 0,
      extendedCompletionTotal: 0,

      entries: {
        timePlayed: {
          id: "timePlayed",
          icon: "clock",
          name: "游戏时间:",
          spoiler: "0 h 00 min 00 sec",
          timeH: 0,
          timeM: 0,
          timeS: 0,
        },
        gameCompletion: {
          id: "gameCompletion",
          icon: "red",
          name: "游戏完成度:",
          spoiler: 0,
          spoilerAfter: "(out of 112 %)",
          spoilerAfterDefault: "(out of 112 %)",
          spoilerAfterBaseGame: "(out of 100 %)",
          spoilerAfterGrimmTroupe: "(out of 106 %)",
          spoilerAfterLifeblood: "(out of 107 %)",
        },
        gameCompletionExtended: {
          id: "gameCompletionExtended",
          icon: "red",
          name: "整体完成度:",
          spoiler: 0,
          spoilerAfter: " / 0 = <b>0.00 %</b>",
          spoilerAfterDefault: " / 0 = <b>0.00 %</b>",
        },
        saveVersion: {
          id: "saveVersion",
          icon: "none",
          name: "游戏版本:",
          spoiler: "0.0.0.0"
        },
        health: {
          id: "health",
          icon: "none",
          name: "生命值:",
          spoiler: "",
          amountTotal: 5,
          permadeathMode: false,
        },
        soul: {
          id: "soul",
          icon: "none",
          name: "灵魂:",
          spoiler: "",
          amountTotal: 99
        },
        notches: {
          id: "notches",
          icon: "none",
          name: "护符槽:",
          spoiler: "",
          amountTotal: 3,
          amountFilled: 0,
          amountUnused: 3,
          amountOvercharmed: 0
        },
        geo: {
          id: "geo",
          icon: "none",
          name: "吉欧:",
          spoiler: "",
          amount: 0,
          amountShade: 0,
          amountTotal: 0
        }
      },
    },

    /* ################ Hints ################### */

    hints: {
      h2: "虫长者曾经告诉我……",
      id: "hk-hints",
      current: "fireballLevel",
      entries: {
        fireballLevel: {
          spoiler: "一位神秘的萨满居住在某个地方，位于德特茅斯镇下方。"
        },
        hornet1Defeated: {
          spoiler: "一位技艺高超的守护者守护着茂密森林中的古老遗迹。"
        },
        hasDash: {
          spoiler: "一件旧斗篷躺在一条绿色小路上，旁边有一个破碎的贝壳。"
        },
        hasWalljump: {
          spoiler: "一只锋利的爪子被遗忘在某个地方，位于昆虫村庄之中。"
        },
        Crossroads_04: {
          spoiler: "一位母亲正在某个地方安详地沉睡，位于德特茅斯镇下方。"
        },
        slyRescued: {
          spoiler: "我们镇上的虫子朋友似乎迷路了，就在十字路口附近。"
        },
        hasLantern: {
          spoiler: "你知道吗？一个明亮的小水晶伙伴能够照亮最黑暗的地方。"
        },
        hasSuperDash: {
          spoiler: "矿井深处某个地方有一块强大的水晶在跳动。"
        },
        hasDreamNail: {
          spoiler: "一把来自梦境世界的武器只能在灵魂得以安息的地方找到。"
        },
        /*
        要么: 
        - 使用了休息之地的电梯前往泪水之城
        - 打开了真菌荒地的城门
        */
        killedInfectedKnight: {
          spoiler: "一具破碎的尸体被遗忘在风吹的洞穴里，位于雨城下方古老的深处。"
        },
        hasDoubleJump: {
          spoiler: "一只帝王蝶在雨城下方古老的深处掉落了一件极其轻盈的东西。"
        },
        dungDefenderOrHornet2: {
          spoiler: "有两位技艺高超的战士。一位住在下水道的中心。一位守护着一个贝壳，周围是漫天飞舞的灰烬。"
        },
        ismaTearOrShadeCloak: {
          spoiler: "有两件珍贵的物品。一件在可以通过水道到达的树林里。一件被一扇巨大的皇家大门守护着，隐藏在黑暗之中。"
        },
        defeatedMegaJelly: {
          spoiler: "一个聪明的生物漂浮在隐藏的档案室里，隐藏在迷雾之后。"
        },
        monomonDefeated: {
          spoiler: "一位梦想家沉睡在某个地方，隐藏在迷雾之中。"
        },
        hegemolDefeated: {
          spoiler: "一位梦想家沉睡在蜘蛛巢穴附近。"
        },
        killedBlackKnight: {
          spoiler: "在高耸的尖塔地板上，可以看到一些被丢弃的黑色守卫的残骸。"
        },
        lurienDefeated: {
          spoiler: "一位梦想家沉睡在某个地方，位于一座高耸的尖塔顶端。"
        },
        killedHollowKnight: {
          spoiler: "他听到一座黑色神庙里传来骚动。或许值得去调查一下。"
        },
        endOfHints: {
          spoiler: `骑士仍在耐心地探索霍洛巢穴的世界，不断寻找剩余的秘密。[这是提示系统的结尾（目前）。剩下的就靠你自己了]`
        },
      },
    },

    /* ################### Bosses ################### */

    bosses: {
      h2: "BOSS",
      id: "hk-bosses",
      description: `每一个列表中的 Boss 增加 1% 游戏完成度.<br>
      注意: 游戏中还有许多其他 Boss。但只有大约一半的 Boss 会直接计入游戏完成度百分比统计。<br>
      <b>P1-P4</b> = 难度等级，也是 <span class='spoiler-span blurred'>万神殿</span> 解锁的 Boss 次序.`,
      percent: 0,
      maxPercent: 14,
      entries: {
        // killedBigFly
        bossGruzMother: {
          name: "P1 格鲁兹之母",
          spoiler: "遗忘十字路, lower right area",
          id: "Battle Scene",
          sceneName: "Crossroads_04",
          wiki: "Gruz_Mother"
        },
        falseKnightDefeated: {
          name: "P1 假骑士",
          spoiler: "遗忘十字路, middle area map symbol",
          wiki: "False_Knight"
        }, // "Battle Scene" - "Crossroads_10" ?
        hornet1Defeated: {
          name: "P1 Hornet Protector",
          spoiler: "苍绿之径, above 鹿角虫车站",
          wiki: "Hornet_Protector"
        },
        defeatedDungDefender: {
          name: "P1 Dung Defender",
          spoiler: "皇家水道, right area",
          wiki: "Dung_Defender"
        },
        // killedMawlek
        bossBroodingMawlek: {
          name: "P1 Brooding Mawlek",
          spoiler: "遗忘十字路, use Mantis Claw",
          id: "Battle Scene",
          sceneName: "Crossroads_09",
          wiki: "Brooding_Mawlek"
        },
        mageLordDefeated: {
          name: "P2 Soul Master",
          spoiler: "泪水之城: 灵魂圣所",
          wiki: "Soul_Master"
        },
        defeatedMantisLords: {
          name: "P2 Mantis Lords",
          spoiler: "真菌荒地: Mantis Village",
          wiki: "Mantis_Lords"
        },
        // "Battle Scene" - "Deepnest_32" ?
        killedMimicSpider: {
          name: "P2 Nosk",
          spoiler: "深邃巢穴, use Crystal Heart, left of Hot Spring",
          wiki: "Nosk"
        },
        killedInfectedKnight: {
          name: "P2 Broken Vessel",
          spoiler: "古老盆地, lower left, use Crystal Heart",
          wiki: "Broken_Vessel"
        },
        collectorDefeated: {
          name: "P3 The Collector",
          spoiler: "泪水之城: Tower of Love",
          wiki: "Collector"
        },
        defeatedMegaJelly: {
          name: "P3 Uumuu",
          spoiler: "雾之峡谷: Teacher's Archives",
          wiki: "Uumuu"
        },
        hornetOutskirtsDefeated: {
          name: "P3 Hornet Sentinel",
          spoiler: "王国边缘, requires Monarch Wings",
          wiki: "Hornet_Sentinel"
        },
        // "Battle Scene" - "Fungus3_23" ?
        killedTraitorLord: {
          name: "P4 Traitor Lord",
          spoiler: "王后花园, requires Shade Cloak",
          wiki: "Traitor_Lord"
        },
        killedBlackKnight: {
          name: "P4 Watcher Knights",
          spoiler: "泪水之城: Watcher's Spire",
          wiki: "Watcher_Knight"
        }
      },
    },

    /* #################### 护符 ################### */

    charms: {
      h2: "护符",
      id: "hk-charms",
      description: `每一个护符增加 1% 游戏完成度.<br>
      备注:  <a href="https://steamcommunity.com/app/367520/discussions/0/1480982338946444782/" target="_blank" title="See the official Patch Notes.">补丁版本 1.2.1.0</a> 后增加了4个新的护符，它们属于 格林剧团 DLC。`,
      percent: 0,
      maxPercent: 36,
      // reference: https://radiance.host/apidocs/Charms.html
      entries: {
        gotCharm_1: {
          name: "#1 采集虫群",
          spoiler: "Sly: 300吉欧",
          wiki: "Gathering_Swarm"
        }, // 1
        gotCharm_2: {
          name: "#2 任性的指南针",
          spoiler: "伊赛尔达: 220吉欧",
          wiki: "Wayward_Compass"
        }, // 1
        gotCharm_3: {
          name: "#3 幼虫之歌",
          spoiler: "虫爷爷: 10 幼虫 rescued",
          wiki: "Grubsong"
        }, // 1
        gotCharm_4: {
          name: "#4 Stalwart Shell",
          spoiler: "Sly: 200吉欧",
          wiki: "Stalwart_Shell"
        }, // 2
        gotCharm_5: {
          name: "#5 Baldur Shell",
          spoiler: "呼啸悬崖, bottom, near 苍绿之径",
          wiki: "Baldur_Shell"
        }, // 2
        gotCharm_6: {
          name: "#6 Fury of the Fallen",
          spoiler: "国王山道, nail-bounce spikes",
          wiki: "Fury_of_the_Fallen"
        }, // 2
        gotCharm_7: {
          name: "#7 Quick Focus",
          spoiler: "Salubra: 800吉欧",
          wiki: "Quick_Focus"
        }, // 3
        gotCharm_8: {
          name: "#8 Lifeblood Heart",
          spoiler: "Salubra: 250吉欧",
          wiki: "Lifeblood_Heart"
        }, // 2
        gotCharm_9: {
          name: "#9 Lifeblood Core",
          spoiler: "深渊: 15 Lifeblood masks",
          wiki: "Lifeblood_Core"
        }, // 3
        gotCharm_10: {
          name: "#10 Defender's Crest",
          spoiler: "皇家水道, defeat Dung Defender",
          wiki: "Defender's_Crest"
        }, // 1
        gotCharm_11: {
          name: "#11 Flukenest",
          spoiler: "皇家水道, defeat 吸虫之母",
          wiki: "Flukenest"
        }, // 3
        gotCharm_12: {
          name: "#12 Thorns of Agony",
          spoiler: "苍绿之径, requires 蛾翼披风",
          wiki: "Thorns_of_Agony"
        }, // 1
        gotCharm_13: {
          name: "#13 Mark of Pride",
          spoiler: "Mantis Village, defeat Mantis Lords",
          wiki: "Mark_of_Pride"
        }, // 3
        gotCharm_14: {
          name: "#14 Steady Body",
          spoiler: "Salubra: 120吉欧",
          wiki: "Steady_Body"
        }, // 1
        gotCharm_15: {
          name: "#15 Heavy Blow",
          spoiler: "Sly: 350 Geo + 店主的钥匙",
          wiki: "Heavy_Blow"
        }, // 2
        gotCharm_16: {
          name: "#16 Sharp Shadow",
          spoiler: "深邃巢穴, requires Shade Cloak",
          wiki: "Sharp_Shadow"
        }, // 2
        gotCharm_17: {
          name: "#17 Spore Shroom",
          spoiler: "真菌荒地, near 王后花园",
          wiki: "Spore_Shroom"
        }, // 1
        gotCharm_18: {
          name: "#18 Longnail",
          spoiler: "Salubra: 300吉欧",
          wiki: "Longnail"
        }, // 2
        gotCharm_19: {
          name: "#19 Shaman Stone",
          spoiler: "Salubra: 220吉欧",
          wiki: "Shaman_Stone"
        }, // 3
        gotCharm_20: {
          name: "#20 Soul Catcher",
          spoiler: "遗忘十字路: 祖先山丘",
          wiki: "Soul_Catcher"
        }, // 2
        gotCharm_21: {
          name: "#21 Soul Eater",
          spoiler: "安息之地, requires Desolate Dive",
          wiki: "Soul_Eater"
        }, // 4
        gotCharm_22: {
          name: "#22 Glowing Womb",
          spoiler: "遗忘十字路, requires Crystal Heart",
          wiki: "Glowing_Womb"
        }, // 2
        gotCharm_23: {
          name: "#23 Fragile Heart",
          spoiler: "Leg Eater: 350 Geo (280 with Defender's Crest)",
          wiki: "Fragile_Heart"
        }, // 2
        gotCharm_24: {
          name: "#24 Fragile Greed",
          spoiler: "Leg Eater: 250 Geo (200 with Defender's Crest)",
          wiki: "Fragile_Greed"
        }, // 2
        gotCharm_25: {
          name: "#25 Fragile Strength",
          spoiler: "Leg Eater: 600 Geo (480 with Defender's Crest)",
          wiki: "Fragile_Strength"
        }, // 3
        gotCharm_26: {
          name: "#26 Nailmaster’s Glory",
          spoiler: "Sly: Learn all Nail Arts",
          wiki: "Nailmaster's_Glory"
        }, // 1
        gotCharm_27: {
          name: "#27 Joni’s Blessing",
          spoiler: "呼啸悬崖: Joni's Repose",
          wiki: "Joni's_Blessing"
        }, // 4
        gotCharm_28: {
          name: "#28 Shape of Unn",
          spoiler: "苍绿之径: Lake of Unn, requires Isma's Tear",
          wiki: "Shape_of_Unn"
        }, // 2
        gotCharm_29: {
          name: "#29 Hiveblood",
          spoiler: "蜂巢, defeat Hive Knight",
          wiki: "Hiveblood"
        }, // 4
        gotCharm_30: {
          name: "#30 Dream Wielder",
          spoiler: "Seer: 500 Essence",
          wiki: "Dream_Wielder"
        }, // 1
        gotCharm_31: {
          name: "#31 Dashmaster",
          spoiler: "真菌荒地, below bench, near Bretta",
          wiki: "Dashmaster"
          /* 
          "id": "Shiny Item Stand",
          "sceneName": "Fungus2_23",
          */
        }, // 2
        gotCharm_32: {
          name: "#32 Quick Slash",
          spoiler: "王国边缘, requires Desolate Dive",
          wiki: "Quick_Slash"
        }, // 3
        gotCharm_33: {
          name: "#33 Spell Twister",
          spoiler: "泪水之城: 灵魂圣所",
          wiki: "Spell_Twister"
        }, // 2
        gotCharm_34: {
          name: "#34 Deep Focus",
          spoiler: "水晶山峰, requires Crystal Heart",
          wiki: "Deep_Focus"
        }, // 4
        gotCharm_35: {
          name: "#35 蜕变挽歌",
          spoiler: "虫爷爷: All 46 幼虫 rescued",
          wiki: "Grubberfly's_Elegy"
        }, // 3
        gotCharm_36: {
          name: "#36 Kingsoul",
          spoiler: "王后花园 (Shade Cloak) + 白色宫殿 (Awoken Dream Nail)",
          wiki: "Kingsoul"
        }, // 5
      },
    },

    /* ################ Equipment ################### */

    equipment: {
      h2: "能力",
      id: "hk-equipment",
      description: "每一种搜集到的能力提供 2% 游戏完成度。",
      percent: 0,
      maxPercent: 14,
      entries: {
        hasDash: {
          name: "蛾翼披风",
          spoiler: "苍绿之径: Dash ability",
          wiki: "Mothwing_Cloak"
        },
        hasWalljump: {
          name: "螳螂爪",
          spoiler: "Mantis Village: Wall Jump ability",
          wiki: "Mantis_Claw"
        },
        hasSuperDash: {
          name: "水晶之心",
          spoiler: "水晶山峰: Super Dash ability",
          wiki: "Crystal_Heart"
        },
        hasDoubleJump: {
          name: "帝王之翼",
          spoiler: "古老盆地: Double Jump ability",
          wiki: "Monarch_Wings"
        },
        hasAcidArmour: {
          name: "伊思玛的眼泪",
          spoiler: "皇家水道: Acid Armour ability",
          wiki: "Isma's_Tear"
        },
        hasKingsBrand: {
          name: "王之印记",
          spoiler: "王国边缘, defeat Hornet Sentinel",
          wiki: "King's_Brand"
        },
        hasShadowDash: {
          name: "暗影披风",
          spoiler: "深渊: Shadow Dash ability",
          wiki: "Shade_Cloak"
        }
      },
    },

    /* ################ Nail Upgrades ################### */

    nailUpgrades: {
      h2: "骨钉升级",
      id: "hk-nailupgrades",
      description: "提升小骑士的骨钉攻击力，每一次骨钉升级提供 1% 游戏完成度。",
      percent: 0,
      maxPercent: 4,
      entries: {
        oldNail: {
          name: "#0 旧骨钉",
          spoiler: "Starting Weapon",
          wiki: "Nail"
        },
        sharpenedNail: {
          name: "#1 锋利骨钉",
          spoiler: "钉子匠: 250吉欧",
          wiki: "Nail#Nail_Upgrades"
        },
        channeledNail: {
          name: "#2 开槽骨钉",
          spoiler: "钉子匠: 800 Geo + 1 苍白矿石",
          wiki: "Nail#Nail_Upgrades"
        },
        coiledNail: {
          name: "#3 螺纹骨钉",
          spoiler: "钉子匠: 2000 Geo + 2 苍白矿石",
          wiki: "Nail#Nail_Upgrades"
        },
        pureNail: {
          name: "#4 纯粹骨钉",
          spoiler: "钉子匠: 4000 Geo + 3 苍白矿石",
          wiki: "Nail#Nail_Upgrades"
        }
      },
    },

    /* ################ Nail Arts ################### */

    nailArts: {
      h2: "骨钉技艺",
      id: "hk-nailarts",
      description: "高级骨钉战斗能力。每学习一种新的技艺，提供 1% 游戏完成度。",
      percent: 0,
      maxPercent: 3,
      entries: {
        /* this is correct - somehow Team Cherry switched the names here */
        hasDashSlash: {
          name: "强力劈砍",
          spoiler: "Nailmaster Sheo: 苍绿之径",
          wiki: "Great_Slash"
        },
        /* this is correct - somehow Team Cherry switched the names here */
        hasUpwardSlash: {
          name: "冲刺劈砍",
          spoiler: "Nailmaster Oro: 王国边缘, 800吉欧",
          wiki: "Dash_Slash"
        },
        hasCyclone: {
          name: "旋风劈砍",
          spoiler: "Nailmaster Mato: 呼啸悬崖",
          wiki: "Cyclone_Slash"
        },
      },
    },

    /* ################ Spells ################### */

    spells: {
      h2: "法术",
      id: "hk-spells",
      description: "法术需要消耗灵魂。每学习或升级一个新法术提供 1% 游戏完成度。",
      percent: 0,
      maxPercent: 6,
      entries: {
        vengefulSpirit: {
          fireballLevel: 1,
          name: "复仇之魂",
          spoiler: "遗忘十字路: 祖先山丘",
          wiki: "Vengeful_Spirit"
        },
        shadeSoul: {
          fireballLevel: 2,
          name: "暗影之魂",
          spoiler: "泪水之城: 灵魂圣所 + Elegant Key",
          wiki: "Shade_Soul"
        },
        desolateDive: {
          quakeLevel: 1,
          name: "荒芜俯冲",
          spoiler: "泪水之城: 灵魂圣所",
          wiki: "Desolate_Dive"
        },
        descendingDark: {
          quakeLevel: 2,
          name: "黑暗降临",
          spoiler: "水晶山峰: Crystallised Mound",
          wiki: "Descending_Dark"
        },
        howlingWraiths: {
          screamLevel: 1,
          name: "嚎叫幽灵",
          spoiler: "雾之峡谷: Overgrown Mound",
          wiki: "Howling_Wraiths"
        },
        abyssShriek: {
          screamLevel: 2,
          name: "深渊尖啸",
          spoiler: "深渊, use Howling Wraiths on podium",
          wiki: "Abyss_Shriek"
        }
      },
    },

    /* ################ Mask Shards ################### */

    maskShards: {
      h2: "面具碎片",
      id: "hk-maskshards",
      description: "用于增加最大生命值的碎片。每收集 4 个面具碎片（一个完整的面具）提供 1% 游戏完成度。",
      percent: 0,
      maxPercent: 4,
      entries: {
        slyShellFrag1: {
          name: "面具碎片 #1",
          spoiler: "Sly: 150吉欧",
          wiki: "Mask_Shard"
        },
        slyShellFrag2: {
          name: "面具碎片 #2",
          spoiler: "Sly: 500吉欧",
          wiki: "Mask_Shard"
        },
        slyShellFrag3: {
          name: "面具碎片 #3",
          spoiler: "Sly: 800 Geo + 店主的钥匙",
          wiki: "Mask_Shard"
        },
        slyShellFrag4: {
          name: "面具碎片 #4",
          spoiler: "Sly: 1500 Geo + 店主的钥匙",
          wiki: "Mask_Shard"
        },
        dreamReward7: {
          name: "面具碎片 #5",
          spoiler: "Seer: 1500 Essence",
          wiki: "Mask_Shard"
        },
        /* ########## Mask Shards World ########## */
        /* "Heart Piece" sceneData.persistentBoolItems.id */
        maskShardCrossroadsSprings: {
          name: "面具碎片 #6",
          spoiler: "遗忘十字路: below Hot Springs",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Crossroads_13"
        },
        maskShardCrossroadsMawlek: {
          name: "面具碎片 #7",
          spoiler: "遗忘十字路: defeat Brooding Mawlek",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Crossroads_09"
        },
        maskShardGrubfather: {
          name: "面具碎片 #8",
          spoiler: "虫爷爷: 5 幼虫 rescued",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Crossroads_38"
        },
        maskShardBretta: {
          name: "面具碎片 #9",
          spoiler: "德特茅斯: Bretta's Room, rescue Bretta",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Room_Bretta"
        },
        maskShardQueensStation: {
          name: "面具碎片 #10",
          spoiler: "王后驿站: requires Mantis Claw",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Fungus2_01"
        },
        maskShardWaterways: {
          name: "面具碎片 #11",
          spoiler: "皇家水道: top left area, swim left",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Waterways_04b"
        },
        maskShardStoneSanctuary: {
          name: "面具碎片 #12",
          spoiler: "苍绿之径: Stone Sanctuary, 光蝇灯笼",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Fungus1_36"
        },
        maskShardCrystalPeak: {
          name: "面具碎片 #13",
          spoiler: "水晶山峰: defeat 暴怒守卫",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Mines_32"
        },
        maskShardDeepnest: {
          name: "面具碎片 #14",
          spoiler: "深邃巢穴: from Fungal Core (Monarch Wings)",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Fungus2_25"
        },
        maskShardHive: {
          name: "面具碎片 #15",
          spoiler: "蜂巢: use Hive Guardian to break wall",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Hive_04"
        },
        maskShardDelicateFlower: {
          name: "面具碎片 #16",
          spoiler: "安息之地: Delicate Flower (Grey Mourner)",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Room_Mansion"
        }
      },
    },

    /* ################ Vessel Fragments ################### */

    vesselFragments: {
      h2: "容器碎片",
      id: "hk-vesselfragments",
      description: "用于增加最大灵魂值的碎片。每收集 3 个容器碎片（一个完整的灵魂容器）提供 1% 游戏完成度。",
      percent: 0,
      maxPercent: 3,
      entries: {
        slyVesselFrag1: {
          name: "容器碎片 #1",
          spoiler: "Sly: 550吉欧",
          wiki: "Vessel_Fragment"
        },
        slyVesselFrag2: {
          name: "容器碎片 #2",
          spoiler: "Sly: 900 Geo + 店主的钥匙",
          wiki: "Vessel_Fragment"
        },
        dreamReward5: {
          name: "容器碎片 #3",
          spoiler: "Seer: 700 Essence",
          wiki: "Vessel_Fragment"
        },
        vesselFragStagNest: {
          name: "容器碎片 #4",
          spoiler: "鹿角虫巢穴",
          wiki: "Vessel_Fragment"
        },
        /* ########## Vessel Fragments World ############ */
        /* "Vessel Fragment" sceneData.persistentBoolItems.id */
        vesselFragmentGreenpath: {
          name: "容器碎片 #5",
          spoiler: "苍绿之径: near 王后花园 exit",
          wiki: "Vessel_Fragment",
          id: "Vessel Fragment",
          sceneName: "Fungus1_13"
        },
        vesselFragmentCrossroads: {
          name: "容器碎片 #6",
          spoiler: "遗忘十字路: unlock 泪水之城 lift",
          wiki: "Vessel_Fragment",
          id: "Vessel Fragment",
          sceneName: "Crossroads_37"
        },
        vesselFragmentCityOfTears: {
          name: "容器碎片 #7",
          spoiler: "泪水之城: above 国王驿站",
          wiki: "Vessel_Fragment",
          id: "Vessel Fragment",
          sceneName: "Ruins2_09"
        },
        vesselFragmentDeepnest: {
          name: "容器碎片 #8",
          spoiler: "深邃巢穴: Goam platforming challenge",
          wiki: "Vessel_Fragment",
          id: "Vessel Fragment",
          sceneName: "Deepnest_38"
        },
        vesselFragmentFountain: {
          name: "容器碎片 #9",
          spoiler: "古老盆地 Fountain: 3000吉欧",
          wiki: "Vessel_Fragment",
          id: "Vessel Fragment",
          sceneName: "Abyss_04"
        }
      },
    },

    /* ################ Dream Nail and Essence ################### */

    dreamNail: {
      h2: "梦之钉和精华",
      id: "hk-dreamnail",
      description: "梦之钉是一个特殊的梦能力。可以收集精华并进入梦。每个升级提供 1% 游戏完成度。",
      percent: 0,
      maxPercent: 3,
      entries: {
        hasDreamNail: {
          name: "梦之钉",
          spoiler: "安息之地",
          wiki: "Dream_Nail"
        },
        dreamNailUpgraded: {
          name: "觉醒的梦之钉",
          spoiler: "先知: 1800 精华",
          wiki: "Dream_Nail#Awoken_Dream_Nail"
        },
        mothDeparted: {
          name: "聆听先知的遗言",
          spoiler: "先知: 2400 精华",
          wiki: "Seer"
        }
      },
    },

    /* ################ Warrior Dreams ################### */

    warriorDreams: {
      h2: "战士之梦",
      id: "hk-warriordreams",
      description: `特殊类型的 Boss，每一个 Boss 都提供精华以及 1% 游戏完成度。<br>
      注意: 必须先收集精华才能提供 1% 游戏完成度。未收集的精华将被标记为未完成。`,
      percent: 0,
      maxPercent: 7,
      entries: {
        aladarSlugDefeated: {
          name: "P1 戈布",
          spoiler: "呼啸悬崖, top middle area",
          wiki: "Gorb"
        },
        xeroDefeated: {
          name: "P2 泽若",
          spoiler: "安息之地, below 水晶山峰 drop",
          wiki: "Xero"
        },
        mumCaterpillarDefeated: {
          name: "P2 马尔穆",
          spoiler: "王后花园, left of 鹿角虫车站",
          wiki: "Marmu"
        },
        elderHuDefeated: {
          name: "P3 胡长老",
          spoiler: "真菌荒地, above acid bridge",
          wiki: "Elder_Hu"
        },
        galienDefeated: {
          name: "P3 加利安",
          spoiler: "深邃巢穴, below Failed Tramway",
          wiki: "Galien"
        },
        noEyesDefeated: {
          name: "P4 无眼",
          spoiler: "苍绿之径: Stone Sanctuary, requires 光蝇灯笼",
          wiki: "No_Eyes"
        },
        markothDefeated: {
          name: "P4 马科斯",
          spoiler: "王国边缘, requires Shade Cloak",
          wiki: "Markoth"
        },
      },
    },

    /* ################ Dreamers ################### */

    dreamers: {
      h2: "守梦者",
      id: "hk-dreamers",
      description: "每个守梦者都提供 1% 游戏完成度。",
      percent: 0,
      maxPercent: 3,
      entries: {
        lurienDefeated: {
          name: "Lurien the Watcher",
          spoiler: "泪水之城: Watcher's Spire",
          wiki: "Lurien"
        },
        monomonDefeated: {
          name: "Monomon the Teacher",
          spoiler: "雾之峡谷: Teacher's Archives",
          wiki: "Monomon"
        },
        hegemolDefeated: {
          name: "Herrah the Beast",
          spoiler: "深邃巢穴: 遥远的村庄",
          wiki: "Herrah"
        }
      },
    },

    /* ################ 愚人斗兽场 ################### */

    colosseum: {
      h2: "愚人斗兽场",
      id: "hk-colosseum",
      description: "在愚人斗兽场完成每个试炼都提供 1% 游戏完成度。从2017年开始，这一部分的加入会提升原始的 100% 游戏完成度百分比（不包含内容包）。",
      percent: 0,
      maxPercent: 3,
      entries: {
        colosseumBronzeCompleted: {
          name: "勇士的试炼",
          spoiler: "王国边缘: top area, Little Fool: 100吉欧",
          wiki: "Trial_of_the_Warrior"
        },
        colosseumSilverCompleted: {
          name: "征服者的试炼",
          spoiler: "Little Fool: 450 Geo + Warrior completed",
          wiki: "Trial_of_the_Conqueror"
        },
        colosseumGoldCompleted: {
          name: "愚人的试炼",
          spoiler: "Little Fool: 800 Geo + Conqueror completed",
          wiki: "Trial_of_the_Fool"
        },
      },
    },

    /* ################ Grimm Troupe Content Pack ################### */

    grimmTroupe: {
      h2: "格林剧团 DLC",
      id: "hk-grimmtroupe",
      description: `首个 DLC，发布于 October 26th, 2017 (<a href="https://steamcommunity.com/app/367520/discussions/0/1480982338946444782/" target="_blank" title="See the official Patch Notes.">1.2.1.0 Game Update</a>). 增加了 +6% 的最大游戏完成度。<br>
      注意: DLC 的最后有一个选择，无论你选择什么，都会获得 +1% 的游戏完成度。`,
      percent: 0,
      maxPercent: 6,
      entries: {
        gotCharm_37: {
          name: "护符 #37 Sprintmaster",
          spoiler: "Sly: 400 Geo + 店主的钥匙",
          wiki: "Sprintmaster"
        },
        gotCharm_38: {
          name: "护符 #38 Dreamshield",
          spoiler: "安息之地, go left below Seer",
          wiki: "Dreamshield"
        },
        gotCharm_39: {
          name: "护符 #39 Weaversong",
          spoiler: "深邃巢穴: Weaver's Den",
          wiki: "Weaversong"
        },
        gotCharm_40: {
          name: "护符 #40 Grimmchild or Carefree Melody",
          nameDefault: "护符 #40 Grimmchild or Carefree Melody",
          nameGrimmchildP1: "护符 #40: Grimmchild (Phase 1)",
          nameGrimmchildP2: "护符 #40: Grimmchild (Phase 2)",
          nameGrimmchildP3: "护符 #40: Grimmchild (Phase 3)",
          nameGrimmchildP4: "护符 #40: Grimmchild (Phase 4)",
          nameCarefreeMelody: "护符 #40: Carefree Melody",
          spoiler: "德特茅斯",
          spoilerDefault: "德特茅斯",
          spoilerGrimmchildP1: "搜集 3 团火焰",
          spoilerGrimmchildP2: "搜集 3 团火焰",
          spoilerGrimmchildP3: "搜集 3 团火焰",
          spoilerGrimmchildP4: "完成仪式",
          spoilerCarefreeMelody: "放逐格林剧团",
          wiki: "Grimmchild",
          wikiDefault: "Grimmchild",
          wikiGrimmchild: "Grimmchild",
          wikiCarefreeMelody: "Carefree_Melody"
        },
        killedGrimm: {
          name: "P3 Troupe Master Grimm",
          spoiler: "德特茅斯, collect 6 flames",
          wiki: "Grimm"
        },
        grimmChildLevel: {
          name: "完成仪式或放逐格林剧团",
          nameDefault: "完成仪式或放逐格林剧团",
          nameNightmareKing: "Grimm Troupe Choice: Nightmare King",
          nameBanishment: "Grimm Troupe Choice: Banishment",
          spoiler: "One choice per save file: 德特茅斯 or 呼啸悬崖",
          spoilerDefault: "One choice per save file: 德特茅斯 or 呼啸悬崖",
          spoilerNightmareKing: "Completed the Ritual",
          spoilerBanishment: "Banished Grimm Troupe",
          wiki: "Grimm_Troupe_(Quest)",
          wikiDefault: "Grimm_Troupe_(Quest)",
          wikiNightmareKing: "Nightmare_King_Grimm",
          wikiBanishment: "Nymm",
        }
      },
    },

    /* ################ Lifeblood Content Pack ################### */

    lifeblood: {
      h2: "生命血 DLC",
      id: "hk-lifeblood",
      description: `第二个 DLC，发布于 April 20th, 2018 (<a href="https://steamcommunity.com/app/367520/discussions/0/3211505894131332245/" target="_blank" title="See the official Patch Notes.">1.3.1.5 Game Update</a>). 除了增加了许多优化，还增加了一个新的 Boss，使得游戏最大完成度又增加了 1%。`,
      percent: 0,
      maxPercent: 1,
      entries: {
        killedHiveKnight: {
          name: "P3 蜂巢骑士",
          spoiler: "蜂巢, 守护着 Hiveblood 护符",
          wiki: "Hive_Knight"
        }
      },
    },

    /* ################ Godmaster Content Pack ################### */

    godmaster: {
      h2: "寻神者 DLC",
      id: "hk-godmaster",
      description: `第三个 DLC，发布于 August 23rd, 2018 (<a href="https://hollowknight.fandom.com/wiki/Updates_(Hollow_Knight)#1.4.2.4" target="_blank" title="See the official Patch Notes.">1.4.2.4 Game Update</a>). 增加了 +5% 的最大游戏完成度（最多 112%）。`,
      percent: 0,
      maxPercent: 5,
      entries: {
        hasGodfinder: {
          name: "神明调谐器",
          spoiler: "皇家水道: 垃圾坑, 需要简单钥匙",
          wiki: "Godtuner"
        },
        /* ########## Godmaster doors ########## */
        pantheonMaster: {
          name: "P1 大师万神殿",
          spoiler: "万神殿: defeat P1 bosses",
          wiki: "Pantheon_of_the_Master",
          property: "bossDoorStateTier1"
        },
        pantheonArtist: {
          name: "P2 艺术家万神殿",
          spoiler: "万神殿: defeat P2 bosses",
          wiki: "Pantheon_of_the_Artist",
          property: "bossDoorStateTier2"
        },
        pantheonSage: {
          name: "P3 贤者万神殿",
          spoiler: "万神殿: defeat P3 bosses",
          wiki: "Pantheon_of_the_Sage",
          property: "bossDoorStateTier3"
        },
        pantheonKnight: {
          name: "P4 骑士万神殿",
          spoiler: "万神殿: complete P1, P2 and P3",
          wiki: "Pantheon_of_the_Knight",
          property: "bossDoorStateTier4"
        }
      },
    },

    /* ################ Essentials % -> Collectibles ################### */

    essentialsCollectibles: {
      h2: "游戏完成度 % 搜集品",
      id: "hk-essentials-collectibles",
      description: "搜集品不直接影响游戏完成度的 112%, 但影响整体完成度 112%。",
      entries: {
        grubsCollected: {
          name: "幼虫 Rescued",
          spoiler: "46 幼虫 total",
          max: 46,
          maxDefault: 46,
          wiki: "Grub"
        },
        grubRewards: {
          name: "虫爷爷 Rewards Awarded",
          spoiler: "46 Rewards total",
          max: 46,
          maxDefault: 46,
          wiki: "Grub#Rewards_and_locations"
        },
        charmsOwned: {
          name: "护符s Owned",
          spoiler: "40 护符 total, useful for Salubra Notches",
          max: 40,
          maxDefault: 40,
          wiki: "Category:Charms#List_of_Charms"
        },
        dreamOrbs: {
          name: "Essence Collected",
          spoiler: "Dream Nail (2400 for completion)",
          max: 2400,
          maxDefault: 2400,
          wiki: "Dream_Nail#Essence"
        },
        hasLantern: {
          name: "光蝇灯笼",
          spoiler: "Sly: 1800吉欧",
          wiki: "Lumafly_Lantern"
        },
        shopkeeperKey: {
          name: "店主的钥匙",
          spoiler: "水晶山峰, below Quirrel location",
          wiki: "Shopkeeper's_Key"
        },
        elegantKey: {
          name: "Elegant Key",
          spoiler: "Sly: 800 Geo + 店主的钥匙",
          wiki: "Elegant_Key"
        },
        loveKey: {
          name: "Love Key",
          spoiler: "王后花园, near 真菌荒地",
          wiki: "Love_Key"
        },
        slySimpleKey: {
          name: "简单钥匙 #1",
          spoiler: "Sly: 950吉欧",
          wiki: "Simple_Key"
        },
        simpleKeyCityOfTears: {
          name: "简单钥匙 #2",
          spoiler: "泪水之城, below left 鹿角虫车站",
          id: "Shiny Item",
          sceneName: "Ruins1_17",
          wiki: "Simple_Key#How_to_Acquire"
        },
        simpleKeyAncientBasin: {
          name: "简单钥匙 #3",
          spoiler: "古老盆地, below Broken Vessel",
          id: "Shiny Item Stand",
          sceneName: "Abyss_20",
          wiki: "Simple_Key#How_to_Acquire"
        },
        gotLurkerKey: {
          name: "简单钥匙 #4",
          spoiler: "愚人斗兽场: Pale Lurker's Retreat",
          wiki: "Simple_Key#How_to_Acquire"
        },
        paleOreAncientBasin: {
          name: "苍白矿石 #1",
          spoiler: "古老盆地, left of Tram Station",
          id: "Battle Scene Ore",
          sceneName: "Abyss_17",
          wiki: "Pale_Ore"
        },
        paleOreSeer: {
          name: "苍白矿石 #2",
          spoiler: "Seer: 300 Essence",
          wiki: "Pale_Ore#How_to_Acquire"
        },
        paleOreCrystalPeak: {
          name: "苍白矿石 #3",
          spoiler: "Top of 水晶山峰, use Monarch Wings",
          id: "Shiny Item Stand",
          sceneName: "Mines_34",
          wiki: "Pale_Ore#How_to_Acquire"
        },
        paleOreDeepnest: {
          name: "苍白矿石 #4",
          spoiler: "深邃巢穴, Nosk reward",
          id: "Shiny Item Stand",
          sceneName: "Deepnest_32",
          wiki: "Pale_Ore#How_to_Acquire"
        },
        paleOreGrubfather: {
          name: "苍白矿石 #5",
          spoiler: "虫爷爷: 31 幼虫 rescued",
          id: "Shiny Item Ore",
          sceneName: "Crossroads_38",
          wiki: "Pale_Ore#How_to_Acquire"
        },
        paleOreColosseum: {
          name: "苍白矿石 #6",
          spoiler: "愚人斗兽场: Trial of the Conqueror",
          id: "Shiny Item",
          sceneName: "Room_Colosseum_Silver",
          wiki: "Pale_Ore#How_to_Acquire"
        },
        hasTramPass: {
          name: "电车通行证",
          spoiler: "深邃巢穴: Failed Tramway",
          wiki: "Tram_Pass"
        },
        gotQueenFragment: {
          name: "白色碎片: 王后",
          spoiler: "White Lady: 王后花园",
          wiki: "Kingsoul#How_to_Acquire"
        },
        gotKingFragment: {
          name: "白色碎片: 国王",
          spoiler: "苍白之王: 白色宫殿",
          wiki: "Kingsoul#How_to_Acquire"
        },
      },
      grubsList: ["Crossroads_35", "Crossroads_03", "Crossroads_05", "Crossroads_48", "Crossroads_31", "Fungus1_06", "Fungus1_07", "Fungus1_21", "Fungus1_28", "Fungus2_18", "Ruins1_05", "Mines_04", "Mines_03", "Mines_31", "Mines_19", "Ruins1_32", "RestingGrounds_10", "Ruins_House_01", "Mines_35", "Mines_16", "Waterways_04", "Waterways_13", "Abyss_19", "Abyss_17", "Mines_24", "Fungus1_13", "Fungus3_47", "Fungus3_10", "Fungus3_48", "Fungus3_22", "Ruins2_07", "Ruins2_11", "Ruins2_11", "Ruins2_11", "Deepnest_East_11", "Deepnest_East_14", "Fungus2_20", "Ruins2_03", "Deepnest_36", "Deepnest_03", "Deepnest_31", "Deepnest_39", "Deepnest_Spider_Town", "Waterways_14", "Hive_03", "Hive_04"],
    },

    /* ################ Essentials % -> 鹿角虫车站 ################### */

    essentialsStagStations: {
      h2: "游戏完成度 % Essentials - 鹿角虫车站",
      id: "hk-essentials-stag-stations",
      description: `Opened 鹿角虫车站 don't count directly towards 112% 游戏完成度, but are required to achieve full 112% by discovering the <span class="spoiler-span blurred">鹿角虫巢穴 for the Vessel Fragment</span>.`,
      entries: {
        openedTownBuilding: {
          name: "鹿角虫车站: 德特茅斯",
          spoiler: "Opened from inside after travelling",
          wiki: "Dirtmouth"
        },
        openedCrossroads: {
          name: "鹿角虫车站: 遗忘十字路",
          spoiler: "50 Geo: Right middle-bottom area",
          wiki: "Forgotten_Crossroads"
        },
        openedGreenpath: {
          name: "鹿角虫车站: 苍绿之径",
          spoiler: "140 Geo: Top middle area, below Hornet",
          wiki: "Greenpath"
        },
        openedFungalWastes: {
          name: "鹿角虫车站: 王后驿站",
          spoiler: "120 Geo: 真菌荒地, near 雾之峡谷",
          wiki: "Fungal_Wastes#Sub-area:_Queen.27s_Station"
        },
        openedRuins1: {
          name: "鹿角虫车站: 城市仓库",
          spoiler: "200 Geo: 泪水之城, top left area",
          wiki: "City_of_Tears#City_Storerooms"
        },
        openedRestingGrounds: {
          name: "鹿角虫车站: 安息之地",
          spoiler: "0 Geo: Right middle area, near Seer",
          wiki: "Resting_Grounds"
        },
        openedRuins2: {
          name: "鹿角虫车站: 国王驿站",
          spoiler: "300 Geo: 泪水之城, far right area",
          wiki: "City_of_Tears#Sub-area:_King.27s_Station"
        },
        openedRoyalGardens: {
          name: "鹿角虫车站: 王后花园",
          spoiler: "200 Geo: Middle area, near Traitor's Grave",
          wiki: "Queen's_Gardens"
        },
        openedDeepnest: {
          name: "鹿角虫车站: 遥远的村庄",
          spoiler: "250 Geo: 深邃巢穴, far left area",
          wiki: "Deepnest#Sub-area:_Distant_Village"
        },
        openedHiddenStation: {
          name: "鹿角虫车站: 隐藏的鹿角站",
          spoiler: "300 Geo: 古老盆地: Palace Grounds",
          wiki: "Ancient_Basin#Sub-Area:_Palace_Grounds"
        },
        openedStagNest: {
          name: "鹿角虫车站: 鹿角虫巢穴",
          spoiler: "Open all stations: 呼啸悬崖, top area",
          wiki: "Howling_Cliffs#Sub-area:_Stag_Nest"
        },
        stagStationsOpened: {
          name: "所有鹿角虫车站",
          spoiler: "11 个鹿角虫车站全打开，包括德特茅斯",
          max: 11,
          maxDefault: 11,
          wiki: "Fast_Travel_(Hollow_Knight)#Locations_and_Prices"
        },
      },
    },

    /* ################ Essentials % -> World Interactions ################### */

    essentialsWorldInteractions: {
      h2: "游戏完成度 % 世界互动",
      id: "hk-essentials-world-interactions",
      description: `玩家在游戏中可以与NPC或世界物体进行一些互动，这些互动虽然不会直接计入112%的游戏完成度，但却是达到112%完整完成度所必需的。`,
      entries: {
        slyRescued: {
          name: "Sly Rescued",
          spoiler: "遗忘十字路, near Gruz Mother",
          wiki: "Sly"
        },
        brettaRescued: {
          name: "Bretta Rescued",
          spoiler: "真菌荒地, near Dashmaster 护符 statue",
          wiki: "Bretta"
        },
        paidLegEater: {
          name: "Paid to See Something Nice",
          spoiler: "真菌荒地, Leg Eater: 86吉欧",
          wiki: "Leg_Eater#In-game_events"
        },
        gaveSlykey: {
          name: "店主的钥匙 Returned to Sly",
          spoiler: "德特茅斯, Sly's Shop",
          wiki: "Sly"
        },
        mantisVillageFloorLever: {
          name: "Mantis Village Floor Lever",
          spoiler: "真菌荒地, right of Mantis Claw",
          id: "Mantis Lever (1)",
          sceneName: "Fungus2_14",
          wiki: "Fungal_Wastes#Sub-area:_Mantis_Village"
        },
        xunFlowerGiven: {
          name: "Delicate Flower Accepted",
          spoiler: "安息之地: listen to Grey Mourner",
          wiki: "Grey_Mourner#In-game_events"
        },
        waterwaysAcidDrained: {
          name: "Acid Drained",
          spoiler: "皇家水道, lever after Dung Defender",
          wiki: "Royal_Waterways#Sub-area:_Isma.27s_Grove"
        },
        openedMageDoor_v2: {
          name: "Elegant Door Unlocked",
          spoiler: "泪水之城: 灵魂圣所, requires Elegant Key",
          wiki: "Elegant_Key#Use"
        },
        openedLoveDoor: {
          name: "Tower of Love Door Unlocked",
          spoiler: "泪水之城, requires Love Key",
          wiki: "City_of_Tears#Sub-area:_Tower_of_Love"
        },
        abyssGateOpened: {
          name: "打开深渊入口",
          spoiler: "古老盆地, requires 王之印记",
          wiki: "Ancient_Basin#Description"
        },
        blueVineDoor: {
          name: "Lifeblood Door Opened",
          spoiler: "深渊, requires 14-15+ Lifeblood Masks",
          wiki: "Lifeblood_Core#How_to_Acquire"
        },
        nightmareLanternLit: {
          name: "Nightmare Lantern Lit",
          spoiler: "呼啸悬崖, corpse of a large bug",
          wiki: "Howling_Cliffs#Nightmare_Lantern_Chamber"
        },
        paleLurkersRetreat: {
          name: "Pale Lurker's Retreat",
          spoiler: "愚人斗兽场, Room above Bench, break wall",
          id: "Breakable Wall_Silhouette",
          sceneName: "Room_Colosseum_Spectate",
          wiki: "Colosseum_of_Fools#Description"
        },
        godseekerUnlocked: {
          name: "Godseeker Cocoon Unlocked",
          spoiler: "皇家水道: 垃圾坑",
          wiki: "Royal_Waterways#Sub-area:_Junk_Pit"
        },
        fountainGeo: {
          name: "Geo in Fountain",
          spoiler: "古老盆地: 3000 Geo maximum",
          max: 3000,
          maxDefault: 3000,
          wiki: "Ancient_Basin#Description"
        },
      },
    },

    /* ################ Essentials % -> Bosses ################### */

    essentialsBosses: {
      h2: "游戏完成度 % BOSS",
      id: "hk-essentials-bosses",
      description: "Bosses that don't count directly towards 112% 游戏完成度, but are required to defeat to achieve full 112%.",
      entries: {
        killedMegaMossCharger: {
          name: "P1 大型苔藓冲锋者",
          spoiler: "苍绿之径, near 雾之峡谷",
          wiki: "Massive_Moss_Charger"
        },
        pantheonSoulWarrior: {
          name: "P1 Soul Warrior",
          spoiler: "泪水之城: 灵魂圣所",
          id: "Battle Scene v2",
          sceneName: "Ruins1_23",
          wiki: "Soul_Warrior#Location"
        },
        shadeSoulWarrior: {
          name: "Shade Soul Warrior？",
          spoiler: "泪水之城: 灵魂圣所, use Elegant Key",
          id: "Battle Scene v2",
          sceneName: "Ruins1_31",
          wiki: "Shade_Soul#How_to_Acquire"
        },
        pantheonCrystalGuardian: {
          name: "P2 水晶守卫",
          spoiler: "水晶山峰, guards Central Bench",
          id: "Mega Zombie Beam Miner (1)",
          sceneName: "Mines_18",
          wiki: "Crystal_Guardian"
        },
        killedBigBuzzer: {
          name: "复仇蝇之王",
          spoiler: "愚人斗兽场: Trial of the Warrior, 苍绿之径",
          wiki: "Vengefly_King"
        },
        killedOblobble: {
          name: "P2 奥波路波",
          spoiler: "愚人斗兽场: Trial of the Conqueror",
          wiki: "Oblobbles"
        },
        killedLobsterLancer: {
          name: "神之驯服者",
          spoiler: "愚人斗兽场: Trial of the Fool",
          wiki: "God_Tamer"
        },
        killedFlukeMother: {
          name: "P2 吸虫之母",
          spoiler: "皇家水道, requires Desolate Dive",
          wiki: "Flukemarm"
        },
        pantheonEnragedGuardian: {
          name: "P4 暴怒守卫",
          spoiler: "水晶山峰, requires Monarch Wings",
          id: "Zombie Beam Miner Rematch",
          sceneName: "Mines_32",
          wiki: "Enraged_Guardian"
        },
        killedNailBros: {
          name: "骨钉兄弟奥罗与马托",
          spoiler: "万神殿: Pantheon of the Master",
          wiki: "Brothers_Oro_%26_Mato"
        },
        killedPaintmaster: {
          name: "绘画大师席奥",
          spoiler: "万神殿: Pantheon of the Artist",
          wiki: "Paintmaster_Sheo"
        },
        killedNailsage: {
          name: "伟大骨钉贤者斯莱",
          spoiler: "万神殿: Pantheon of the Sage",
          wiki: "Great_Nailsage_Sly"
        },
        killedHollowKnightPrime: {
          name: "纯粹容器",
          spoiler: "万神殿: Pantheon of the Knight",
          wiki: "Pure_Vessel"
        },
      },
    },

    /* ################ Achievements Essentials -> Collectibles ################### */

    achievementsCollectibles: {
      h2: "成就 - 搜集品",
      id: "hk-achievements-collectibles",
      description: `重要搜集品，用于解锁成就。它们影响或计入 112% 游戏完成度。`,
      entries: {
        hasMap: {
          name: "Inventory Map",
          spoiler: "First map bought from 柯尼法或伊赛尔达",
          wiki: "Map_and_Quill"
        },
        hasJournal: {
          name: "猎人日志",
          spoiler: "苍绿之径: Hunter, above Stone Sanctuary",
          wiki: "Hunter's_Journal"
        },
        hasHuntersMark: {
          name: "Hunter's Mark",
          spoiler: "苍绿之径: Hunter, complete base 146 Hunter Notes",
          wiki: "Hunter's_Mark"
        },
        killsBigBuzzer: {
          name: "复仇蝇之王 Journal Note",
          spoiler: "Colosseum: Trial of the Warrior",
          wiki: "Vengefly_King"
        },
        salubraBlessing: {
          name: "Salubra's Blessing",
          spoiler: "Salubra: 800 Geo + all 40 护符 Owned",
          wiki: "Salubra's_Blessing"
        },
        gotShadeCharm: {
          name: "虚空之心",
          spoiler: "Equip Kingsoul 护符 and find Birthplace",
          wiki: "Void_Heart"
        },
      },
    },

    /* ################ Achievements Essentials -> Maps ################### */

    achievementsMaps: {
      h2: "成就 - 地图",
      id: "hk-achievements-maps",
      description: `Acquired maps are important for unlocking achievements. They don't count or matter towards 112% 游戏完成度.`,
      entries: {
        mapCrossroads: {
          name: "地图: 遗忘十字路",
          spoiler: "30/40 Geo: below Gruzzer area",
          wiki: "Forgotten_Crossroads"
        },
        mapGreenpath: {
          name: "地图: 苍绿之径",
          spoiler: "60/80 Geo: just below 苍绿之径 entrance",
          wiki: "Greenpath"
        },
        mapFungalWastes: {
          name: "地图: 真菌荒地",
          spoiler: "75/100 Geo: right of 王后驿站",
          wiki: "Fungal_Wastes"
        },
        mapCliffs: {
          name: "地图: 呼啸悬崖",
          spoiler: "75/100 Geo: left middle area, near Journal",
          wiki: "Howling_Cliffs"
        },
        mapCity: {
          name: "地图: 泪水之城",
          spoiler: "90/120 Geo: left of 灵魂圣所",
          wiki: "City_of_Tears"
        },
        mapMines: {
          name: "地图: 水晶山峰",
          spoiler: "120/150 Geo: top left area",
          wiki: "Crystal_Peak"
        },
        mapWaterways: {
          name: "地图: 皇家水道",
          spoiler: "75/100 Geo: far left area, near Fungal",
          wiki: "Royal_Waterways"
        },
        mapRestingGrounds: {
          name: "地图: 安息之地",
          spoiler: "75 Geo: 伊赛尔达's Shop",
          wiki: "Resting_Grounds"
        },
        mapAbyss: {
          name: "地图: 古老盆地",
          spoiler: "112/150 Geo: center area, near fountain",
          wiki: "Ancient_Basin"
        },
        mapOutskirts: {
          name: "地图: 王国边缘",
          spoiler: "112/150 Geo: left bottom area, inside pipe",
          wiki: "Kingdom's_Edge"
        },
        mapFogCanyon: {
          name: "地图: 雾之峡谷",
          spoiler: "150/200 Geo: above Teacher's Archives",
          wiki: "Fog_Canyon"
        },
        mapRoyalGardens: {
          name: "地图: 王后花园",
          spoiler: "150/200 Geo: below 雾之峡谷 entrance",
          wiki: "Queen's_Gardens"
        },
        mapDeepnest: {
          name: "地图: 深邃巢穴",
          spoiler: "38/50 Geo: near both 真菌荒地 entrances",
          wiki: "Deepnest"
        },
        areaMaps: {
          name: "所有地图",
          spoiler: "柯尼法 and 伊赛尔达, 13 Area Maps total",
          max: 13,
          maxDefault: 13,
          wiki: "Map_and_Quill#Maps"
        },
      },
    },

    /* ################ Achievements Essentials -> World Interactions ################### */

    achievementsWorldInteractions: {
      h2: "成就 - 世界互动",
      id: "hk-achievements-world-interactions",
      description: `Certain interactions the player can make with NPCs in the game or world objects important for unlocking achievements. They don't count or matter towards 112% 游戏完成度. This section includes some choices that the player can make in the game.`,
      entries: {
        quirrelEpilogueCompleted: {
          name: "Quirrel: Witness",
          spoiler: "Blue Lake: after defeating Monomon the Teacher",
          wiki: "Quirrel"
        },
        xunRewardGiven: {
          name: "Grey Mourner: Solace",
          spoiler: "安息之地: Complete Delicate Flower quest",
          wiki: "Grey_Mourner"
        },
        zoteStatus: {
          id: "zoteStatus",
          name: "左特",
          nameDefault: "左特",
          nameNeglect: "左特: 忽略 不管左特让他去死",
          nameRivalry: "左特: 恩怨 在愚人斗兽场中击败左特",
          nameTrappedVengefly: "左特: Vengefly",
          nameNotRescuedVengefly: "左特: 苍绿之径",
          nameTrappedDeepnest: "左特: 深邃巢穴",
          nameColosseum: "左特: 愚人斗兽场",
          spoiler: "一次游戏只能拿到一个成就",
          spoilerDefault: "一次游戏只能拿到一个成就",
          spoilerNeglect: "Left Zote to die",
          spoilerRivalry: "Defeated Zote in the 愚人斗兽场",
          spoilerTrappedVengefly: "苍绿之径, defeat 复仇蝇之王",
          spoilerNotRescuedVengefly: "Check what happened with Zote",
          spoilerTrappedDeepnest: "深邃巢穴, free from cobwebs",
          spoilerColosseum: "Trial of the Warrior",
          wiki: "Zote"
        },
        nailsmithStatus: {
          id: "nailsmithStatus",
          name: "钉子匠",
          nameDefault: "钉子匠",
          nameHappyCouple: "钉子匠: 幸福成双",
          namePurity: "钉子匠: 纯粹",
          nameSheoHutWaiting: "钉子匠: 席奥",
          nameUpgradeNail: "钉子匠: 等待",
          spoiler: "一次游戏只能拿到一个成就",
          spoilerDefault: "一次游戏只能拿到一个成就",
          spoilerHappyCouple: "Found a new calling",
          spoilerPurity: "Slain with Pure Nail",
          spoilerSheoHutWaiting: "Waiting at Sheo's Hut",
          spoilerUpgradeNail: "Upgrade Nail to Pure Nail",
          wiki: "Nailsmith"
        },
        mrMushroomState1: {
          name: "蘑菇先生 #1",
          spoiler: "真菌荒地, near 柯尼法",
          wiki: "Mister_Mushroom",
          state: 2
        },
        mrMushroomState2: {
          name: "蘑菇先生 #2",
          spoiler: "王国边缘, near Isma's Grove",
          wiki: "Mister_Mushroom",
          state: 3
        },
        mrMushroomState3: {
          name: "蘑菇先生 #3",
          spoiler: "深邃巢穴, near Galien",
          wiki: "Mister_Mushroom",
          state: 4
        },
        mrMushroomState4: {
          name: "蘑菇先生 #4",
          spoiler: "呼啸悬崖, near Nailmaster Mato",
          wiki: "Mister_Mushroom",
          state: 5
        },
        mrMushroomState5: {
          name: "蘑菇先生 #5",
          spoiler: "古老盆地, near Monarch Wings",
          wiki: "Mister_Mushroom",
          state: 6
        },
        mrMushroomState6: {
          name: "蘑菇先生 #6",
          spoiler: "雾之峡谷, near Overgrown Mound",
          wiki: "Mister_Mushroom",
          state: 7
        },
        mrMushroomState7: {
          name: "蘑菇先生 #7",
          spoiler: "国王山道, game starting location",
          wiki: "Mister_Mushroom",
          state: 8
        },
        pantheonHallownest: {
          name: "P5 Embrace the Void？",
          spoiler: "万神殿: Pantheon of Hallownest",
          wiki: "Pantheon_of_Hallownest"
        },
        /* 
          蘑菇先生 data
          case SplitName.MrMushroom1: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 2; break;
          case SplitName.MrMushroom2: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 3; break;
          case SplitName.MrMushroom3: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 4; break;
          case SplitName.MrMushroom4: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 5; break;
          case SplitName.MrMushroom5: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 6; break;
          case SplitName.MrMushroom6: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 7; break;
          case SplitName.MrMushroom7: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 8; break;
  
          "mrMushroomState": 4, < this is the current location of 蘑菇先生 (呼啸悬崖)
  
          1. Spawn of self, their minds unite, (真菌荒地)
          2. Aside the source of acid blight, (王国边缘, near Isma's Grove)
          3. Aglow in darkest, winding depths, (深邃巢穴, near Galien)
          4. Winds all howl above fossilstone steps, (呼啸悬崖)
          5. Monarchflys in air set still, (古老盆地, near the Monarch Wings location)
          6. To Root's domain and snail once shrill, (雾之峡谷, near Overgrown Mound)
          7. Path of Wyrm, at new lands entered, (国王山道)
          8. There journeys end. The kingdom ventured.
          */
      },
    },

    /* ################ Achievements Essentials -> Bosses ################### */

    achievementsBosses: {
      h2: "成就 - BOSS",
      id: "hk-achievements-bosses",
      description: `Bosses important for unlocking achievements. They don't count or matter towards 112% 游戏完成度.`,
      entries: {
        falseKnightDreamDefeated: {
          name: "失败冠军",
          spoiler: "遗忘十字路, near 假骑士",
          wiki: "Failed_Champion"
        },
        mageLordDreamDefeated: {
          name: "灵魂暴君",
          spoiler: "泪水之城: 灵魂圣所, near Soul Master",
          wiki: "Soul_Tyrant"
        },
        infectedKnightDreamDefeated: {
          name: "失落近亲",
          spoiler: "古老盆地, Broken Vessel location",
          wiki: "Lost_Kin"
        },
        whiteDefenderDefeated: {
          name: "白色防御者",
          spoiler: "皇家水道, Dung Defender, use Desolate Dive",
          wiki: "White_Defender"
        },
        greyPrinceDefeated: {
          name: "灰色王子左特",
          spoiler: "德特茅斯: Bretta's Room (per save choice)",
          wiki: "Grey_Prince_Zote"
        },
        killedHollowKnight: {
          name: "空洞骑士",
          spoiler: "遗忘十字路: Black Egg Temple",
          wiki: "Hollow_Knight"
        },
        /* 
        Absolute Radiance (for P5, achievements)
        Sisters of Battle (for P5, achievements)
        Winged Nosk (for P5, achievements)
        */
        killedFinalBoss: {
          name: "辐光",
          spoiler: "Requires 虚空之心 & Dream Nail 空洞骑士",
          wiki: "Radiance"
        },
      },
    },

    /* ################ 猎人日志 ################### */

    huntersJournal: {
      h2: "猎人日志",
      id: "hk-journal",
      description: `All the 146 base-game 猎人日志 entries that are counted for Hunter's Mark and Keen Hunter/True Hunter achievements. The 17 most commonly missed Journal entries are right at the top of this list.<br>
      Numbers above: <b>Completed/Encountered</b> of <b>146</b> Base Total<br>
      <i class="icon-ok-squared"></i>= note completed.<br>
      <i class="icon-ok-squared partial"></i>= entry discovered, but note not completed.<br>
      <i class="icon-cancel"></i>= entry not yet discovered.<br>
      <b>(no.)</b> = amount left to complete note.`,
      percent: 0,
      midPercent: 0,
      maxPercent: 146,
      entries: {
        PrayerSlug: {
          name: "Maggot (2)",
          nameDefault: "Maggot",
          spoiler: "遗忘十字路: 假骑士 secret room",
          wiki: "Maggot"
        },
        OrangeScuttler: {
          name: "Lightseed (20)",
          nameDefault: "Lightseed",
          spoiler: "Infected Crossroads",
          wiki: "Lightseed"
        },
        Pigeon: {
          name: "Maskfly (15)",
          nameDefault: "Maskfly",
          spoiler: "苍绿之径, 王后花园",
          wiki: "Maskfly"
        },
        LazyFlyer: {
          name: "Aluba (1)",
          nameDefault: "Aluba",
          spoiler: "Lake of Unn, 王后花园 (near White Lady)",
          wiki: "Aluba"
        },
        AcidFlyer: {
          name: "Duranda (8)",
          nameDefault: "Duranda",
          spoiler: "苍绿之径: Nailmaster Sheo's tent path",
          wiki: "Duranda"
        },
        AcidWalker: {
          name: "Durandoo (8)",
          nameDefault: "Durandoo",
          spoiler: "苍绿之径, 王后花园",
          wiki: "Durandoo"
        },
        PlantShooter: {
          name: "Gulka (15)",
          nameDefault: "Gulka",
          spoiler: "苍绿之径: left of Stone Sanctuary",
          wiki: "Gulka"
        },
        MushroomTurret: {
          name: "Sporg (20)",
          nameDefault: "Sporg",
          spoiler: "真菌荒地",
          wiki: "Sporg"
        },
        ZapBug: {
          name: "Charged Lumafly (1)",
          nameDefault: "Charged Lumafly",
          spoiler: "雾之峡谷: Teacher's Archives (tank)",
          wiki: "Charged_Lumafly"
        },
        LaserBug: {
          name: "Crystal Crawler (15)",
          nameDefault: "Crystal Crawler",
          spoiler: "水晶山峰: try to use spells",
          wiki: "Crystal_Crawler"
        },
        GorgeousHusk: {
          name: "Gorgeous Husk (1)",
          nameDefault: "Gorgeous Husk",
          spoiler: "泪水之城: secret room",
          wiki: "Gorgeous_Husk"
        },
        Worm: {
          name: "Goam (10)",
          nameDefault: "Goam",
          spoiler: "Infected Crossroads: near 真菌荒地 entrance",
          wiki: "Goam"
        },
        BigCentipede: {
          name: "Garpede (10)",
          nameDefault: "Garpede",
          spoiler: "深邃巢穴: right of Hot Spring",
          wiki: "Garpede"
        },
        AbyssTendril: {
          name: "Void Tendrils (10)",
          nameDefault: "Void Tendrils",
          spoiler: "深渊: secret room near Shade Cloak",
          wiki: "Void_Tendrils"
        },
        LobsterLancer: {
          name: "God Tamer (1)",
          nameDefault: "God Tamer",
          spoiler: "愚人斗兽场: Trial of the Fool boss",
          wiki: "God_Tamer"
        },
        FatFluke: {
          name: "Flukemunga (8)",
          nameDefault: "Flukemunga",
          spoiler: "皇家水道: secret area, left of bench",
          wiki: "Flukemunga"
        },
        PaleLurker: {
          name: "Pale Lurker (1)",
          nameDefault: "Pale Lurker",
          spoiler: "愚人斗兽场: top right breakable wall",
          wiki: "Pale_Lurker"
        },
        Crawler: {
          name: "Crawlid (0)",
          nameDefault: "Crawlid",
          spoiler: "国王山道, 遗忘十字路, 苍绿之径",
          wiki: "Crawlid"
        },
        Buzzer: {
          name: "Vengefly (45)",
          nameDefault: "Vengefly",
          spoiler: "呼啸悬崖, 遗忘十字路, 泪水之城",
          wiki: "Vengefly"
        },
        Bouncer: {
          name: "Gruzzer (25)",
          nameDefault: "Gruzzer",
          spoiler: "遗忘十字路",
          wiki: "Gruzzer"
        },
        Climber: {
          name: "Tiktik (30)",
          nameDefault: "Tiktik",
          spoiler: "遗忘十字路, 呼啸悬崖, 苍绿之径",
          wiki: "Tiktik"
        },
        Hopper: {
          name: "Hopper (25)",
          nameDefault: "Hopper",
          spoiler: "王国边缘",
          wiki: "Hopper"
        },
        Spitter: {
          name: "Aspid Hunter (20)",
          nameDefault: "Aspid Hunter",
          spoiler: "遗忘十字路, 古老盆地, The Collector",
          wiki: "Aspid_Hunter"
        },
        Hatcher: {
          name: "Aspid Mother (15)",
          nameDefault: "Aspid Mother",
          spoiler: "遗忘十字路, mainly next to the Tram station",
          wiki: "Aspid_Mother"
        },
        Hatchling: {
          name: "Aspid Hatchling (30)",
          nameDefault: "Aspid Hatchling",
          spoiler: "遗忘十字路, summoned by Aspid Mother",
          wiki: "Aspid_Hatchling"
        },
        ZombieRunner: {
          name: "Wandering Husk (35)",
          nameDefault: "Wandering Husk",
          spoiler: "遗忘十字路, 泪水之城, 深邃巢穴",
          wiki: "Wandering_Husk"
        },
        ZombieHornhead: {
          name: "Husk Hornhead (35)",
          nameDefault: "Husk Hornhead",
          spoiler: "遗忘十字路, 泪水之城, 深邃巢穴",
          wiki: "Husk_Hornhead"
        },
        ZombieLeaper: {
          name: "Leaping Husk (35)",
          nameDefault: "Leaping Husk",
          spoiler: "遗忘十字路, 泪水之城, 呼啸悬崖",
          wiki: "Leaping_Husk"
        },
        ZombieBarger: {
          name: "Husk Bully (35)",
          nameDefault: "Husk Bully",
          spoiler: "遗忘十字路, 泪水之城, 呼啸悬崖",
          wiki: "Husk_Bully"
        },
        ZombieShield: {
          name: "Husk Warrior (10)",
          nameDefault: "Husk Warrior",
          spoiler: "遗忘十字路: right of the 鹿角虫车站",
          wiki: "Husk_Warrior"
        },
        ZombieGuard: {
          name: "Husk Guard (6)",
          nameDefault: "Husk Guard",
          spoiler: "遗忘十字路: upper right area",
          wiki: "Husk_Guard"
        },
        BigBuzzer: {
          name: "复仇蝇之王 (2)",
          nameDefault: "复仇蝇之王",
          spoiler: "苍绿之径, Colosseum: Trial of the Warrior",
          wiki: "Vengefly_King"
        },
        BigFly: {
          name: "Gruz Mother (3)",
          nameDefault: "Gruz Mother",
          spoiler: "遗忘十字路: lower right area",
          wiki: "Gruz_Mother"
        },
        Mawlek: {
          name: "Brooding Mawlek (1)",
          nameDefault: "Brooding Mawlek",
          spoiler: "遗忘十字路: down from 虫爷爷",
          wiki: "Brooding_Mawlek"
        },
        FalseKnight: {
          name: "假骑士 (1)",
          nameDefault: "假骑士",
          spoiler: "遗忘十字路: middle area map symbol",
          wiki: "False_Knight"
        },
        Roller: {
          name: "Baldur (20)",
          nameDefault: "Baldur",
          spoiler: "祖先山丘, Crystallised Mound, 呼啸悬崖",
          wiki: "Baldur"
        },
        Blocker: {
          name: "Elder Baldur (1)",
          nameDefault: "Elder Baldur",
          spoiler: "祖先山丘, 苍绿之径, 呼啸悬崖",
          wiki: "Elder_Baldur"
        },
        MossmanRunner: {
          name: "Mosskin (25)",
          nameDefault: "Mosskin",
          spoiler: "苍绿之径: usually near a Volatile Mosskin",
          wiki: "Mosskin"
        },
        MossmanShaker: {
          name: "Volatile Mosskin (25)",
          nameDefault: "Volatile Mosskin",
          spoiler: "苍绿之径",
          wiki: "Volatile_Mosskin"
        },
        Mosquito: {
          name: "Squit (25)",
          nameDefault: "Squit",
          spoiler: "苍绿之径 and the Overgrown Mound",
          wiki: "Squit"
        },
        BlobFlyer: {
          name: "Obble (20)",
          nameDefault: "Obble",
          spoiler: "苍绿之径: top left of Stone Sanctuary",
          wiki: "Obble"
        },
        FungifiedZombie: {
          name: "Fungified Husk (10)",
          nameDefault: "Fungified Husk",
          spoiler: "Found only in 真菌荒地",
          wiki: "Fungified_Husk"
        },
        MossCharger: {
          name: "Moss Charger (15)",
          nameDefault: "Moss Charger",
          spoiler: "Found only in 苍绿之径",
          wiki: "Moss_Charger"
        },
        MegaMossCharger: {
          name: "大型苔藓冲锋者 (1)",
          nameDefault: "大型苔藓冲锋者",
          spoiler: "苍绿之径: bottom left near 雾之峡谷",
          wiki: "Massive_Moss_Charger"
        },
        SnapperTrap: {
          name: "Fool Eater (15)",
          nameDefault: "Fool Eater",
          spoiler: "苍绿之径 and 王后花园",
          wiki: "Fool_Eater"
        },
        MossKnight: {
          name: "Moss Knight (8)",
          nameDefault: "Moss Knight",
          spoiler: "Found only in 苍绿之径",
          wiki: "Moss_Knight"
        },
        GrassHopper: {
          name: "Loodle (15)",
          nameDefault: "Loodle",
          spoiler: "Found only in 王后花园",
          wiki: "Loodle"
        },
        MossFlyer: {
          name: "Mossfly (25)",
          nameDefault: "Mossfly",
          spoiler: "王后花园, Overgrown Mound",
          wiki: "Mossfly"
        },
        MossKnightFat: {
          name: "Mossy Vagabond (10)",
          nameDefault: "Mossy Vagabond",
          spoiler: "王后花园: near exit to 真菌荒地",
          wiki: "Mossy_Vagabond"
        },
        MossWalker: {
          name: "Mosscreep (30)",
          nameDefault: "Mosscreep",
          spoiler: "苍绿之径 and 王后花园",
          wiki: "Mosscreep"
        },
        InfectedKnight: {
          name: "Broken Vessel (1)",
          nameDefault: "Broken Vessel",
          spoiler: "古老盆地: far left, needs Crystal Heart",
          wiki: "Broken_Vessel"
        },
        Jellyfish: {
          name: "Ooma (12)",
          nameDefault: "Ooma",
          spoiler: "雾之峡谷: almost everywhere",
          wiki: "Ooma"
        },
        JellyCrawler: {
          name: "Uoma (20)",
          nameDefault: "Uoma",
          spoiler: "雾之峡谷: almost everywhere",
          wiki: "Uoma"
        },
        MegaJellyfish: {
          name: "Uumuu (1)",
          nameDefault: "Uumuu",
          spoiler: "雾之峡谷: inside Teacher's Archives",
          wiki: "Uumuu"
        },
        FungoonBaby: {
          name: "Fungling (30)",
          nameDefault: "Fungling",
          spoiler: "真菌荒地, Fungal Core, 垃圾坑",
          wiki: "Fungling"
        },
        Mantis: {
          name: "Mantis Warrior (25)",
          nameDefault: "Mantis Warrior",
          spoiler: "真菌荒地: Mantis Village",
          wiki: "Mantis_Warrior"
        },
        MushroomRoller: {
          name: "Shrumal Warrior (20)",
          nameDefault: "Shrumal Warrior",
          spoiler: "真菌荒地, Fungal Core",
          wiki: "Shrumal_Warrior"
        },
        MushroomBrawler: {
          name: "Shrumal Ogre (8)",
          nameDefault: "Shrumal Ogre",
          spoiler: "真菌荒地, bottom of Fungal Core",
          wiki: "Shrumal_Ogre"
        },
        MushroomBaby: {
          name: "Shrumeling (20)",
          nameDefault: "Shrumeling",
          spoiler: "真菌荒地, near Shrumal Warriors",
          wiki: "Shrumeling"
        },
        MantisFlyerChild: {
          name: "Mantis Youth (25)",
          nameDefault: "Mantis Youth",
          spoiler: "真菌荒地: Mantis Village",
          wiki: "Mantis_Youth"
        },
        FungusFlyer: {
          name: "Fungoon (20)",
          nameDefault: "Fungoon",
          spoiler: "Found only in 真菌荒地",
          wiki: "Fungoon"
        },
        FungCrawler: {
          name: "Ambloom (15)",
          nameDefault: "Ambloom",
          spoiler: "真菌荒地, Fungal Core",
          wiki: "Ambloom"
        },
        MantisLord: {
          name: "Mantis Lords (1)",
          nameDefault: "Mantis Lords",
          spoiler: "真菌荒地: Mantis Village, switch lever",
          wiki: "Mantis_Lords"
        },
        BlackKnight: {
          name: "Watcher Knight (10)",
          nameDefault: "Watcher Knight",
          spoiler: "泪水之城: Watcher's Spire, Monarch Wings",
          wiki: "Watcher_Knight"
        },
        ElectricMage: {
          name: "Volt Twister (6)",
          nameDefault: "Volt Twister",
          spoiler: "愚人斗兽场: Trial of the Fool",
          wiki: "Volt_Twister"
        },
        Mage: {
          name: "Soul Twister (20)",
          nameDefault: "Soul Twister",
          spoiler: "泪水之城: 灵魂圣所, Trial of the Fool",
          wiki: "Soul_Twister"
        },
        MageKnight: {
          name: "Soul Warrior (2)",
          nameDefault: "Soul Warrior",
          spoiler: "泪水之城: 灵魂圣所, Trial of the Fool",
          wiki: "Soul_Warrior"
        },
        RoyalDandy: {
          name: "Husk Dandy (25)",
          nameDefault: "Husk Dandy",
          spoiler: "泪水之城: right section",
          wiki: "Husk_Dandy"
        },
        RoyalCoward: {
          name: "Cowardly Husk (25)",
          nameDefault: "Cowardly Husk",
          spoiler: "泪水之城: right section",
          wiki: "Cowardly_Husk"
        },
        RoyalPlumper: {
          name: "Gluttonous Husk (25)",
          nameDefault: "Gluttonous Husk",
          spoiler: "泪水之城: right section",
          wiki: "Gluttonous_Husk"
        },
        FlyingSentrySword: {
          name: "Winged Sentry (30)",
          nameDefault: "Winged Sentry",
          spoiler: "泪水之城, 皇家水道, 古老盆地",
          wiki: "Winged_Sentry"
        },
        FlyingSentryJavelin: {
          name: "Lance Sentry (25)",
          nameDefault: "Lance Sentry",
          spoiler: "泪水之城, 皇家水道, 古老盆地",
          wiki: "Lance_Sentry"
        },
        Sentry: {
          name: "Husk Sentry (25)",
          nameDefault: "Husk Sentry",
          spoiler: "泪水之城, 皇家水道, Isma's Grove",
          wiki: "Husk_Sentry"
        },
        SentryFat: {
          name: "Heavy Sentry (20)",
          nameDefault: "Heavy Sentry",
          spoiler: "Found only in 泪水之城",
          wiki: "Heavy_Sentry"
        },
        MageBlob: {
          name: "Mistake (25)",
          nameDefault: "Mistake",
          spoiler: "泪水之城: 灵魂圣所, Trial of the Fool",
          wiki: "Mistake"
        },
        GreatShieldZombie: {
          name: "Great Husk Sentry (10)",
          nameDefault: "Great Husk Sentry",
          spoiler: "泪水之城, Watcher's Spire",
          wiki: "Great_Husk_Sentry"
        },
        JarCollector: {
          name: "The Collector (1)",
          nameDefault: "The Collector",
          spoiler: "泪水之城: Tower of Love, Love Key",
          wiki: "The_Collector"
        },
        MageBalloon: {
          name: "Folly (15)",
          nameDefault: "Folly",
          spoiler: "泪水之城: 灵魂圣所, Trial of the Fool",
          wiki: "Folly"
        },
        MageLord: {
          name: "Soul Master (1)",
          nameDefault: "Soul Master",
          spoiler: "泪水之城: 灵魂圣所",
          wiki: "Soul_Master"
        },
        FlipHopper: {
          name: "Pilflip (20)",
          nameDefault: "Pilflip",
          spoiler: "皇家水道: central part",
          wiki: "Pilflip"
        },
        Flukeman: {
          name: "Flukemon (20)",
          nameDefault: "Flukemon",
          spoiler: "皇家水道: central part",
          wiki: "Flukemon"
        },
        Inflater: {
          name: "Hwurmp (20)",
          nameDefault: "Hwurmp",
          spoiler: "皇家水道, Isma's Grove",
          wiki: "Hwurmp"
        },
        Flukefly: {
          name: "Flukefey (15)",
          nameDefault: "Flukefey",
          spoiler: "Found only in 皇家水道",
          wiki: "Flukefey"
        },
        FlukeMother: {
          name: "吸虫之母 (1)",
          nameDefault: "吸虫之母",
          spoiler: "皇家水道: bottom, Desolate Dive",
          wiki: "Flukemarm"
        },
        DungDefender: {
          name: "Dung Defender (1)",
          nameDefault: "Dung Defender",
          spoiler: "皇家水道: right area",
          wiki: "Dung_Defender"
        },
        CrystalCrawler: {
          name: "Glimback (15)",
          nameDefault: "Glimback",
          spoiler: "水晶山峰, 遗忘十字路 toll booth",
          wiki: "Glimback"
        },
        CrystalFlyer: {
          name: "Crystal Hunter (20)",
          nameDefault: "Crystal Hunter",
          spoiler: "水晶山峰, Crystallized Mound",
          wiki: "Crystal_Hunter"
        },
        BeamMiner: {
          name: "Crystallised Husk (15)",
          nameDefault: "Crystallised Husk",
          spoiler: "水晶山峰: top right areas",
          wiki: "Crystallised_Husk"
        },
        ZombieMiner: {
          name: "Husk Miner (20)",
          nameDefault: "Husk Miner",
          spoiler: "Found only in 水晶山峰",
          wiki: "Husk_Miner"
        },
        MegaBeamMiner: {
          name: "水晶守卫 (2)",
          nameDefault: "水晶守卫",
          spoiler: "水晶山峰: center bench area",
          wiki: "Crystal_Guardian"
        },
        MinesCrawler: {
          name: "Shardmite (15)",
          nameDefault: "Shardmite",
          spoiler: "Found only in 水晶山峰",
          wiki: "Shardmite"
        },
        AngryBuzzer: {
          name: "Furious Vengefly (15)",
          nameDefault: "Furious Vengefly",
          spoiler: "Infected Crossroads, Trial of the Fool",
          wiki: "Furious_Vengefly"
        },
        BurstingBouncer: {
          name: "Volatile Gruzzer (15)",
          nameDefault: "Volatile Gruzzer",
          spoiler: "Infected Crossroads, Colosseum Trials",
          wiki: "Volatile_Gruzzer"
        },
        BurstingZombie: {
          name: "Violent Husk (15)",
          nameDefault: "Violent Husk",
          spoiler: "Found only in Infected Crossroads",
          wiki: "Violent_Husk"
        },
        SpittingZombie: {
          name: "Slobbering Husk (15)",
          nameDefault: "Slobbering Husk",
          spoiler: "Found only in Infected Crossroads",
          wiki: "Slobbering_Husk"
        },
        BabyCentipede: {
          name: "Dirtcarver (35)",
          nameDefault: "Dirtcarver",
          spoiler: "深邃巢穴, Carver Hatcher",
          wiki: "Dirtcarver"
        },
        CentipedeHatcher: {
          name: "Carver Hatcher (15)",
          nameDefault: "Carver Hatcher",
          spoiler: "深邃巢穴: top area Failed Tramway",
          wiki: "Carver_Hatcher"
        },
        LesserMawlek: {
          name: "Lesser Mawlek (10)",
          nameDefault: "Lesser Mawlek",
          spoiler: "古老盆地: left of tram, Trial of the Fool",
          wiki: "Lesser_Mawlek"
        },
        SlashSpider: {
          name: "Stalking Devout (15)",
          nameDefault: "Stalking Devout",
          spoiler: "深邃巢穴: left area, 遥远的村庄",
          wiki: "Stalking_Devout"
        },
        SpiderCorpse: {
          name: "Corpse Creeper (15)",
          nameDefault: "Corpse Creeper",
          spoiler: "Found only in 深邃巢穴: middle area",
          wiki: "Corpse_Creeper"
        },
        ShootSpider: {
          name: "Deephunter (20)",
          nameDefault: "Deephunter",
          spoiler: "Found only in 深邃巢穴",
          wiki: "Deephunter"
        },
        MiniSpider: {
          name: "Deepling (25)",
          nameDefault: "Deepling",
          spoiler: "深邃巢穴: left areas",
          wiki: "Deepling"
        },
        SpiderFlyer: {
          name: "Little Weaver (20)",
          nameDefault: "Little Weaver",
          spoiler: "深邃巢穴: left areas",
          wiki: "Little_Weaver"
        },
        MimicSpider: {
          name: "Nosk (1)",
          nameDefault: "Nosk",
          spoiler: "深邃巢穴: left of Hot Spring, use Crystal Heart",
          wiki: "Nosk"
        },
        BeeHatchling: {
          name: "Hiveling (30)",
          nameDefault: "Hiveling",
          spoiler: "蜂巢, 王国边缘",
          wiki: "Hiveling"
        },
        BeeStinger: {
          name: "Hive Soldier (15)",
          nameDefault: "Hive Soldier",
          spoiler: "Found only in the Hive",
          wiki: "Hive_Soldier"
        },
        BigBee: {
          name: "Hive Guardian (12)",
          nameDefault: "Hive Guardian",
          spoiler: "Found only in the Hive",
          wiki: "Hive_Guardian"
        },
        HiveKnight: {
          name: "Hive Knight (1)",
          nameDefault: "Hive Knight",
          spoiler: "蜂巢: right area",
          wiki: "Hive_Knight"
        },
        BlowFly: {
          name: "Boofly (20)",
          nameDefault: "Boofly",
          spoiler: "Found only in 王国边缘",
          wiki: "Boofly"
        },
        CeilingDropper: {
          name: "Belfly (15)",
          nameDefault: "Belfly",
          spoiler: "泪水之城, 皇家水道, 王国边缘",
          wiki: "Belfly"
        },
        GiantHopper: {
          name: "Great Hopper (10)",
          nameDefault: "Great Hopper",
          spoiler: "王国边缘, Trial of the Conqueror",
          wiki: "Great_Hopper"
        },
        GrubMimic: {
          name: "Grub Mimic (5)",
          nameDefault: "Grub Mimic",
          spoiler: "水晶山峰, 深邃巢穴, Trial of the Conqueror",
          wiki: "Grub_Mimic"
        },
        MawlekTurret: {
          name: "Mawlurk (10)",
          nameDefault: "Mawlurk",
          spoiler: "古老盆地: left area",
          wiki: "Mawlurk"
        },
        HealthScuttler: {
          name: "Lifeseed (10)",
          nameDefault: "Lifeseed",
          spoiler: "Hallownest: inside Lifeblood Cocoons",
          wiki: "Lifeseed"
        },
        ZombieHive: {
          name: "Husk Hive (10)",
          nameDefault: "Husk Hive",
          spoiler: "found only in the Hive",
          wiki: "Husk_Hive"
        },
        Hornet: {
          name: "Hornet (2)",
          nameDefault: "Hornet",
          spoiler: "苍绿之径, 王国边缘, 万神殿",
          wiki: "Hornet"
        },
        AbyssCrawler: {
          name: "Shadow Creeper (20)",
          nameDefault: "Shadow Creeper",
          spoiler: "古老盆地, 深渊",
          wiki: "Shadow_Creeper"
        },
        SuperSpitter: {
          name: "Primal Aspid (25)",
          nameDefault: "Primal Aspid",
          spoiler: "王国边缘, 愚人斗兽场 Trials",
          wiki: "Primal_Aspid"
        },
        Sibling: {
          name: "Sibling (25)",
          nameDefault: "Sibling",
          spoiler: "深渊, lighthouse, Birthplace",
          wiki: "Sibling"
        },
        PalaceFly: {
          name: "Wingmould (10)",
          nameDefault: "Wingmould",
          spoiler: "Found only in the 白色宫殿",
          wiki: "Wingmould"
        },
        EggSac: {
          name: "Bluggsac (5)",
          nameDefault: "Bluggsac",
          spoiler: "皇家水道, 水晶山峰, 深邃巢穴, Hallownest",
          wiki: "Bluggsac"
        },
        Mummy: {
          name: "Entombed Husk (10)",
          nameDefault: "Entombed Husk",
          spoiler: "安息之地: bottom area tombs",
          wiki: "Entombed_Husk"
        },
        OrangeBalloon: {
          name: "Infected Balloon (10)",
          nameDefault: "Infected Balloon",
          spoiler: "古老盆地: left areas",
          wiki: "Infected_Balloon"
        },
        HeavyMantis: {
          name: "Mantis Traitor (15)",
          nameDefault: "Mantis Traitor",
          spoiler: "王后花园, Trial of the Fool",
          wiki: "Mantis_Traitor"
        },
        TraitorLord: {
          name: "Traitor Lord (1)",
          nameDefault: "Traitor Lord",
          spoiler: "王后花园: upper left, Shade Cloak",
          wiki: "Traitor_Lord"
        },
        MantisHeavyFlyer: {
          name: "Mantis Petra (16)",
          nameDefault: "Mantis Petra",
          spoiler: "王后花园, Trial of the Fool",
          wiki: "Mantis_Petra"
        },
        GardenZombie: {
          name: "Spiny Husk (20)",
          nameDefault: "Spiny Husk",
          spoiler: "Found only in 王后花园",
          wiki: "Spiny_Husk"
        },
        RoyalGuard: {
          name: "Kingsmould (2)",
          nameDefault: "Kingsmould",
          spoiler: "Found only in the 白色宫殿",
          wiki: "Kingsmould"
        },
        WhiteRoyal: {
          name: "Royal Retainer (10)",
          nameDefault: "Royal Retainer",
          spoiler: "Found only in the 白色宫殿",
          wiki: "Royal_Retainer"
        },
        Oblobble: {
          name: "奥波路波 (3)",
          nameDefault: "奥波路波",
          spoiler: "Trial of the Conqueror, 万神殿",
          wiki: "Oblobbles"
        },
        Blobble: {
          name: "Battle Obble (15)",
          nameDefault: "Battle Obble",
          spoiler: "愚人斗兽场: Trials #2 and #3",
          wiki: "Battle_Obble"
        },
        ColMosquito: {
          name: "Armoured Squit (15)",
          nameDefault: "Armoured Squit",
          spoiler: "愚人斗兽场: Trials #2 and #3",
          wiki: "Armoured_Squit"
        },
        ColRoller: {
          name: "Sharp Baldur (20)",
          nameDefault: "Sharp Baldur",
          spoiler: "愚人斗兽场: Trials #1 and #3",
          wiki: "Sharp_Baldur"
        },
        ColFlyingSentry: {
          name: "Winged Fool (25)",
          nameDefault: "Winged Fool",
          spoiler: "愚人斗兽场: Trials #2 and #3",
          wiki: "Winged_Fool"
        },
        ColMiner: {
          name: "Sturdy Fool (25)",
          nameDefault: "Sturdy Fool",
          spoiler: "愚人斗兽场: Trials #1 and #3",
          wiki: "Sturdy_Fool"
        },
        ColShield: {
          name: "Shielded Fool (25)",
          nameDefault: "Shielded Fool",
          spoiler: "愚人斗兽场: All Trials",
          wiki: "Shielded_Fool"
        },
        ColWorm: {
          name: "Heavy Fool (20)",
          nameDefault: "Heavy Fool",
          spoiler: "愚人斗兽场: Trials #2 and #3",
          wiki: "Heavy_Fool"
        },
        ColHopper: {
          name: "Death Loodle (15)",
          nameDefault: "Death Loodle",
          spoiler: "愚人斗兽场: Trial of the Fool",
          wiki: "Death_Loodle"
        },
        GhostAladar: {
          name: "Gorb (1)",
          nameDefault: "Gorb",
          spoiler: "呼啸悬崖: top area",
          wiki: "Gorb"
        },
        GhostXero: {
          name: "Xero (1)",
          nameDefault: "Xero",
          spoiler: "安息之地: left area",
          wiki: "Xero"
        },
        GhostHu: {
          name: "Elder Hu (1)",
          nameDefault: "Elder Hu",
          spoiler: "真菌荒地: above acid bridge",
          wiki: "Elder_Hu"
        },
        GhostMarmu: {
          name: "Marmu (1)",
          nameDefault: "Marmu",
          spoiler: "王后花园: left of 鹿角虫车站",
          wiki: "Marmu"
        },
        GhostNoEyes: {
          name: "No Eyes (1)",
          nameDefault: "No Eyes",
          spoiler: "苍绿之径: Stone Sanctuary, requires 光蝇灯笼",
          wiki: "No_Eyes"
        },
        GhostMarkoth: {
          name: "Markoth (1)",
          nameDefault: "Markoth",
          spoiler: "王国边缘, requires Shade Cloak",
          wiki: "Markoth"
        },
        GhostGalien: {
          name: "Galien (1)",
          nameDefault: "Galien",
          spoiler: "深邃巢穴: below Failed Tramway",
          wiki: "Galien"
        },
        ShadeJournal: {
          name: "Shade (0)",
          nameDefault: "Shade",
          spoiler: "Unlocked automatically after getting the Journal",
          wiki: "Shade"
        },
      },
    },

    /* ################ Optional Journal Entries ################### */

    huntersJournalOptional: {
      h2: "Optional Journal Entries",
      id: "hk-journal-optional",
      description: "The remaining 猎人日志 entries which don't count for Hunter's Mark and Keen/True Hunter achievements. Note: 6 entries can be permanently unobtainable, depending on your choices in the save file (<span class='spoiler-span blurred'>灰色王子左特, all 3 Zotelings, Grimmkin Nightmare and Nightmare King</span>).",
      entries: {
        HunterMark: {
          name: "Hunter's Mark (1)",
          nameDefault: "Hunter's Mark",
          spoiler: "苍绿之径: Hunter, complete base 146 Hunter Notes",
          wiki: "Hunter's_Mark"
        },
        MenderBug: {
          name: "Menderbug (1)",
          nameDefault: "Menderbug",
          spoiler: "遗忘十字路: destroy sign",
          wiki: "Menderbug"
        },
        Zote: {
          name: "Zote (1)",
          nameDefault: "Zote",
          spoiler: "Colosseum: Trial of the Warrior or The Eternal Ordeal",
          wiki: "Zote"
        },
        HollowKnight: {
          name: "空洞骑士 (1)",
          nameDefault: "空洞骑士",
          spoiler: "遗忘十字路: Black Egg Temple",
          wiki: "Hollow_Knight"
        },
        FinalBoss: {
          name: "辐光 (1)",
          nameDefault: "辐光",
          spoiler: "Requires 虚空之心 & Dream Nail 空洞骑士",
          wiki: "Radiance"
        },
        WhiteDefender: {
          name: "白色防御者 (1)",
          nameDefault: "白色防御者",
          spoiler: "皇家水道: Dung Defender, Desolate Dive",
          wiki: "White_Defender"
        },
        GreyPrince: {
          name: "灰色王子左特 (1)",
          nameDefault: "灰色王子左特",
          spoiler: "德特茅斯: Bretta's Room (per save choice)",
          wiki: "Grey_Prince_Zote"
        },
        ZotelingBalloon: {
          name: "Volatile Zoteling (1)",
          nameDefault: "Volatile Zoteling",
          spoiler: "Only from 灰色王子左特, Battle 3+",
          wiki: "Volatile_Zoteling"
        },
        ZotelingHopper: {
          name: "Hopping Zoteling (1)",
          nameDefault: "Hopping Zoteling",
          spoiler: "Only from 灰色王子左特, Battle 2+",
          wiki: "Hopping_Zoteling"
        },
        ZotelingBuzzer: {
          name: "Winged Zoteling (1)",
          nameDefault: "Winged Zoteling",
          spoiler: "Only from 灰色王子左特, Battle 1+",
          wiki: "Winged_Zoteling"
        },
        FlameBearerSmall: {
          name: "Grimmkin Novice (3)",
          nameDefault: "Grimmkin Novice",
          spoiler: "苍绿之径, 水晶山峰, 泪水之城",
          wiki: "Grimmkin_Novice"
        },
        FlameBearerMed: {
          name: "Grimmkin Master (4)",
          nameDefault: "Grimmkin Master",
          spoiler: "国王山道, 安息之地, 王国边缘",
          wiki: "Grimmkin_Master"
        },
        FlameBearerLarge: {
          name: "Grimmkin Nightmare (5)",
          nameDefault: "Grimmkin Nightmare",
          spoiler: "Fungal Core, 皇家水道, Hive",
          wiki: "Grimmkin_Nightmare"
        },
        Grimm: {
          name: "Troupe Master Grimm (1)",
          nameDefault: "Troupe Master Grimm",
          spoiler: "德特茅斯: collect 6 flames",
          wiki: "Grimm"
        },
        NightmareGrimm: {
          name: "Nightmare King (1)",
          nameDefault: "Nightmare King",
          spoiler: "德特茅斯: collect 9 flames",
          wiki: "Nightmare_King"
        },
        BindingSeal: {
          name: "Seal of Binding (1)",
          nameDefault: "Seal of Binding",
          spoiler: "白色宫殿: Path of Pain completion",
          wiki: "Seal_of_Binding"
        },
        NailBros: {
          name: "骨钉兄弟奥罗与马托 (1)",
          nameDefault: "骨钉兄弟奥罗与马托",
          spoiler: "万神殿: Pantheon of the Master",
          wiki: "Brothers_Oro_%26_Mato"
        },
        Paintmaster: {
          name: "绘画大师席奥 (1)",
          nameDefault: "绘画大师席奥",
          spoiler: "万神殿: Pantheon of the Artist",
          wiki: "Paintmaster_Sheo"
        },
        Nailsage: {
          name: "伟大骨钉贤者斯莱 (1)",
          nameDefault: "伟大骨钉贤者斯莱",
          spoiler: "万神殿: Pantheon of the Sage",
          wiki: "Great_Nailsage_Sly"
        },
        HollowKnightPrime: {
          name: "纯粹容器 (1)",
          nameDefault: "纯粹容器",
          spoiler: "万神殿: Pantheon of the Knight",
          wiki: "Pure_Vessel"
        },
        GodseekerMask: {
          name: "Weathered Mask (1)",
          nameDefault: "Weathered Mask",
          spoiler: "Land of Storms: All Pantheons & Bindings",
          wiki: "Weathered_Mask"
        },
        VoidIdol_1: {
          name: "Void Idol Attuned (1)",
          nameDefault: "Void Idol Attuned",
          spoiler: "诸神堂: Defeat All (Attuned)",
          wiki: "Void_Idol"
        },
        VoidIdol_2: {
          name: "Void Idol Ascended (1)",
          nameDefault: "Void Idol Ascended",
          spoiler: "诸神堂: Defeat All (Ascended)",
          wiki: "Void_Idol"
        },
        VoidIdol_3: {
          name: "Void Idol Radiant (1)",
          nameDefault: "Void Idol Radiant",
          spoiler: "诸神堂: Defeat All (Radiant)",
          wiki: "Void_Idol"
        },
      },
    },

    /* ###################################### Collectibles -> 护符 Notches ############################################## */

    charmNotches: {
      h2: "护符槽",
      id: "hk-charm-notches",
      description: `护符槽 are required to equip 护符. They can be found in the game world, bought from Salubra or won from certain challenges.`,
      percent: 0,
      maxPercent: 8,
      entries: {
        notchShroomOgres: {
          name: "护符槽 #1",
          spoiler: "真菌荒地: Shroom Ogres room",
          wiki: "Category:Charms#Notches"
        },
        salubraNotch1: {
          name: "护符槽 #2",
          spoiler: "Salubra: 120 Geo + 5 护符 found",
          wiki: "Category:Charms#Notches"
        },
        salubraNotch2: {
          name: "护符槽 #3",
          spoiler: "Salubra: 500 Geo + 10 护符 found",
          wiki: "Category:Charms#Notches"
        },
        salubraNotch3: {
          name: "护符槽 #4",
          spoiler: "Salubra: 900 Geo + 18 护符 found",
          wiki: "Category:Charms#Notches"
        },
        salubraNotch4: {
          name: "护符槽 #5",
          spoiler: "Salubra: 1400 Geo + 25 护符 found",
          wiki: "Category:Charms#Notches"
        },
        colosseumBronzeCompleted: {
          name: "护符槽 #6",
          spoiler: "愚人斗兽场: Trial of the Warrior",
          wiki: "Category:Charms#Notches"
        },
        notchFogCanyon: {
          name: "护符槽 #7",
          spoiler: "雾之峡谷: explosive eggs room",
          wiki: "Category:Charms#Notches"
        },
        gotGrimmNotch: {
          name: "护符槽 #8",
          spoiler: "德特茅斯: Troupe Leader Grimm",
          wiki: "Category:Charms#Notches"
        },
      },
    },

    /* ###################################### Collectibles -> 幼虫 ############################################## */

    grubs: {
      h2: "幼虫",
      id: "hk-grubs",
      description: `Creatures found trapped in glass jars throughout Hallownest. They can be freed from their jar after which the 虫爷爷 grants a reward for each 幼虫 that is saved.<br>
      <b>Note:</b> Due to a bug in recent versions of 空洞骑士, 幼虫 #33 and #34 (The Collector/Tower of Love) are not marked as released correctly in the save file. As a workaround for this bug, when 幼虫 #32 is detected as released, #33 and #34 are automatically marked as released too in this app.`,
      percent: 0,
      maxPercent: 46,
      entries: {
        grub1: {
          name: "幼虫 #1",
          spoiler: "遗忘十字路: Acid Corridor",
          id: "Grub Bottle",
          sceneName: "Crossroads_35",
          wiki: "Grub#Rewards_and_locations"
        },
        grub2: {
          name: "幼虫 #2",
          spoiler: "遗忘十字路: Left of Dark Corridor",
          id: "Grub Bottle",
          sceneName: "Crossroads_03",
          wiki: "Grub#Rewards_and_locations"
        },
        grub3: {
          name: "幼虫 #3",
          spoiler: "遗忘十字路: Above 祖先山丘",
          id: "Grub Bottle",
          sceneName: "Crossroads_05",
          wiki: "Grub#Rewards_and_locations"
        },
        grub4: {
          name: "幼虫 #4",
          spoiler: "遗忘十字路: Husk Guard Room",
          id: "Grub Bottle",
          sceneName: "Crossroads_48",
          wiki: "Grub#Rewards_and_locations"
        },
        grub5: {
          name: "幼虫 #5",
          spoiler: "遗忘十字路: Spikes Room",
          id: "Grub Bottle",
          sceneName: "Crossroads_31",
          wiki: "Grub#Rewards_and_locations"
        },
        grub6: {
          name: "幼虫 #6",
          spoiler: "苍绿之径: 柯尼法 Room",
          id: "Grub Bottle",
          sceneName: "Fungus1_06",
          wiki: "Grub#Rewards_and_locations"
        },
        grub7: {
          name: "幼虫 #7",
          spoiler: "苍绿之径: Outside Hunter",
          id: "Grub Bottle",
          sceneName: "Fungus1_07",
          wiki: "Grub#Rewards_and_locations"
        },
        grub8: {
          name: "幼虫 #8",
          spoiler: "苍绿之径: Outside Hornet",
          id: "Grub Bottle",
          sceneName: "Fungus1_21",
          wiki: "Grub#Rewards_and_locations"
        },
        grub9: {
          name: "幼虫 #9",
          spoiler: "呼啸悬崖: Baldur's Shell Room",
          id: "Grub Bottle",
          sceneName: "Fungus1_28",
          wiki: "Grub#Rewards_and_locations"
        },
        grub10: {
          name: "幼虫 #10",
          spoiler: "真菌荒地: 柯尼法 Room",
          id: "Grub Bottle",
          sceneName: "Fungus2_18",
          wiki: "Grub#Rewards_and_locations"
        },
        grub11: {
          name: "幼虫 #11",
          spoiler: "泪水之城: Above 文物搜寻者里姆",
          id: "Grub Bottle (1)",
          sceneName: "Ruins1_05",
          wiki: "Grub#Rewards_and_locations"
        },
        grub12: {
          name: "幼虫 #12",
          spoiler: "水晶山峰: Left of Dark Corridor",
          id: "Grub Bottle",
          sceneName: "Mines_04",
          wiki: "Grub#Rewards_and_locations"
        },
        grub13: {
          name: "幼虫 #13",
          spoiler: "水晶山峰: Spiked Conveyor Belts",
          id: "Grub Bottle",
          sceneName: "Mines_03",
          wiki: "Grub#Rewards_and_locations"
        },
        grub14: {
          name: "幼虫 #14",
          spoiler: "水晶山峰: Crystal Heart Gauntlet",
          id: "Grub Bottle",
          sceneName: "Mines_31",
          wiki: "Grub#Rewards_and_locations"
        },
        grub15: {
          name: "幼虫 #15",
          spoiler: "水晶山峰: Crushers Below Top Bench",
          id: "Grub Bottle",
          sceneName: "Mines_19",
          wiki: "Grub#Rewards_and_locations"
        },
        grub16: {
          name: "幼虫 #16",
          spoiler: "泪水之城: Soul Master Rewards Room",
          id: "Grub Bottle",
          sceneName: "Ruins1_32",
          wiki: "Grub#Rewards_and_locations"
        },
        grub17: {
          name: "幼虫 #17",
          spoiler: "安息之地: Crypts",
          id: "Grub Bottle",
          sceneName: "RestingGrounds_10",
          wiki: "Grub#Rewards_and_locations"
        },
        grub18: {
          name: "幼虫 #18",
          spoiler: "泪水之城: Guarded House Room in Main Hub",
          id: "Grub Bottle",
          sceneName: "Ruins_House_01",
          wiki: "Grub#Rewards_and_locations"
        },
        grub19: {
          name: "幼虫 #19",
          spoiler: "水晶山峰: Crystallized Mound",
          id: "Grub Bottle",
          sceneName: "Mines_35",
          wiki: "Grub#Rewards_and_locations"
        },
        grub20: {
          name: "幼虫 #20",
          spoiler: "水晶山峰: Down from 德特茅斯 entrance",
          id: "Grub Bottle",
          sceneName: "Mines_16",
          wiki: "Grub#Rewards_and_locations"
        },
        grub21: {
          name: "幼虫 #21",
          spoiler: "皇家水道: Top Left Corridor Above Bench",
          id: "Grub Bottle",
          sceneName: "Waterways_04",
          wiki: "Grub#Rewards_and_locations"
        },
        grub22: {
          name: "幼虫 #22",
          spoiler: "皇家水道: Isma's Grove",
          id: "Grub Bottle",
          sceneName: "Waterways_13",
          wiki: "Grub#Rewards_and_locations"
        },
        grub23: {
          name: "幼虫 #23",
          spoiler: "古老盆地: Broken Vessel Top Room",
          id: "Grub Bottle",
          sceneName: "Abyss_19",
          wiki: "Grub#Rewards_and_locations"
        },
        grub24: {
          name: "幼虫 #24",
          spoiler: "古老盆地: Cloth/苍白矿石 Room",
          id: "Grub Bottle",
          sceneName: "Abyss_17",
          wiki: "Grub#Rewards_and_locations"
        },
        grub25: {
          name: "幼虫 #25",
          spoiler: "水晶山峰: Hallownest Crown Corridor",
          id: "Grub Bottle",
          sceneName: "Mines_24",
          wiki: "Grub#Rewards_and_locations"
        },
        grub26: {
          name: "幼虫 #26",
          spoiler: "苍绿之径: 低语之根 Corridor",
          id: "Grub Bottle",
          sceneName: "Fungus1_13",
          wiki: "Grub#Rewards_and_locations"
        },
        grub27: {
          name: "幼虫 #27",
          spoiler: "雾之峡谷: Teacher's Archives Entrance",
          id: "Grub Bottle",
          sceneName: "Fungus3_47",
          wiki: "Grub#Rewards_and_locations"
        },
        grub28: {
          name: "幼虫 #28",
          spoiler: "王后花园: Main Arena Above Left Bench",
          id: "Grub Bottle",
          sceneName: "Fungus3_10",
          wiki: "Grub#Rewards_and_locations"
        },
        grub29: {
          name: "幼虫 #29",
          spoiler: "王后花园: Near White Lady",
          id: "Grub Bottle",
          sceneName: "Fungus3_48",
          wiki: "Grub#Rewards_and_locations"
        },
        grub30: {
          name: "幼虫 #30",
          spoiler: "王后花园: Upper Room near 苍绿之径",
          id: "Grub Bottle",
          sceneName: "Fungus3_22",
          wiki: "Grub#Rewards_and_locations"
        },
        grub31: {
          name: "幼虫 #31",
          spoiler: "泪水之城: Below 国王驿站",
          id: "Grub Bottle",
          sceneName: "Ruins2_07",
          wiki: "Grub#Rewards_and_locations"
        },
        grub32: {
          name: "幼虫 #32",
          spoiler: "泪水之城: The Collector Arena",
          id: "Grub Bottle",
          sceneName: "Ruins2_11",
          wiki: "Grub#Rewards_and_locations"
        },
        grub33: {
          name: "幼虫 #33",
          spoiler: "泪水之城: The Collector Arena",
          id: "Grub Bottle (1)",
          sceneName: "Ruins2_11",
          wiki: "Grub#Rewards_and_locations"
        },
        grub34: {
          name: "幼虫 #34",
          spoiler: "泪水之城: The Collector Arena",
          id: "Grub Bottle (2)",
          sceneName: "Ruins2_11",
          wiki: "Grub#Rewards_and_locations"
        },
        grub35: {
          name: "幼虫 #35",
          spoiler: "王国边缘: Below Camp Bench",
          id: "Grub Bottle",
          sceneName: "Deepnest_East_11",
          wiki: "Grub#Rewards_and_locations"
        },
        grub36: {
          name: "幼虫 #36",
          spoiler: "王国边缘: Below Nailmaster Oro",
          id: "Grub Bottle",
          sceneName: "Deepnest_East_14",
          wiki: "Grub#Rewards_and_locations"
        },
        grub37: {
          name: "幼虫 #37",
          spoiler: "真菌荒地: Spore Shroom Room",
          id: "Grub Bottle",
          sceneName: "Fungus2_20",
          wiki: "Grub#Rewards_and_locations"
        },
        grub38: {
          name: "幼虫 #38",
          spoiler: "泪水之城: Watcher's Spire Fourth Floor",
          id: "Grub Bottle",
          sceneName: "Ruins2_03",
          wiki: "Grub#Rewards_and_locations"
        },
        grub39: {
          name: "幼虫 #39",
          spoiler: "深邃巢穴: Right of 真菌荒地 Drop",
          id: "Grub Bottle",
          sceneName: "Deepnest_36",
          wiki: "Grub#Rewards_and_locations"
        },
        grub40: {
          name: "幼虫 #40",
          spoiler: "深邃巢穴: Left of Hot Spring",
          id: "Grub Bottle",
          sceneName: "Deepnest_03",
          wiki: "Grub#Rewards_and_locations"
        },
        grub41: {
          name: "幼虫 #41",
          spoiler: "深邃巢穴: Nosk Corridor",
          id: "Grub Bottle",
          sceneName: "Deepnest_31",
          wiki: "Grub#Rewards_and_locations"
        },
        grub42: {
          name: "幼虫 #42",
          spoiler: "深邃巢穴: 低语之根 Room",
          id: "Grub Bottle",
          sceneName: "Deepnest_39",
          wiki: "Grub#Rewards_and_locations"
        },
        grub43: {
          name: "幼虫 #43",
          spoiler: "深邃巢穴: Beast's Den",
          id: "Grub Bottle",
          sceneName: "Deepnest_Spider_Town",
          wiki: "Grub#Rewards_and_locations"
        },
        grub44: {
          name: "幼虫 #44",
          spoiler: "皇家水道: 王国边缘 Acid Corridor",
          id: "Grub Bottle",
          sceneName: "Waterways_14",
          wiki: "Grub#Rewards_and_locations"
        },
        grub45: {
          name: "幼虫 #45",
          spoiler: "蜂巢: 王国边缘 Secret",
          id: "Grub Bottle",
          sceneName: "Hive_03",
          wiki: "Grub#Rewards_and_locations"
        },
        grub46: {
          name: "幼虫 #46",
          spoiler: "蜂巢: Mask Shard Room",
          id: "Grub Bottle",
          sceneName: "Hive_04",
          wiki: "Grub#Rewards_and_locations"
        },
      },
    },

    /* ###################################### Collectibles -> 低语之根 ############################################## */

    whisperingRoots: {
      h2: "低语之根",
      id: "hk-whispering-roots",
      description: `There are 15 低语之根 in the game, containing a total of 482 Essence. 低语之根 Pin from 伊赛尔达 reveals the locations of every 低语之根 in an area after that area's Map has been purchased.`,
      percent: 0,
      maxPercent: 15,
      entries: {
        whisperingRoot1: {
          name: "低语之根 #1: 29 Orbs",
          spoiler: "遗忘十字路: Right of 虫爷爷",
          id: "Dream Plant",
          sceneName: "Crossroads_07",
          wiki: "Whispering_Root"
        },
        whisperingRoot2: {
          name: "低语之根 #2: 42 Orbs",
          spoiler: "遗忘十字路: 祖先山丘",
          id: "Dream Plant",
          sceneName: "Crossroads_ShamanTemple",
          wiki: "Whispering_Root"
        },
        whisperingRoot3: {
          name: "低语之根 #3: 18 Orbs",
          spoiler: "真菌荒地: Above Mantis Village",
          id: "Dream Plant",
          sceneName: "Fungus2_17",
          wiki: "Whispering_Root"
        },
        whisperingRoot4: {
          name: "低语之根 #4: 28 Orbs",
          spoiler: "泪水之城: Below 鹿角虫车站",
          id: "Dream Plant",
          sceneName: "Ruins1_17",
          wiki: "Whispering_Root"
        },
        whisperingRoot5: {
          name: "低语之根 #5: 46 Orbs",
          spoiler: "呼啸悬崖: Big Main Area",
          id: "Dream Plant",
          sceneName: "Cliffs_01",
          wiki: "Whispering_Root"
        },
        whisperingRoot6: {
          name: "低语之根 #6: 21 Orbs",
          spoiler: "水晶山峰: Hallownest Crown Big Area",
          id: "Dream Plant",
          sceneName: "Mines_23",
          wiki: "Whispering_Root"
        },
        whisperingRoot7: {
          name: "低语之根 #7: 20 Orbs",
          spoiler: "安息之地: Right of Seer, Main Area",
          id: "Dream Plant",
          sceneName: "RestingGrounds_05",
          wiki: "Whispering_Root"
        },
        whisperingRoot8: {
          name: "低语之根 #8: 34 Orbs",
          spoiler: "安息之地: Spirit's Glade",
          id: "Dream Plant",
          sceneName: "RestingGrounds_08",
          wiki: "Whispering_Root"
        },
        whisperingRoot9: {
          name: "低语之根 #9: 35 Orbs",
          spoiler: "泪水之城: Broken Elevator",
          id: "Dream Plant",
          sceneName: "Abyss_01",
          wiki: "Whispering_Root"
        },
        whisperingRoot10: {
          name: "低语之根 #10: 44 Orbs",
          spoiler: "苍绿之径: Right of 王后花园",
          id: "Dream Plant",
          sceneName: "Fungus1_13",
          wiki: "Whispering_Root"
        },
        whisperingRoot11: {
          name: "低语之根 #11: 20 Orbs",
          spoiler: "真菌荒地: Left of Leg Eater",
          id: "Dream Plant",
          sceneName: "Fungus2_33",
          wiki: "Whispering_Root"
        },
        whisperingRoot12: {
          name: "低语之根 #12: 29 Orbs",
          spoiler: "王后花园: Below Right Bench",
          id: "Dream Plant",
          sceneName: "Fungus3_11",
          wiki: "Whispering_Root"
        },
        whisperingRoot13: {
          name: "低语之根 #13: 51 Orbs",
          spoiler: "王国边缘: Right of Tower of Love",
          id: "Dream Plant",
          sceneName: "Deepnest_East_07",
          wiki: "Whispering_Root"
        },
        whisperingRoot14: {
          name: "低语之根 #14: 45 Orbs",
          spoiler: "深邃巢穴: Below 王后花园",
          id: "Dream Plant",
          sceneName: "Deepnest_39",
          wiki: "Whispering_Root"
        },
        whisperingRoot15: {
          name: "低语之根 #15: 20 Orbs",
          spoiler: "蜂巢: Right of Bench",
          id: "Dream Plant",
          sceneName: "Hive_02",
          wiki: "Whispering_Root"
        },
      },
    },

    /* ###################################### Collectibles -> Relics - 漫游者日记 ############################################## */

    relicsWanderersJournal: {
      h2: "文物 - 漫游者日记",
      id: "hk-relics-journal",
      description: `Tablets found commonly throughout Hallownest. They are always found next to corpses that are assumed to be the authors of the journal. Can be sold to 文物搜寻者里姆 for 200 Geo.<br>
      14 x 200 = 2800 Geo Total.`,
      percent: 0,
      maxPercent: 14,
      entries: {
        wanderersJournal1: {
          name: "漫游者日记 #1",
          spoiler: "苍绿之径: Room Above 雾之峡谷",
          id: "Shiny Item",
          sceneName: "Fungus1_11",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal2: {
          name: "漫游者日记 #2",
          spoiler: "苍绿之径: Right of 鹿角虫车站",
          id: "Shiny Item",
          sceneName: "Fungus1_22",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal3: {
          name: "漫游者日记 #3",
          spoiler: "真菌荒地: Below Shrumal Ogres",
          id: "Shiny Item",
          sceneName: "Fungus2_04",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal4: {
          name: "漫游者日记 #4",
          spoiler: "真菌荒地: Room Above Mantis Village",
          id: "Shiny Item",
          sceneName: "Fungus2_17",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal5: {
          name: "漫游者日记 #5",
          spoiler: "泪水之城: 城市仓库",
          id: "Shiny Item",
          sceneName: "Ruins1_28",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal6: {
          name: "漫游者日记 #6",
          spoiler: "呼啸悬崖: Main Open Air Area",
          id: "Shiny Item (1)",
          sceneName: "Cliffs_01",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal7: {
          name: "漫游者日记 #7",
          spoiler: "水晶山峰: Right Tall Room",
          id: "Shiny Item (1)",
          sceneName: "Mines_20",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal8: {
          name: "漫游者日记 #8",
          spoiler: "安息之地: Crypts",
          id: "Shiny Item",
          sceneName: "RestingGrounds_10",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal9: {
          name: "漫游者日记 #9",
          spoiler: "泪水之城: Room Above 国王驿站",
          id: "Shiny Item",
          sceneName: "Ruins2_05",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal10: {
          name: "漫游者日记 #10",
          spoiler: "古老盆地: Broken Bridge",
          id: "Shiny Item",
          sceneName: "Abyss_02",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal11: {
          name: "漫游者日记 #11",
          spoiler: "泪水之城: Pleasure House Elevator",
          id: "Shiny Item (1)",
          sceneName: "Ruins_Elevator",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal12: {
          name: "漫游者日记 #12",
          spoiler: "王国边缘: 低语之根 Area",
          id: "Shiny Item",
          sceneName: "Deepnest_East_07",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal13: {
          name: "漫游者日记 #13",
          spoiler: "王国边缘: Camp Bench",
          id: "Shiny Item",
          sceneName: "Deepnest_East_13",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal14: {
          name: "漫游者日记 #14",
          spoiler: "王国边缘: Left of Markoth",
          id: "Shiny Item",
          sceneName: "Deepnest_East_18",
          wiki: "Wanderer%27s_Journal"
        },
      },
    },

    /* ###################################### Collectibles -> Relics - 圣巢印章 ############################################## */

    relicsHallownestSeal: {
      h2: "文物 - 圣巢印章",
      id: "hk-relics-seal",
      description: `Official symbols of the 苍白之王 and the Five Great Knights. The seals can be found in various locations throughout the world. Can be sold to 文物搜寻者里姆 for 450 Geo. Seal #16 is missable when a player enters the <span class="spoiler-span blurred">Beast's Den</span> through the secret path without <span class="spoiler-span blurred">being trapped by using the bench</span>.<br>
      17 x 450 = 7650 Geo Total.`,
      percent: 0,
      maxPercent: 17,
      entries: {
        hallownestSeal1: {
          name: "圣巢印章 #1",
          spoiler: "遗忘十字路: Inside the Well",
          id: "Shiny Item",
          sceneName: "Crossroads_01",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal2: {
          name: "圣巢印章 #2",
          spoiler: "真菌荒地: Willoh's Room above 王后驿站",
          id: "Shiny Item",
          sceneName: "Fungus2_34",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal3: {
          name: "圣巢印章 #3",
          spoiler: "苍绿之径: Acid Bridge",
          id: "Shiny Item",
          sceneName: "Fungus1_10",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal4: {
          name: "圣巢印章 #4",
          spoiler: "真菌荒地: Right of 王后驿站",
          id: "Shiny Item",
          sceneName: "Fungus2_03",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal5: {
          name: "圣巢印章 #5",
          spoiler: "泪水之城: Open Air Rafters",
          id: "Shiny Item",
          sceneName: "Ruins1_03",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal6: {
          name: "圣巢印章 #6",
          spoiler: "泪水之城: Soul Master Rewards Room",
          id: "Shiny Item",
          sceneName: "Ruins1_32",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal7: {
          name: "圣巢印章 #7",
          spoiler: "安息之地: Crypts",
          id: "Shiny Item (1)",
          sceneName: "RestingGrounds_10",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal8: {
          name: "圣巢印章 #8",
          spoiler: "泪水之城: 国王驿站 鹿角虫车站",
          id: "Shiny Item",
          sceneName: "Ruins2_08",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal9: {
          name: "圣巢印章 #9",
          spoiler: "虫爷爷: 23 幼虫 rescued",
          id: "Shiny Item Relic2",
          sceneName: "Crossroads_38",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal10: {
          name: "圣巢印章 #10",
          spoiler: "雾之峡谷: Right Tall Area",
          id: "Shiny Item",
          sceneName: "Fungus3_26",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal11: {
          name: "圣巢印章 #11",
          spoiler: "雾之峡谷: Lifeblood Cocoon Room",
          id: "Shiny Item",
          sceneName: "Fungus3_30",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal12: {
          name: "圣巢印章 #12",
          spoiler: "王后花园: Outside White Lady",
          id: "Shiny Item",
          sceneName: "Fungus3_48",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal13: {
          name: "圣巢印章 #13",
          spoiler: "真菌荒地: Mantis Lords Reward Room",
          id: "Shiny Item",
          sceneName: "Fungus2_31",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal14: {
          name: "圣巢印章 #14",
          spoiler: "泪水之城: Watcher's Spire Fourth Floor",
          id: "Shiny Item",
          sceneName: "Ruins2_03",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal15: {
          name: "圣巢印章 #15",
          spoiler: "深邃巢穴: Room Above Lower 柯尼法",
          id: "Shiny Item",
          sceneName: "Deepnest_16",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal16: {
          name: "圣巢印章 #16 (missable)",
          spoiler: "深邃巢穴: Beast's Den",
          id: "Shiny Item",
          sceneName: "Deepnest_Spider_Town",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal17: {
          name: "圣巢印章 #17",
          spoiler: "Seer: 100 Essence collected",
          id: "dreamReward1",
          sceneName: "",
          wiki: "Hallownest_Seal"
        },
      },
    },

    /* ###################################### Collectibles -> Relics - 国王神像 ############################################## */

    relicsKingsIdol: {
      h2: "文物 - 国王神像",
      id: "hk-relics-idol",
      description: `Idols made of a mysterious white metal that depict the 苍白之王. They are found in various locations throughout Hallownest. Can be sold to 文物搜寻者里姆 for 800 Geo.<br>
      8 x 800 = 6400 Geo Total.`,
      percent: 0,
      maxPercent: 8,
      entries: {
        kingsIdol1: {
          name: "国王神像 #1",
          spoiler: "呼啸悬崖: Main Open Air Area",
          id: "Shiny Item",
          sceneName: "Cliffs_01",
          wiki: "King%27s_Idol"
        },
        kingsIdol2: {
          name: "国王神像 #2",
          spoiler: "水晶山峰: 柯尼法 Room, use Monarch Wings",
          id: "Shiny Item Stand",
          sceneName: "Mines_30",
          wiki: "King%27s_Idol"
        },
        kingsIdol3: {
          name: "国王神像 #3",
          spoiler: "安息之地: Spirit's Glade, Waterfall",
          id: "Shiny Item",
          sceneName: "RestingGrounds_08",
          wiki: "King%27s_Idol"
        },
        kingsIdol4: {
          name: "国王神像 #4",
          spoiler: "皇家水道: Dung Defender's Cave",
          id: "Shiny Item Stand",
          sceneName: "Waterways_15",
          wiki: "King%27s_Idol"
        },
        kingsIdol5: {
          name: "国王神像 #5",
          spoiler: "王国边缘: Great Hopper Below Colosseum Entrance",
          id: "Shiny Item",
          sceneName: "Deepnest_East_08",
          wiki: "King%27s_Idol"
        },
        kingsIdol6: {
          name: "国王神像 #6",
          spoiler: "深邃巢穴: Zote Arena Left Side",
          id: "Shiny Item",
          sceneName: "Deepnest_33",
          wiki: "King%27s_Idol"
        },
        kingsIdol7: {
          name: "国王神像 #7",
          spoiler: "虫爷爷: 38 幼虫 rescued",
          id: "Shiny Item Relic3",
          sceneName: "Crossroads_38",
          wiki: "King%27s_Idol"
        },
        kingsIdol8: {
          name: "国王神像 #8",
          spoiler: "王国边缘: Pale Lurker Room",
          id: "Shiny Item",
          sceneName: "GG_Lurker",
          wiki: "King%27s_Idol"
        },
      },
    },

    /* ###################################### Collectibles -> Relics - 神秘蛋 ############################################## */

    relicsArcaneEgg: {
      h2: "文物 - 神秘蛋",
      id: "hk-relics-egg",
      description: `Jet black stone eggs originating from a civilisation that existed before the Kingdom of Hallownest was founded. Egg #4 is missable when the player will go right instead of left in the <span class="spoiler-span blurred">Lifeblood Core room in 深渊</span> and will touch the Charm. Can be sold to 文物搜寻者里姆 for 1200 Geo.<br>
      4 x 1200 = 4800 Geo Total.`,
      percent: 0,
      maxPercent: 4,
      entries: {
        arcaneEgg1: {
          name: "神秘蛋 #1",
          spoiler: "深渊: Shade Cloak Room",
          id: "Shiny Item",
          sceneName: "Abyss_10",
          wiki: "Arcane_Egg"
        },
        arcaneEgg2: {
          name: "神秘蛋 #2",
          spoiler: "Seer: 1200 Essence",
          id: "dreamReward6",
          sceneName: "",
          wiki: "Arcane_Egg"
        },
        arcaneEgg3: {
          name: "神秘蛋 #3",
          spoiler: "深渊: Birthplace, requires Kingsoul",
          id: "Shiny Item",
          sceneName: "Abyss_15",
          wiki: "Arcane_Egg"
        },
        arcaneEgg4: {
          name: "神秘蛋 #4 (missable)",
          spoiler: "深渊: Lifeblood Core Room",
          id: "Shiny Item (1)",
          sceneName: "Abyss_08",
          wiki: "Abyss#Lifeblood_Chamber"
        },
      },
    },

    /* ###################################### Collectibles -> 腐臭蛋 ############################################## */

    rancidEggs: {
      h2: "腐臭蛋",
      id: "hk-rancid-eggs",
      description: `A collectable item recovered from the corpses of Bluggsacs. Either an already-dead Bluggsac has to be found or a living one has to be killed to make it drop a 腐臭蛋. A certain NPC in the game may be <em>very</em> interested in these... Egg #16 is missable when a player enters the <span class="spoiler-span blurred">Beast's Den</span> through the secret path without <span class="spoiler-span blurred">being trapped by using the bench</span>.`,
      percent: 0,
      maxPercent: 21,
      entries: {
        rancidEgg1: {
          name: "腐臭蛋 #1",
          spoiler: "真菌荒地: Fungal Core Upper Room",
          id: "Shiny Item",
          sceneName: "Fungus2_29",
          wiki: "Rancid_Egg"
        },
        rancidEgg2: {
          name: "腐臭蛋 #2",
          spoiler: "泪水之城: Room Above 文物搜寻者里姆",
          id: "Shiny Item",
          sceneName: "Ruins1_05",
          wiki: "Rancid_Egg"
        },
        rancidEgg3: {
          name: "腐臭蛋 #3",
          spoiler: "水晶山峰: Dark Bench Room",
          id: "Shiny Item",
          sceneName: "Mines_29",
          wiki: "Rancid_Egg"
        },
        rancidEgg4: {
          name: "腐臭蛋 #4",
          spoiler: "安息之地: Blue Lake",
          id: "Shiny Item(Clone)",
          sceneName: "Crossroads_50",
          wiki: "Rancid_Egg"
        },
        rancidEgg5: {
          name: "腐臭蛋 #5",
          spoiler: "水晶山峰: Desolate Dive Entrance",
          id: "Shiny Item(Clone)",
          sceneName: "Mines_01",
          wiki: "Rancid_Egg"
        },
        rancidEgg6: {
          name: "腐臭蛋 #6",
          spoiler: "皇家水道: Mask Shard Room",
          id: "Shiny Item",
          sceneName: "Waterways_04b",
          wiki: "Rancid_Egg"
        },
        rancidEgg7: {
          name: "腐臭蛋 #7",
          spoiler: "皇家水道: Hidden 幼虫 Room",
          id: "Shiny Item(Clone)",
          sceneName: "Waterways_04",
          wiki: "Rancid_Egg"
        },
        rancidEgg8: {
          name: "腐臭蛋 #8",
          spoiler: "皇家水道: Left of Isma's Grove",
          id: "Shiny Item(Clone)",
          sceneName: "Waterways_07",
          wiki: "Rancid_Egg"
        },
        rancidEgg9: {
          name: "腐臭蛋 #9",
          spoiler: "苍绿之径: Outside Sheo's Hut",
          id: "Shiny Item",
          sceneName: "Fungus1_15",
          wiki: "Rancid_Egg"
        },
        rancidEgg10: {
          name: "腐臭蛋 #10",
          spoiler: "虫爷爷: 16 幼虫 rescued",
          id: "Shiny Item Rancid Egg",
          sceneName: "Crossroads_38",
          wiki: "Rancid_Egg"
        },
        rancidEgg11: {
          name: "腐臭蛋 #11",
          spoiler: "王后花园: Entrance from 雾之峡谷",
          id: "Shiny Item(Clone)",
          sceneName: "Fungus3_34",
          wiki: "Rancid_Egg"
        },
        rancidEgg12: {
          name: "腐臭蛋 #12",
          spoiler: "泪水之城: Pleasure House Elevator",
          id: "Shiny Item",
          sceneName: "Ruins_Elevator",
          wiki: "Rancid_Egg"
        },
        rancidEgg13: {
          name: "腐臭蛋 #13",
          spoiler: "王国边缘: 低语之根 Area",
          id: "Shiny Item (1)",
          sceneName: "Deepnest_East_07",
          wiki: "Rancid_Egg"
        },
        rancidEgg14: {
          name: "腐臭蛋 #14",
          spoiler: "深邃巢穴: Weaver's Den",
          id: "Shiny Item",
          sceneName: "Deepnest_45_v02",
          wiki: "Rancid_Egg"
        },
        rancidEgg15: {
          name: "腐臭蛋 #15",
          spoiler: "深邃巢穴: 低语之根 Big Area Left Side",
          id: "Shiny Item(Clone)",
          sceneName: "Deepnest_39",
          wiki: "Rancid_Egg"
        },
        rancidEgg16: {
          name: "腐臭蛋 #16 (missable)",
          spoiler: "深邃巢穴: Beast's Den",
          id: "Shiny Item(Clone)",
          sceneName: "Deepnest_Spider_Town",
          wiki: "Rancid_Egg"
        },
        rancidEgg17: {
          name: "腐臭蛋 #17",
          spoiler: "水晶山峰: Right Tall Room",
          id: "Shiny Item(Clone)",
          sceneName: "Mines_20",
          wiki: "Rancid_Egg"
        },
        rancidEgg18: {
          name: "腐臭蛋 #18",
          spoiler: "皇家水道: Main Bench Area",
          id: "Shiny Item(Clone)",
          sceneName: "Waterways_02",
          wiki: "Rancid_Egg"
        },
        rancidEgg19: {
          name: "腐臭蛋 #19",
          spoiler: "王国边缘: Below Nailmaster Oro",
          id: "Shiny Item(Clone)",
          sceneName: "Deepnest_East_14",
          wiki: "Rancid_Egg"
        },
        rancidEgg20: {
          name: "腐臭蛋 #20",
          spoiler: "Sly: 60吉欧",
          id: "slyRancidEgg",
          sceneName: "",
          wiki: "Rancid_Egg"
        },
        rancidEgg21: {
          name: "腐臭蛋 #21",
          spoiler: "皇家水道: Tuk's free Egg",
          spoilerNormal: "皇家水道: Tuk, with Defender's Crest",
          spoilerSteelSoul: "皇家水道: Inspect Tuk",
          idPlayerData: "tukDungEgg",
          id: "Shiny Item",
          sceneName: "Waterways_03",
          wiki: "Tuk"
        },
      },
    },

    /* ###################################### Collectibles -> Items ############################################## */

    items: {
      h2: "物品",
      id: "hk-items",
      description: `Certain acquirable items, map markers or collectibles in the game that won't fit any specific category. Using custom map pins to mark interesting locations on the map is very useful while playing 空洞骑士. 1440 Geo is needed to buy all map pins from 伊赛尔达.`,
      percent: 0,
      maxPercent: 21,
      entries: {
        hasQuill: {
          name: "羽毛笔",
          spoiler: "120 Geo: 伊赛尔达's Shop, updates map with explored areas",
          wiki: "Map_and_Quill#Mapping_Tools"
        },
        hasPinBench: {
          name: "长椅图针",
          spoiler: "100 Geo: 伊赛尔达's Shop",
          wiki: "Bench_(Hollow_Knight)"
        },
        hasPinShop: {
          name: "商贩图针",
          spoiler: "100 Geo: 伊赛尔达's Shop",
          wiki: "Category:NPCs_(Hollow_Knight)#Merchants"
        },
        hasPinCocoon: {
          name: "虫茧图针",
          spoiler: "100 Geo: 伊赛尔达's Shop",
          wiki: "Lifeblood_Cocoon"
        },
        hasPinSpa: {
          name: "温泉图针",
          spoiler: "100 Geo: 伊赛尔达's Shop",
          wiki: "Hot_Springs"
        },
        hasPinStag: {
          name: "鹿角虫车站图针",
          spoiler: "100 Geo: 伊赛尔达's Shop, unlock first Station",
          wiki: "Stag_Station"
        },
        hasPinGhost: {
          name: "战士之墓图针",
          spoiler: "180 Geo: 伊赛尔达's Shop, acquire Dream Nail",
          wiki: "Warrior_Dreams"
        },
        hasPinDreamPlant: {
          name: "低语之根图针",
          spoiler: "150 Geo: 伊赛尔达's Shop, acquire Dream Nail",
          wiki: "Whispering_Root"
        },
        hasPinTram: {
          name: "电车图针",
          spoiler: "100 Geo: 伊赛尔达's Shop, acquire 电车通行证",
          wiki: "Tram"
        },
        hasMarker_r: {
          name: "贝壳标记",
          spoiler: "100 Geo: 伊赛尔达's Shop",
          wiki: "Iselda#Map_Pins"
        },
        hasMarker_b: {
          name: "圣甲虫标记",
          spoiler: "100 Geo: 伊赛尔达's Shop",
          wiki: "Iselda#Map_Pins"
        },
        hasMarker_y: {
          name: "铜币标记",
          spoiler: "100 Geo: 伊赛尔达's Shop, acquire 蛾翼披风",
          wiki: "Iselda#Map_Pins"
        },
        hasMarker_w: {
          name: "闪亮标记",
          spoiler: "210 Geo: 伊赛尔达, acquire 蛾翼披风",
          wiki: "Iselda#Map_Pins"
        },
        hasPinGuardian: {
          name: "Map Pin: Dreamers",
          spoiler: "安息之地: Inspect the shrine",
          wiki: "Dreamers"
        },
        hasPinBlackEgg: {
          name: "Map Pin: Temple of the Black Egg",
          spoiler: "泪水之城: Inspect fountain",
          wiki: "Temple_of_the_Black_Egg"
        },
        hasPinGrub: {
          name: "Collector's Map",
          spoiler: "王国边缘: Tower of Love, Love Key",
          wiki: "Map_and_Quill#The_Collector's_Map"
        },
        cityCrest: {
          name: "City Crest",
          spoiler: "遗忘十字路: 假骑士 Reward",
          id: "Shiny Item",
          sceneName: "Crossroads_10",
          wiki: "City_Crest"
        },
        hasDreamGate: {
          name: "Dreamgate",
          spoiler: "Seer: 900 Essence",
          wiki: "Dreamgate"
        },
        fragileGreed_unbreakable: {
          name: "Unbreakable Greed",
          spoiler: "Divine: Fragile Greed + 9000吉欧",
          wiki: "Divine#Unbreakable_Charms"
        },
        fragileHealth_unbreakable: {
          name: "Unbreakable Heart",
          spoiler: "Divine: Fragile Heart + 12000吉欧",
          wiki: "Divine#Unbreakable_Charms"
        },
        fragileStrength_unbreakable: {
          name: "Unbreakable Strength",
          spoiler: "Divine: Fragile Strength + 15000吉欧",
          wiki: "Divine#Unbreakable_Charms"
        },
      },
    },

    /* ###################################### Geo Caches -> 吉欧宝箱 ############################################## */

    geoChests: {
      h2: "吉欧宝箱",
      id: "hk-geo-chests",
      description: `All 吉欧宝箱 in the game, including one empty one and one with 1 Geo. A total of 2380 Geo can be collected from 吉欧宝箱. Equipping the Fragile Greed Charm won't increase the amount of Geo found inside 吉欧宝箱.`,
      percent: 0,
      maxPercent: 14,
      entries: {
        chest1: {
          name: "宝箱 #1: 200吉欧",
          spoiler: "遗忘十字路: 假骑士 Reward",
          id: "Chest",
          sceneName: "Crossroads_10",
          wiki: "Geo#How_to_Acquire"
        },
        chest2: {
          name: "宝箱 #2: 1吉欧",
          spoiler: "呼啸悬崖: Baldur's Shell Room",
          id: "Chest",
          sceneName: "Fungus1_28",
          wiki: "Geo#How_to_Acquire"
        },
        chest3: {
          name: "宝箱 #3: 78吉欧",
          spoiler: "水晶山峰: Crushers Room",
          id: "Chest",
          sceneName: "Mines_37",
          wiki: "Geo#How_to_Acquire"
        },
        chest4: {
          name: "宝箱 #4: 380吉欧",
          spoiler: "泪水之城: Soul Master Reward",
          id: "Chest",
          sceneName: "Ruins1_32",
          wiki: "Geo#How_to_Acquire"
        },
        chest5: {
          name: "宝箱 #5: 150吉欧",
          spoiler: "安息之地: Crypts",
          id: "Chest",
          sceneName: "RestingGrounds_10",
          wiki: "Geo#How_to_Acquire"
        },
        chest6: {
          name: "宝箱 #6: 85吉欧",
          spoiler: "苍绿之径: 低语之根 Room",
          id: "Chest",
          sceneName: "Fungus1_13",
          wiki: "Geo#How_to_Acquire"
        },
        chest7: {
          name: "宝箱 #7: 620吉欧",
          spoiler: "真菌荒地: Mantis Lords Reward",
          id: "Mantis Chest (2)",
          sceneName: "Fungus2_31",
          wiki: "Geo#How_to_Acquire"
        },
        chest8: {
          name: "宝箱 #8: 655吉欧",
          spoiler: "泪水之城: Watcher Knight Reward",
          id: "Chest",
          sceneName: "Ruins2_03",
          wiki: "Geo#How_to_Acquire"
        },
        chest9: {
          name: "宝箱 #9: 160吉欧",
          spoiler: "深邃巢穴: Weaver's Den, Secret Room",
          id: "Chest",
          sceneName: "Deepnest_45_v02",
          wiki: "Geo#How_to_Acquire"
        },
        chest10: {
          name: "宝箱 #10: 8吉欧",
          spoiler: "皇家水道: 垃圾坑",
          id: "Chest",
          sceneName: "GG_Waterways",
          wiki: "Geo#How_to_Acquire"
        },
        chest11: {
          name: "宝箱 #11: 8吉欧",
          spoiler: "皇家水道: 垃圾坑",
          id: "Chest (1)",
          sceneName: "GG_Waterways",
          wiki: "Geo#How_to_Acquire"
        },
        chest12: {
          name: "宝箱 #12: 25吉欧",
          spoiler: "皇家水道: 垃圾坑",
          id: "Chest (2)",
          sceneName: "GG_Waterways",
          wiki: "Geo#How_to_Acquire"
        },
        chest13: {
          name: "宝箱 #13: 0吉欧",
          spoiler: "皇家水道: 垃圾坑",
          id: "Chest (3)",
          sceneName: "GG_Waterways",
          wiki: "Geo#How_to_Acquire"
        },
        chest14: {
          name: "宝箱 #14: 10吉欧",
          spoiler: "皇家水道: 垃圾坑",
          id: "Chest (4)",
          sceneName: "GG_Waterways",
          wiki: "Geo#How_to_Acquire"
        },
      },
    },

    /* ###################################### Geo Caches -> 吉欧堆 ############################################## */

    geoRocks: {
      h2: "吉欧堆",
      id: "hk-geo-rocks",
      description: `All 吉欧堆 that can be found in the game. Only fully destroyed 吉欧堆 are counted. Partially hit 吉欧堆 won't be counted. Equipping the Fragile Greed Charm won't increase the amount of Geo found inside 吉欧堆. A total of 5074 Geo can be collected from 吉欧堆 (credit: <a href="https://github.com/ReznoRMichael/hollow-knight-completion-check/pull/9" target="_blank">Araraura</a>).`,
      percent: 0,
      maxPercent: 207,
      entries: {
        geoRock1: {
          name: "吉欧堆 #1: 15吉欧",
          spoiler: "国王山道",
          id: "Geo Rock 4",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock2: {
          name: "吉欧堆 #2: 15吉欧",
          spoiler: "国王山道",
          id: "Geo Rock 1",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock3: {
          name: "吉欧堆 #3: 15吉欧",
          spoiler: "国王山道",
          id: "Geo Rock 3",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock4: {
          name: "吉欧堆 #4: 18吉欧",
          spoiler: "国王山道",
          id: "Geo Rock 2",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock5: {
          name: "吉欧堆 #5: 15吉欧",
          spoiler: "国王山道",
          id: "Geo Rock 5",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock6: {
          name: "吉欧堆 #6: 19吉欧",
          spoiler: "遗忘十字路: Well",
          id: "Geo Rock 2",
          sceneName: "Crossroads_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock7: {
          name: "吉欧堆 #7: 15吉欧",
          spoiler: "遗忘十字路: Gruzzer Vertical Room",
          id: "Geo Rock 1",
          sceneName: "Crossroads_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock8: {
          name: "吉欧堆 #8: 15吉欧",
          spoiler: "遗忘十字路: Gruzzer Vertical Room",
          id: "Geo Rock 1 (2)",
          sceneName: "Crossroads_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock9: {
          name: "吉欧堆 #9: 15吉欧",
          spoiler: "遗忘十字路: Gruzzer Vertical Room",
          id: "Geo Rock 1 (1)",
          sceneName: "Crossroads_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock10: {
          name: "吉欧堆 #10: 15吉欧",
          spoiler: "遗忘十字路: Corridor to Acid Grub",
          id: "Geo Rock 2",
          sceneName: "Crossroads_12",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock11: {
          name: "吉欧堆 #11: 10吉欧",
          spoiler: "遗忘十字路: Aspid Arena",
          id: "Geo Rock 1 (3)",
          sceneName: "Crossroads_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock12: {
          name: "吉欧堆 #12: 10吉欧",
          spoiler: "遗忘十字路: Aspid Arena",
          id: "Geo Rock 1 (2)",
          sceneName: "Crossroads_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock13: {
          name: "吉欧堆 #13: 15吉欧",
          spoiler: "遗忘十字路: Aspid Arena",
          id: "Geo Rock 1",
          sceneName: "Crossroads_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock14: {
          name: "吉欧堆 #14: 10吉欧",
          spoiler: "遗忘十字路: Aspid Arena",
          id: "Geo Rock 1 (1)",
          sceneName: "Crossroads_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock15: {
          name: "吉欧堆 #15: 15吉欧",
          spoiler: "遗忘十字路: 真菌荒地 Entrance",
          id: "Geo Rock 1",
          sceneName: "Crossroads_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock16: {
          name: "吉欧堆 #16: 15吉欧",
          spoiler: "遗忘十字路: 真菌荒地 Entrance",
          id: "Geo Rock 2",
          sceneName: "Crossroads_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock17: {
          name: "吉欧堆 #17: 15吉欧",
          spoiler: "遗忘十字路: 真菌荒地 Entrance",
          id: "Geo Rock 3",
          sceneName: "Crossroads_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock18: {
          name: "吉欧堆 #18: 15吉欧",
          spoiler: "遗忘十字路: Goam Mask Shard",
          id: "Geo Rock 2",
          sceneName: "Crossroads_13",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock19: {
          name: "吉欧堆 #19: 15吉欧",
          spoiler: "遗忘十字路: Goam Mask Shard",
          id: "Geo Rock 1",
          sceneName: "Crossroads_13",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock20: {
          name: "吉欧堆 #20: 15吉欧",
          spoiler: "遗忘十字路: Right of Mask Shard",
          id: "Geo Rock 2",
          sceneName: "Crossroads_42",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock21: {
          name: "吉欧堆 #21: 15吉欧",
          spoiler: "遗忘十字路: Right of Mask Shard",
          id: "Geo Rock 1",
          sceneName: "Crossroads_42",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock22: {
          name: "吉欧堆 #22: 15吉欧",
          spoiler: "遗忘十字路: Before Gruz Mother",
          id: "Geo Rock 1",
          sceneName: "Crossroads_19",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock23: {
          name: "吉欧堆 #23: 15吉欧",
          spoiler: "遗忘十字路: Outside 假骑士",
          id: "Geo Rock 1",
          sceneName: "Crossroads_21",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock24: {
          name: "吉欧堆 #24: 15吉欧",
          spoiler: "遗忘十字路: 水晶山峰 Dark Toll",
          id: "Geo Rock 2 (1)",
          sceneName: "Mines_33",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock25: {
          name: "吉欧堆 #25: 15吉欧",
          spoiler: "遗忘十字路: 水晶山峰 Dark Toll",
          id: "Geo Rock 2",
          sceneName: "Mines_33",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock26: {
          name: "吉欧堆 #26: 15吉欧",
          spoiler: "遗忘十字路: 水晶山峰 Dark Toll",
          id: "Geo Rock 2 (2)",
          sceneName: "Mines_33",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock27: {
          name: "吉欧堆 #27: 15吉欧",
          spoiler: "遗忘十字路: Above Lever",
          id: "Geo Rock 2",
          sceneName: "Crossroads_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock28: {
          name: "吉欧堆 #28: 15吉欧",
          spoiler: "遗忘十字路: Central Grub",
          id: "Geo Rock 1",
          sceneName: "Crossroads_05",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock29: {
          name: "吉欧堆 #29: 15吉欧",
          spoiler: "遗忘十字路: Outside Tram",
          id: "Geo Rock 1",
          sceneName: "Crossroads_27",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock30: {
          name: "吉欧堆 #30: 15吉欧",
          spoiler: "遗忘十字路: Tram",
          id: "Geo Rock 1",
          sceneName: "Crossroads_46",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock31: {
          name: "吉欧堆 #31: 15吉欧",
          spoiler: "遗忘十字路: 假骑士 Arena",
          id: "Geo Rock 1",
          sceneName: "Crossroads_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock32: {
          name: "吉欧堆 #32: 15吉欧",
          spoiler: "遗忘十字路: 祖先山丘",
          id: "Geo Rock 2",
          sceneName: "Crossroads_ShamanTemple",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock33: {
          name: "吉欧堆 #33: 15吉欧",
          spoiler: "遗忘十字路: 祖先山丘",
          id: "Geo Rock 2 (1)",
          sceneName: "Crossroads_ShamanTemple",
          hitsLeft: "5",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock34: {
          name: "吉欧堆 #34: 15吉欧",
          spoiler: "遗忘十字路: 祖先山丘",
          id: "Geo Rock 1",
          sceneName: "Crossroads_ShamanTemple",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock35: {
          name: "吉欧堆 #35: 15吉欧",
          spoiler: "遗忘十字路: 祖先山丘",
          id: "Geo Rock 2",
          sceneName: "Crossroads_ShamanTemple",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock36: {
          name: "吉欧堆 #36: 26吉欧",
          spoiler: "苍绿之径: Entrance",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock37: {
          name: "吉欧堆 #37: 26吉欧",
          spoiler: "苍绿之径: Waterfall Bench",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_01b",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock38: {
          name: "吉欧堆 #38: 26吉欧",
          spoiler: "苍绿之径: First Hornet Sighting",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock39: {
          name: "吉欧堆 #39: 26吉欧",
          spoiler: "苍绿之径: First Hornet Sighting",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus1_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock40: {
          name: "吉欧堆 #40: 26吉欧",
          spoiler: "苍绿之径: Outside Hunter",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock41: {
          name: "吉欧堆 #41: 26吉欧",
          spoiler: "苍绿之径: Above Sanctuary Bench",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_19",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock42: {
          name: "吉欧堆 #42: 26吉欧",
          spoiler: "苍绿之径: Acid Bridge",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock43: {
          name: "吉欧堆 #43: 26吉欧",
          spoiler: "苍绿之径: Outside 鹿角虫车站",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus1_22",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock44: {
          name: "吉欧堆 #44: 26吉欧",
          spoiler: "苍绿之径: Outside 鹿角虫车站",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_22",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock45: {
          name: "吉欧堆 #45: 26吉欧",
          spoiler: "苍绿之径: Toll",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_31",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock46: {
          name: "吉欧堆 #46: 15吉欧",
          spoiler: "苍绿之径: Toll",
          id: "Geo Rock 1 (1)",
          sceneName: "Fungus1_31",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock47: {
          name: "吉欧堆 #47: 15吉欧",
          spoiler: "苍绿之径: Toll",
          id: "Geo Rock 2 (1)",
          sceneName: "Fungus1_31",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock48: {
          name: "吉欧堆 #48: 26吉欧",
          spoiler: "苍绿之径: Storerooms",
          id: "Geo Rock Green Path 01 (2)",
          sceneName: "Fungus1_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock49: {
          name: "吉欧堆 #49: 26吉欧",
          spoiler: "苍绿之径: Storerooms",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus1_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock50: {
          name: "吉欧堆 #50: 26吉欧",
          spoiler: "苍绿之径: Storerooms",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock51: {
          name: "吉欧堆 #51: 15吉欧",
          spoiler: "苍绿之径: Outside Thorns",
          id: "Geo Rock 2",
          sceneName: "Fungus1_05",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock52: {
          name: "吉欧堆 #52: 15吉欧",
          spoiler: "呼啸悬崖: Baldur's Shell",
          id: "Geo Rock 2",
          sceneName: "Fungus1_28",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock53: {
          name: "吉欧堆 #53: 15吉欧",
          spoiler: "呼啸悬崖: Baldur's Shell",
          id: "Geo Rock 1 (2)",
          sceneName: "Fungus1_28",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock54: {
          name: "吉欧堆 #54: 30吉欧",
          spoiler: "苍绿之径: Outside Hornet",
          id: "Geo Rock Green Path 02",
          sceneName: "Fungus1_21",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock55: {
          name: "吉欧堆 #55: 30吉欧",
          spoiler: "苍绿之径: Outside Hornet",
          id: "Geo Rock Green Path 02 (1)",
          sceneName: "Fungus1_21",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock56: {
          name: "吉欧堆 #56: 30吉欧",
          spoiler: "苍绿之径: Outside Hornet",
          id: "Geo Rock Green Path 02 (2)",
          sceneName: "Fungus1_21",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock57: {
          name: "吉欧堆 #57: 26吉欧",
          spoiler: "苍绿之径: Hornet",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock58: {
          name: "吉欧堆 #58: 26吉欧",
          spoiler: "苍绿之径: 大型苔藓冲锋者",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_29",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock59: {
          name: "吉欧堆 #59: 26吉欧",
          spoiler: "苍绿之径: 大型苔藓冲锋者 Corridor",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_12",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock60: {
          name: "吉欧堆 #60: 26吉欧",
          spoiler: "苍绿之径: 大型苔藓冲锋者 Corridor",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus1_12",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock61: {
          name: "吉欧堆 #61: 30吉欧",
          spoiler: "苍绿之径: 大型苔藓冲锋者 Corridor",
          id: "Geo Rock Green Path 02",
          sceneName: "Fungus1_12",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock62: {
          name: "吉欧堆 #62: 26吉欧",
          spoiler: "雾之峡谷: 王后花园 Acid Entrance",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus3_03",
          hitsLeft: "5",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock63: {
          name: "吉欧堆 #63: 22吉欧",
          spoiler: "真菌荒地: Below Shrumal Ogres",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock64: {
          name: "吉欧堆 #64: 22吉欧",
          spoiler: "真菌荒地: 柯尼法",
          id: "Geo Rock Fung 01 (1)",
          sceneName: "Fungus2_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock65: {
          name: "吉欧堆 #65: 22吉欧",
          spoiler: "真菌荒地: 柯尼法",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock66: {
          name: "吉欧堆 #66: 17吉欧",
          spoiler: "真菌荒地: 柯尼法",
          id: "Geo Rock Fung 02 (1)",
          sceneName: "Fungus2_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock67: {
          name: "吉欧堆 #67: 17吉欧",
          spoiler: "真菌荒地: 柯尼法",
          id: "Geo Rock Fung 02 (2)",
          sceneName: "Fungus2_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock68: {
          name: "吉欧堆 #68: 15吉欧",
          spoiler: "遗忘十字路: Goam Journal",
          id: "Geo Rock 1",
          sceneName: "Crossroads_52",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock69: {
          name: "吉欧堆 #69: 15吉欧",
          spoiler: "遗忘十字路: Goam Journal",
          id: "Geo Rock 2",
          sceneName: "Crossroads_52",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock70: {
          name: "吉欧堆 #70: 22吉欧",
          spoiler: "真菌荒地: Outside Elder Hu",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock71: {
          name: "吉欧堆 #71: 22吉欧",
          spoiler: "真菌荒地: Left Of Pilgrim's Way",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock72: {
          name: "吉欧堆 #72: 17吉欧",
          spoiler: "真菌荒地: Right of Bouncy Mushroom Grub",
          id: "Geo Rock Fung 02",
          sceneName: "Fungus2_11",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock73: {
          name: "吉欧堆 #73: 22吉欧",
          spoiler: "真菌荒地: Right of Bouncy Mushroom Grub",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_11",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock74: {
          name: "吉欧堆 #74: 22吉欧",
          spoiler: "真菌荒地: Bretta Bench",
          id: "Geo Rock Fung 01 (1)",
          sceneName: "Fungus2_13",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock75: {
          name: "吉欧堆 #75: 22吉欧",
          spoiler: "真菌荒地: Bretta Bench",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_13",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock76: {
          name: "吉欧堆 #76: 17吉欧",
          spoiler: "真菌荒地: Bretta Bench",
          id: "Geo Rock Fung 02",
          sceneName: "Fungus2_13",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock77: {
          name: "吉欧堆 #77: 15吉欧",
          spoiler: "真菌荒地: Mantis Village",
          id: "Geo Rock 2 (2)",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock78: {
          name: "吉欧堆 #78: 15吉欧",
          spoiler: "真菌荒地: Mantis Village",
          id: "Geo Rock 1",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock79: {
          name: "吉欧堆 #79: 15吉欧",
          spoiler: "真菌荒地: Mantis Village",
          id: "Geo Rock 2 (3)",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock80: {
          name: "吉欧堆 #80: 15吉欧",
          spoiler: "真菌荒地: Mantis Village",
          id: "Geo Rock 2 (1)",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock81: {
          name: "吉欧堆 #81: 15吉欧",
          spoiler: "真菌荒地: Mantis Village",
          id: "Geo Rock 2",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock82: {
          name: "吉欧堆 #82: 15吉欧",
          spoiler: "真菌荒地: Mantis Lords",
          id: "Geo Rock 1",
          sceneName: "Fungus2_15",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock83: {
          name: "吉欧堆 #83: 15吉欧",
          spoiler: "真菌荒地: Mantis Lords",
          id: "Geo Rock 1 (1)",
          sceneName: "Fungus2_15",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock84: {
          name: "吉欧堆 #84: 22吉欧",
          spoiler: "真菌荒地: Fungal Core Upper",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_29",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock85: {
          name: "吉欧堆 #85: 15吉欧",
          spoiler: "真菌荒地: Pilgrim's Way",
          id: "Geo Rock 1",
          sceneName: "Fungus2_21",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock86: {
          name: "吉欧堆 #86: 30吉欧",
          spoiler: "泪水之城: Rafters",
          id: "Geo Rock City 1",
          sceneName: "Ruins1_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock87: {
          name: "吉欧堆 #87: 30吉欧",
          spoiler: "泪水之城: 文物搜寻者里姆 Room",
          id: "Geo Rock City 1 (1)",
          sceneName: "Ruins1_05b",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock88: {
          name: "吉欧堆 #88: 30吉欧",
          spoiler: "泪水之城: 腐臭蛋 Above 文物搜寻者里姆",
          id: "Geo Rock City 1",
          sceneName: "Ruins1_05c",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock89: {
          name: "吉欧堆 #89: 15吉欧",
          spoiler: "遗忘十字路: Vessel Fragment",
          id: "Geo Rock 2",
          sceneName: "Crossroads_37",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock90: {
          name: "吉欧堆 #90: 15吉欧",
          spoiler: "遗忘十字路: Brooding Mawlek Middle",
          id: "Geo Rock 1",
          sceneName: "Crossroads_36",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock91: {
          name: "吉欧堆 #91: 15吉欧",
          spoiler: "呼啸悬崖: Gorb",
          id: "Geo Rock 1",
          sceneName: "Cliffs_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock92: {
          name: "吉欧堆 #92: 15吉欧",
          spoiler: "呼啸悬崖: Gorb",
          id: "Geo Rock 1 (1)",
          sceneName: "Cliffs_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock93: {
          name: "吉欧堆 #93: 15吉欧",
          spoiler: "呼啸悬崖: Main",
          id: "Geo Rock 2 (2)",
          sceneName: "Cliffs_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock94: {
          name: "吉欧堆 #94: 15吉欧",
          spoiler: "呼啸悬崖: Main",
          id: "Geo Rock 2 (1)",
          sceneName: "Cliffs_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock95: {
          name: "吉欧堆 #95: 15吉欧",
          spoiler: "呼啸悬崖: Main",
          id: "Geo Rock 2 (4)",
          sceneName: "Cliffs_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock96: {
          name: "吉欧堆 #96: 15吉欧",
          spoiler: "呼啸悬崖: Main",
          id: "Geo Rock 2 (3)",
          sceneName: "Cliffs_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock97: {
          name: "吉欧堆 #97: 24吉欧",
          spoiler: "水晶山峰: Dark Entrance",
          id: "Geo Rock Mine",
          sceneName: "Mines_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock98: {
          name: "吉欧堆 #98: 15吉欧",
          spoiler: "水晶山峰: Dark Entrance",
          id: "Geo Rock 1",
          sceneName: "Mines_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock99: {
          name: "吉欧堆 #99: 22吉欧",
          spoiler: "水晶山峰: Dark Entrance",
          id: "Geo Rock Mine (1)",
          sceneName: "Mines_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock100: {
          name: "吉欧堆 #100: 16吉欧",
          spoiler: "水晶山峰: Conveyor Belts Entrance",
          id: "Geo Rock Mine (1)",
          sceneName: "Mines_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock101: {
          name: "吉欧堆 #101: 16吉欧",
          spoiler: "水晶山峰: Conveyor Belts Entrance",
          id: "Geo Rock Mine",
          sceneName: "Mines_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock102: {
          name: "吉欧堆 #102: 22吉欧",
          spoiler: "水晶山峰: Above Spike Grub",
          id: "Geo Rock Mine",
          sceneName: "Mines_05",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock103: {
          name: "吉欧堆 #103: 24吉欧",
          spoiler: "水晶山峰: East Tall",
          id: "Geo Rock Mine (4)",
          sceneName: "Mines_20",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock104: {
          name: "吉欧堆 #104: 24吉欧",
          spoiler: "水晶山峰: East Tall",
          id: "Geo Rock Mine (3)",
          sceneName: "Mines_20",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock105: {
          name: "吉欧堆 #105: 24吉欧",
          spoiler: "水晶山峰: East Tall",
          id: "Geo Rock Mine (2)",
          sceneName: "Mines_20",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock106: {
          name: "吉欧堆 #106: 24吉欧",
          spoiler: "水晶山峰: Chest Crushers",
          id: "Geo Rock Mine",
          sceneName: "Mines_37",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock107: {
          name: "吉欧堆 #107: 24吉欧",
          spoiler: "水晶山峰: Chest Crushers",
          id: "Geo Rock Mine (1)",
          sceneName: "Mines_37",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock108: {
          name: "吉欧堆 #108: 30吉欧",
          spoiler: "皇家水道: Entrance",
          id: "Geo Rock City 1",
          sceneName: "Waterways_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock109: {
          name: "吉欧堆 #109: 26吉欧",
          spoiler: "皇家水道: Entrance",
          id: "Geo Rock City 1 (1)",
          sceneName: "Waterways_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock110: {
          name: "吉欧堆 #110: 30吉欧",
          spoiler: "皇家水道: Mask Shard Room",
          id: "Geo Rock City 1",
          sceneName: "Waterways_04b",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock111: {
          name: "吉欧堆 #111: 15吉欧",
          spoiler: "泪水之城: Broken Elevator",
          id: "Geo Rock 2 (1)",
          sceneName: "Abyss_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock112: {
          name: "吉欧堆 #112: 15吉欧",
          spoiler: "泪水之城: Broken Elevator",
          id: "Geo Rock 2",
          sceneName: "Abyss_01",
          hitsLeft: "5",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock113: {
          name: "吉欧堆 #113: 15吉欧",
          spoiler: "泪水之城: Broken Elevator",
          id: "Geo Rock 1",
          sceneName: "Abyss_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock114: {
          name: "吉欧堆 #114: 15吉欧",
          spoiler: "古老盆地: Broken Bridge",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Abyss_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock115: {
          name: "吉欧堆 #115: 15吉欧",
          spoiler: "古老盆地: Broken Bridge",
          id: "Geo Rock Deepnest",
          sceneName: "Abyss_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock116: {
          name: "吉欧堆 #116: 15吉欧",
          spoiler: "古老盆地: Broken Bridge",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Abyss_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock117: {
          name: "吉欧堆 #117: 30吉欧",
          spoiler: "泪水之城: 国王驿站",
          id: "Geo Rock City 1",
          sceneName: "Ruins2_06",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock118: {
          name: "吉欧堆 #118: 30吉欧",
          spoiler: "泪水之城: Above 国王驿站",
          id: "Geo Rock City 1",
          sceneName: "Ruins2_05",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock119: {
          name: "吉欧堆 #119: 44吉欧",
          spoiler: "王国边缘: 低语之根",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock120: {
          name: "吉欧堆 #120: 44吉欧",
          spoiler: "王国边缘: 低语之根",
          id: "Geo Rock Outskirts (1)",
          sceneName: "Deepnest_East_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock121: {
          name: "吉欧堆 #121: 44吉欧",
          spoiler: "王国边缘: Outside Nailmaster Oro",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_06",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock122: {
          name: "吉欧堆 #122: 44吉欧",
          spoiler: "王国边缘: Outside Nailmaster Oro",
          id: "Geo Rock Outskirts (1)",
          sceneName: "Deepnest_East_06",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock123: {
          name: "吉欧堆 #123: 44吉欧",
          spoiler: "王国边缘: Bardoon",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock124: {
          name: "吉欧堆 #124: 44吉欧",
          spoiler: "王国边缘: Great Hopper 国王神像",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock125: {
          name: "吉欧堆 #125: 44吉欧",
          spoiler: "王国边缘: Pale Lurker Arena",
          id: "Geo Rock Outskirts",
          sceneName: "GG_Lurker",
          hitsLeft: "5",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock126: {
          name: "吉欧堆 #126: 30吉欧",
          spoiler: "雾之峡谷: Overgrown Mound",
          id: "Geo Rock Green Path 02",
          sceneName: "Room_Fungus_Shaman",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock127: {
          name: "吉欧堆 #127: 30吉欧",
          spoiler: "泪水之城: Soul Master Rewards Room",
          id: "Geo Rock City 1",
          sceneName: "Ruins1_32",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock128: {
          name: "吉欧堆 #128: 30吉欧",
          spoiler: "皇家水道: Outside 吸虫之母",
          id: "Geo Rock City 1",
          sceneName: "Waterways_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock129: {
          name: "吉欧堆 #129: 30吉欧",
          spoiler: "皇家水道: Flukemunga Corridor",
          id: "Geo Rock City 1",
          sceneName: "GG_Pipeway",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock130: {
          name: "吉欧堆 #130: 22吉欧",
          spoiler: "皇家水道: Fluke Hermit Room",
          id: "Geo Rock Fung 01",
          sceneName: "Room_GG_Shortcut",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock131: {
          name: "吉欧堆 #131: 17吉欧",
          spoiler: "皇家水道: Fluke Hermit Room",
          id: "Geo Rock Fung 02 (1)",
          sceneName: "Room_GG_Shortcut",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock132: {
          name: "吉欧堆 #132: 25吉欧",
          spoiler: "安息之地: Crypts",
          id: "Geo Rock Grave 02 (1)",
          sceneName: "RestingGrounds_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock133: {
          name: "吉欧堆 #133: 25吉欧",
          spoiler: "安息之地: Crypts",
          id: "Geo Rock Grave 02",
          sceneName: "RestingGrounds_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock134: {
          name: "吉欧堆 #134: 25吉欧",
          spoiler: "安息之地: Crypts",
          id: "Geo Rock Grave 01",
          sceneName: "RestingGrounds_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock135: {
          name: "吉欧堆 #135: 24吉欧",
          spoiler: "水晶山峰: Crystal Heart Gauntlet",
          id: "Geo Rock Mine",
          sceneName: "Mines_31",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock136: {
          name: "吉欧堆 #136: 24吉欧",
          spoiler: "水晶山峰: 幼虫 Mimic",
          id: "Geo Rock Mine",
          sceneName: "Mines_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock137: {
          name: "吉欧堆 #137: 35吉欧",
          spoiler: "古老盆地: Corridor to Broken Vessel",
          id: "Geo Rock Abyss",
          sceneName: "Abyss_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock138: {
          name: "吉欧堆 #138: 35吉欧",
          spoiler: "深渊: Main/Core Area",
          id: "Geo Rock Abyss (1)",
          sceneName: "Abyss_06_Core",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock139: {
          name: "吉欧堆 #139: 35吉欧",
          spoiler: "深渊: Main/Core Area",
          id: "Geo Rock Abyss",
          sceneName: "Abyss_06_Core",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock140: {
          name: "吉欧堆 #140: 35吉欧",
          spoiler: "深渊: Main/Core Area",
          id: "Geo Rock Abyss",
          sceneName: "Abyss_06_Core",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock141: {
          name: "吉欧堆 #141: 35吉欧",
          spoiler: "古老盆地: Broken Vessel Grub",
          id: "Geo Rock Abyss (1)",
          sceneName: "Abyss_19",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock142: {
          name: "吉欧堆 #142: 35吉欧",
          spoiler: "古老盆地: Broken Vessel Grub",
          id: "Geo Rock Abyss",
          sceneName: "Abyss_19",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock143: {
          name: "吉欧堆 #143: 24吉欧",
          spoiler: "水晶山峰: Hallownest Crown Climb",
          id: "Geo Rock Mine",
          sceneName: "Mines_25",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock144: {
          name: "吉欧堆 #144: 24吉欧",
          spoiler: "水晶山峰: Hallownest Crown Climb",
          id: "Geo Rock Mine (4)",
          sceneName: "Mines_25",
          hitsLeft: "4",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock145: {
          name: "吉欧堆 #145: 24吉欧",
          spoiler: "水晶山峰: Hallownest Crown Climb",
          id: "Geo Rock Mine (2)",
          sceneName: "Mines_25",
          hitsLeft: "4",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock146: {
          name: "吉欧堆 #146: 24吉欧",
          spoiler: "水晶山峰: Hallownest Crown Climb",
          id: "Geo Rock Mine (1)",
          sceneName: "Mines_25",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock147: {
          name: "吉欧堆 #147: 24吉欧",
          spoiler: "水晶山峰: Hallownest Crown Climb",
          id: "Geo Rock Mine (3)",
          sceneName: "Mines_25",
          hitsLeft: "4",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock148: {
          name: "吉欧堆 #148: 30吉欧",
          spoiler: "泪水之城: Watcher's Spire Second Floor",
          id: "Geo Rock City 1",
          sceneName: "Ruins2_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock149: {
          name: "吉欧堆 #149: 30吉欧",
          spoiler: "雾之峡谷: East Tall",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus3_26",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock150: {
          name: "吉欧堆 #150: 26吉欧",
          spoiler: "王后花园: Main Arena",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus3_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock151: {
          name: "吉欧堆 #151: 30吉欧",
          spoiler: "王后花园: Outside White Lady",
          id: "Geo Rock Green Path 02",
          sceneName: "Fungus3_48",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock152: {
          name: "吉欧堆 #152: 27吉欧",
          spoiler: "王后花园: Moss Prophet Room",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus3_39",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock153: {
          name: "吉欧堆 #153: 30吉欧",
          spoiler: "王后花园: Moss Prophet Room",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus3_39",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock154: {
          name: "吉欧堆 #154: 15吉欧",
          spoiler: "真菌荒地: 深邃巢穴 Fall",
          id: "Geo Rock 1",
          sceneName: "Deepnest_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock155: {
          name: "吉欧堆 #155: 15吉欧",
          spoiler: "真菌荒地: 深邃巢穴 Fall",
          id: "Geo Rock 2",
          sceneName: "Deepnest_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock156: {
          name: "吉欧堆 #156: 26吉欧",
          spoiler: "王后花园: Corridor To 深邃巢穴",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Deepnest_43",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock157: {
          name: "吉欧堆 #157: 26吉欧",
          spoiler: "王后花园: Corridor To 深邃巢穴",
          id: "Geo Rock Green Path 01",
          sceneName: "Deepnest_43",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock158: {
          name: "吉欧堆 #158: 22吉欧",
          spoiler: "真菌荒地: Fungal Core Lower",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_30",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock159: {
          name: "吉欧堆 #159: 22吉欧",
          spoiler: "真菌荒地: Fungal Core Lower",
          id: "Geo Rock Fung 01 (1)",
          sceneName: "Fungus2_30",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock160: {
          name: "吉欧堆 #160: 15吉欧",
          spoiler: "深邃巢穴: Lower 柯尼法",
          id: "Geo Rock Deepnest",
          sceneName: "Fungus2_25",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock161: {
          name: "吉欧堆 #161: 15吉欧",
          spoiler: "深邃巢穴: Lower 柯尼法",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Fungus2_25",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock162: {
          name: "吉欧堆 #162: 15吉欧",
          spoiler: "深邃巢穴: Lower 柯尼法",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Fungus2_25",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock163: {
          name: "吉欧堆 #163: 15吉欧",
          spoiler: "深邃巢穴: Top of Lower 柯尼法",
          id: "Geo Rock Deepnest (4)",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock164: {
          name: "吉欧堆 #164: 15吉欧",
          spoiler: "深邃巢穴: Top of Lower 柯尼法",
          id: "Geo Rock Deepnest (3)",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock165: {
          name: "吉欧堆 #165: 15吉欧",
          spoiler: "深邃巢穴: Top of Lower 柯尼法",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock166: {
          name: "吉欧堆 #166: 15吉欧",
          spoiler: "深邃巢穴: Top of Lower 柯尼法",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock167: {
          name: "吉欧堆 #167: 15吉欧",
          spoiler: "深邃巢穴: Top of Lower 柯尼法",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock168: {
          name: "吉欧堆 #168: 15吉欧",
          spoiler: "深邃巢穴: Outside 幼虫 Mimics",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_02",
          hitsLeft: "3",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock169: {
          name: "吉欧堆 #169: 15吉欧",
          spoiler: "深邃巢穴: Outside 幼虫 Mimics",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_02",
          hitsLeft: "3",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock170: {
          name: "吉欧堆 #170: 15吉欧",
          spoiler: "深邃巢穴: 低语之根",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_39",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock171: {
          name: "吉欧堆 #171: 15吉欧",
          spoiler: "深邃巢穴: 低语之根",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_39",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock172: {
          name: "吉欧堆 #172: 15吉欧",
          spoiler: "深邃巢穴: 低语之根",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_39",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock173: {
          name: "吉欧堆 #173: 15吉欧",
          spoiler: "深邃巢穴: Left of Hot Spring",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_03",
          hitsLeft: "3",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock174: {
          name: "吉欧堆 #174: 15吉欧",
          spoiler: "深邃巢穴: Left of Hot Spring",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock175: {
          name: "吉欧堆 #175: 15吉欧",
          spoiler: "深邃巢穴: Left of Hot Spring",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_03",
          hitsLeft: "3",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock176: {
          name: "吉欧堆 #176: 15吉欧",
          spoiler: "深邃巢穴: Outside Galien",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_35",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock177: {
          name: "吉欧堆 #177: 15吉欧",
          spoiler: "深邃巢穴: Outside Galien",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_35",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock178: {
          name: "吉欧堆 #178: 15吉欧",
          spoiler: "深邃巢穴: Corridor to Tram",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_37",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock179: {
          name: "吉欧堆 #179: 15吉欧",
          spoiler: "深邃巢穴: Corridor to Tram",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_37",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock180: {
          name: "吉欧堆 #180: 15吉欧",
          spoiler: "王国边缘: Left of 蜂巢",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_East_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock181: {
          name: "吉欧堆 #181: 15吉欧",
          spoiler: "王国边缘: Left of 蜂巢",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_East_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock182: {
          name: "吉欧堆 #182: 15吉欧",
          spoiler: "王国边缘: Above 蜂巢",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_East_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock183: {
          name: "吉欧堆 #183: 15吉欧",
          spoiler: "王国边缘: Above 蜂巢",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_East_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock184: {
          name: "吉欧堆 #184: 30吉欧",
          spoiler: "皇家水道: Left of Isma's Grove",
          id: "Geo Rock City 1",
          sceneName: "Waterways_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock185: {
          name: "吉欧堆 #185: 56吉欧",
          spoiler: "蜂巢: Outside Grub",
          id: "Geo Rock Hive (2)",
          sceneName: "Hive_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock186: {
          name: "吉欧堆 #186: 56吉欧",
          spoiler: "蜂巢: Outside Grub",
          id: "Geo Rock Hive",
          sceneName: "Hive_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock187: {
          name: "吉欧堆 #187: 56吉欧",
          spoiler: "蜂巢: Outside Grub",
          id: "Geo Rock Hive (1)",
          sceneName: "Hive_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock188: {
          name: "吉欧堆 #188: 56吉欧",
          spoiler: "蜂巢: Entrance",
          id: "Geo Rock Hive",
          sceneName: "Hive_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock189: {
          name: "吉欧堆 #189: 56吉欧",
          spoiler: "蜂巢: 低语之根",
          id: "Geo Rock Hive",
          sceneName: "Hive_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock190: {
          name: "吉欧堆 #190: 56吉欧",
          spoiler: "蜂巢: 低语之根",
          id: "Geo Rock Hive (2)",
          sceneName: "Hive_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock191: {
          name: "吉欧堆 #191: 56吉欧",
          spoiler: "蜂巢: 低语之根",
          id: "Geo Rock Hive (1)",
          sceneName: "Hive_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock192: {
          name: "吉欧堆 #192: 56吉欧",
          spoiler: "蜂巢: Mask Shard Room",
          id: "Geo Rock Hive",
          sceneName: "Hive_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock193: {
          name: "吉欧堆 #193: 56吉欧",
          spoiler: "蜂巢: Mask Shard Room",
          id: "Geo Rock Hive (1)",
          sceneName: "Hive_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock194: {
          name: "吉欧堆 #194: 15吉欧",
          spoiler: "深邃巢穴: Nosk Corridor",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_31",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock195: {
          name: "吉欧堆 #195: 15吉欧",
          spoiler: "深邃巢穴: Nosk Corridor",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_31",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock196: {
          name: "吉欧堆 #196: 15吉欧",
          spoiler: "深邃巢穴: Nosk Corridor",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_31",
          hitsLeft: "3",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock197: {
          name: "吉欧堆 #197: 15吉欧",
          spoiler: "深邃巢穴: Beast's Den",
          id: "Geo Rock Deepnest (3)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock198: {
          name: "吉欧堆 #198: 15吉欧",
          spoiler: "深邃巢穴: Beast's Den",
          id: "Geo Rock Deepnest (4)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock199: {
          name: "吉欧堆 #199: 20吉欧",
          spoiler: "深邃巢穴: Beast's Den",
          id: "Geo Rock Deepnest (5)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock200: {
          name: "吉欧堆 #200: 15吉欧",
          spoiler: "深邃巢穴: Beast's Den",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock201: {
          name: "吉欧堆 #201: 15吉欧",
          spoiler: "深邃巢穴: Beast's Den",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock202: {
          name: "吉欧堆 #202: 30吉欧",
          spoiler: "深邃巢穴: Beast's Den",
          id: "Geo Rock Deepnest (7)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock203: {
          name: "吉欧堆 #203: 15吉欧",
          spoiler: "深邃巢穴: Beast's Den",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock204: {
          name: "吉欧堆 #204: 20吉欧",
          spoiler: "深邃巢穴: Beast's Den",
          id: "Geo Rock Deepnest (6)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock205: {
          name: "吉欧堆 #205: 30吉欧",
          spoiler: "泪水之城: Pleasure House Elevator",
          id: "Geo Rock City 1",
          sceneName: "Ruins_Elevator",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock206: {
          name: "吉欧堆 #206: 44吉欧",
          spoiler: "王国边缘: Near 420吉欧堆",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_17",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock207: {
          name: "巨大吉欧蛋 #207: 420吉欧",
          spoiler: "王国边缘",
          id: "Giant Geo Egg",
          sceneName: "Deepnest_East_17",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
      },
    },

    /* ###################################### Secrets -> World Interactions ############################################## */

    worldInteractions: {
      h2: "世界互动",
      id: "hk-world-interactions",
      description: `Certain interactions the player can make with NPCs in the game or world objects. All these here don't count towards either 112% 游戏完成度 or Achievements.`,
      entries: {
        unlockedCompletionRate: {
          name: "World Sense Ability",
          spoiler: "Temple of the Black Egg: Lore Tablet",
          wiki: "World_Sense"
        },
        spaBugsEncountered: {
          name: "Gossipping Bugs",
          spoiler: "遗忘十字路: Hot Springs, acquire Mantis Claw",
          wiki: "Hot_Spring#Forgotten_Crossroads"
        },
        jijiDoorUnlocked: {
          name: "Confessor Jiji's Cave Unlocked",
          spoiler: "德特茅斯, requires简单钥匙",
          wiki: "Jiji"
        },
        bathHouseOpened: {
          name: "Pleasure House Door Unlocked",
          spoiler: "泪水之城: Right Side Main Hub Area",
          wiki: "City_of_Tears#Sub-area:_Pleasure_House"
        },
        openedWaterwaysManhole: {
          name: "Waterways Manhole Unlocked",
          spoiler: "泪水之城: below 文物搜寻者里姆, use简单钥匙",
          wiki: "Royal_Waterways#How_to_access"
        },
        gladeDoorOpened: {
          name: "Spirits' Glade Door Opened",
          spoiler: "安息之地, Seer: 200 Essence",
          wiki: "Resting_Grounds#Sub-area:_Spirits'_Glade"
        },
        openedCityGate: {
          name: "泪水之城 Gate Opened",
          spoiler: "真菌荒地, requires City Crest",
          wiki: "Fungal_Wastes"
        },
        soulSanctumShortcut: {
          name: "灵魂圣所 Shortcut",
          spoiler: "泪水之城: 柯尼法 Lift Room, break left wall",
          id: "Breakable Wall Ruin Lift",
          sceneName: "Ruins1_31",
          wiki: "City_of_Tears#Sub-area:_Soul_Sanctum"
        },
        waterwaysGate: {
          name: "Waterways Gate Opened",
          spoiler: "皇家水道: 柯尼法 Room, use lever",
          wiki: "Royal_Waterways"
        },
        watcherChandelier: {
          name: "Chandelier Dropped",
          spoiler: "泪水之城: Watcher Knights Room, break ceiling",
          wiki: "Watcher_Knight#In-game_events"
        },
        colosseumHiddenHotSpring: {
          name: "Hidden Hot Spring",
          spoiler: "愚人斗兽场, break wall right of Bench",
          id: "Breakable Wall_Silhouette",
          sceneName: "Room_Colosseum_02",
          wiki: "Colosseum_of_Fools#Description"
        },
        stagEggInspected: {
          name: "鹿角虫巢穴 Egg Inspected",
          spoiler: "呼啸悬崖: Top of 鹿角虫巢穴",
          wiki: "Howling_Cliffs#Sub-area:_Stag_Nest"
        },
        deepnestBridgeCollapsed: {
          name: "Deepnest Entry Bridge Collapsed",
          spoiler: "真菌荒地, left of Spore Shroom",
          wiki: "Deepnest#How_to_access"
        },
        maskmakerUnmasked1: {
          name: "Mask Maker Unmasked",
          spoiler: "深邃巢穴, use Desolate Dive on Mask Maker",
          wiki: "Mask_Maker#In-game_events"
        },
        bankerAccountPurchased: {
          name: "Bank Account Opened",
          spoiler: "100 Geo: 雾之峡谷: Millibelle the Banker",
          wiki: "Millibelle"
        },
        millibelleLeft: {
          name: "Banker Disappeared",
          spoiler: "雾之峡谷: Millibelle the Banker",
          wiki: "Millibelle"
        },
        millibelleCheckedStand: {
          name: "Banker Stand Investigated",
          spoiler: "雾之峡谷: Millibelle the Banker",
          wiki: "Millibelle"
        },
        bankerSpaMet: {
          name: "Found & Talked to Millibelle",
          spoiler: "泪水之城: Hot Springs,简单钥匙",
          wiki: "Millibelle"
        },
        millibelleReclaimedAllGeo: {
          name: "Reclaimed All Geo",
          spoiler: "泪水之城: Hot Springs, Millibelle the Thief",
          wiki: "Millibelle"
        },
        elderbugGaveFlower: {
          name: "Delicate Flower: Elderbug",
          spoiler: "Deliver from Traitor's Child Grave",
          wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        givenGodseekerFlower: {
          name: "Delicate Flower: Godseeker",
          spoiler: "Possible after completing 2 Pantheons",
          wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        givenOroFlower: {
          name: "Delicate Flower: Nailmaster Oro",
          spoiler: "D. from Traitor's Child Grave",
          wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        givenWhiteLadyFlower: {
          name: "Delicate Flower: White Lady",
          spoiler: "Deliver from Traitor's Child Grave",
          wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        givenEmilitiaFlower: {
          name: "Delicate Flower: Emilitia",
          spoiler: "Deliver from Traitor's Child Grave",
          wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
      },
    },

    /* ###################################### Secrets -> Secret Rooms ############################################## */

    secretRooms: {
      h2: "Secret Rooms",
      id: "hk-secret-rooms",
      description: `Certain Secret Rooms in the game. <span class="spoiler-span blurred">Grimm's Tent Secret</span> is missable when the player will <span class="spoiler-span blurred">Banish the Troupe or complete the Ritual</span>.`,
      entries: {
        grimmTentSecretRoom: {
          name: "Grimm's Tent: Secret Room (missable)",
          spoiler: "德特茅斯: inside Grimm's Tent",
          id: "Secret Mask",
          sceneName: "Grimm_Main_Tent",
          wiki: "Dirtmouth#The_Grimm_Troupe.27s_Tents"
        },
        towerOfLoveSecretRoom: {
          name: "Tower of Love: Secret Room",
          spoiler: "泪水之城: near The Collector's Map",
          id: "secret sound_grub room",
          sceneName: "Ruins2_11",
          wiki: "Collector#Trivia"
        },
        weaversDenSecretRoom1: {
          name: "Weaver's Den: Secret Room #1",
          spoiler: "深邃巢穴: inside Weaver's Den",
          id: "Breakable Wall",
          sceneName: "Deepnest_45_v02",
          wiki: "Deepnest#Sub-area:_Weavers.27_Den"
        },
        weaversDenSecretRoom2: {
          name: "Weaver's Den: Secret Room #2",
          spoiler: "深邃巢穴: inside Weaver's Den",
          id: "Breakable Wall Waterways",
          sceneName: "Deepnest_45_v02",
          wiki: "Deepnest#Sub-area:_Weavers.27_Den"
        },
        pathOfPainEntrance: {
          name: "白色宫殿: Path of Pain Entrance",
          spoiler: "Break left wall above lift area",
          id: "Breakable Wall Ruin Lift",
          sceneName: "White_Palace_06",
          wiki: "White_Palace#Sub-area:_Path_of_Pain"
        },
        killsBindingSeal: {
          name: "白色宫殿: Path of Pain",
          spoiler: "Main Secret Area, After Middle Lift",
          wiki: "White_Palace#Sub-area:_Path_of_Pain"
        },
        whitePalaceSecretRoomVisited: {
          name: "白色宫殿: Secret Room #1",
          spoiler: "The 苍白之王's Workshop",
          wiki: "White_Palace#The_Pale_King.27s_workshop"
        },
        whiteLadyRoom: {
          name: "白色宫殿: Secret Room #2",
          spoiler: "White Lady's Room, break floor",
          id: "Quake Floor",
          sceneName: "White_Palace_09",
          wiki: "White_Palace#White_Lady.27s_room"
        },
        throneRoomLoreTablet: {
          name: "白色宫殿: Secret Room #3",
          spoiler: "Throne Room, break right wall",
          id: "Breakable Wall Waterways",
          sceneName: "White_Palace_09",
          wiki: "White_Palace#Throne_room_Lore_Tablet"
        },
        /* 
        #52 Quake Floor 🗺️ Palace Caged Lever ⌨️ White_Palace_15
        #53 Breakable Wall Waterways 🗺️ Palace Spike Drop ⌨️ White_Palace_12
        #54 Break Floor 1 🗺️ Palace Spike Drop ⌨️ White_Palace_12
        */
      },
    },

    /* ###################################### Secrets -> 柯尼法's Notes ############################################## */

    corniferNotes: {
      h2: "柯尼法's Notes",
      id: "hk-cornifer-notes",
      description: `柯尼法 the Cartographer leaves his note on the ground every time he leaves the current area. The note will be at the same spot where 柯尼法 was met. He leaves an area once a specific condition from that area was met, like defeating a boss or learning a new ability. After reading a note it will stop glowing and the entry will be marked as completed.`,
      entries: {
        corniferNote1: {
          name: "Note #1: 遗忘十字路",
          spoiler: "Below Big Gruzzer Room",
          id: "Shiny",
          sceneName: "Crossroads_33",
          wiki: "Cornifer#Locations"
        },
        corniferNote2: {
          name: "Note #2: 苍绿之径",
          spoiler: "Room below the Crossroads entrance",
          id: "Shiny",
          sceneName: "Fungus1_06",
          wiki: "Cornifer#Locations"
        },
        corniferNote3: {
          name: "Note #3: 真菌荒地",
          spoiler: "Right of 王后驿站",
          id: "Shiny",
          sceneName: "Fungus2_18",
          wiki: "Cornifer#Locations"
        },
        corniferNote4: {
          name: "Note #4: 呼啸悬崖",
          spoiler: "Big Main Area on the left side",
          id: "Shiny",
          sceneName: "Cliffs_01",
          wiki: "Cornifer#Locations"
        },
        corniferNote5: {
          name: "Note #5: 泪水之城",
          spoiler: "Toll Bench left of 灵魂圣所",
          id: "Shiny",
          sceneName: "Ruins1_31",
          wiki: "Cornifer#Locations"
        },
        corniferNote6: {
          name: "Note #6: 水晶山峰",
          spoiler: "Left of Central Bench",
          id: "Shiny",
          sceneName: "Mines_30",
          wiki: "Cornifer#Locations"
        },
        corniferNote7: {
          name: "Note #7: 安息之地",
          spoiler: "Near the 鹿角虫车站",
          id: "Shiny",
          sceneName: "RestingGrounds_09",
          wiki: "Cornifer#Locations"
        },
        corniferNote8: {
          name: "Note #8: 皇家水道",
          spoiler: "Near 真菌荒地 exit",
          id: "Shiny",
          sceneName: "Waterways_09",
          wiki: "Cornifer#Locations"
        },
        corniferNote9: {
          name: "Note #9: 古老盆地",
          spoiler: "Below the Tram and Fountain",
          id: "Shiny",
          sceneName: "Abyss_04",
          wiki: "Cornifer#Locations"
        },
        corniferNote10: {
          name: "Note #10: 王国边缘",
          spoiler: "Below the 国王驿站 entrance",
          id: "Shiny",
          sceneName: "Deepnest_East_03",
          wiki: "Cornifer#Locations"
        },
      },
    },

    /* ################ Game Statistics ################### */

    statistics: {
      h2: "游戏统计",
      id: "hk-statistics",
      description: "Dedicated to numbers and stats fans. Everything what the game may not always tell you directly, but what can be read from a save file.",
      entries: {
        journalEntriesCompleted: {
          name: "Creatures Encountered",
          spoiler: "猎人日志 (158-164 max)",
          spoilerDefault: "猎人日志",
          max: 164,
          maxDefault: 164,
          wiki: "Category:Enemies_(Hollow_Knight)#Compendium"
        },
        /* 
        Add 4 remaining to Hunter Notes max
        */
        journalNotesCompleted: {
          name: "Hunter Notes Completed",
          spoiler: "猎人日志 (158-164 max)",
          spoilerDefault: "猎人日志",
          max: 164,
          maxDefault: 164,
          wiki: "Category:Enemies_(Hollow_Knight)#Compendium"
        },
        nailDamage: {
          name: "Base Nail Damage",
          spoiler: "钉子匠 upgrades, 泪水之城",
          max: 21,
          maxDefault: 21,
          wiki: "Nail#Nail_Upgrades"
        },
        // not ghostCoins
        geoPool: {
          name: "Shade Geo",
          spoiler: "Amount of Geo the Shade is currently holding",
          min: 0,
          wiki: "Shade"
        },
        soldTrinket1: {
          name: "漫游者日记 Sold",
          spoiler: "泪水之城: 文物搜寻者里姆",
          geoValue: 200,
          wiki: "Wanderer's_Journal"
        },
        soldTrinket2: {
          name: "圣巢印章s Sold",
          spoiler: "泪水之城: 文物搜寻者里姆",
          geoValue: 450,
          wiki: "Hallownest_Seal"
        },
        soldTrinket3: {
          name: "国王神像s Sold",
          spoiler: "泪水之城: 文物搜寻者里姆",
          geoValue: 800,
          wiki: "King's_Idol"
        },
        soldTrinket4: {
          name: "神秘蛋s Sold",
          spoiler: "泪水之城: 文物搜寻者里姆",
          geoValue: 1200,
          wiki: "Arcane_Egg"
        },
        relicsSoldTotalGeo: {
          name: "Total Geo from Sold Relics",
          spoiler: "泪水之城: 文物搜寻者里姆",
          wiki: "Lemm#Collectibles"
        },
        ore: {
          name: "苍白矿石",
          spoiler: "Current amount of 苍白矿石 in inventory",
          wiki: "Pale_Ore"
        },
        simpleKeys: {
          name: "简单钥匙s",
          spoiler: "Current amount of简单钥匙s in inventory",
          wiki: "Simple_Key"
        },
        rancidEggs: {
          name: "腐臭蛋",
          spoiler: "Current amount of 腐臭蛋 in inventory",
          wiki: "Rancid_Egg"
        },
        jinnEggsSold: {
          name: "腐臭蛋 Sold",
          spoiler: "德特茅斯: Jinn, Steel Soul Mode only",
          wiki: "Jinn"
        },
        xunFlowerBrokeTimes: {
          name: "Delicate Flowers Destroyed",
          spoiler: "Grey Mourner, Traitor's Child Grave",
          wiki: "Delicate_Flower"
        },
        itemsDiscovered: {
          id: "itemsDiscovered",
          name: "Interactables",
          spoiler: "Not A. | Activated | Discovered",
          wiki: "Category:Exploration_(Hollow_Knight)",
          notActivated: 0,
          activated: 0,
          discoveredTotal: 0
        },
        bankerBalance: {
          name: "Bank Account Balance",
          spoiler: "雾之峡谷: Millibelle the Banker",
          wiki: "Millibelle"
        },
        whiteDefenderDefeats: {
          name: "白色防御者 Times Defeated",
          spoiler: "皇家水道 (5 max)",
          max: 5,
          maxDefault: 5,
          wiki: "White_Defender"
        },
        greyPrinceDefeats: {
          name: "灰色王子左特 Times Defeated",
          spoiler: "德特茅斯 (10 max)",
          max: 10,
          maxDefault: 10,
          wiki: "Grey_Prince_Zote"
        }
      },
    },

    /* ################################################# 万神殿 Statistics ############################################## */

    godhomeStatistics: {
      h2: "万神殿 Statistics",
      id: "hk-godhome-statistics",
      description: "Everything in 万神殿, that didn't fit any other category.",
      entries: {
        seenGGWastes: {
          name: "Tuner Memory",
          spoiler: "Requires completing 3 Pantheons, 2% chance",
          wiki: "Godhome#Tuner_Memory"
        },
        blueRoomDoorUnlocked: {
          name: "Lifeblood Door Open",
          spoiler: "Complete any 8 Pantheon bindings total",
          wiki: "Godhome#Locked_Lifeblood_Room"
        },
        killedVoidIdol_1: {
          name: "Journal: Void Idol Attuned",
          spoiler: "诸神堂: Defeat All (Attuned)",
          wiki: "Void_Idol"
        },
        killedVoidIdol_2: {
          name: "Journal: Void Idol Ascended",
          spoiler: "诸神堂: Defeat All (Ascended)",
          wiki: "Void_Idol"
        },
        killedVoidIdol_3: {
          name: "Journal: Void Idol Radiant",
          spoiler: "诸神堂: Defeat All (Radiant)",
          wiki: "Void_Idol"
        },
        killedGodseekerMask: {
          name: "Journal: Weathered Mask",
          spoiler: "Land of Storms: All Pantheons & Bindings",
          wiki: "Weathered_Mask"
        },
        zoteStatueWallBroken: {
          name: "Intruder Discovered",
          spoiler: "诸神堂: Zote Statue (upper right)",
          wiki: "Hall_of_Gods#Zote"
        },
        ordealAchieved: {
          name: "The Eternal Ordeal",
          spoiler: "Reach 57 Zotelings defeated",
          wiki: "Eternal_Ordeal"
        }
      },
    },

    /* ################################################### Pantheon of the Master #################################################### */

    pantheonOfTheMaster: {
      h2: "P1 - Pantheon of the Master",
      id: "hk-pantheon-master",
      property: "bossDoorStateTier1",
      description: "Seek the Gods of Nail and Shell",
      entries: {
        unlocked: {
          name: "P1 Unlocked",
          spoiler: "Defeat P1 bosses in the game world to unlock",
          wiki: "Pantheon_of_the_Master"
        },
        completed: {
          name: "P1 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_the_Master"
        },
        boundNail: {
          name: "P1 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P1 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P1 Binding: 护符",
          spoiler: "Complete with the Charm binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P1 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P1 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P1 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },

    /* ################################################### Pantheon of the Artist #################################################### */

    pantheonOfTheArtist: {
      h2: "P2 - Pantheon of the Artist",
      id: "hk-pantheon-artist",
      property: "bossDoorStateTier2",
      description: "Seek the God Inspired",
      entries: {
        unlocked: {
          name: "P2 Unlocked",
          spoiler: "Defeat P2 bosses in the game world to unlock",
          wiki: "Pantheon_of_the_Artist"
        },
        completed: {
          name: "P2 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_the_Artist"
        },
        boundNail: {
          name: "P2 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P2 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P2 Binding: 护符",
          spoiler: "Complete with the 护符 binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P2 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P2 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P2 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },

    /* ################################################### Pantheon of the Sage #################################################### */

    pantheonOfTheSage: {
      h2: "P3 - Pantheon of the Sage",
      id: "hk-pantheon-sage",
      property: "bossDoorStateTier3",
      description: "Seek the God of Wealth and Power",
      entries: {
        unlocked: {
          name: "P3 Unlocked",
          spoiler: "Defeat P3 bosses in the game world to unlock",
          wiki: "Pantheon_of_the_Sage"
        },
        completed: {
          name: "P3 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_the_Sage"
        },
        boundNail: {
          name: "P3 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P3 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P3 Binding: 护符",
          spoiler: "Complete with the 护符 binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P3 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P3 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P3 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },

    /* ################################################### Pantheon of the Knight #################################################### */

    pantheonOfTheKnight: {
      h2: "P4 - Pantheon of the Knight",
      id: "hk-pantheon-knight",
      property: "bossDoorStateTier4",
      description: "Seek the Pure God",
      entries: {
        unlocked: {
          name: "P4 Unlocked",
          spoiler: "Complete 3 previous Pantheons to unlock",
          wiki: "Pantheon_of_the_Knight"
        },
        completed: {
          name: "P4 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_the_Knight"
        },
        boundNail: {
          name: "P4 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P4 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P4 Binding: 护符",
          spoiler: "Complete with the 护符 binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P4 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P4 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P4 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },

    /* ################################################### Pantheon of Hallownest #################################################### */

    pantheonOfHallownest: {
      h2: "P5 - Pantheon of Hallownest",
      id: "hk-pantheon-hallownest",
      property: "bossDoorStateTier5",
      description: "Seek the Kingdom's Forgotten Light",
      entries: {
        unlocked: {
          name: "P5 Unlocked",
          spoiler: "Complete 4 previous Pantheons to unlock",
          wiki: "Pantheon_of_Hallownest"
        },
        completed: {
          name: "P5 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_Hallownest"
        },
        boundNail: {
          name: "P5 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P5 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P5 Binding: 护符",
          spoiler: "Complete with the 护符 binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P5 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P5 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P5 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },

    /* ################################################### 诸神堂 ############################################################# */

    hallOfGods: {
      h2: "诸神堂",
      id: "hk-hall-of-gods",
      property: "statueState",
      description: "Bottom of 万神殿. Detecting what bosses have been unlocked and defeated on all three difficulty levels: 调谐级 Attuned, 进升级 Ascended and 辐辉级 Radiant.",
      entries: {
        GruzMotherUnlocked: {
          name: "Gruz Mother: Unlocked",
          spoiler: "I sleep amongst winding roads",
          id: "GruzMother",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Gruz_Mother"
        },
        GruzMotherAttuned: {
          name: "Gruz Mother: Attuned",
          spoiler: "Slumbering god of fertility",
          id: "GruzMother",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Gruz_Mother"
        },
        GruzMotherAscended: {
          name: "Gruz Mother: Ascended",
          spoiler: "Slumbering god of fertility",
          id: "GruzMother",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Gruz_Mother"
        },
        GruzMotherRadiant: {
          name: "Gruz Mother: Radiant",
          spoiler: "Slumbering god of fertility",
          id: "GruzMother",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Gruz_Mother"
        },
        VengeflyUnlocked: {
          name: "复仇蝇之王: Unlocked",
          spoiler: "I keep guard above a verdant land",
          id: "Vengefly",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Vengefly_King"
        },
        VengeflyAttuned: {
          name: "复仇蝇之王: Attuned",
          spoiler: "Vicious god of territories",
          id: "Vengefly",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Vengefly_King"
        },
        VengeflyAscended: {
          name: "复仇蝇之王: Ascended",
          spoiler: "Vicious god of territories",
          id: "Vengefly",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Vengefly_King"
        },
        VengeflyRadiant: {
          name: "复仇蝇之王: Radiant",
          spoiler: "Vicious god of territories",
          id: "Vengefly",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Vengefly_King"
        },
        BroodingMawlekUnlocked: {
          name: "Brooding Mawlek: Unlocked",
          spoiler: "I call out to no one...",
          id: "BroodingMawlek",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Brooding_Mawlek"
        },
        BroodingMawlekAttuned: {
          name: "Brooding Mawlek: Attuned",
          spoiler: "...hidden by roads and highways",
          id: "BroodingMawlek",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Brooding_Mawlek"
        },
        BroodingMawlekAscended: {
          name: "Brooding Mawlek: Ascended",
          spoiler: "Lonely god of the nest",
          id: "BroodingMawlek",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Brooding_Mawlek"
        },
        BroodingMawlekRadiant: {
          name: "Brooding Mawlek: Radiant",
          spoiler: "Lonely god of the nest",
          id: "BroodingMawlek",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Brooding_Mawlek"
        },
        FalseKnightUnlocked: {
          name: "假骑士: Unlocked",
          spoiler: "I protect the weak in...",
          id: "FalseKnight",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#False_Knight"
        },
        FalseKnightAttuned: {
          name: "假骑士: Attuned",
          spoiler: "...the heart of the crossroads",
          id: "FalseKnight",
          check: "completedTier1",
          wiki: "Hall_of_Gods#False_Knight"
        },
        FalseKnightAscended: {
          name: "假骑士: Ascended",
          spoiler: "Angry god of the downtrodden",
          id: "FalseKnight",
          check: "completedTier2",
          wiki: "Hall_of_Gods#False_Knight"
        },
        FalseKnightRadiant: {
          name: "假骑士: Radiant",
          spoiler: "Angry god of the downtrodden",
          id: "FalseKnight",
          check: "completedTier3",
          wiki: "Hall_of_Gods#False_Knight"
        },
        FailedChampionUnlocked: {
          name: "失败冠军: Unlocked",
          spoiler: "Baleful god of regrets",
          id: "FailedChampion",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Failed_Champion"
        },
        FailedChampionAttuned: {
          name: "失败冠军: Attuned",
          spoiler: "Baleful god of regrets",
          id: "FailedChampion",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Failed_Champion"
        },
        FailedChampionAscended: {
          name: "失败冠军: Ascended",
          spoiler: "Baleful god of regrets",
          id: "FailedChampion",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Failed_Champion"
        },
        FailedChampionRadiant: {
          name: "失败冠军: Radiant",
          spoiler: "Baleful god of regrets",
          id: "FailedChampion",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Failed_Champion"
        },
        Hornet1Unlocked: {
          name: "Hornet Protector: Unlocked",
          spoiler: "I watch over lush pathways...",
          id: "Hornet1",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Hornet_Protector"
        },
        Hornet1Attuned: {
          name: "Hornet Protector: Attuned",
          spoiler: "...and distant ash-swept graves",
          id: "Hornet1",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Hornet_Protector"
        },
        Hornet1Ascended: {
          name: "Hornet Protector: Ascended",
          spoiler: "God protector of a fading land",
          id: "Hornet1",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Hornet_Protector"
        },
        Hornet1Radiant: {
          name: "Hornet Protector: Radiant",
          spoiler: "God protector of a fading land",
          id: "Hornet1",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Hornet_Protector"
        },
        Hornet2Unlocked: {
          name: "Hornet Sentinel: Unlocked",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Hornet_Sentinel"
        },
        Hornet2Attuned: {
          name: "Hornet Sentinel: Attuned",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Hornet_Sentinel"
        },
        Hornet2Ascended: {
          name: "Hornet Sentinel: Ascended",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Hornet_Sentinel"
        },
        Hornet2Radiant: {
          name: "Hornet Sentinel: Radiant",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Hornet_Sentinel"
        },
        MegaMossChargerUnlocked: {
          name: "大型苔藓冲锋者: Unlocked",
          spoiler: "Together we hunt in paths...",
          id: "MegaMossCharger",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Massive_Moss_Charger"
        },
        MegaMossChargerAttuned: {
          name: "大型苔藓冲锋者: Attuned",
          spoiler: "...overgrown with green",
          id: "MegaMossCharger",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Massive_Moss_Charger"
        },
        MegaMossChargerAscended: {
          name: "大型苔藓冲锋者: Ascended",
          spoiler: "Restless god of those...",
          id: "MegaMossCharger",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Massive_Moss_Charger"
        },
        MegaMossChargerRadiant: {
          name: "大型苔藓冲锋者: Radiant",
          spoiler: "...who band together",
          id: "MegaMossCharger",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Massive_Moss_Charger"
        },
        FlukemarmUnlocked: {
          name: "吸虫之母: Unlocked",
          spoiler: "I lie within a maze of pipes",
          id: "Flukemarm",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Flukemarm"
        },
        FlukemarmAttuned: {
          name: "吸虫之母: Attuned",
          spoiler: "Alluring god of motherhood",
          id: "Flukemarm",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Flukemarm"
        },
        FlukemarmAscended: {
          name: "吸虫之母: Ascended",
          spoiler: "Alluring god of motherhood",
          id: "Flukemarm",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Flukemarm"
        },
        FlukemarmRadiant: {
          name: "吸虫之母: Radiant",
          spoiler: "Alluring god of motherhood",
          id: "Flukemarm",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Flukemarm"
        },
        MantisLordsUnlocked: {
          name: "Mantis Lords: Unlocked",
          spoiler: "We watch over a village of warriors",
          id: "MantisLords",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Mantis_Lords"
        },
        MantisLordsAttuned: {
          name: "Mantis Lords: Attuned",
          spoiler: "Noble sister gods of combat",
          id: "MantisLords",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Mantis_Lords"
        },
        MantisLordsAscended: {
          name: "Mantis Lords: Ascended",
          spoiler: "Noble sister gods of combat",
          id: "MantisLords",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Mantis_Lords"
        },
        MantisLordsRadiant: {
          name: "Mantis Lords: Radiant",
          spoiler: "Noble sister gods of combat",
          id: "MantisLords",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Mantis_Lords"
        },
        MantisLordsExtraUnlocked: {
          name: "Sisters of Battle: Unlocked",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Sisters_of_Battle"
        },
        MantisLordsExtraAttuned: {
          name: "Sisters of Battle: Attuned",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Sisters_of_Battle"
        },
        MantisLordsExtraAscended: {
          name: "Sisters of Battle: Ascended",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Sisters_of_Battle"
        },
        MantisLordsExtraRadiant: {
          name: "Sisters of Battle: Radiant",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Sisters_of_Battle"
        },
        OblobblesUnlocked: {
          name: "奥波路波: Unlocked",
          spoiler: "Together we are chained in a strange colosseum",
          id: "Oblobbles",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Oblobbles"
        },
        OblobblesAttuned: {
          name: "奥波路波: Attuned",
          spoiler: "Lover gods of faith and devotion",
          id: "Oblobbles",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Oblobbles"
        },
        OblobblesAscended: {
          name: "奥波路波: Ascended",
          spoiler: "Lover gods of faith and devotion",
          id: "Oblobbles",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Oblobbles"
        },
        OblobblesRadiant: {
          name: "奥波路波: Radiant",
          spoiler: "Lover gods of faith and devotion",
          id: "Oblobbles",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Oblobbles"
        },
        HiveKnightUnlocked: {
          name: "Hive Knight: Unlocked",
          spoiler: "I guard the heart of the hive for my Queen",
          id: "HiveKnight",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Hive_Knight"
        },
        HiveKnightAttuned: {
          name: "Hive Knight: Attuned",
          spoiler: "Watchful god of duty",
          id: "HiveKnight",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Hive_Knight"
        },
        HiveKnightAscended: {
          name: "Hive Knight: Ascended",
          spoiler: "Watchful god of duty",
          id: "HiveKnight",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Hive_Knight"
        },
        HiveKnightRadiant: {
          name: "Hive Knight: Radiant",
          spoiler: "Watchful god of duty",
          id: "HiveKnight",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Hive_Knight"
        },
        BrokenVesselUnlocked: {
          name: "Broken Vessel: Unlocked",
          spoiler: "I sleep in the deep caves below the world",
          id: "BrokenVessel",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Broken_Vessel"
        },
        BrokenVesselAttuned: {
          name: "Broken Vessel: Attuned",
          spoiler: "Broken shell of an empty god",
          id: "BrokenVessel",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Broken_Vessel"
        },
        BrokenVesselAscended: {
          name: "Broken Vessel: Ascended",
          spoiler: "Broken shell of an empty god",
          id: "BrokenVessel",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Broken_Vessel"
        },
        BrokenVesselRadiant: {
          name: "Broken Vessel: Radiant",
          spoiler: "Broken shell of an empty god",
          id: "BrokenVessel",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Broken_Vessel"
        },
        LostKinUnlocked: {
          name: "失落近亲: Unlocked",
          spoiler: "Lost god of 深渊",
          id: "LostKin",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Lost_Kin"
        },
        LostKinAttuned: {
          name: "失落近亲: Attuned",
          spoiler: "Lost god of 深渊",
          id: "LostKin",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Lost_Kin"
        },
        LostKinAscended: {
          name: "失落近亲: Ascended",
          spoiler: "Lost god of 深渊",
          id: "LostKin",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Lost_Kin"
        },
        LostKinRadiant: {
          name: "失落近亲: Radiant",
          spoiler: "Lost god of 深渊",
          id: "LostKin",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Lost_Kin"
        },
        NoskUnlocked: {
          name: "Nosk: Unlocked",
          spoiler: "I wait patiently in a dark nest of predators",
          id: "Nosk",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Nosk"
        },
        NoskAttuned: {
          name: "Nosk: Attuned",
          spoiler: "Everchanging god of the faceless",
          id: "Nosk",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Nosk"
        },
        NoskAscended: {
          name: "Nosk: Ascended",
          spoiler: "Everchanging god of the faceless",
          id: "Nosk",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Nosk"
        },
        NoskRadiant: {
          name: "Nosk: Radiant",
          spoiler: "Everchanging god of the faceless",
          id: "Nosk",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Nosk"
        },
        NoskHornetUnlocked: {
          name: "Winged Nosk: Unlocked",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Winged_Nosk"
        },
        NoskHornetAttuned: {
          name: "Winged Nosk: Attuned",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Winged_Nosk"
        },
        NoskHornetAscended: {
          name: "Winged Nosk: Ascended",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Winged_Nosk"
        },
        NoskHornetRadiant: {
          name: "Winged Nosk: Radiant",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Winged_Nosk"
        },
        CollectorUnlocked: {
          name: "The Collector: Unlocked",
          spoiler: "I lurk at the peak of a forsaken tower",
          id: "Collector",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#The_Collector"
        },
        CollectorAttuned: {
          name: "The Collector: Attuned",
          spoiler: "Joyful god of protection",
          id: "Collector",
          check: "completedTier1",
          wiki: "Hall_of_Gods#The_Collector"
        },
        CollectorAscended: {
          name: "The Collector: Ascended",
          spoiler: "Joyful god of protection",
          id: "Collector",
          check: "completedTier2",
          wiki: "Hall_of_Gods#The_Collector"
        },
        CollectorRadiant: {
          name: "The Collector: Radiant",
          spoiler: "Joyful god of protection",
          id: "Collector",
          check: "completedTier3",
          wiki: "Hall_of_Gods#The_Collector"
        },
        GodTamerUnlocked: {
          name: "God Tamer: Unlocked",
          spoiler: "I wait, weapon in hand, within the colosseum",
          id: "GodTamer",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#God_Tamer"
        },
        GodTamerAttuned: {
          name: "God Tamer: Attuned",
          spoiler: "Gallant god of the arena",
          id: "GodTamer",
          check: "completedTier1",
          wiki: "Hall_of_Gods#God_Tamer"
        },
        GodTamerAscended: {
          name: "God Tamer: Ascended",
          spoiler: "Gallant god of the arena",
          id: "GodTamer",
          check: "completedTier2",
          wiki: "Hall_of_Gods#God_Tamer"
        },
        GodTamerRadiant: {
          name: "God Tamer: Radiant",
          spoiler: "Gallant god of the arena",
          id: "GodTamer",
          check: "completedTier3",
          wiki: "Hall_of_Gods#God_Tamer"
        },
        CrystalGuardian1Unlocked: {
          name: "水晶守卫: Unlocked",
          spoiler: "I rest amongst crystals...",
          id: "CrystalGuardian1",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Crystal_Guardian"
        },
        CrystalGuardian1Attuned: {
          name: "水晶守卫: Attuned",
          spoiler: "...and strange machinery",
          id: "CrystalGuardian1",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Crystal_Guardian"
        },
        CrystalGuardian1Ascended: {
          name: "水晶守卫: Ascended",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian1",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Crystal_Guardian"
        },
        CrystalGuardian1Radiant: {
          name: "水晶守卫: Radiant",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian1",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Crystal_Guardian"
        },
        CrystalGuardian2Unlocked: {
          name: "暴怒守卫: Unlocked",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Enraged_Guardian"
        },
        CrystalGuardian2Attuned: {
          name: "暴怒守卫: Attuned",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Enraged_Guardian"
        },
        CrystalGuardian2Ascended: {
          name: "暴怒守卫: Ascended",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Enraged_Guardian"
        },
        CrystalGuardian2Radiant: {
          name: "暴怒守卫: Radiant",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Enraged_Guardian"
        },
        UumuuUnlocked: {
          name: "Uumuu: Unlocked",
          spoiler: "I sleep submerged in the depths of the archive",
          id: "Uumuu",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Uumuu"
        },
        UumuuAttuned: {
          name: "Uumuu: Attuned",
          spoiler: "Uncanny god of knowledge",
          id: "Uumuu",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Uumuu"
        },
        UumuuAscended: {
          name: "Uumuu: Ascended",
          spoiler: "Uncanny god of knowledge",
          id: "Uumuu",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Uumuu"
        },
        UumuuRadiant: {
          name: "Uumuu: Radiant",
          spoiler: "Uncanny god of knowledge",
          id: "Uumuu",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Uumuu"
        },
        TraitorLordUnlocked: {
          name: "Traitor Lord: Unlocked",
          spoiler: "I defile the gardens of false royalty",
          id: "TraitorLord",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Traitor_Lord"
        },
        TraitorLordAttuned: {
          name: "Traitor Lord: Attuned",
          spoiler: "Treacherous god of anger",
          id: "TraitorLord",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Traitor_Lord"
        },
        TraitorLordAscended: {
          name: "Traitor Lord: Ascended",
          spoiler: "Treacherous god of anger",
          id: "TraitorLord",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Traitor_Lord"
        },
        TraitorLordRadiant: {
          name: "Traitor Lord: Radiant",
          spoiler: "Treacherous god of anger",
          id: "TraitorLord",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Traitor_Lord"
        },
        GreyPrinceUnlocked: {
          name: "灰色王子左特: Unlocked",
          spoiler: "I serve my Queen inside her dreams",
          id: "GreyPrince",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Grey_Prince_Zote"
        },
        GreyPrinceAttuned: {
          name: "灰色王子左特: Attuned",
          spoiler: "False god conjured by the lonely",
          id: "GreyPrince",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Grey_Prince_Zote"
        },
        GreyPrinceAscended: {
          name: "灰色王子左特: Ascended",
          spoiler: "False god conjured by the lonely",
          id: "GreyPrince",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Grey_Prince_Zote"
        },
        GreyPrinceRadiant: {
          name: "灰色王子左特: Radiant",
          spoiler: "False god conjured by the lonely",
          id: "GreyPrince",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Grey_Prince_Zote"
        },
        MageKnightUnlocked: {
          name: "Soul Warrior: Unlocked",
          spoiler: "I haunt the halls of a sanctum",
          id: "MageKnight",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Soul_Warrior"
        },
        MageKnightAttuned: {
          name: "Soul Warrior: Attuned",
          spoiler: "Haunted god of the sanctum",
          id: "MageKnight",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Soul_Warrior"
        },
        MageKnightAscended: {
          name: "Soul Warrior: Ascended",
          spoiler: "Haunted god of the sanctum",
          id: "MageKnight",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Soul_Warrior"
        },
        MageKnightRadiant: {
          name: "Soul Warrior: Radiant",
          spoiler: "Haunted god of the sanctum",
          id: "MageKnight",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Soul_Warrior"
        },
        SoulMasterUnlocked: {
          name: "Soul Master: Unlocked",
          spoiler: "Immortal, I rule the Sanctum",
          id: "SoulMaster",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Soul_Master"
        },
        SoulMasterAttuned: {
          name: "Soul Master: Attuned",
          spoiler: "Covetous god of soul",
          id: "SoulMaster",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Soul_Master"
        },
        SoulMasterAscended: {
          name: "Soul Master: Ascended",
          spoiler: "Covetous god of soul",
          id: "SoulMaster",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Soul_Master"
        },
        SoulMasterRadiant: {
          name: "Soul Master: Radiant",
          spoiler: "Covetous god of soul",
          id: "SoulMaster",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Soul_Master"
        },
        SoulTyrantUnlocked: {
          name: "灵魂暴君: Unlocked",
          spoiler: "Frenzied god of mortality",
          id: "SoulTyrant",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Soul_Tyrant"
        },
        SoulTyrantAttuned: {
          name: "灵魂暴君: Attuned",
          spoiler: "Frenzied god of mortality",
          id: "SoulTyrant",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Soul_Tyrant"
        },
        SoulTyrantAscended: {
          name: "灵魂暴君: Ascended",
          spoiler: "Frenzied god of mortality",
          id: "SoulTyrant",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Soul_Tyrant"
        },
        SoulTyrantRadiant: {
          name: "灵魂暴君: Radiant",
          spoiler: "Frenzied god of mortality",
          id: "SoulTyrant",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Soul_Tyrant"
        },
        DungDefenderUnlocked: {
          name: "Dung Defender: Unlocked",
          spoiler: "I protect the pipeways of the kingdom",
          id: "DungDefender",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Dung_Defender"
        },
        DungDefenderAttuned: {
          name: "Dung Defender: Attuned",
          spoiler: "Kindly god of bravery and honour",
          id: "DungDefender",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Dung_Defender"
        },
        DungDefenderAscended: {
          name: "Dung Defender: Ascended",
          spoiler: "Kindly god of bravery and honour",
          id: "DungDefender",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Dung_Defender"
        },
        DungDefenderRadiant: {
          name: "Dung Defender: Radiant",
          spoiler: "Kindly god of bravery and honour",
          id: "DungDefender",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Dung_Defender"
        },
        WhiteDefenderUnlocked: {
          name: "白色防御者: Unlocked",
          spoiler: "Kindly god of bravery and honour",
          id: "WhiteDefender",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#White_Defender"
        },
        WhiteDefenderAttuned: {
          name: "白色防御者: Attuned",
          spoiler: "Kindly god of bravery and honour",
          id: "WhiteDefender",
          check: "completedTier1",
          wiki: "Hall_of_Gods#White_Defender"
        },
        WhiteDefenderAscended: {
          name: "白色防御者: Ascended",
          spoiler: "Kindly god of bravery and honour",
          id: "WhiteDefender",
          check: "completedTier2",
          wiki: "Hall_of_Gods#White_Defender"
        },
        WhiteDefenderRadiant: {
          name: "白色防御者: Radiant",
          spoiler: "Kindly god of bravery and honour",
          id: "WhiteDefender",
          check: "completedTier3",
          wiki: "Hall_of_Gods#White_Defender"
        },
        WatcherKnightsUnlocked: {
          name: "Watcher Knight: Unlocked",
          spoiler: "We lie dormant, guarding the Spire's peak",
          id: "WatcherKnights",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Watcher_Knight"
        },
        WatcherKnightsAttuned: {
          name: "Watcher Knight: Attuned",
          spoiler: "Sentinel gods of the spire",
          id: "WatcherKnights",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Watcher_Knight"
        },
        WatcherKnightsAscended: {
          name: "Watcher Knight: Ascended",
          spoiler: "Sentinel gods of the spire",
          id: "WatcherKnights",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Watcher_Knight"
        },
        WatcherKnightsRadiant: {
          name: "Watcher Knight: Radiant",
          spoiler: "Sentinel gods of the spire",
          id: "WatcherKnights",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Watcher_Knight"
        },
        NoEyesUnlocked: {
          name: "No Eyes: Unlocked",
          spoiler: "I lie dreaming in a silent sanctuary",
          id: "NoEyes",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#No_Eyes"
        },
        NoEyesAttuned: {
          name: "No Eyes: Attuned",
          spoiler: "Dreamborn god of fear and relief",
          id: "NoEyes",
          check: "completedTier1",
          wiki: "Hall_of_Gods#No_Eyes"
        },
        NoEyesAscended: {
          name: "No Eyes: Ascended",
          spoiler: "Dreamborn god of fear and relief",
          id: "NoEyes",
          check: "completedTier2",
          wiki: "Hall_of_Gods#No_Eyes"
        },
        NoEyesRadiant: {
          name: "No Eyes: Radiant",
          spoiler: "Dreamborn god of fear and relief",
          id: "NoEyes",
          check: "completedTier3",
          wiki: "Hall_of_Gods#No_Eyes"
        },
        MarmuUnlocked: {
          name: "Marmu: Unlocked",
          spoiler: "I lie dreaming patiently in a garden",
          id: "Marmu",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Marmu"
        },
        MarmuAttuned: {
          name: "Marmu: Attuned",
          spoiler: "Dreamborn god of gardens",
          id: "Marmu",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Marmu"
        },
        MarmuAscended: {
          name: "Marmu: Ascended",
          spoiler: "Dreamborn god of gardens",
          id: "Marmu",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Marmu"
        },
        MarmuRadiant: {
          name: "Marmu: Radiant",
          spoiler: "Dreamborn god of gardens",
          id: "Marmu",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Marmu"
        },
        GalienUnlocked: {
          name: "Galien: Unlocked",
          spoiler: "I lie dreaming in darkness, surrounded by predators",
          id: "Galien",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Galien"
        },
        GalienAttuned: {
          name: "Galien: Attuned",
          spoiler: "Dreamborn god of heroic hearts",
          id: "Galien",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Galien"
        },
        GalienAscended: {
          name: "Galien: Ascended",
          spoiler: "Dreamborn god of heroic hearts",
          id: "Galien",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Galien"
        },
        GalienRadiant: {
          name: "Galien: Radiant",
          spoiler: "Dreamborn god of heroic hearts",
          id: "Galien",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Galien"
        },
        MarkothUnlocked: {
          name: "Markoth: Unlocked",
          spoiler: "I lie dreaming at the edge of the world",
          id: "Markoth",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Markoth"
        },
        MarkothAttuned: {
          name: "Markoth: Attuned",
          spoiler: "Dreamborn god of meditation and isolation",
          id: "Markoth",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Markoth"
        },
        MarkothAscended: {
          name: "Markoth: Ascended",
          spoiler: "Dreamborn god of meditation and isolation",
          id: "Markoth",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Markoth"
        },
        MarkothRadiant: {
          name: "Markoth: Radiant",
          spoiler: "Dreamborn god of meditation and isolation",
          id: "Markoth",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Markoth"
        },
        XeroUnlocked: {
          name: "Xero: Unlocked",
          spoiler: "I lie dreaming amongst peaceful graves",
          id: "Xero",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Xero"
        },
        XeroAttuned: {
          name: "Xero: Attuned",
          spoiler: "Dreamborn god of faith and betrayal",
          id: "Xero",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Xero"
        },
        XeroAscended: {
          name: "Xero: Ascended",
          spoiler: "Dreamborn god of faith and betrayal",
          id: "Xero",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Xero"
        },
        XeroRadiant: {
          name: "Xero: Radiant",
          spoiler: "Dreamborn god of faith and betrayal",
          id: "Xero",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Xero"
        },
        GorbUnlocked: {
          name: "Gorb: Unlocked",
          spoiler: "I lie dreaming at a wind-blasted peak",
          id: "Gorb",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Gorb"
        },
        GorbAttuned: {
          name: "Gorb: Attuned",
          spoiler: "Dreamborn god of the beyond",
          id: "Gorb",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Gorb"
        },
        GorbAscended: {
          name: "Gorb: Ascended",
          spoiler: "Dreamborn god of the beyond",
          id: "Gorb",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Gorb"
        },
        GorbRadiant: {
          name: "Gorb: Radiant",
          spoiler: "Dreamborn god of the beyond",
          id: "Gorb",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Gorb"
        },
        ElderHuUnlocked: {
          name: "Elder Hu: Unlocked",
          spoiler: "I lie dreaming in the wastes",
          id: "ElderHu",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Elder_Hu"
        },
        ElderHuAttuned: {
          name: "Elder Hu: Attuned",
          spoiler: "Dreamborn god of travellers and sages",
          id: "ElderHu",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Elder_Hu"
        },
        ElderHuAscended: {
          name: "Elder Hu: Ascended",
          spoiler: "Dreamborn god of travellers and sages",
          id: "ElderHu",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Elder_Hu"
        },
        ElderHuRadiant: {
          name: "Elder Hu: Radiant",
          spoiler: "Dreamborn god of travellers and sages",
          id: "ElderHu",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Elder_Hu"
        },
        NailmastersUnlocked: {
          name: "Oro & Mato: Unlocked",
          spoiler: "Together, we stand at a Pantheon's peak",
          id: "Nailmasters",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Oro_.26_Mato"
        },
        NailmastersAttuned: {
          name: "Oro & Mato: Attuned",
          spoiler: "Loyal brother gods of the nail",
          id: "Nailmasters",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Oro_.26_Mato"
        },
        NailmastersAscended: {
          name: "Oro & Mato: Ascended",
          spoiler: "Loyal brother gods of the nail",
          id: "Nailmasters",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Oro_.26_Mato"
        },
        NailmastersRadiant: {
          name: "Oro & Mato: Radiant",
          spoiler: "Loyal brother gods of the nail",
          id: "Nailmasters",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Oro_.26_Mato"
        },
        PaintmasterUnlocked: {
          name: "绘画大师席奥: Unlocked",
          spoiler: "I hone my craft at a Pantheon's peak",
          id: "Paintmaster",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Paintmaster_Sheo"
        },
        PaintmasterAttuned: {
          name: "绘画大师席奥: Attuned",
          spoiler: "Talented god of artists and creators",
          id: "Paintmaster",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Paintmaster_Sheo"
        },
        PaintmasterAscended: {
          name: "绘画大师席奥: Ascended",
          spoiler: "Talented god of artists and creators",
          id: "Paintmaster",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Paintmaster_Sheo"
        },
        PaintmasterRadiant: {
          name: "绘画大师席奥: Radiant",
          spoiler: "Talented god of artists and creators",
          id: "Paintmaster",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Paintmaster_Sheo"
        },
        SlyUnlocked: {
          name: "Nailsage Sly: Unlocked",
          spoiler: "I await you at a Pantheon's peak",
          id: "Sly",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Nailsage_Sly"
        },
        SlyAttuned: {
          name: "Nailsage Sly: Attuned",
          spoiler: "Cunning god of opportunity",
          id: "Sly",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Nailsage_Sly"
        },
        SlyAscended: {
          name: "Nailsage Sly: Ascended",
          spoiler: "Cunning god of opportunity",
          id: "Sly",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Nailsage_Sly"
        },
        SlyRadiant: {
          name: "Nailsage Sly: Radiant",
          spoiler: "Cunning god of opportunity",
          id: "Sly",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Nailsage_Sly"
        },
        HollowKnightUnlocked: {
          name: "纯粹容器: Unlocked",
          spoiler: "This empty god stands at a Pantheon's peak",
          id: "HollowKnight",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Pure_Vessel"
        },
        HollowKnightAttuned: {
          name: "纯粹容器: Attuned",
          spoiler: "Mighty god of nothingness",
          id: "HollowKnight",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Pure_Vessel"
        },
        HollowKnightAscended: {
          name: "纯粹容器: Ascended",
          spoiler: "Mighty god of nothingness",
          id: "HollowKnight",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Pure_Vessel"
        },
        HollowKnightRadiant: {
          name: "纯粹容器: Radiant",
          spoiler: "Mighty god of nothingness",
          id: "HollowKnight",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Pure_Vessel"
        },
        GrimmUnlocked: {
          name: "Grimm: Unlocked",
          spoiler: "I await the lighting of the lantern",
          id: "Grimm",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Grimm"
        },
        GrimmAttuned: {
          name: "Grimm: Attuned",
          spoiler: "Travelling god of the troupe",
          id: "Grimm",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Grimm"
        },
        GrimmAscended: {
          name: "Grimm: Ascended",
          spoiler: "Travelling god of the troupe",
          id: "Grimm",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Grimm"
        },
        GrimmRadiant: {
          name: "Grimm: Radiant",
          spoiler: "Travelling god of the troupe",
          id: "Grimm",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Grimm"
        },
        NightmareGrimmUnlocked: {
          name: "Nightmare King: Unlocked",
          spoiler: "God of nightmares",
          id: "NightmareGrimm",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Nightmare_King"
        },
        NightmareGrimmAttuned: {
          name: "Nightmare King: Attuned",
          spoiler: "God of nightmares",
          id: "NightmareGrimm",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Nightmare_King"
        },
        NightmareGrimmAscended: {
          name: "Nightmare King: Ascended",
          spoiler: "God of nightmares",
          id: "NightmareGrimm",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Nightmare_King"
        },
        NightmareGrimmRadiant: {
          name: "Nightmare King: Radiant",
          spoiler: "God of nightmares",
          id: "NightmareGrimm",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Nightmare_King"
        },
        RadianceUnlocked: {
          name: "Radiance: Unlocked",
          spoiler: "Forgotten god of light",
          id: "Radiance",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Radiance"
        },
        RadianceAttuned: {
          name: "Radiance: Attuned",
          spoiler: "Forgotten god of light",
          id: "Radiance",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Radiance"
        },
        RadianceAscended: {
          name: "Radiance: Ascended",
          spoiler: "Forgotten god of light",
          id: "Radiance",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Radiance"
        },
        RadianceRadiant: {
          name: "Radiance: Radiant",
          spoiler: "Forgotten god of light",
          id: "Radiance",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Radiance"
        },
      },
    }


  },
};

export default HK;