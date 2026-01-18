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
          wiki: "格鲁兹之母"
        },
        falseKnightDefeated: {
          name: "P1 假骑士",
          spoiler: "遗忘十字路, middle area map symbol",
          wiki: "假骑士"
        }, // "Battle Scene" - "Crossroads_10" ?
        hornet1Defeated: {
          name: "P1 守护者大黄蜂",
          spoiler: "苍绿之径, above 鹿角虫车站",
          wiki: "守护者大黄蜂"
        },
        defeatedDungDefender: {
          name: "P1 粪虫防御者",
          spoiler: "皇家水道, right area",
          wiki: "粪虫防御者"
        },
        // killedMawlek
        bossBroodingMawlek: {
          name: "P1 躁郁的毛里克",
          spoiler: "遗忘十字路, use 螳螂爪",
          id: "Battle Scene",
          sceneName: "Crossroads_09",
          wiki: "躁郁的毛里克"
        },
        mageLordDefeated: {
          name: "P2 灵魂大师",
          spoiler: "泪水之城: 灵魂圣所",
          wiki: "灵魂大师"
        },
        defeatedMantisLords: {
          name: "P2 螳螂领主",
          spoiler: "真菌荒地: 螳螂村",
          wiki: "螳螂领主"
        },
        // "Battle Scene" - "Deepnest_32" ?
        killedMimicSpider: {
          name: "P2 诺斯克",
          spoiler: "深邃巢穴, use 水晶之心, left of Hot Spring",
          wiki: "诺斯克"
        },
        killedInfectedKnight: {
          name: "P2 残破容器",
          spoiler: "古老盆地, lower left, use 水晶之心",
          wiki: "残破容器"
        },
        collectorDefeated: {
          name: "P3 收藏家",
          spoiler: "泪水之城: 爱之塔",
          wiki: "收藏家"
        },
        defeatedMegaJelly: {
          name: "P3 乌姆",
          spoiler: "雾之峡谷: 教师档案馆",
          wiki: "乌姆"
        },
        hornetOutskirtsDefeated: {
          name: "P3 岗哨大黄蜂",
          spoiler: "王国边缘, 需要帝王之翼",
          wiki: "岗哨大黄蜂"
        },
        // "Battle Scene" - "Fungus3_23" ?
        killedTraitorLord: {
          name: "P4 叛徒领主",
          spoiler: "王后花园, 需要暗影披风",
          wiki: "叛徒领主"
        },
        killedBlackKnight: {
          name: "P4 守望者骑士",
          spoiler: "泪水之城: 守望者的尖塔",
          wiki: "守望者骑士"
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
          spoiler: "斯莱: 300吉欧",
          wiki: "采集虫群"
        }, // 1
        gotCharm_2: {
          name: "#2 任性的指南针",
          spoiler: "伊赛尔达: 220吉欧",
          wiki: "任性的指南针"
        }, // 1
        gotCharm_3: {
          name: "#3 幼虫之歌",
          spoiler: "虫爷爷: 10 幼虫 rescued",
          wiki: "幼虫之歌"
        }, // 1
        gotCharm_4: {
          name: "#4 坚硬外壳",
          spoiler: "斯莱: 200吉欧",
          wiki: "坚硬外壳"
        }, // 2
        gotCharm_5: {
          name: "#5 巴德尔之壳",
          spoiler: "呼啸悬崖, bottom, near 苍绿之径",
          wiki: "巴德尔之壳"
        }, // 2
        gotCharm_6: {
          name: "#6 亡者之怒",
          spoiler: "国王山道, nail-bounce spikes",
          wiki: "亡者之怒"
        }, // 2
        gotCharm_7: {
          name: "#7 快速凝聚",
          spoiler: "萨鲁巴: 800吉欧",
          wiki: "快速凝聚"
        }, // 3
        gotCharm_8: {
          name: "#8 生命血之心",
          spoiler: "萨鲁巴: 250吉欧",
          wiki: "生命血之心"
        }, // 2
        gotCharm_9: {
          name: "#9 生命血核心",
          spoiler: "深渊: 15 Lifeblood masks",
          wiki: "生命血核心"
        }, // 3
        gotCharm_10: {
          name: "#10 防御者纹章",
          spoiler: "皇家水道, defeat 粪虫防御者",
          wiki: "防御者纹章"
        }, // 1
        gotCharm_11: {
          name: "#11 吸虫之巢",
          spoiler: "皇家水道, defeat 吸虫之母",
          wiki: "吸虫之巢"
        }, // 3
        gotCharm_12: {
          name: "#12 苦痛荆棘",
          spoiler: "苍绿之径, 需要蛾翼披风",
          wiki: "苦痛荆棘"
        }, // 1
        gotCharm_13: {
          name: "#13 骄傲印记",
          spoiler: "螳螂村, defeat 螳螂领主",
          wiki: "骄傲印记"
        }, // 3
        gotCharm_14: {
          name: "#14 稳定之体",
          spoiler: "萨鲁巴: 120吉欧",
          wiki: "稳定之体"
        }, // 1
        gotCharm_15: {
          name: "#15 沉重之击",
          spoiler: "斯莱: 350吉欧 + 店主的钥匙",
          wiki: "沉重之击"
        }, // 2
        gotCharm_16: {
          name: "#16 锋利之影",
          spoiler: "深邃巢穴, 需要暗影披风",
          wiki: "锋利之影"
        }, // 2
        gotCharm_17: {
          name: "#17 蘑菇孢子",
          spoiler: "真菌荒地, near 王后花园",
          wiki: "蘑菇孢子"
        }, // 1
        gotCharm_18: {
          name: "#18 修长之钉",
          spoiler: "萨鲁巴: 300吉欧",
          wiki: "短剑之钉"
        }, // 2
        gotCharm_19: {
          name: "#19 萨满之石",
          spoiler: "萨鲁巴: 220吉欧",
          wiki: "萨满之石"
        }, // 3
        gotCharm_20: {
          name: "#20 灵魂捕手",
          spoiler: "遗忘十字路: 祖先山丘",
          wiki: "灵魂捕手"
        }, // 2
        gotCharm_21: {
          name: "#21 噬魂者",
          spoiler: "安息之地, 需要荒芜俯冲",
          wiki: "噬魂者"
        }, // 4
        gotCharm_22: {
          name: "#22 发光子宫",
          spoiler: "遗忘十字路, 需要水晶之心",
          wiki: "发光子宫"
        }, // 2
        gotCharm_23: {
          name: "#23 易碎心脏",
          spoiler: "食腿者: 350吉欧 (佩戴着防御者纹章的话只需要280吉欧)",
          wiki: "易碎心脏"
        }, // 2
        gotCharm_24: {
          name: "#24 易碎贪婪",
          spoiler: "食腿者: 250吉欧 (佩戴着防御者纹章的话只需要200吉欧)",
          wiki: "易碎贪婪"
        }, // 2
        gotCharm_25: {
          name: "#25 易碎力量",
          spoiler: "食腿者: 600吉欧 (佩戴着防御者纹章的话只需要480吉欧)",
          wiki: "易碎力量"
        }, // 3
        gotCharm_26: {
          name: "#26 骨钉大师的荣耀",
          spoiler: "斯莱: Learn all Nail Arts",
          wiki: "骨钉大师的荣耀"
        }, // 1
        gotCharm_27: {
          name: "#27 乔尼的祝福",
          spoiler: "呼啸悬崖: 乔尼的长眠处",
          wiki: "乔尼的祝福"
        }, // 4
        gotCharm_28: {
          name: "#28 乌恩之形",
          spoiler: "苍绿之径: Lake of Unn, 需要伊思玛的眼泪",
          wiki: "乌恩之形"
        }, // 2
        gotCharm_29: {
          name: "#29 蜂巢之血",
          spoiler: "蜂巢, defeat 蜂巢骑士",
          wiki: "蜂巢之血"
        }, // 4
        gotCharm_30: {
          name: "#30 舞梦者",
          spoiler: "先知: 500精华",
          wiki: "舞梦者"
        }, // 1
        gotCharm_31: {
          name: "#31 冲刺大师",
          spoiler: "真菌荒地, below bench, near 布蕾塔",
          wiki: "冲刺大师"
          /* 
          "id": "Shiny Item Stand",
          "sceneName": "Fungus2_23",
          */
        }, // 2
        gotCharm_32: {
          name: "#32 快速劈砍",
          spoiler: "王国边缘, 需要荒芜俯冲",
          wiki: "快速劈砍"
        }, // 3
        gotCharm_33: {
          name: "#33 法术扭曲者",
          spoiler: "泪水之城: 灵魂圣所",
          wiki: "法术扭曲者"
        }, // 2
        gotCharm_34: {
          name: "#34 深度凝聚",
          spoiler: "水晶山峰, 需要水晶之心",
          wiki: "深度凝聚"
        }, // 4
        gotCharm_35: {
          name: "#35 蜕变挽歌",
          spoiler: "虫爷爷: All 46 幼虫 rescued",
          wiki: "蜕变挽歌"
        }, // 3
        gotCharm_36: {
          name: "#36 国王之魂",
          spoiler: "王后花园 (暗影披风) + 白色宫殿 (觉醒的梦之钉)",
          wiki: "国王之魂"
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
          spoiler: "苍绿之径: 可在地面或空中向前冲刺的能力",
          wiki: "蛾翼披风"
        },
        hasWalljump: {
          name: "螳螂爪",
          spoiler: "螳螂村: 紧贴墙壁并在墙上跳跃的能力",
          wiki: "螳螂爪"
        },
        hasSuperDash: {
          name: "水晶之心",
          spoiler: "水晶山峰: 以危险的速度向前发射出去的能力",
          wiki: "水晶之心"
        },
        hasDoubleJump: {
          name: "帝王之翼",
          spoiler: "古老盆地: 在空中再次跳跃的能力",
          wiki: "帝王之翼"
        },
        hasAcidArmour: {
          name: "伊思玛的眼泪",
          spoiler: "皇家水道: 保护持有者免受圣巢某些地方的酸性水池灼伤",
          wiki: "伊思玛的眼泪"
        },
        hasKingsBrand: {
          name: "王之印记",
          spoiler: "王国边缘, 击败岗哨大黄蜂",
          wiki: "王之印记"
        },
        hasShadowDash: {
          name: "暗影披风",
          spoiler: "深渊: 冲刺时穿过敌人和他们的攻击而不受到伤害",
          wiki: "暗影披风"
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
          spoiler: "初始武器",
          wiki: "骨钉"
        },
        sharpenedNail: {
          name: "#1 锋利骨钉",
          spoiler: "钉子匠: 250吉欧",
          wiki: "骨钉#升级"
        },
        channeledNail: {
          name: "#2 开槽骨钉",
          spoiler: "钉子匠: 800吉欧 + 1 苍白矿石",
          wiki: "骨钉#升级"
        },
        coiledNail: {
          name: "#3 螺纹骨钉",
          spoiler: "钉子匠: 2000吉欧 + 2 苍白矿石",
          wiki: "骨钉#升级"
        },
        pureNail: {
          name: "#4 纯粹骨钉",
          spoiler: "钉子匠: 4000吉欧 + 3 苍白矿石",
          wiki: "骨钉#升级"
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
          spoiler: "骨钉大师席奥: 苍绿之径",
          wiki: "强力劈砍"
        },
        /* this is correct - somehow Team Cherry switched the names here */
        hasUpwardSlash: {
          name: "冲刺劈砍",
          spoiler: "骨钉大师奥罗: 王国边缘, 800吉欧",
          wiki: "冲刺劈砍"
        },
        hasCyclone: {
          name: "旋风劈砍",
          spoiler: "骨钉大师马托: 呼啸悬崖",
          wiki: "旋风劈砍"
        },
      },
    },

    /* ################ 法术 ################### */

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
          wiki: "复仇之魂"
        },
        shadeSoul: {
          fireballLevel: 2,
          name: "暗影之魂",
          spoiler: "泪水之城: 灵魂圣所 + 典雅的钥匙",
          wiki: "暗影之魂"
        },
        desolateDive: {
          quakeLevel: 1,
          name: "荒芜俯冲",
          spoiler: "泪水之城: 灵魂圣所",
          wiki: "荒芜俯冲"
        },
        descendingDark: {
          quakeLevel: 2,
          name: "黑暗降临",
          spoiler: "水晶山峰: 结晶山丘",
          wiki: "黑暗降临"
        },
        howlingWraiths: {
          screamLevel: 1,
          name: "嚎叫幽灵",
          spoiler: "雾之峡谷: 长满植物的山丘",
          wiki: "嚎叫幽灵"
        },
        abyssShriek: {
          screamLevel: 2,
          name: "深渊尖啸",
          spoiler: "深渊, 在平台上使用嚎叫幽灵",
          wiki: "深渊尖啸"
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
          spoiler: "斯莱: 150吉欧",
          wiki: "面具碎片"
        },
        slyShellFrag2: {
          name: "面具碎片 #2",
          spoiler: "斯莱: 500吉欧",
          wiki: "面具碎片"
        },
        slyShellFrag3: {
          name: "面具碎片 #3",
          spoiler: "斯莱: 800吉欧 + 店主的钥匙",
          wiki: "面具碎片"
        },
        slyShellFrag4: {
          name: "面具碎片 #4",
          spoiler: "斯莱: 1500吉欧 + 店主的钥匙",
          wiki: "面具碎片"
        },
        dreamReward7: {
          name: "面具碎片 #5",
          spoiler: "先知: 1500精华",
          wiki: "面具碎片"
        },
        /* ########## Mask Shards World ########## */
        /* "Heart Piece" sceneData.persistentBoolItems.id */
        maskShardCrossroadsSprings: {
          name: "面具碎片 #6",
          spoiler: "遗忘十字路: below Hot Springs",
          wiki: "面具碎片",
          id: "Heart Piece",
          sceneName: "Crossroads_13"
        },
        maskShardCrossroadsMawlek: {
          name: "面具碎片 #7",
          spoiler: "遗忘十字路: defeat 躁郁的毛里克",
          wiki: "面具碎片",
          id: "Heart Piece",
          sceneName: "Crossroads_09"
        },
        maskShardGrubfather: {
          name: "面具碎片 #8",
          spoiler: "虫爷爷: 5 幼虫 rescued",
          wiki: "面具碎片",
          id: "Heart Piece",
          sceneName: "Crossroads_38"
        },
        maskShardBretta: {
          name: "面具碎片 #9",
          spoiler: "德特茅斯: 布蕾塔的房间, rescue 布蕾塔",
          wiki: "面具碎片",
          id: "Heart Piece",
          sceneName: "Room_Bretta"
        },
        maskShardQueensStation: {
          name: "面具碎片 #10",
          spoiler: "王后驿站: 需要螳螂爪",
          wiki: "面具碎片",
          id: "Heart Piece",
          sceneName: "Fungus2_01"
        },
        maskShardWaterways: {
          name: "面具碎片 #11",
          spoiler: "皇家水道: top left area, swim left",
          wiki: "面具碎片",
          id: "Heart Piece",
          sceneName: "Waterways_04b"
        },
        maskShardStoneSanctuary: {
          name: "面具碎片 #12",
          spoiler: "苍绿之径: Stone Sanctuary, 光蝇灯笼",
          wiki: "面具碎片",
          id: "Heart Piece",
          sceneName: "Fungus1_36"
        },
        maskShardCrystalPeak: {
          name: "面具碎片 #13",
          spoiler: "水晶山峰: defeat 暴怒守卫",
          wiki: "面具碎片",
          id: "Heart Piece",
          sceneName: "Mines_32"
        },
        maskShardDeepnest: {
          name: "面具碎片 #14",
          spoiler: "深邃巢穴: from 真菌核心 (帝王之翼)",
          wiki: "面具碎片",
          id: "Heart Piece",
          sceneName: "Fungus2_25"
        },
        maskShardHive: {
          name: "面具碎片 #15",
          spoiler: "蜂巢: use 蜂巢守卫 to break wall",
          wiki: "面具碎片",
          id: "Heart Piece",
          sceneName: "Hive_04"
        },
        maskShardDelicateFlower: {
          name: "面具碎片 #16",
          spoiler: "安息之地: 娇嫩的花 (灰色哀悼者)",
          wiki: "面具碎片",
          id: "Heart Piece",
          sceneName: "Room_Mansion"
        }
      },
    },

    /* ################ 容器碎片 ################### */

    vesselFragments: {
      h2: "容器碎片",
      id: "hk-vesselfragments",
      description: "用于增加最大灵魂值的碎片。每收集 3 个容器碎片（一个完整的灵魂容器）提供 1% 游戏完成度。",
      percent: 0,
      maxPercent: 3,
      entries: {
        slyVesselFrag1: {
          name: "容器碎片 #1",
          spoiler: "斯莱: 550吉欧",
          wiki: "容器碎片"
        },
        slyVesselFrag2: {
          name: "容器碎片 #2",
          spoiler: "斯莱: 900吉欧 + 店主的钥匙",
          wiki: "容器碎片"
        },
        dreamReward5: {
          name: "容器碎片 #3",
          spoiler: "先知: 700精华",
          wiki: "容器碎片"
        },
        vesselFragStagNest: {
          name: "容器碎片 #4",
          spoiler: "鹿角虫巢穴",
          wiki: "容器碎片"
        },
        /* ########## 容器碎片 World ############ */
        /* "Vessel Fragment" sceneData.persistentBoolItems.id */
        vesselFragmentGreenpath: {
          name: "容器碎片 #5",
          spoiler: "苍绿之径: near 王后花园 exit",
          wiki: "容器碎片",
          id: "Vessel Fragment",
          sceneName: "Fungus1_13"
        },
        vesselFragmentCrossroads: {
          name: "容器碎片 #6",
          spoiler: "遗忘十字路: unlock 泪水之城 lift",
          wiki: "容器碎片",
          id: "Vessel Fragment",
          sceneName: "Crossroads_37"
        },
        vesselFragmentCityOfTears: {
          name: "容器碎片 #7",
          spoiler: "泪水之城: above 国王驿站",
          wiki: "容器碎片",
          id: "Vessel Fragment",
          sceneName: "Ruins2_09"
        },
        vesselFragmentDeepnest: {
          name: "容器碎片 #8",
          spoiler: "深邃巢穴: 戈姆 platforming challenge",
          wiki: "容器碎片",
          id: "Vessel Fragment",
          sceneName: "Deepnest_38"
        },
        vesselFragmentFountain: {
          name: "容器碎片 #9",
          spoiler: "古老盆地 Fountain: 3000吉欧",
          wiki: "容器碎片",
          id: "Vessel Fragment",
          sceneName: "Abyss_04"
        }
      },
    },

    /* ################ 梦之钉 and 精华 ################### */

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
          wiki: "梦之钉"
        },
        dreamNailUpgraded: {
          name: "觉醒的梦之钉",
          spoiler: "先知: 1800 精华",
          wiki: "梦之钉#觉醒的梦之钉"
        },
        mothDeparted: {
          name: "聆听先知的遗言",
          spoiler: "先知: 2400 精华",
          wiki: "先知"
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
          wiki: "戈布"
        },
        xeroDefeated: {
          name: "P2 泽若",
          spoiler: "安息之地, below 水晶山峰 drop",
          wiki: "泽若"
        },
        mumCaterpillarDefeated: {
          name: "P2 马尔穆",
          spoiler: "王后花园, left of 鹿角虫车站",
          wiki: "马尔穆"
        },
        elderHuDefeated: {
          name: "P3 胡长老",
          spoiler: "真菌荒地, above acid bridge",
          wiki: "胡长老"
        },
        galienDefeated: {
          name: "P3 加利安",
          spoiler: "深邃巢穴, below 废弃电车轨道",
          wiki: "加利安"
        },
        noEyesDefeated: {
          name: "P4 无眼",
          spoiler: "苍绿之径: Stone Sanctuary, 需要光蝇灯笼",
          wiki: "无眼"
        },
        markothDefeated: {
          name: "P4 马科斯",
          spoiler: "王国边缘, 需要暗影披风",
          wiki: "马科斯"
        },
      },
    },

    /* ################ 守梦者 ################### */

    dreamers: {
      h2: "守梦者",
      id: "hk-dreamers",
      description: "每个守梦者都提供 1% 游戏完成度。",
      percent: 0,
      maxPercent: 3,
      entries: {
        lurienDefeated: {
          name: "守望者卢瑞恩",
          spoiler: "泪水之城: 守望者的尖塔",
          wiki: "卢瑞恩"
        },
        monomonDefeated: {
          name: "教师莫诺蒙",
          spoiler: "雾之峡谷: 教师档案馆",
          wiki: "莫诺蒙"
        },
        hegemolDefeated: {
          name: "野兽赫拉",
          spoiler: "深邃巢穴: 遥远的村庄",
          wiki: "赫拉"
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
          spoiler: "王国边缘: top area, 小愚人: 100吉欧",
          wiki: "勇士的试炼"
        },
        colosseumSilverCompleted: {
          name: "征服者的试炼",
          spoiler: "小愚人: 450吉欧 + Warrior completed",
          wiki: "征服者的试炼"
        },
        colosseumGoldCompleted: {
          name: "愚人的试炼",
          spoiler: "小愚人: 800吉欧 + Conqueror completed",
          wiki: "愚人的试炼"
        },
      },
    },

    /* ################ 格林剧团 Content Pack ################### */

    grimmTroupe: {
      h2: "格林剧团 DLC",
      id: "hk-grimmtroupe",
      description: `首个 DLC，发布于 October 26th, 2017 (<a href="https://hkss.huijiwiki.com/wiki/%E6%A0%BC%E6%9E%97%E5%89%A7%E5%9B%A2" target="_blank" title="See the official Patch Notes.">1.2.1.0 Game Update</a>). 增加了 +6% 的最大游戏完成度。<br>
      注意: DLC 的最后有一个选择，无论你选择什么，都会获得 +1% 的游戏完成度。`,
      percent: 0,
      maxPercent: 6,
      entries: {
        gotCharm_37: {
          name: "护符 #37 飞毛腿",
          spoiler: "斯莱: 400吉欧 + 店主的钥匙",
          wiki: "飞毛腿"
        },
        gotCharm_38: {
          name: "护符 #38 梦之盾",
          spoiler: "安息之地, go left below 先知",
          wiki: "梦之盾"
        },
        gotCharm_39: {
          name: "护符 #39 编织者之歌",
          spoiler: "深邃巢穴: 编织者巢穴",
          wiki: "编织者之歌"
        },
        gotCharm_40: {
          name: "护符 #40 格林之子 or 无忧旋律",
          nameDefault: "护符 #40 格林之子 or 无忧旋律",
          nameGrimmchildP1: "护符 #40: 格林之子 (Phase 1)",
          nameGrimmchildP2: "护符 #40: 格林之子 (Phase 2)",
          nameGrimmchildP3: "护符 #40: 格林之子 (Phase 3)",
          nameGrimmchildP4: "护符 #40: 格林之子 (Phase 4)",
          nameCarefreeMelody: "护符 #40: 无忧旋律",
          spoiler: "德特茅斯",
          spoilerDefault: "德特茅斯",
          spoilerGrimmchildP1: "搜集 3 团火焰",
          spoilerGrimmchildP2: "搜集 3 团火焰",
          spoilerGrimmchildP3: "搜集 3 团火焰",
          spoilerGrimmchildP4: "完成仪式",
          spoilerCarefreeMelody: "放逐格林剧团",
          wiki: "格林之子",
          wikiDefault: "格林之子",
          wikiGrimmchild: "格林之子",
          wikiCarefreeMelody: "无忧旋律"
        },
        killedGrimm: {
          name: "P3 剧团团长格林",
          spoiler: "德特茅斯, 收集 6 火焰",
          wiki: "格林"
        },
        grimmChildLevel: {
          name: "完成仪式或放逐格林剧团",
          nameDefault: "完成仪式或放逐格林剧团",
          nameNightmareKing: "格林剧团分支: 梦魇之王",
          nameBanishment: "格林剧团分支: 放逐",
          spoiler: "一次游戏只能选择一边: 德特茅斯 or 呼啸悬崖",
          spoilerDefault: "一次游戏只能选择一边: 德特茅斯 or 呼啸悬崖",
          spoilerNightmareKing: "完成仪式",
          spoilerBanishment: "放逐格林剧团",
          wiki: "格林剧团",
          wikiDefault: "格林剧团",
          wikiNightmareKing: "梦魇之王格林",
          wikiBanishment: "明子",
        }
      },
    },

    /* ################ Lifeblood Content Pack ################### */

    lifeblood: {
      h2: "生命血 DLC",
      id: "hk-lifeblood",
      description: `第二个 DLC，发布于 April 20th, 2018 (<a href="https://hkss.huijiwiki.com/wiki/%E7%94%9F%E5%91%BD%E8%A1%80" target="_blank" title="See the official Patch Notes.">1.3.1.5 Game Update</a>). 除了增加了许多优化，还增加了一个新的 Boss，使得游戏最大完成度又增加了 1%。`,
      percent: 0,
      maxPercent: 1,
      entries: {
        killedHiveKnight: {
          name: "P3 蜂巢骑士",
          spoiler: "蜂巢, 守护着 蜂巢之血 护符",
          wiki: "蜂巢骑士"
        }
      },
    },

    /* ################ Godmaster Content Pack ################### */

    godmaster: {
      h2: "寻神者 DLC",
      id: "hk-godmaster",
      description: `第三个 DLC，发布于 August 23rd, 2018 (<a href="https://hkss.huijiwiki.com/wiki/%E5%AF%BB%E7%A5%9E%E8%80%85" target="_blank" title="See the official Patch Notes.">1.4.2.4 Game Update</a>). 增加了 +5% 的最大游戏完成度（最多 112%）。`,
      percent: 0,
      maxPercent: 5,
      entries: {
        hasGodfinder: {
          name: "神明调谐器",
          spoiler: "皇家水道: 垃圾坑, 需要简单钥匙",
          wiki: "神明调谐器"
        },
        /* ########## Godmaster doors ########## */
        pantheonMaster: {
          name: "P1 大师万神殿",
          spoiler: "万神殿: 击败所有大师万神殿BOSS",
          wiki: "大师万神殿",
          property: "bossDoorStateTier1"
        },
        pantheonArtist: {
          name: "P2 艺术家万神殿",
          spoiler: "万神殿: 击败所有艺术家万神殿BOSS",
          wiki: "艺术家万神殿",
          property: "bossDoorStateTier2"
        },
        pantheonSage: {
          name: "P3 贤者万神殿",
          spoiler: "万神殿: 击败所有贤者万神殿BOSS",
          wiki: "贤者万神殿",
          property: "bossDoorStateTier3"
        },
        pantheonKnight: {
          name: "P4 骑士万神殿",
          spoiler: "万神殿: 完成大师万神殿、艺术家万神殿、骑士万神殿",
          wiki: "骑士万神殿",
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
          name: "拯救幼虫",
          spoiler: "总计 46 只幼虫",
          max: 46,
          maxDefault: 46,
          wiki: "幼虫"
        },
        grubRewards: {
          name: "虫爷爷的奖励",
          spoiler: "46 奖励 total",
          max: 46,
          maxDefault: 46,
          wiki: "幼虫#奖励和地点"
        },
        charmsOwned: {
          name: "持有的护符",
          spoiler: "总计 40 个护符，升级萨鲁巴出售的护符槽有用",
          max: 40,
          maxDefault: 40,
          wiki: "护符#护符列表"
        },
        dreamOrbs: {
          name: "收集的精华",
          spoiler: "梦之钉 (2400 for completion)",
          max: 2400,
          maxDefault: 2400,
          wiki: "精华"
        },
        hasLantern: {
          name: "光蝇灯笼",
          spoiler: "斯莱: 1800吉欧",
          wiki: "光蝇灯笼"
        },
        shopkeeperKey: {
          name: "店主的钥匙",
          spoiler: "水晶山峰, below 奎若 location",
          wiki: "店主的钥匙"
        },
        elegantKey: {
          name: "典雅的钥匙",
          spoiler: "斯莱: 800吉欧 + 店主的钥匙",
          wiki: "典雅的钥匙"
        },
        loveKey: {
          name: "爱之钥",
          spoiler: "王后花园, near 真菌荒地",
          wiki: "爱之钥"
        },
        slySimpleKey: {
          name: "简单钥匙 #1",
          spoiler: "斯莱: 950吉欧",
          wiki: "简单钥匙"
        },
        simpleKeyCityOfTears: {
          name: "简单钥匙 #2",
          spoiler: "泪水之城, below left 鹿角虫车站",
          id: "Shiny Item",
          sceneName: "Ruins1_17",
          wiki: "简单钥匙#获取"
        },
        simpleKeyAncientBasin: {
          name: "简单钥匙 #3",
          spoiler: "古老盆地, below 残破容器",
          id: "Shiny Item Stand",
          sceneName: "Abyss_20",
          wiki: "简单钥匙#获取"
        },
        gotLurkerKey: {
          name: "简单钥匙 #4",
          spoiler: "击败愚人斗兽场: 苍白潜伏者",
          wiki: "简单钥匙#获取"
        },
        paleOreAncientBasin: {
          name: "苍白矿石 #1",
          spoiler: "古老盆地, left of 鹿角虫车站",
          id: "Battle Scene Ore",
          sceneName: "Abyss_17",
          wiki: "苍白矿石"
        },
        paleOreSeer: {
          name: "苍白矿石 #2",
          spoiler: "先知: 300精华",
          wiki: "苍白矿石#获取方式"
        },
        paleOreCrystalPeak: {
          name: "苍白矿石 #3",
          spoiler: "Top of 水晶山峰, use 帝王之翼",
          id: "Shiny Item Stand",
          sceneName: "Mines_34",
          wiki: "苍白矿石#获取方式"
        },
        paleOreDeepnest: {
          name: "苍白矿石 #4",
          spoiler: "深邃巢穴, 诺斯克 reward",
          id: "Shiny Item Stand",
          sceneName: "Deepnest_32",
          wiki: "苍白矿石#获取方式"
        },
        paleOreGrubfather: {
          name: "苍白矿石 #5",
          spoiler: "虫爷爷: 31 幼虫 rescued",
          id: "Shiny Item Ore",
          sceneName: "Crossroads_38",
          wiki: "苍白矿石#获取方式"
        },
        paleOreColosseum: {
          name: "苍白矿石 #6",
          spoiler: "愚人斗兽场: 征服者的试炼",
          id: "Shiny Item",
          sceneName: "Room_Colosseum_Silver",
          wiki: "苍白矿石#获取方式"
        },
        hasTramPass: {
          name: "电车通行证",
          spoiler: "深邃巢穴: 废弃电车轨道",
          wiki: "电车通行证"
        },
        gotQueenFragment: {
          name: "白色碎片: 王后",
          spoiler: "白色夫人: 王后花园",
          wiki: "国王之魂#获取"
        },
        gotKingFragment: {
          name: "白色碎片: 国王",
          spoiler: "苍白之王: 白色宫殿",
          wiki: "国王之魂#获取"
        },
      },
      grubsList: ["Crossroads_35", "Crossroads_03", "Crossroads_05", "Crossroads_48", "Crossroads_31", "Fungus1_06", "Fungus1_07", "Fungus1_21", "Fungus1_28", "Fungus2_18", "Ruins1_05", "Mines_04", "Mines_03", "Mines_31", "Mines_19", "Ruins1_32", "RestingGrounds_10", "Ruins_House_01", "Mines_35", "Mines_16", "Waterways_04", "Waterways_13", "Abyss_19", "Abyss_17", "Mines_24", "Fungus1_13", "Fungus3_47", "Fungus3_10", "Fungus3_48", "Fungus3_22", "Ruins2_07", "Ruins2_11", "Ruins2_11", "Ruins2_11", "Deepnest_East_11", "Deepnest_East_14", "Fungus2_20", "Ruins2_03", "Deepnest_36", "Deepnest_03", "Deepnest_31", "Deepnest_39", "Deepnest_Spider_Town", "Waterways_14", "Hive_03", "Hive_04"],
    },

    /* ################ Essentials % -> 鹿角虫车站 ################### */

    essentialsStagStations: {
      h2: "游戏完成度 %  鹿角虫车站",
      id: "hk-essentials-stag-stations",
      description: `已开放的鹿角虫车站不会直接计入112%的完成度，但需要找到<span class="spoiler-span blurred">鹿角虫巢穴里的一个容器碎片</span>才能达到112%的完整完成度。`,
      entries: {
        openedTownBuilding: {
          name: "鹿角虫车站: 德特茅斯",
          spoiler: "Opened from inside after travelling",
          wiki: "德特茅斯"
        },
        openedCrossroads: {
          name: "鹿角虫车站: 遗忘十字路",
          spoiler: "50吉欧: Right middle-bottom area",
          wiki: "遗忘十字路"
        },
        openedGreenpath: {
          name: "鹿角虫车站: 苍绿之径",
          spoiler: "140吉欧: Top middle area, below Hornet",
          wiki: "苍绿之径"
        },
        openedFungalWastes: {
          name: "鹿角虫车站: 王后驿站",
          spoiler: "120吉欧: 真菌荒地, near 雾之峡谷",
          wiki: "真菌荒地#王后驿站"
        },
        openedRuins1: {
          name: "鹿角虫车站: 城市仓库",
          spoiler: "200吉欧: 泪水之城, top left area",
          wiki: "传送_(空洞骑士)#位置和解锁价格"
        },
        openedRestingGrounds: {
          name: "鹿角虫车站: 安息之地",
          spoiler: "0吉欧: Right middle area, near 先知",
          wiki: "传送_(空洞骑士)#位置和解锁价格"
        },
        openedRuins2: {
          name: "鹿角虫车站: 国王驿站",
          spoiler: "300吉欧: 泪水之城, far right area",
          wiki: "传送_(空洞骑士)#位置和解锁价格"
        },
        openedRoyalGardens: {
          name: "鹿角虫车站: 王后花园",
          spoiler: "200吉欧: Middle area, near Traitor's Grave",
          wiki: "传送_(空洞骑士)#位置和解锁价格"
        },
        openedDeepnest: {
          name: "鹿角虫车站: 遥远的村庄",
          spoiler: "250吉欧: 深邃巢穴, far left area",
          wiki: "传送_(空洞骑士)#位置和解锁价格"
        },
        openedHiddenStation: {
          name: "鹿角虫车站: 隐藏的鹿角站",
          spoiler: "300吉欧: 古老盆地: Palace Grounds",
          wiki: "传送_(空洞骑士)#位置和解锁价格"
        },
        openedStagNest: {
          name: "鹿角虫车站: 鹿角虫巢穴",
          spoiler: "Open all stations: 呼啸悬崖, top area",
          wiki: "传送_(空洞骑士)#位置和解锁价格"
        },
        stagStationsOpened: {
          name: "所有鹿角虫车站",
          spoiler: "11 个鹿角虫车站全打开，包括德特茅斯",
          max: 11,
          maxDefault: 11,
          wiki: "传送_(空洞骑士)#位置和解锁价格"
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
          name: "拯救斯莱",
          spoiler: "遗忘十字路, near 格鲁兹之母",
          wiki: "斯莱"
        },
        brettaRescued: {
          name: "拯救布蕾塔",
          spoiler: "真菌荒地, near Dashmaster 护符 statue",
          wiki: "布蕾塔"
        },
        paidLegEater: {
          name: "支付看好东西",
          spoiler: "真菌荒地, 食腿者: 86吉欧",
          wiki: "食腿者"
        },
        gaveSlykey: {
          name: "归还店主的钥匙给斯莱",
          spoiler: "德特茅斯, Sly的商店",
          wiki: "斯莱"
        },
        mantisVillageFloorLever: {
          name: "螳螂村地板开关",
          spoiler: "真菌荒地, right of 螳螂爪",
          id: "Mantis Lever (1)",
          sceneName: "Fungus2_14",
          wiki: "螳螂村"
        },
        xunFlowerGiven: {
          name: "接受送花任务",
          spoiler: "安息之地: listen to 灰色哀悼者",
          wiki: "灰色哀悼者"
        },
        waterwaysAcidDrained: {
          name: "释放酸液",
          spoiler: "皇家水道, lever after 粪虫防御者",
          wiki: "皇家水道#伊思玛的树林"
        },
        openedMageDoor_v2: {
          name: "打开典雅的门",
          spoiler: "泪水之城: 灵魂圣所, 需要典雅的钥匙",
          wiki: "典雅的钥匙"
        },
        openedLoveDoor: {
          name: "打开爱之塔大门",
          spoiler: "泪水之城, 需要爱之钥",
          wiki: "泪水之城#爱之塔"
        },
        abyssGateOpened: {
          name: "打开深渊入口",
          spoiler: "古老盆地, 需要王之印记",
          wiki: "深渊"
        },
        blueVineDoor: {
          name: "打开生命血房间的大门",
          spoiler: "深渊, 只有拥有14格及以上生命血血量时才会开放",
          wiki: "生命血核心#获取"
        },
        nightmareLanternLit: {
          name: "点燃梦魇之灯",
          spoiler: "呼啸悬崖, 一个大型的虫子的尸体",
          wiki: "呼啸悬崖#梦魇之灯房间"
        },
        paleLurkersRetreat: {
          name: "击败苍白潜伏者",
          spoiler: "愚人斗兽场, 在长椅右上方，打破墙",
          id: "Breakable Wall_Silhouette",
          sceneName: "Room_Colosseum_Spectate",
          wiki: "愚人斗兽场"
        },
        godseekerUnlocked: {
          name: "解锁寻神者的茧",
          spoiler: "皇家水道: 垃圾坑",
          wiki: "皇家水道#垃圾坑"
        },
        fountainGeo: {
          name: "投入喷泉的吉欧",
          spoiler: "古老盆地: 3000吉欧最多",
          max: 3000,
          maxDefault: 3000,
          wiki: "古老盆地"
        },
      },
    },

    /* ################ Essentials % -> Bosses ################### */

    essentialsBosses: {
      h2: "游戏完成度 % BOSS",
      id: "hk-essentials-bosses",
      description: "Boss 不直接计入 112% 游戏完成度，但影响完整完成度 112%。",
      entries: {
        killedMegaMossCharger: {
          name: "P1 大型苔藓冲锋者",
          spoiler: "苍绿之径, near 雾之峡谷",
          wiki: "大型苔藓冲锋者"
        },
        pantheonSoulWarrior: {
          name: "P1 灵魂战士",
          spoiler: "泪水之城: 灵魂圣所",
          id: "Battle Scene v2",
          sceneName: "Ruins1_23",
          wiki: "灵魂战士"
        },
        shadeSoulWarrior: {
          name: "(暗影)灵魂战士",
          spoiler: "泪水之城: 灵魂圣所, use 典雅的钥匙",
          id: "Battle Scene v2",
          sceneName: "Ruins1_31",
          wiki: "灵魂战士"
        },
        pantheonCrystalGuardian: {
          name: "P2 水晶守卫",
          spoiler: "水晶山峰, 守卫着长椅",
          id: "Mega Zombie Beam Miner (1)",
          sceneName: "Mines_18",
          wiki: "水晶守卫"
        },
        killedBigBuzzer: {
          name: "复仇蝇之王",
          spoiler: "愚人斗兽场: 勇士的试炼, 苍绿之径",
          wiki: "复仇蝇之王"
        },
        killedOblobble: {
          name: "P2 奥波路波",
          spoiler: "愚人斗兽场: 征服者的试炼",
          wiki: "奥波路波"
        },
        killedLobsterLancer: {
          name: "神之驯服者",
          spoiler: "愚人斗兽场: 愚人的试炼",
          wiki: "神之驯服者"
        },
        killedFlukeMother: {
          name: "P2 吸虫之母",
          spoiler: "皇家水道, 需要荒芜俯冲",
          wiki: "吸虫之母"
        },
        pantheonEnragedGuardian: {
          name: "P4 暴怒守卫",
          spoiler: "水晶山峰, 需要 帝王之翼",
          id: "Zombie Beam Miner Rematch",
          sceneName: "Mines_32",
          wiki: "暴怒守卫"
        },
        killedNailBros: {
          name: "骨钉兄弟奥罗与马托",
          spoiler: "万神殿: 大师万神殿",
          wiki: "骨钉兄弟奥罗与马托"
        },
        killedPaintmaster: {
          name: "绘画大师席奥",
          spoiler: "万神殿: 艺术家万神殿",
          wiki: "绘画大师席奥"
        },
        killedNailsage: {
          name: "伟大骨钉贤者斯莱",
          spoiler: "万神殿: 贤者万神殿",
          wiki: "伟大骨钉贤者斯莱"
        },
        killedHollowKnightPrime: {
          name: "纯粹容器",
          spoiler: "万神殿: 骑士万神殿",
          wiki: "纯粹容器"
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
          name: "购入地图",
          spoiler: "First map bought from 柯尼法或伊赛尔达",
          wiki: "地图和羽毛笔"
        },
        has日志: {
          name: "猎人日志",
          spoiler: "苍绿之径: Hunter, above Stone Sanctuary",
          wiki: "猎人日志"
        },
        hasHuntersMark: {
          name: "猎人的印记",
          spoiler: "苍绿之径: Hunter, complete base 146 Hunter Notes",
          wiki: "猎人的印记"
        },
        killsBigBuzzer: {
          name: "复仇蝇之王 日志 Note",
          spoiler: "愚人斗兽场: 勇士的试炼",
          wiki: "复仇蝇之王"
        },
        salubraBlessing: {
          name: "萨鲁巴的祝福",
          spoiler: "萨鲁巴: 800吉欧 + all 40 护符 Owned",
          wiki: "萨鲁巴的祝福"
        },
        gotShadeCharm: {
          name: "虚空之心",
          spoiler: "Equip 国王之魂 护符 and find Birthplace",
          wiki: "虚空之心"
        },
      },
    },

    /* ################ Achievements Essentials -> Maps ################### */

    achievementsMaps: {
      h2: "成就 - 地图",
      id: "hk-achievements-maps",
      description: `获得的地图对于解锁成就至关重要。但它们不计入112%的完成度。`,
      entries: {
        mapCrossroads: {
          name: "地图: 遗忘十字路",
          spoiler: "30/40吉欧: below 格鲁兹 area",
          wiki: "遗忘十字路"
        },
        mapGreenpath: {
          name: "地图: 苍绿之径",
          spoiler: "60/80吉欧: just below 苍绿之径 entrance",
          wiki: "苍绿之径"
        },
        mapFungalWastes: {
          name: "地图: 真菌荒地",
          spoiler: "75/100吉欧: right of 王后驿站",
          wiki: "真菌荒地"
        },
        mapCliffs: {
          name: "地图: 呼啸悬崖",
          spoiler: "75/100吉欧: left middle area, near 日志",
          wiki: "呼啸悬崖"
        },
        mapCity: {
          name: "地图: 泪水之城",
          spoiler: "90/120吉欧: left of 灵魂圣所",
          wiki: "泪水之城"
        },
        mapMines: {
          name: "地图: 水晶山峰",
          spoiler: "120/150吉欧: top left area",
          wiki: "水晶山峰"
        },
        mapWaterways: {
          name: "地图: 皇家水道",
          spoiler: "75/100吉欧: far left area, near Fungal",
          wiki: "皇家水道"
        },
        mapRestingGrounds: {
          name: "地图: 安息之地",
          spoiler: "75吉欧: 伊赛尔达的商店",
          wiki: "安息之地"
        },
        mapAbyss: {
          name: "地图: 古老盆地",
          spoiler: "112/150吉欧: center area, near fountain",
          wiki: "古老盆地"
        },
        mapOutskirts: {
          name: "地图: 王国边缘",
          spoiler: "112/150吉欧: left bottom area, inside pipe",
          wiki: "王国边缘"
        },
        mapFogCanyon: {
          name: "地图: 雾之峡谷",
          spoiler: "150/200吉欧: above 教师档案馆",
          wiki: "雾之峡谷"
        },
        mapRoyalGardens: {
          name: "地图: 王后花园",
          spoiler: "150/200吉欧: below 雾之峡谷 entrance",
          wiki: "王后花园"
        },
        mapDeepnest: {
          name: "地图: 深邃巢穴",
          spoiler: "38/50吉欧: near both 真菌荒地 entrances",
          wiki: "深邃巢穴"
        },
        areaMaps: {
          name: "所有地图",
          spoiler: "柯尼法 and 伊赛尔达, 13 Area Maps total",
          max: 13,
          maxDefault: 13,
          wiki: "分类:区域_(空洞骑士)"
        },
      },
    },

    /* ################ Achievements Essentials -> World Interactions ################### */

    achievementsWorldInteractions: {
      h2: "成就 - 世界互动",
      id: "hk-achievements-world-interactions",
      description: `玩家在游戏中与NPC或世界物体进行的一些互动对于解锁成就至关重要。但这些互动不会计入112%的游戏完成度。本部分包含玩家在游戏中可以做出的一些选择。`,
      entries: {
        quirrelEpilogueCompleted: {
          name: "奎若: 最后的相遇",
          spoiler: "蓝湖: after defeating 教师莫诺蒙",
          wiki: "奎若"
        },
        xunRewardGiven: {
          name: "灰色哀悼者: 慰藉",
          spoiler: "安息之地: Complete 娇嫩的花 quest",
          wiki: "灰色哀悼者"
        },
        zoteStatus: {
          id: "zoteStatus",
          name: "左特",
          nameDefault: "左特",
          nameNeglect: "左特: 忽略",
          nameRivalry: "左特: 恩怨",
          nameTrappedVengefly: "左特: 复仇蝇之王",
          nameNotRescuedVengefly: "左特: 苍绿之径",
          nameTrappedDeepnest: "左特: 深邃巢穴",
          nameColosseum: "左特: 愚人斗兽场",
          spoiler: "一次游戏只能拿到一个成就",
          spoilerDefault: "一次游戏只能拿到一个成就",
          spoilerNeglect: "不管左特让他去死",
          spoilerRivalry: "在愚人斗兽场中击败左特",
          spoilerTrappedVengefly: "苍绿之径, 击败复仇蝇之王",
          spoilerNotRescuedVengefly: "检查左特发生了什么",
          spoilerTrappedDeepnest: "深邃巢穴, 从蛛网中解救左特",
          spoilerColosseum: "愚人斗兽场: 勇士的试炼",
          wiki: "左特"
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
          spoilerHappyCouple: "找到新的召唤",
          spoilerPurity: "用纯粹骨钉杀了他",
          spoilerSheoHutWaiting: "在席奥的小屋里等待",
          spoilerUpgradeNail: "升级骨钉为纯粹骨钉",
          wiki: "钉子匠"
        },
        mrMushroomState1: {
          name: "蘑菇先生 #1",
          spoiler: "真菌荒地, near 柯尼法",
          wiki: "蘑菇先生",
          state: 2
        },
        mrMushroomState2: {
          name: "蘑菇先生 #2",
          spoiler: "王国边缘, near 伊思玛的树林",
          wiki: "蘑菇先生",
          state: 3
        },
        mrMushroomState3: {
          name: "蘑菇先生 #3",
          spoiler: "深邃巢穴, near 加利安",
          wiki: "蘑菇先生",
          state: 4
        },
        mrMushroomState4: {
          name: "蘑菇先生 #4",
          spoiler: "呼啸悬崖, near 骨钉大师马托",
          wiki: "蘑菇先生",
          state: 5
        },
        mrMushroomState5: {
          name: "蘑菇先生 #5",
          spoiler: "古老盆地, near 帝王之翼",
          wiki: "蘑菇先生",
          state: 6
        },
        mrMushroomState6: {
          name: "蘑菇先生 #6",
          spoiler: "雾之峡谷, near 长满植物的山丘",
          wiki: "蘑菇先生",
          state: 7
        },
        mrMushroomState7: {
          name: "蘑菇先生 #7",
          spoiler: "国王山道, game starting location",
          wiki: "蘑菇先生",
          state: 8
        },
        pantheonHallownest: {
          name: "P5 拥抱虚空",
          spoiler: "万神殿: 圣巢万神殿",
          wiki: "圣巢万神殿"
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
          2. Aside the source of acid blight, (王国边缘, near 伊思玛的树林)
          3. Aglow in darkest, winding depths, (深邃巢穴, near 加利安)
          4. Winds all howl above fossilstone steps, (呼啸悬崖)
          5. Monarchflys in air set still, (古老盆地, near the 帝王之翼 location)
          6. To Root's domain and snail once shrill, (雾之峡谷, near 长满植物的山丘)
          7. Path of Wyrm, at new lands entered, (国王山道)
          8. There journeys end. The kingdom ventured.
          */
      },
    },

    /* ################ Achievements Essentials -> Bosses ################### */

    achievementsBosses: {
      h2: "成就 - BOSS",
      id: "hk-achievements-bosses",
      description: `对于解锁成就至关重要的 Boss，但它们不计入112%的完成度。`,
      entries: {
        falseKnightDreamDefeated: {
          name: "失败冠军",
          spoiler: "遗忘十字路, near 假骑士",
          wiki: "假骑士"
        },
        mageLordDreamDefeated: {
          name: "灵魂暴君",
          spoiler: "泪水之城: 灵魂圣所, near 灵魂大师",
          wiki: "灵魂暴君"
        },
        infectedKnightDreamDefeated: {
          name: "失落近亲",
          spoiler: "古老盆地, 残破容器 location",
          wiki: "失落近亲"
        },
        whiteDefenderDefeated: {
          name: "白色防御者",
          spoiler: "皇家水道, 粪虫防御者, use 荒芜俯冲",
          wiki: "白色防御者"
        },
        greyPrinceDefeated: {
          name: "灰色王子左特",
          spoiler: "德特茅斯: 布蕾塔的房间 (per save choice)",
          wiki: "灰色王子左特"
        },
        killedHollowKnight: {
          name: "空洞骑士",
          spoiler: "遗忘十字路: Black Egg Temple",
          wiki: "空洞骑士"
        },
        /* 
        无上辐光 (for P5, achievements)
        战斗姐妹 (for P5, achievements)
        有翼诺斯克 (for P5, achievements)
        */
        killedFinalBoss: {
          name: "辐光",
          spoiler: "Requires 虚空之心 & 梦之钉 空洞骑士",
          wiki: "辐光"
        },
      },
    },

    /* ################ 猎人日志 ################### */

    huntersJournal: {
      h2: "猎人日志",
      id: "hk-journal",
      description: `所有 146 条基础游戏的猎人日志条目都属于猎人的印记以及成就：敏锐的猎人/真正的猎人. 这份列表的最上方列出了17个最容易被遗漏的笔记条目。<br>
      上面的数字代表: <b>已完成/已发现</b>，总 <b>146</b> 日志条目<br>
      <i class="icon-ok-squared"></i>= 标记已完成<br>
      <i class="icon-ok-squared partial"></i>= 发现了日志条目，但未完成。<br>
      <i class="icon-cancel"></i>= 日志条目还未发现。<br>
      <b>(no.)</b> = 完成日志条目所需的数量。`,
      percent: 0,
      midPercent: 0,
      maxPercent: 146,
      entries: {
        PrayerSlug: {
          name: "蛆虫 (2)",
          nameDefault: "蛆虫",
          spoiler: "遗忘十字路: 假骑士 隐藏房间",
          wiki: "蛆虫"
        },
        OrangeScuttler: {
          name: "光籽 (20)",
          nameDefault: "光籽",
          spoiler: "感染的十字路",
          wiki: "光籽"
        },
        Pigeon: {
          name: "面具鸟 (15)",
          nameDefault: "面具鸟",
          spoiler: "苍绿之径, 王后花园",
          wiki: "面具鸟"
        },
        LazyFlyer: {
          name: "阿鲁巴 (1)",
          nameDefault: "阿鲁巴",
          spoiler: "Lake of Unn, 王后花园 (near 白色夫人)",
          wiki: "阿鲁巴"
        },
        AcidFlyer: {
          name: "杜兰达 (8)",
          nameDefault: "杜兰达",
          spoiler: "苍绿之径: 骨钉大师 Sheo's tent path",
          wiki: "杜兰达"
        },
        AcidWalker: {
          name: "杜兰多 (8)",
          nameDefault: "杜兰多",
          spoiler: "苍绿之径, 王后花园",
          wiki: "杜兰多"
        },
        PlantShooter: {
          name: "古尔卡 (15)",
          nameDefault: "古尔卡",
          spoiler: "苍绿之径: left of Stone Sanctuary",
          wiki: "古尔卡"
        },
        MushroomTurret: {
          name: "斯孢格 (20)",
          nameDefault: "斯孢格",
          spoiler: "真菌荒地",
          wiki: "斯孢格"
        },
        ZapBug: {
          name: "带电光蝇 (1)",
          nameDefault: "带电光蝇",
          spoiler: "雾之峡谷: 教师档案馆 (tank)",
          wiki: "带电光蝇"
        },
        LaserBug: {
          name: "水晶爬虫 (15)",
          nameDefault: "水晶爬虫",
          spoiler: "水晶山峰: try to use spells",
          wiki: "水晶爬虫"
        },
        GorgeousHusk: {
          name: "华丽躯壳 (1)",
          nameDefault: "华丽躯壳",
          spoiler: "泪水之城: 隐藏房间",
          wiki: "华丽躯壳"
        },
        Worm: {
          name: "戈姆 (10)",
          nameDefault: "戈姆",
          spoiler: "感染的十字路: near 真菌荒地 entrance",
          wiki: "戈姆"
        },
        BigCentipede: {
          name: "加皮德 (10)",
          nameDefault: "加皮德",
          spoiler: "深邃巢穴: right of Hot Spring",
          wiki: "加皮德"
        },
        AbyssTendril: {
          name: "虚空卷须 (10)",
          nameDefault: "虚空卷须",
          spoiler: "深渊: 隐藏房间 near 暗影披风",
          wiki: "虚空卷须"
        },
        LobsterLancer: {
          name: "神之驯服者 (1)",
          nameDefault: "神之驯服者",
          spoiler: "愚人斗兽场: 愚人的试炼 boss",
          wiki: "神之驯服者"
        },
        FatFluke: {
          name: "贪食吸虫 (8)",
          nameDefault: "贪食吸虫",
          spoiler: "皇家水道: secret area, left of bench",
          wiki: "贪食吸虫"
        },
        PaleLurker: {
          name: "苍白潜伏者 (1)",
          nameDefault: "苍白潜伏者",
          spoiler: "愚人斗兽场: top right breakable wall",
          wiki: "苍白潜伏者"
        },
        Crawler: {
          name: "小爬虫 (0)",
          nameDefault: "小爬虫",
          spoiler: "国王山道, 遗忘十字路, 苍绿之径",
          wiki: "小爬虫"
        },
        Buzzer: {
          name: "复仇蝇 (45)",
          nameDefault: "复仇蝇",
          spoiler: "呼啸悬崖, 遗忘十字路, 泪水之城",
          wiki: "复仇蝇"
        },
        Bouncer: {
          name: "格鲁兹 (25)",
          nameDefault: "格鲁兹",
          spoiler: "遗忘十字路",
          wiki: "格鲁兹"
        },
        Climber: {
          name: "提克提克 (30)",
          nameDefault: "提克提克",
          spoiler: "遗忘十字路, 呼啸悬崖, 苍绿之径",
          wiki: "提克提克"
        },
        Hopper: {
          name: "跳虫 (25)",
          nameDefault: "跳虫",
          spoiler: "王国边缘",
          wiki: "跳虫"
        },
        Spitter: {
          name: "阿司匹德猎手 (20)",
          nameDefault: "阿司匹德猎手",
          spoiler: "遗忘十字路, 古老盆地, 收藏家",
          wiki: "阿司匹德猎手"
        },
        Hatcher: {
          name: "阿司匹德之母 (15)",
          nameDefault: "阿司匹德之母",
          spoiler: "遗忘十字路, mainly next to the 鹿角虫车站",
          wiki: "阿司匹德之母"
        },
        Hatchling: {
          name: "阿司匹德幼体 (30)",
          nameDefault: "阿司匹德幼体",
          spoiler: "遗忘十字路, summoned by 阿司匹德之母",
          wiki: "阿司匹德幼体"
        },
        ZombieRunner: {
          name: "游荡躯壳 (35)",
          nameDefault: "游荡躯壳",
          spoiler: "遗忘十字路, 泪水之城, 深邃巢穴",
          wiki: "游荡躯壳"
        },
        ZombieHornhead: {
          name: "有角躯壳 (35)",
          nameDefault: "有角躯壳",
          spoiler: "遗忘十字路, 泪水之城, 深邃巢穴",
          wiki: "有角躯壳"
        },
        ZombieLeaper: {
          name: "跳跃躯壳 (35)",
          nameDefault: "跳跃躯壳",
          spoiler: "遗忘十字路, 泪水之城, 呼啸悬崖",
          wiki: "跳跃躯壳"
        },
        ZombieBarger: {
          name: "躯壳恶霸 (35)",
          nameDefault: "躯壳恶霸",
          spoiler: "遗忘十字路, 泪水之城, 呼啸悬崖",
          wiki: "躯壳恶霸"
        },
        ZombieShield: {
          name: "躯壳战士 (10)",
          nameDefault: "躯壳战士",
          spoiler: "遗忘十字路: right of the 鹿角虫车站",
          wiki: "躯壳战士"
        },
        ZombieGuard: {
          name: "躯壳守卫 (6)",
          nameDefault: "躯壳守卫",
          spoiler: "遗忘十字路: upper right area",
          wiki: "躯壳守卫"
        },
        BigBuzzer: {
          name: "复仇蝇之王 (2)",
          nameDefault: "复仇蝇之王",
          spoiler: "苍绿之径, 愚人斗兽场: 勇士的试炼",
          wiki: "复仇蝇之王"
        },
        BigFly: {
          name: "格鲁兹之母 (3)",
          nameDefault: "格鲁兹之母",
          spoiler: "遗忘十字路: lower right area",
          wiki: "格鲁兹之母"
        },
        Mawlek: {
          name: "躁郁的毛里克 (1)",
          nameDefault: "躁郁的毛里克",
          spoiler: "遗忘十字路: down from 虫爷爷",
          wiki: "躁郁的毛里克"
        },
        FalseKnight: {
          name: "假骑士 (1)",
          nameDefault: "假骑士",
          spoiler: "遗忘十字路: middle area map symbol",
          wiki: "假骑士"
        },
        Roller: {
          name: "巴德尔 (20)",
          nameDefault: "巴德尔",
          spoiler: "祖先山丘, 结晶山丘, 呼啸悬崖",
          wiki: "巴德尔"
        },
        Blocker: {
          name: "巴德尔长者 (1)",
          nameDefault: "巴德尔长者",
          spoiler: "祖先山丘, 苍绿之径, 呼啸悬崖",
          wiki: "巴德尔长者"
        },
        MossmanRunner: {
          name: "苔藓怪 (25)",
          nameDefault: "苔藓怪",
          spoiler: "苍绿之径: usually near a 爆炸苔藓怪",
          wiki: "苔藓怪"
        },
        MossmanShaker: {
          name: "爆炸苔藓怪 (25)",
          nameDefault: "爆炸苔藓怪",
          spoiler: "苍绿之径",
          wiki: "爆炸苔藓怪"
        },
        Mosquito: {
          name: "斯奎特 (25)",
          nameDefault: "斯奎特",
          spoiler: "苍绿之径 and the 长满植物的山丘",
          wiki: "斯奎特"
        },
        BlobFlyer: {
          name: "奥波 (20)",
          nameDefault: "奥波",
          spoiler: "苍绿之径: top left of Stone Sanctuary",
          wiki: "奥波"
        },
        FungifiedZombie: {
          name: "真菌躯壳 (10)",
          nameDefault: "真菌躯壳",
          spoiler: "只会出现在 真菌荒地",
          wiki: "真菌躯壳"
        },
        MossCharger: {
          name: "苔藓冲锋者 (15)",
          nameDefault: "苔藓冲锋者",
          spoiler: "只会出现在 苍绿之径",
          wiki: "苔藓冲锋者"
        },
        MegaMossCharger: {
          name: "大型苔藓冲锋者 (1)",
          nameDefault: "大型苔藓冲锋者",
          spoiler: "苍绿之径: bottom left near 雾之峡谷",
          wiki: "大型苔藓冲锋者"
        },
        SnapperTrap: {
          name: "捕蠢草 (15)",
          nameDefault: "捕蠢草",
          spoiler: "苍绿之径 and 王后花园",
          wiki: "捕蠢草"
        },
        MossKnight: {
          name: "苔藓骑士 (8)",
          nameDefault: "苔藓骑士",
          spoiler: "只会出现在 苍绿之径",
          wiki: "苔藓骑士"
        },
        GrassHopper: {
          name: "鲁多 (15)",
          nameDefault: "鲁多",
          spoiler: "只会出现在 王后花园",
          wiki: "鲁多"
        },
        MossFlyer: {
          name: "苔藓蝶 (25)",
          nameDefault: "苔藓蝶",
          spoiler: "王后花园, 长满植物的山丘",
          wiki: "苔藓蝶"
        },
        MossKnightFat: {
          name: "苔藓流浪者 (10)",
          nameDefault: "苔藓流浪者",
          spoiler: "王后花园: near exit to 真菌荒地",
          wiki: "苔藓流浪者"
        },
        MossWalker: {
          name: "苔藓爬虫 (30)",
          nameDefault: "苔藓爬虫",
          spoiler: "苍绿之径 and 王后花园",
          wiki: "苔藓爬虫"
        },
        InfectedKnight: {
          name: "残破容器 (1)",
          nameDefault: "残破容器",
          spoiler: "古老盆地: far left, needs 水晶之心",
          wiki: "残破容器"
        },
        Jellyfish: {
          name: "欧玛 (12)",
          nameDefault: "欧玛",
          spoiler: "雾之峡谷: almost everywhere",
          wiki: "欧玛"
        },
        JellyCrawler: {
          name: "乌玛 (20)",
          nameDefault: "乌玛",
          spoiler: "雾之峡谷: almost everywhere",
          wiki: "乌玛"
        },
        MegaJellyfish: {
          name: "乌姆 (1)",
          nameDefault: "乌姆",
          spoiler: "雾之峡谷: inside 教师档案馆",
          wiki: "乌姆"
        },
        FungoonBaby: {
          name: "小真菌球 (30)",
          nameDefault: "小真菌球",
          spoiler: "真菌荒地, 真菌核心, 垃圾坑",
          wiki: "小真菌球"
        },
        Mantis: {
          name: "螳螂战士 (25)",
          nameDefault: "螳螂战士",
          spoiler: "真菌荒地: 螳螂村",
          wiki: "螳螂战士"
        },
        MushroomRoller: {
          name: "蘑菇战士 (20)",
          nameDefault: "蘑菇战士",
          spoiler: "真菌荒地, 真菌核心",
          wiki: "蘑菇战士"
        },
        MushroomBrawler: {
          name: "蘑菇巨怪 (8)",
          nameDefault: "蘑菇巨怪",
          spoiler: "真菌荒地, bottom of 真菌核心",
          wiki: "蘑菇巨怪"
        },
        MushroomBaby: {
          name: "小蘑菇 (20)",
          nameDefault: "小蘑菇",
          spoiler: "真菌荒地, near 蘑菇战士s",
          wiki: "小蘑菇"
        },
        MantisFlyerChild: {
          name: "螳螂青年 (25)",
          nameDefault: "螳螂青年",
          spoiler: "真菌荒地: 螳螂村",
          wiki: "螳螂青年"
        },
        FungusFlyer: {
          name: "真菌球 (20)",
          nameDefault: "真菌球",
          spoiler: "只会出现在 真菌荒地",
          wiki: "真菌球"
        },
        FungCrawler: {
          name: "漫步菇 (15)",
          nameDefault: "漫步菇",
          spoiler: "真菌荒地, 真菌核心",
          wiki: "漫步菇"
        },
        MantisLord: {
          name: "螳螂领主 (1)",
          nameDefault: "螳螂领主",
          spoiler: "真菌荒地: 螳螂村, switch lever",
          wiki: "螳螂领主"
        },
        BlackKnight: {
          name: "守望者骑士 (10)",
          nameDefault: "守望者骑士",
          spoiler: "泪水之城: 守望者的尖塔, 帝王之翼",
          wiki: "守望者骑士"
        },
        ElectricMage: {
          name: "闪电扭曲者 (6)",
          nameDefault: "闪电扭曲者",
          spoiler: "愚人斗兽场: 愚人的试炼",
          wiki: "闪电扭曲者"
        },
        Mage: {
          name: "灵魂扭曲者 (20)",
          nameDefault: "灵魂扭曲者",
          spoiler: "泪水之城: 灵魂圣所, 愚人的试炼",
          wiki: "灵魂扭曲者"
        },
        MageKnight: {
          name: "灵魂战士 (2)",
          nameDefault: "灵魂战士",
          spoiler: "泪水之城: 灵魂圣所, 愚人的试炼",
          wiki: "灵魂战士"
        },
        RoyalDandy: {
          name: "躯壳公子 (25)",
          nameDefault: "躯壳公子",
          spoiler: "泪水之城: right section",
          wiki: "躯壳公子"
        },
        RoyalCoward: {
          name: "怯懦躯壳 (25)",
          nameDefault: "怯懦躯壳",
          spoiler: "泪水之城: right section",
          wiki: "怯懦躯壳"
        },
        RoyalPlumper: {
          name: "暴食躯壳 (25)",
          nameDefault: "暴食躯壳",
          spoiler: "泪水之城: right section",
          wiki: "暴食躯壳"
        },
        FlyingSentrySword: {
          name: "有翼哨兵 (30)",
          nameDefault: "有翼哨兵",
          spoiler: "泪水之城, 皇家水道, 古老盆地",
          wiki: "有翼哨兵"
        },
        FlyingSentryJavelin: {
          name: "长矛哨兵 (25)",
          nameDefault: "长矛哨兵",
          spoiler: "泪水之城, 皇家水道, 古老盆地",
          wiki: "长矛哨兵"
        },
        Sentry: {
          name: "躯壳哨兵 (25)",
          nameDefault: "躯壳哨兵",
          spoiler: "泪水之城, 皇家水道, 伊思玛的树林",
          wiki: "躯壳哨兵"
        },
        SentryFat: {
          name: "重型哨兵 (20)",
          nameDefault: "重型哨兵",
          spoiler: "只会出现在 泪水之城",
          wiki: "重型哨兵"
        },
        MageBlob: {
          name: "错误 (25)",
          nameDefault: "错误",
          spoiler: "泪水之城: 灵魂圣所, 愚人的试炼",
          wiki: "错误"
        },
        GreatShieldZombie: {
          name: "大型躯壳哨兵 (10)",
          nameDefault: "大型躯壳哨兵",
          spoiler: "泪水之城, 守望者的尖塔",
          wiki: "大型躯壳哨兵"
        },
        JarCollector: {
          name: "收藏家 (1)",
          nameDefault: "收藏家",
          spoiler: "泪水之城: 爱之塔, 爱之钥",
          wiki: "收藏家"
        },
        MageBalloon: {
          name: "愚蠢 (15)",
          nameDefault: "愚蠢",
          spoiler: "泪水之城: 灵魂圣所, 愚人的试炼",
          wiki: "愚蠢"
        },
        MageLord: {
          name: "灵魂大师 (1)",
          nameDefault: "灵魂大师",
          spoiler: "泪水之城: 灵魂圣所",
          wiki: "灵魂大师"
        },
        FlipHopper: {
          name: "翻身怪 (20)",
          nameDefault: "翻身怪",
          spoiler: "皇家水道: central part",
          wiki: "翻身怪"
        },
        Flukeman: {
          name: "吸虫怪 (20)",
          nameDefault: "吸虫怪",
          spoiler: "皇家水道: central part",
          wiki: "吸虫怪"
        },
        Inflater: {
          name: "呼噗 (20)",
          nameDefault: "呼噗",
          spoiler: "皇家水道, 伊思玛的树林",
          wiki: "呼噗"
        },
        Flukefly: {
          name: "吸虫幼雏 (15)",
          nameDefault: "吸虫幼雏",
          spoiler: "只会出现在 皇家水道",
          wiki: "吸虫幼雏"
        },
        FlukeMother: {
          name: "吸虫之母 (1)",
          nameDefault: "吸虫之母",
          spoiler: "皇家水道: bottom, 荒芜俯冲",
          wiki: "吸虫之母"
        },
        DungDefender: {
          name: "粪虫防御者 (1)",
          nameDefault: "粪虫防御者",
          spoiler: "皇家水道: right area",
          wiki: "粪虫防御者"
        },
        CrystalCrawler: {
          name: "亮背虫 (15)",
          nameDefault: "亮背虫",
          spoiler: "水晶山峰, 遗忘十字路 toll booth",
          wiki: "亮背虫"
        },
        CrystalFlyer: {
          name: "水晶猎手 (20)",
          nameDefault: "水晶猎手",
          spoiler: "水晶山峰, Crystallized Mound",
          wiki: "水晶猎手"
        },
        BeamMiner: {
          name: "结晶躯壳 (15)",
          nameDefault: "结晶躯壳",
          spoiler: "水晶山峰: top right areas",
          wiki: "结晶躯壳"
        },
        ZombieMiner: {
          name: "躯壳矿工 (20)",
          nameDefault: "躯壳矿工",
          spoiler: "只会出现在 水晶山峰",
          wiki: "躯壳矿工"
        },
        MegaBeamMiner: {
          name: "水晶守卫 (2)",
          nameDefault: "水晶守卫",
          spoiler: "水晶山峰: center bench area",
          wiki: "水晶守卫"
        },
        MinesCrawler: {
          name: "晶刺螨 (15)",
          nameDefault: "晶刺螨",
          spoiler: "只会出现在 水晶山峰",
          wiki: "晶刺螨"
        },
        AngryBuzzer: {
          name: "愤怒复仇蝇 (15)",
          nameDefault: "愤怒复仇蝇",
          spoiler: "感染的十字路, 愚人的试炼",
          wiki: "愤怒复仇蝇"
        },
        BurstingBouncer: {
          name: "爆炸格鲁兹 (15)",
          nameDefault: "爆炸格鲁兹",
          spoiler: "感染的十字路, 愚人斗兽场 试炼",
          wiki: "爆炸格鲁兹"
        },
        BurstingZombie: {
          name: "暴力躯壳 (15)",
          nameDefault: "暴力躯壳",
          spoiler: "只会出现在 感染的十字路",
          wiki: "暴力躯壳"
        },
        SpittingZombie: {
          name: "流涎躯壳 (15)",
          nameDefault: "流涎躯壳",
          spoiler: "只会出现在 感染的十字路",
          wiki: "流涎躯壳"
        },
        BabyCentipede: {
          name: "刻尘者 (35)",
          nameDefault: "刻尘者",
          spoiler: "深邃巢穴, 刻尘孵化者",
          wiki: "刻尘者"
        },
        CentipedeHatcher: {
          name: "刻尘孵化者 (15)",
          nameDefault: "刻尘孵化者",
          spoiler: "深邃巢穴: top area 废弃电车轨道",
          wiki: "刻尘孵化者"
        },
        LesserMawlek: {
          name: "小型毛里克 (10)",
          nameDefault: "小型毛里克",
          spoiler: "古老盆地: left of tram, 愚人的试炼",
          wiki: "小型毛里克"
        },
        SlashSpider: {
          name: "潜行信徒 (15)",
          nameDefault: "潜行信徒",
          spoiler: "深邃巢穴: left area, 遥远的村庄",
          wiki: "潜行信徒"
        },
        SpiderCorpse: {
          name: "尸体爬虫 (15)",
          nameDefault: "尸体爬虫",
          spoiler: "只会出现在 深邃巢穴: middle area",
          wiki: "尸体爬虫"
        },
        ShootSpider: {
          name: "深巢猎手 (20)",
          nameDefault: "深巢猎手",
          spoiler: "只会出现在 深邃巢穴",
          wiki: "深巢猎手"
        },
        MiniSpider: {
          name: "深巢幼蛛 (25)",
          nameDefault: "深巢幼蛛",
          spoiler: "深邃巢穴: left areas",
          wiki: "深巢幼蛛"
        },
        SpiderFlyer: {
          name: "小型编织者 (20)",
          nameDefault: "小型编织者",
          spoiler: "深邃巢穴: left areas",
          wiki: "小型编织者"
        },
        MimicSpider: {
          name: "诺斯克 (1)",
          nameDefault: "诺斯克",
          spoiler: "深邃巢穴: left of Hot Spring, use 水晶之心",
          wiki: "诺斯克"
        },
        BeeHatchling: {
          name: "小蜜蜂 (30)",
          nameDefault: "小蜜蜂",
          spoiler: "蜂巢, 王国边缘",
          wiki: "小蜜蜂"
        },
        BeeStinger: {
          name: "蜂巢士兵 (15)",
          nameDefault: "蜂巢士兵",
          spoiler: "只会出现在 蜂巢",
          wiki: "蜂巢士兵"
        },
        BigBee: {
          name: "蜂巢守卫 (12)",
          nameDefault: "蜂巢守卫",
          spoiler: "只会出现在 蜂巢",
          wiki: "蜂巢守卫"
        },
        HiveKnight: {
          name: "蜂巢骑士 (1)",
          nameDefault: "蜂巢骑士",
          spoiler: "蜂巢: right area",
          wiki: "蜂巢骑士"
        },
        BlowFly: {
          name: "肥波 (20)",
          nameDefault: "肥波",
          spoiler: "只会出现在 王国边缘",
          wiki: "肥波"
        },
        CeilingDropper: {
          name: "爆肚蝠 (15)",
          nameDefault: "爆肚蝠",
          spoiler: "泪水之城, 皇家水道, 王国边缘",
          wiki: "爆肚蝠"
        },
        GiantHopper: {
          name: "大跳虫 (10)",
          nameDefault: "大跳虫",
          spoiler: "王国边缘, 征服者的试炼",
          wiki: "大跳虫"
        },
        GrubMimic: {
          name: "幼虫模仿者 (5)",
          nameDefault: "幼虫模仿者",
          spoiler: "水晶山峰, 深邃巢穴, 征服者的试炼",
          wiki: "幼虫模仿者"
        },
        MawlekTurret: {
          name: "毛鲁克 (10)",
          nameDefault: "毛鲁克",
          spoiler: "古老盆地: left area",
          wiki: "毛鲁克"
        },
        HealthScuttler: {
          name: "生命籽 (10)",
          nameDefault: "生命籽",
          spoiler: "圣巢: inside 生命血茧",
          wiki: "生命籽"
        },
        ZombieHive: {
          name: "蜂巢躯壳 (10)",
          nameDefault: "蜂巢躯壳",
          spoiler: "只会出现在 蜂巢",
          wiki: "蜂巢躯壳"
        },
        Hornet: {
          name: "大黄蜂 (2)",
          nameDefault: "大黄蜂",
          spoiler: "苍绿之径, 王国边缘, 万神殿",
          wiki: "大黄蜂"
        },
        AbyssCrawler: {
          name: "暗影爬虫 (20)",
          nameDefault: "暗影爬虫",
          spoiler: "古老盆地, 深渊",
          wiki: "暗影爬虫"
        },
        SuperSpitter: {
          name: "原始阿司匹德 (25)",
          nameDefault: "原始阿司匹德",
          spoiler: "王国边缘, 愚人斗兽场 试炼",
          wiki: "原始阿司匹德"
        },
        Sibling: {
          name: "同胞 (25)",
          nameDefault: "同胞",
          spoiler: "深渊, lighthouse, Birthplace",
          wiki: "同胞"
        },
        PalaceFly: {
          name: "翅膀傀儡 (10)",
          nameDefault: "翅膀傀儡",
          spoiler: "只会出现在 白色宫殿",
          wiki: "翅膀傀儡"
        },
        EggSac: {
          name: "臭蛋口袋 (5)",
          nameDefault: "臭蛋口袋",
          spoiler: "皇家水道, 水晶山峰, 深邃巢穴, 圣巢",
          wiki: "臭蛋口袋"
        },
        Mummy: {
          name: "埋葬躯壳 (10)",
          nameDefault: "埋葬躯壳",
          spoiler: "安息之地: 底部墓地区域",
          wiki: "埋葬躯壳"
        },
        OrangeBalloon: {
          name: "感染气球 (10)",
          nameDefault: "感染气球",
          spoiler: "古老盆地: left areas",
          wiki: "感染气球"
        },
        HeavyMantis: {
          name: "螳螂叛徒 (15)",
          nameDefault: "螳螂叛徒",
          spoiler: "王后花园, 愚人的试炼",
          wiki: "螳螂叛徒"
        },
        TraitorLord: {
          name: "叛徒领主 (1)",
          nameDefault: "叛徒领主",
          spoiler: "王后花园: upper left, 暗影披风",
          wiki: "叛徒领主"
        },
        MantisHeavyFlyer: {
          name: "螳螂佩特拉 (16)",
          nameDefault: "螳螂佩特拉",
          spoiler: "王后花园, 愚人的试炼",
          wiki: "螳螂佩特拉"
        },
        GardenZombie: {
          name: "多刺躯壳 (20)",
          nameDefault: "多刺躯壳",
          spoiler: "只会出现在 王后花园",
          wiki: "多刺躯壳"
        },
        RoyalGuard: {
          name: "国王傀儡 (2)",
          nameDefault: "国王傀儡",
          spoiler: "只会出现在 白色宫殿",
          wiki: "国王傀儡"
        },
        WhiteRoyal: {
          name: "皇室家臣 (10)",
          nameDefault: "皇室家臣",
          spoiler: "只会出现在 白色宫殿",
          wiki: "皇室家臣"
        },
        Oblobble: {
          name: "奥波路波 (3)",
          nameDefault: "奥波路波",
          spoiler: "愚人斗兽场: 征服者的试炼, 万神殿",
          wiki: "奥波路波"
        },
        Blobble: {
          name: "战斗奥波 (15)",
          nameDefault: "战斗奥波",
          spoiler: "愚人斗兽场: 试炼 #2 and #3",
          wiki: "战斗奥波"
        },
        ColMosquito: {
          name: "装甲斯奎特 (15)",
          nameDefault: "装甲斯奎特",
          spoiler: "愚人斗兽场: 试炼 #2 and #3",
          wiki: "装甲斯奎特"
        },
        ColRoller: {
          name: "尖刺巴德尔 (20)",
          nameDefault: "尖刺巴德尔",
          spoiler: "愚人斗兽场: 试炼 #1 and #3",
          wiki: "尖刺巴德尔"
        },
        ColFlyingSentry: {
          name: "有翼愚人 (25)",
          nameDefault: "有翼愚人",
          spoiler: "愚人斗兽场: 试炼 #2 and #3",
          wiki: "有翼愚人"
        },
        ColMiner: {
          name: "强壮愚人 (25)",
          nameDefault: "强壮愚人",
          spoiler: "愚人斗兽场: 试炼 #1 and #3",
          wiki: "强壮愚人"
        },
        ColShield: {
          name: "带盾愚人 (25)",
          nameDefault: "带盾愚人",
          spoiler: "愚人斗兽场: All 试炼",
          wiki: "带盾愚人"
        },
        ColWorm: {
          name: "强壮愚人 (20)",
          nameDefault: "强壮愚人",
          spoiler: "愚人斗兽场: 试炼 #2 and #3",
          wiki: "强壮愚人"
        },
        ColHopper: {
          name: "死亡鲁多 (15)",
          nameDefault: "死亡鲁多",
          spoiler: "愚人斗兽场: 愚人的试炼",
          wiki: "死亡鲁多"
        },
        GhostAladar: {
          name: "戈布 (1)",
          nameDefault: "戈布",
          spoiler: "呼啸悬崖: top area",
          wiki: "戈布"
        },
        GhostXero: {
          name: "泽若 (1)",
          nameDefault: "泽若",
          spoiler: "安息之地: left area",
          wiki: "泽若"
        },
        GhostHu: {
          name: "胡长老 (1)",
          nameDefault: "胡长老",
          spoiler: "真菌荒地: above acid bridge",
          wiki: "胡长老"
        },
        GhostMarmu: {
          name: "马尔穆 (1)",
          nameDefault: "马尔穆",
          spoiler: "王后花园: left of 鹿角虫车站",
          wiki: "马尔穆"
        },
        GhostNoEyes: {
          name: "无眼 (1)",
          nameDefault: "无眼",
          spoiler: "苍绿之径: Stone Sanctuary, 需要光蝇灯笼",
          wiki: "无眼"
        },
        GhostMarkoth: {
          name: "马科斯 (1)",
          nameDefault: "马科斯",
          spoiler: "王国边缘, 需要暗影披风",
          wiki: "马科斯"
        },
        GhostGalien: {
          name: "加利安 (1)",
          nameDefault: "加利安",
          spoiler: "深邃巢穴: below 废弃电车轨道",
          wiki: "加利安"
        },
        ShadeJournal: {
          name: "暗影 (0)",
          nameDefault: "暗影",
          spoiler: "获取日志后自动解锁",
          wiki: "暗影"
        },
      },
    },

    /* ################ Optional 日志 Entries ################### */

    huntersJournalOptional: {
      h2: "可选的日志条目",
      id: "hk-journal-optional",
      description: "以下这些猎人日志条目不作为猎人的印记或成就的一部分。注意：6 个条目在保存文件中是永久无法获取的（<span class='spoiler-span blurred'>灰色王子左特, 3 种左特变种, 格林亲族梦魇, 梦魇之王</span>）。",
      entries: {
        HunterMark: {
          name: "猎人的印记 (1)",
          nameDefault: "猎人的印记",
          spoiler: "苍绿之径: Hunter, complete base 146 Hunter Notes",
          wiki: "猎人的印记"
        },
        MenderBug: {
          name: "维修虫 (1)",
          nameDefault: "维修虫",
          spoiler: "遗忘十字路: 摧毁路牌",
          wiki: "维修虫"
        },
        Zote: {
          name: "左特 (1)",
          nameDefault: "左特",
          spoiler: "愚人斗兽场: 勇士的试炼 or The Eternal Ordeal",
          wiki: "左特"
        },
        HollowKnight: {
          name: "空洞骑士 (1)",
          nameDefault: "空洞骑士",
          spoiler: "遗忘十字路: Black Egg Temple",
          wiki: "空洞骑士"
        },
        FinalBoss: {
          name: "辐光 (1)",
          nameDefault: "辐光",
          spoiler: "Requires 虚空之心 & 梦之钉 空洞骑士",
          wiki: "辐光"
        },
        WhiteDefender: {
          name: "白色防御者 (1)",
          nameDefault: "白色防御者",
          spoiler: "皇家水道: 粪虫防御者, 荒芜俯冲",
          wiki: "白色防御者"
        },
        GreyPrince: {
          name: "灰色王子左特 (1)",
          nameDefault: "灰色王子左特",
          spoiler: "德特茅斯: 布蕾塔的房间 (per save choice)",
          wiki: "灰色王子左特"
        },
        ZotelingBalloon: {
          name: "爆炸小左特 (1)",
          nameDefault: "爆炸小左特",
          spoiler: "Only from 灰色王子左特, Battle 3+",
          wiki: "爆炸小左特"
        },
        ZotelingHopper: {
          name: "跳跃小左特 (1)",
          nameDefault: "跳跃小左特",
          spoiler: "Only from 灰色王子左特, Battle 2+",
          wiki: "跳跃小左特"
        },
        ZotelingBuzzer: {
          name: "有翼小左特 (1)",
          nameDefault: "有翼小左特",
          spoiler: "Only from 灰色王子左特, Battle 1+",
          wiki: "有翼小左特"
        },
        FlameBearerSmall: {
          name: "格林亲族新手 (3)",
          nameDefault: "格林亲族新手",
          spoiler: "苍绿之径, 水晶山峰, 泪水之城",
          wiki: "格林亲族新手"
        },
        FlameBearerMed: {
          name: "格林亲族大师 (4)",
          nameDefault: "格林亲族大师",
          spoiler: "国王山道, 安息之地, 王国边缘",
          wiki: "格林亲族大师"
        },
        FlameBearerLarge: {
          name: "格林亲族梦魇 (5)",
          nameDefault: "格林亲族梦魇",
          spoiler: "真菌核心, 皇家水道, Hive",
          wiki: "格林亲族梦魇"
        },
        Grimm: {
          name: "剧团团长格林 (1)",
          nameDefault: "剧团团长格林",
          spoiler: "德特茅斯: collect 6 flames",
          wiki: "格林"
        },
        NightmareGrimm: {
          name: "梦魇之王 (1)",
          nameDefault: "梦魇之王",
          spoiler: "德特茅斯: collect 9 flames",
          wiki: "梦魇之王"
        },
        BindingSeal: {
          name: "束缚封印 (1)",
          nameDefault: "束缚封印",
          spoiler: "白色宫殿: 完成苦痛之路",
          wiki: "束缚封印"
        },
        NailBros: {
          name: "骨钉兄弟奥罗与马托 (1)",
          nameDefault: "骨钉兄弟奥罗与马托",
          spoiler: "万神殿: Pantheon of the Master",
          wiki: "骨钉兄弟奥罗与马托"
        },
        Paintmaster: {
          name: "绘画大师席奥 (1)",
          nameDefault: "绘画大师席奥",
          spoiler: "万神殿: Pantheon of the Artist",
          wiki: "绘画大师席奥"
        },
        Nailsage: {
          name: "伟大骨钉贤者斯莱 (1)",
          nameDefault: "伟大骨钉贤者斯莱",
          spoiler: "万神殿: Pantheon of the Sage",
          wiki: "伟大骨钉贤者斯莱"
        },
        HollowKnightPrime: {
          name: "纯粹容器 (1)",
          nameDefault: "纯粹容器",
          spoiler: "万神殿: Pantheon of the Knight",
          wiki: "纯粹容器"
        },
        GodseekerMask: {
          name: "风化面具 (1)",
          nameDefault: "风化面具",
          spoiler: "Land of Storms: All 万神殿 & Bindings",
          wiki: "风化面具"
        },
        VoidIdol_1: {
          name: "虚空神像 调谐 (1)",
          nameDefault: "虚空神像 调谐",
          spoiler: "诸神堂: 击败所有 Boss (调谐级)",
          wiki: "虚空神像"
        },
        VoidIdol_2: {
          name: "虚空神像 进升 (1)",
          nameDefault: "虚空神像 进升",
          spoiler: "诸神堂: 击败所有 Boss (进升级)",
          wiki: "虚空神像"
        },
        VoidIdol_3: {
          name: "虚空神像 辐辉 (1)",
          nameDefault: "虚空神像 辐辉",
          spoiler: "诸神堂: 击败所有 Boss (辐辉级)",
          wiki: "虚空神像"
        },
      },
    },

    /* ###################################### Collectibles -> 护符 Notches ############################################## */

    charmNotches: {
      h2: "护符槽",
      id: "hk-charm-notches",
      description: `护符槽用于装备护符。可以通过在游戏中找到、从萨鲁巴购买或在特定的挑战中获得。`,
      percent: 0,
      maxPercent: 8,
      entries: {
        notchShroomOgres: {
          name: "护符槽 #1",
          spoiler: "真菌荒地: Shroom Ogres room",
          wiki: "护符#护符槽"
        },
        salubraNotch1: {
          name: "护符槽 #2",
          spoiler: "萨鲁巴: 120吉欧 + 5 护符 found",
          wiki: "护符#护符槽"
        },
        salubraNotch2: {
          name: "护符槽 #3",
          spoiler: "萨鲁巴: 500吉欧 + 10 护符 found",
          wiki: "护符#护符槽"
        },
        salubraNotch3: {
          name: "护符槽 #4",
          spoiler: "萨鲁巴: 900吉欧 + 18 护符 found",
          wiki: "护符#护符槽"
        },
        salubraNotch4: {
          name: "护符槽 #5",
          spoiler: "萨鲁巴: 1400吉欧 + 25 护符 found",
          wiki: "护符#护符槽"
        },
        colosseumBronzeCompleted: {
          name: "护符槽 #6",
          spoiler: "愚人斗兽场: 勇士的试炼",
          wiki: "护符#护符槽"
        },
        notchFogCanyon: {
          name: "护符槽 #7",
          spoiler: "雾之峡谷: explosive eggs room",
          wiki: "护符#护符槽"
        },
        gotGrimmNotch: {
          name: "护符槽 #8",
          spoiler: "德特茅斯: Troupe Leader Grimm",
          wiki: "护符#护符槽"
        },
      },
    },

    /* ###################################### Collectibles -> 幼虫 ############################################## */

    grubs: {
      h2: "幼虫",
      id: "hk-grubs",
      description: `在圣巢中被困在玻璃罐子里的生物。当这些生物被释放出来后， 虫爷爷会给每个被救下的幼虫以奖励。<br>
      <b>注意：</b> 由于最近版本的空洞骑士存在一个 bug，导致 幼虫 #33 和 #34（收藏者/爱之塔）在保存文件中没有被正确标记为已释放。为了解决这个问题，当 幼虫 #32 被检测为已释放时，此应用会自动将 #33 和 #34 也标记为已释放。`,
      percent: 0,
      maxPercent: 46,
      entries: {
        grub1: {
          name: "幼虫 #1",
          spoiler: "遗忘十字路: Acid Corridor",
          id: "Grub Bottle",
          sceneName: "Crossroads_35",
          wiki: "幼虫#奖励和地点"
        },
        grub2: {
          name: "幼虫 #2",
          spoiler: "遗忘十字路: Left of Dark Corridor",
          id: "Grub Bottle",
          sceneName: "Crossroads_03",
          wiki: "幼虫#奖励和地点"
        },
        grub3: {
          name: "幼虫 #3",
          spoiler: "遗忘十字路: Above 祖先山丘",
          id: "Grub Bottle",
          sceneName: "Crossroads_05",
          wiki: "幼虫#奖励和地点"
        },
        grub4: {
          name: "幼虫 #4",
          spoiler: "遗忘十字路: 躯壳守卫的房间",
          id: "Grub Bottle",
          sceneName: "Crossroads_48",
          wiki: "幼虫#奖励和地点"
        },
        grub5: {
          name: "幼虫 #5",
          spoiler: "遗忘十字路: Spikes的房间",
          id: "Grub Bottle",
          sceneName: "Crossroads_31",
          wiki: "幼虫#奖励和地点"
        },
        grub6: {
          name: "幼虫 #6",
          spoiler: "苍绿之径: 柯尼法的房间",
          id: "Grub Bottle",
          sceneName: "Fungus1_06",
          wiki: "幼虫#奖励和地点"
        },
        grub7: {
          name: "幼虫 #7",
          spoiler: "苍绿之径: Outside Hunter",
          id: "Grub Bottle",
          sceneName: "Fungus1_07",
          wiki: "幼虫#奖励和地点"
        },
        grub8: {
          name: "幼虫 #8",
          spoiler: "苍绿之径: Outside Hornet",
          id: "Grub Bottle",
          sceneName: "Fungus1_21",
          wiki: "幼虫#奖励和地点"
        },
        grub9: {
          name: "幼虫 #9",
          spoiler: "呼啸悬崖: Baldur's Shell的房间",
          id: "Grub Bottle",
          sceneName: "Fungus1_28",
          wiki: "幼虫#奖励和地点"
        },
        grub10: {
          name: "幼虫 #10",
          spoiler: "真菌荒地: 柯尼法的房间",
          id: "Grub Bottle",
          sceneName: "Fungus2_18",
          wiki: "幼虫#奖励和地点"
        },
        grub11: {
          name: "幼虫 #11",
          spoiler: "泪水之城: Above 文物搜寻者里姆",
          id: "Grub Bottle (1)",
          sceneName: "Ruins1_05",
          wiki: "幼虫#奖励和地点"
        },
        grub12: {
          name: "幼虫 #12",
          spoiler: "水晶山峰: Left of Dark Corridor",
          id: "Grub Bottle",
          sceneName: "Mines_04",
          wiki: "幼虫#奖励和地点"
        },
        grub13: {
          name: "幼虫 #13",
          spoiler: "水晶山峰: Spiked Conveyor Belts",
          id: "Grub Bottle",
          sceneName: "Mines_03",
          wiki: "幼虫#奖励和地点"
        },
        grub14: {
          name: "幼虫 #14",
          spoiler: "水晶山峰: Crystal Heart Gauntlet",
          id: "Grub Bottle",
          sceneName: "Mines_31",
          wiki: "幼虫#奖励和地点"
        },
        grub15: {
          name: "幼虫 #15",
          spoiler: "水晶山峰: Crushers Below Top Bench",
          id: "Grub Bottle",
          sceneName: "Mines_19",
          wiki: "幼虫#奖励和地点"
        },
        grub16: {
          name: "幼虫 #16",
          spoiler: "泪水之城: 灵魂大师 Rewards的房间",
          id: "Grub Bottle",
          sceneName: "Ruins1_32",
          wiki: "幼虫#奖励和地点"
        },
        grub17: {
          name: "幼虫 #17",
          spoiler: "安息之地: 地窖",
          id: "Grub Bottle",
          sceneName: "RestingGrounds_10",
          wiki: "幼虫#奖励和地点"
        },
        grub18: {
          name: "幼虫 #18",
          spoiler: "泪水之城: Guarded House的房间 in Main Hub",
          id: "Grub Bottle",
          sceneName: "Ruins_House_01",
          wiki: "幼虫#奖励和地点"
        },
        grub19: {
          name: "幼虫 #19",
          spoiler: "水晶山峰: Crystallized Mound",
          id: "Grub Bottle",
          sceneName: "Mines_35",
          wiki: "幼虫#奖励和地点"
        },
        grub20: {
          name: "幼虫 #20",
          spoiler: "水晶山峰: Down from 德特茅斯 entrance",
          id: "Grub Bottle",
          sceneName: "Mines_16",
          wiki: "幼虫#奖励和地点"
        },
        grub21: {
          name: "幼虫 #21",
          spoiler: "皇家水道: Top Left Corridor Above Bench",
          id: "Grub Bottle",
          sceneName: "Waterways_04",
          wiki: "幼虫#奖励和地点"
        },
        grub22: {
          name: "幼虫 #22",
          spoiler: "皇家水道: 伊思玛的树林",
          id: "Grub Bottle",
          sceneName: "Waterways_13",
          wiki: "幼虫#奖励和地点"
        },
        grub23: {
          name: "幼虫 #23",
          spoiler: "古老盆地: 残破容器 Top房间",
          id: "Grub Bottle",
          sceneName: "Abyss_19",
          wiki: "幼虫#奖励和地点"
        },
        grub24: {
          name: "幼虫 #24",
          spoiler: "古老盆地: Cloth/苍白矿石房间",
          id: "Grub Bottle",
          sceneName: "Abyss_17",
          wiki: "幼虫#奖励和地点"
        },
        grub25: {
          name: "幼虫 #25",
          spoiler: "水晶山峰: 圣巢之冠 Corridor",
          id: "Grub Bottle",
          sceneName: "Mines_24",
          wiki: "幼虫#奖励和地点"
        },
        grub26: {
          name: "幼虫 #26",
          spoiler: "苍绿之径: 低语之根 Corridor",
          id: "Grub Bottle",
          sceneName: "Fungus1_13",
          wiki: "幼虫#奖励和地点"
        },
        grub27: {
          name: "幼虫 #27",
          spoiler: "雾之峡谷: 教师档案馆 Entrance",
          id: "Grub Bottle",
          sceneName: "Fungus3_47",
          wiki: "幼虫#奖励和地点"
        },
        grub28: {
          name: "幼虫 #28",
          spoiler: "王后花园: Main Arena Above Left Bench",
          id: "Grub Bottle",
          sceneName: "Fungus3_10",
          wiki: "幼虫#奖励和地点"
        },
        grub29: {
          name: "幼虫 #29",
          spoiler: "王后花园: Near 白色夫人",
          id: "Grub Bottle",
          sceneName: "Fungus3_48",
          wiki: "幼虫#奖励和地点"
        },
        grub30: {
          name: "幼虫 #30",
          spoiler: "王后花园: Upper房间 near 苍绿之径",
          id: "Grub Bottle",
          sceneName: "Fungus3_22",
          wiki: "幼虫#奖励和地点"
        },
        grub31: {
          name: "幼虫 #31",
          spoiler: "泪水之城: Below 国王驿站",
          id: "Grub Bottle",
          sceneName: "Ruins2_07",
          wiki: "幼虫#奖励和地点"
        },
        grub32: {
          name: "幼虫 #32",
          spoiler: "泪水之城: 收藏家 Arena",
          id: "Grub Bottle",
          sceneName: "Ruins2_11",
          wiki: "幼虫#奖励和地点"
        },
        grub33: {
          name: "幼虫 #33",
          spoiler: "泪水之城: 收藏家 Arena",
          id: "Grub Bottle (1)",
          sceneName: "Ruins2_11",
          wiki: "幼虫#奖励和地点"
        },
        grub34: {
          name: "幼虫 #34",
          spoiler: "泪水之城: 收藏家 Arena",
          id: "Grub Bottle (2)",
          sceneName: "Ruins2_11",
          wiki: "幼虫#奖励和地点"
        },
        grub35: {
          name: "幼虫 #35",
          spoiler: "王国边缘: Below Camp Bench",
          id: "Grub Bottle",
          sceneName: "Deepnest_East_11",
          wiki: "幼虫#奖励和地点"
        },
        grub36: {
          name: "幼虫 #36",
          spoiler: "王国边缘: Below 骨钉大师奥罗",
          id: "Grub Bottle",
          sceneName: "Deepnest_East_14",
          wiki: "幼虫#奖励和地点"
        },
        grub37: {
          name: "幼虫 #37",
          spoiler: "真菌荒地: Spore Shroom房间",
          id: "Grub Bottle",
          sceneName: "Fungus2_20",
          wiki: "幼虫#奖励和地点"
        },
        grub38: {
          name: "幼虫 #38",
          spoiler: "泪水之城: 守望者的尖塔 Fourth Floor",
          id: "Grub Bottle",
          sceneName: "Ruins2_03",
          wiki: "幼虫#奖励和地点"
        },
        grub39: {
          name: "幼虫 #39",
          spoiler: "深邃巢穴: Right of 真菌荒地 Drop",
          id: "Grub Bottle",
          sceneName: "Deepnest_36",
          wiki: "幼虫#奖励和地点"
        },
        grub40: {
          name: "幼虫 #40",
          spoiler: "深邃巢穴: Left of Hot Spring",
          id: "Grub Bottle",
          sceneName: "Deepnest_03",
          wiki: "幼虫#奖励和地点"
        },
        grub41: {
          name: "幼虫 #41",
          spoiler: "深邃巢穴: 诺斯克 Corridor",
          id: "Grub Bottle",
          sceneName: "Deepnest_31",
          wiki: "幼虫#奖励和地点"
        },
        grub42: {
          name: "幼虫 #42",
          spoiler: "深邃巢穴: 低语之根房间",
          id: "Grub Bottle",
          sceneName: "Deepnest_39",
          wiki: "幼虫#奖励和地点"
        },
        grub43: {
          name: "幼虫 #43",
          spoiler: "深邃巢穴: 野兽巢穴",
          id: "Grub Bottle",
          sceneName: "Deepnest_Spider_Town",
          wiki: "幼虫#奖励和地点"
        },
        grub44: {
          name: "幼虫 #44",
          spoiler: "皇家水道: 王国边缘 Acid Corridor",
          id: "Grub Bottle",
          sceneName: "Waterways_14",
          wiki: "幼虫#奖励和地点"
        },
        grub45: {
          name: "幼虫 #45",
          spoiler: "蜂巢: 王国边缘 Secret",
          id: "Grub Bottle",
          sceneName: "Hive_03",
          wiki: "幼虫#奖励和地点"
        },
        grub46: {
          name: "幼虫 #46",
          spoiler: "蜂巢: Mask Shard房间",
          id: "Grub Bottle",
          sceneName: "Hive_04",
          wiki: "幼虫#奖励和地点"
        },
      },
    },

    /* ###################################### Collectibles -> 低语之根 ############################################## */

    whisperingRoots: {
      h2: "低语之根",
      id: "hk-whispering-roots",
      description: `在游戏中总共有 15 个低语之根，包含 482 个精华。 低语之根图针：从伊赛尔达可以在每个区域的地图购买后，显示该区域内所有低语之根的位置。`,
      percent: 0,
      maxPercent: 15,
      entries: {
        whisperingRoot1: {
          name: "低语之根 #1: 29 精华",
          spoiler: "遗忘十字路: Right of 虫爷爷",
          id: "Dream Plant",
          sceneName: "Crossroads_07",
          wiki: "低语之根"
        },
        whisperingRoot2: {
          name: "低语之根 #2: 42 精华",
          spoiler: "遗忘十字路: 祖先山丘",
          id: "Dream Plant",
          sceneName: "Crossroads_ShamanTemple",
          wiki: "低语之根"
        },
        whisperingRoot3: {
          name: "低语之根 #3: 18 精华",
          spoiler: "真菌荒地: Above 螳螂村",
          id: "Dream Plant",
          sceneName: "Fungus2_17",
          wiki: "低语之根"
        },
        whisperingRoot4: {
          name: "低语之根 #4: 28 精华",
          spoiler: "泪水之城: Below 鹿角虫车站",
          id: "Dream Plant",
          sceneName: "Ruins1_17",
          wiki: "低语之根"
        },
        whisperingRoot5: {
          name: "低语之根 #5: 46 精华",
          spoiler: "呼啸悬崖: Big Main Area",
          id: "Dream Plant",
          sceneName: "Cliffs_01",
          wiki: "低语之根"
        },
        whisperingRoot6: {
          name: "低语之根 #6: 21 精华",
          spoiler: "水晶山峰: 圣巢之冠 Big Area",
          id: "Dream Plant",
          sceneName: "Mines_23",
          wiki: "低语之根"
        },
        whisperingRoot7: {
          name: "低语之根 #7: 20 精华",
          spoiler: "安息之地: Right of 先知, Main Area",
          id: "Dream Plant",
          sceneName: "RestingGrounds_05",
          wiki: "低语之根"
        },
        whisperingRoot8: {
          name: "低语之根 #8: 34 精华",
          spoiler: "安息之地: 灵魂沼地",
          id: "Dream Plant",
          sceneName: "RestingGrounds_08",
          wiki: "低语之根"
        },
        whisperingRoot9: {
          name: "低语之根 #9: 35 精华",
          spoiler: "泪水之城: Broken Elevator",
          id: "Dream Plant",
          sceneName: "Abyss_01",
          wiki: "低语之根"
        },
        whisperingRoot10: {
          name: "低语之根 #10: 44 精华",
          spoiler: "苍绿之径: Right of 王后花园",
          id: "Dream Plant",
          sceneName: "Fungus1_13",
          wiki: "低语之根"
        },
        whisperingRoot11: {
          name: "低语之根 #11: 20 精华",
          spoiler: "真菌荒地: Left of 食腿者",
          id: "Dream Plant",
          sceneName: "Fungus2_33",
          wiki: "低语之根"
        },
        whisperingRoot12: {
          name: "低语之根 #12: 29 精华",
          spoiler: "王后花园: Below Right Bench",
          id: "Dream Plant",
          sceneName: "Fungus3_11",
          wiki: "低语之根"
        },
        whisperingRoot13: {
          name: "低语之根 #13: 51 精华",
          spoiler: "王国边缘: Right of 爱之塔",
          id: "Dream Plant",
          sceneName: "Deepnest_East_07",
          wiki: "低语之根"
        },
        whisperingRoot14: {
          name: "低语之根 #14: 45 精华",
          spoiler: "深邃巢穴: Below 王后花园",
          id: "Dream Plant",
          sceneName: "Deepnest_39",
          wiki: "低语之根"
        },
        whisperingRoot15: {
          name: "低语之根 #15: 20 精华",
          spoiler: "蜂巢: Right of Bench",
          id: "Dream Plant",
          sceneName: "Hive_02",
          wiki: "低语之根"
        },
      },
    },

    /* ###################################### Collectibles -> Relics - 漫游者日记 ############################################## */

    relicsWanderersJournal: {
      h2: "文物 - 漫游者日记",
      id: "hk-relics-journal",
      description: `圣巢到处都能找到的小石碑，通常位于尸体旁，那些死者可能就是日志的作者。可以在 文物搜寻者里姆 处卖 200 吉欧。<br>
      14 x 200 = 2800 吉欧 总价。`,
      percent: 0,
      maxPercent: 14,
      entries: {
        wanderersJournal1: {
          name: "漫游者日记 #1",
          spoiler: "苍绿之径: Room Above 雾之峡谷",
          id: "Shiny Item",
          sceneName: "Fungus1_11",
          wiki: "漫游者日记"
        },
        wanderersJournal2: {
          name: "漫游者日记 #2",
          spoiler: "苍绿之径: Right of 鹿角虫车站",
          id: "Shiny Item",
          sceneName: "Fungus1_22",
          wiki: "漫游者日记"
        },
        wanderersJournal3: {
          name: "漫游者日记 #3",
          spoiler: "真菌荒地: Below 蘑菇巨怪s",
          id: "Shiny Item",
          sceneName: "Fungus2_04",
          wiki: "漫游者日记"
        },
        wanderersJournal4: {
          name: "漫游者日记 #4",
          spoiler: "真菌荒地: Room Above 螳螂村",
          id: "Shiny Item",
          sceneName: "Fungus2_17",
          wiki: "漫游者日记"
        },
        wanderersJournal5: {
          name: "漫游者日记 #5",
          spoiler: "泪水之城: 城市仓库",
          id: "Shiny Item",
          sceneName: "Ruins1_28",
          wiki: "漫游者日记"
        },
        wanderersJournal6: {
          name: "漫游者日记 #6",
          spoiler: "呼啸悬崖: Main Open Air Area",
          id: "Shiny Item (1)",
          sceneName: "Cliffs_01",
          wiki: "漫游者日记"
        },
        wanderersJournal7: {
          name: "漫游者日记 #7",
          spoiler: "水晶山峰: Right Tall房间",
          id: "Shiny Item (1)",
          sceneName: "Mines_20",
          wiki: "漫游者日记"
        },
        wanderersJournal8: {
          name: "漫游者日记 #8",
          spoiler: "安息之地: 地窖",
          id: "Shiny Item",
          sceneName: "RestingGrounds_10",
          wiki: "漫游者日记"
        },
        wanderersJournal9: {
          name: "漫游者日记 #9",
          spoiler: "泪水之城: Room Above 国王驿站",
          id: "Shiny Item",
          sceneName: "Ruins2_05",
          wiki: "漫游者日记"
        },
        wanderersJournal10: {
          name: "漫游者日记 #10",
          spoiler: "古老盆地: Broken Bridge",
          id: "Shiny Item",
          sceneName: "Abyss_02",
          wiki: "漫游者日记"
        },
        wanderersJournal11: {
          name: "漫游者日记 #11",
          spoiler: "泪水之城: 欢乐之屋 Elevator",
          id: "Shiny Item (1)",
          sceneName: "Ruins_Elevator",
          wiki: "漫游者日记"
        },
        wanderersJournal12: {
          name: "漫游者日记 #12",
          spoiler: "王国边缘: 低语之根 Area",
          id: "Shiny Item",
          sceneName: "Deepnest_East_07",
          wiki: "漫游者日记"
        },
        wanderersJournal13: {
          name: "漫游者日记 #13",
          spoiler: "王国边缘: Camp Bench",
          id: "Shiny Item",
          sceneName: "Deepnest_East_13",
          wiki: "漫游者日记"
        },
        wanderersJournal14: {
          name: "漫游者日记 #14",
          spoiler: "王国边缘: Left of 马科斯",
          id: "Shiny Item",
          sceneName: "Deepnest_East_18",
          wiki: "漫游者日记"
        },
      },
    },

    /* ###################################### Collectibles -> Relics - 圣巢印章 ############################################## */

    relicsHallownestSeal: {
      h2: "文物 - 圣巢印章",
      id: "hk-relics-seal",
      description: `苍白之王和五大骑士的官方印章。这些印章可以在世界各地的不同地方找到。 可以以450吉欧卖给文物搜寻者里姆。印章 #16 有错过的可能，如果玩家从隐藏通道进入 <span class="spoiler-span blurred">野兽巢穴</span>，而不是 <span class="spoiler-span blurred">被椅子粘住绑进去</span>。<br>
      总共 17 x 450 = 7650吉欧。`,
      percent: 0,
      maxPercent: 17,
      entries: {
        hallownestSeal1: {
          name: "圣巢印章 #1",
          spoiler: "遗忘十字路: 在墙里面",
          id: "Shiny Item",
          sceneName: "Crossroads_01",
          wiki: "圣巢印章"
        },
        hallownestSeal2: {
          name: "圣巢印章 #2",
          spoiler: "真菌荒地: 王后驿站维洛的房间",
          id: "Shiny Item",
          sceneName: "Fungus2_34",
          wiki: "圣巢印章"
        },
        hallownestSeal3: {
          name: "圣巢印章 #3",
          spoiler: "苍绿之径: Acid Bridge",
          id: "Shiny Item",
          sceneName: "Fungus1_10",
          wiki: "圣巢印章"
        },
        hallownestSeal4: {
          name: "圣巢印章 #4",
          spoiler: "真菌荒地: 王后驿站右边",
          id: "Shiny Item",
          sceneName: "Fungus2_03",
          wiki: "圣巢印章"
        },
        hallownestSeal5: {
          name: "圣巢印章 #5",
          spoiler: "泪水之城: Open Air Rafters",
          id: "Shiny Item",
          sceneName: "Ruins1_03",
          wiki: "圣巢印章"
        },
        hallownestSeal6: {
          name: "圣巢印章 #6",
          spoiler: "泪水之城: 灵魂大师 奖励房间",
          id: "Shiny Item",
          sceneName: "Ruins1_32",
          wiki: "圣巢印章"
        },
        hallownestSeal7: {
          name: "圣巢印章 #7",
          spoiler: "安息之地: 地窖",
          id: "Shiny Item (1)",
          sceneName: "RestingGrounds_10",
          wiki: "圣巢印章"
        },
        hallownestSeal8: {
          name: "圣巢印章 #8",
          spoiler: "泪水之城: 国王驿站 鹿角虫车站",
          id: "Shiny Item",
          sceneName: "Ruins2_08",
          wiki: "圣巢印章"
        },
        hallownestSeal9: {
          name: "圣巢印章 #9",
          spoiler: "虫爷爷: 找到 23 只幼虫",
          id: "Shiny Item Relic2",
          sceneName: "Crossroads_38",
          wiki: "圣巢印章"
        },
        hallownestSeal10: {
          name: "圣巢印章 #10",
          spoiler: "雾之峡谷: Right Tall Area",
          id: "Shiny Item",
          sceneName: "Fungus3_26",
          wiki: "圣巢印章"
        },
        hallownestSeal11: {
          name: "圣巢印章 #11",
          spoiler: "雾之峡谷: 生命血茧房间",
          id: "Shiny Item",
          sceneName: "Fungus3_30",
          wiki: "圣巢印章"
        },
        hallownestSeal12: {
          name: "圣巢印章 #12",
          spoiler: "王后花园: 白色夫人外面",
          id: "Shiny Item",
          sceneName: "Fungus3_48",
          wiki: "圣巢印章"
        },
        hallownestSeal13: {
          name: "圣巢印章 #13",
          spoiler: "真菌荒地: 螳螂领主 奖励房间",
          id: "Shiny Item",
          sceneName: "Fungus2_31",
          wiki: "圣巢印章"
        },
        hallownestSeal14: {
          name: "圣巢印章 #14",
          spoiler: "泪水之城: 守望者的尖塔 第四层",
          id: "Shiny Item",
          sceneName: "Ruins2_03",
          wiki: "圣巢印章"
        },
        hallownestSeal15: {
          name: "圣巢印章 #15",
          spoiler: "深邃巢穴: 柯尼法房间上面",
          id: "Shiny Item",
          sceneName: "Deepnest_16",
          wiki: "圣巢印章"
        },
        hallownestSeal16: {
          name: "圣巢印章 #16 (有错过的可能)",
          spoiler: "深邃巢穴: 野兽巢穴",
          id: "Shiny Item",
          sceneName: "Deepnest_Spider_Town",
          wiki: "圣巢印章"
        },
        hallownestSeal17: {
          name: "圣巢印章 #17",
          spoiler: "先知: 收集 100 精华",
          id: "dreamReward1",
          sceneName: "",
          wiki: "圣巢印章"
        },
      },
    },

    /* ###################################### Collectibles -> Relics - 国王神像 ############################################## */

    relicsKingsIdol: {
      h2: "文物 - 国王神像",
      id: "hk-relics-idol",
      description: `用神秘的白色材料雕刻而成的苍白之王神像. 小骑士可以在圣巢各处找到一些. 可以卖给 文物搜寻者里姆 800 吉欧.<br>
      8 x 800 = 6400 吉欧 总价.`,
      percent: 0,
      maxPercent: 8,
      entries: {
        kingsIdol1: {
          name: "国王神像 #1",
          spoiler: "呼啸悬崖: Main Open Air Area",
          id: "Shiny Item",
          sceneName: "Cliffs_01",
          wiki: "国王神像"
        },
        kingsIdol2: {
          name: "国王神像 #2",
          spoiler: "水晶山峰: 柯尼法房间, 需要帝王之翼",
          id: "Shiny Item Stand",
          sceneName: "Mines_30",
          wiki: "国王神像"
        },
        kingsIdol3: {
          name: "国王神像 #3",
          spoiler: "安息之地: 灵魂沼地, 瀑布",
          id: "Shiny Item",
          sceneName: "RestingGrounds_08",
          wiki: "国王神像"
        },
        kingsIdol4: {
          name: "国王神像 #4",
          spoiler: "皇家水道: 粪虫防御者的洞穴",
          id: "Shiny Item Stand",
          sceneName: "Waterways_15",
          wiki: "国王神像"
        },
        kingsIdol5: {
          name: "国王神像 #5",
          spoiler: "王国边缘: 大跳虫 Below Colosseum Entrance",
          id: "Shiny Item",
          sceneName: "Deepnest_East_08",
          wiki: "国王神像"
        },
        kingsIdol6: {
          name: "国王神像 #6",
          spoiler: "深邃巢穴: 左特区域左边",
          id: "Shiny Item",
          sceneName: "Deepnest_33",
          wiki: "国王神像"
        },
        kingsIdol7: {
          name: "国王神像 #7",
          spoiler: "虫爷爷: 找到 38 只幼虫",
          id: "Shiny Item Relic3",
          sceneName: "Crossroads_38",
          wiki: "国王神像"
        },
        kingsIdol8: {
          name: "国王神像 #8",
          spoiler: "王国边缘: 苍白潜伏者的房间",
          id: "Shiny Item",
          sceneName: "GG_Lurker",
          wiki: "国王神像"
        },
      },
    },

    /* ###################################### Collectibles -> Relics - 神秘蛋 ############################################## */

    relicsArcaneEgg: {
      h2: "文物 - 神秘蛋",
      id: "hk-relics-egg",
      description: `乌黑发亮的石卵，来自圣巢王国建立前存在的远古文明. #4 是有可能被错过的，当玩家在 <span class="spoiler-span blurred">深渊的生命血核心之间</span> 里面走了右边直接去拿了护符，而不是左边。可以卖给 文物搜寻者里姆 1200 吉欧.<br>
      4 x 1200 = 4800 吉欧 总价.`,
      percent: 0,
      maxPercent: 4,
      entries: {
        arcaneEgg1: {
          name: "神秘蛋 #1",
          spoiler: "深渊: 阴影披风房间",
          id: "Shiny Item",
          sceneName: "Abyss_10",
          wiki: "神秘蛋"
        },
        arcaneEgg2: {
          name: "神秘蛋 #2",
          spoiler: "先知: 1200精华",
          id: "dreamReward6",
          sceneName: "",
          wiki: "神秘蛋"
        },
        arcaneEgg3: {
          name: "神秘蛋 #3",
          spoiler: "深渊: 出生地, 需要国王之魂",
          id: "Shiny Item",
          sceneName: "Abyss_15",
          wiki: "神秘蛋"
        },
        arcaneEgg4: {
          name: "神秘蛋 #4 (有错过的可能)",
          spoiler: "深渊: 生命血核心之间",
          id: "Shiny Item (1)",
          sceneName: "Abyss_08",
          wiki: "深渊#生命血核心之间"
        },
      },
    },

    /* ###################################### Collectibles -> 腐臭蛋 ############################################## */

    rancidEggs: {
      h2: "腐臭蛋",
      id: "hk-rancid-eggs",
      description: `腐臭蛋是从臭蛋口袋的尸体处取得的收集品，找到死亡的臭蛋口袋或是击杀它们都能获得。臭蛋口袋一旦被杀死就不会复活。也可以从一些 NPC 处获取。可以给予忏悔师吉吉以召唤仍遗留在世间的暗影。#16 有错过的可能，当玩家在 <span class="spoiler-span blurred">野兽巢穴</span> 是，从隐藏通道进入，而不是 <span class="spoiler-span blurred">被椅子粘住绑进去</span>`,
      percent: 0,
      maxPercent: 21,
      entries: {
        rancidEgg1: {
          name: "腐臭蛋 #1",
          spoiler: "真菌荒地: 真菌核心 Upper房间",
          id: "Shiny Item",
          sceneName: "Fungus2_29",
          wiki: "腐臭蛋"
        },
        rancidEgg2: {
          name: "腐臭蛋 #2",
          spoiler: "泪水之城: Room Above 文物搜寻者里姆",
          id: "Shiny Item",
          sceneName: "Ruins1_05",
          wiki: "腐臭蛋"
        },
        rancidEgg3: {
          name: "腐臭蛋 #3",
          spoiler: "水晶山峰: Dark Bench房间",
          id: "Shiny Item",
          sceneName: "Mines_29",
          wiki: "腐臭蛋"
        },
        rancidEgg4: {
          name: "腐臭蛋 #4",
          spoiler: "安息之地: 蓝湖",
          id: "Shiny Item(Clone)",
          sceneName: "Crossroads_50",
          wiki: "腐臭蛋"
        },
        rancidEgg5: {
          name: "腐臭蛋 #5",
          spoiler: "水晶山峰: 荒芜俯冲 Entrance",
          id: "Shiny Item(Clone)",
          sceneName: "Mines_01",
          wiki: "腐臭蛋"
        },
        rancidEgg6: {
          name: "腐臭蛋 #6",
          spoiler: "皇家水道: Mask Shard房间",
          id: "Shiny Item",
          sceneName: "Waterways_04b",
          wiki: "腐臭蛋"
        },
        rancidEgg7: {
          name: "腐臭蛋 #7",
          spoiler: "皇家水道: Hidden 幼虫房间",
          id: "Shiny Item(Clone)",
          sceneName: "Waterways_04",
          wiki: "腐臭蛋"
        },
        rancidEgg8: {
          name: "腐臭蛋 #8",
          spoiler: "皇家水道: Left of 伊思玛的树林",
          id: "Shiny Item(Clone)",
          sceneName: "Waterways_07",
          wiki: "腐臭蛋"
        },
        rancidEgg9: {
          name: "腐臭蛋 #9",
          spoiler: "苍绿之径: Outside Sheo's Hut",
          id: "Shiny Item",
          sceneName: "Fungus1_15",
          wiki: "腐臭蛋"
        },
        rancidEgg10: {
          name: "腐臭蛋 #10",
          spoiler: "虫爷爷: 16 幼虫 rescued",
          id: "Shiny Item Rancid Egg",
          sceneName: "Crossroads_38",
          wiki: "腐臭蛋"
        },
        rancidEgg11: {
          name: "腐臭蛋 #11",
          spoiler: "王后花园: Entrance from 雾之峡谷",
          id: "Shiny Item(Clone)",
          sceneName: "Fungus3_34",
          wiki: "腐臭蛋"
        },
        rancidEgg12: {
          name: "腐臭蛋 #12",
          spoiler: "泪水之城: 欢乐之屋 Elevator",
          id: "Shiny Item",
          sceneName: "Ruins_Elevator",
          wiki: "腐臭蛋"
        },
        rancidEgg13: {
          name: "腐臭蛋 #13",
          spoiler: "王国边缘: 低语之根 Area",
          id: "Shiny Item (1)",
          sceneName: "Deepnest_East_07",
          wiki: "腐臭蛋"
        },
        rancidEgg14: {
          name: "腐臭蛋 #14",
          spoiler: "深邃巢穴: 编织者巢穴",
          id: "Shiny Item",
          sceneName: "Deepnest_45_v02",
          wiki: "腐臭蛋"
        },
        rancidEgg15: {
          name: "腐臭蛋 #15",
          spoiler: "深邃巢穴: 低语之根 Big Area Left Side",
          id: "Shiny Item(Clone)",
          sceneName: "Deepnest_39",
          wiki: "腐臭蛋"
        },
        rancidEgg16: {
          name: "腐臭蛋 #16 (有错过的可能)",
          spoiler: "深邃巢穴: 野兽巢穴",
          id: "Shiny Item(Clone)",
          sceneName: "Deepnest_Spider_Town",
          wiki: "腐臭蛋"
        },
        rancidEgg17: {
          name: "腐臭蛋 #17",
          spoiler: "水晶山峰: Right Tall房间",
          id: "Shiny Item(Clone)",
          sceneName: "Mines_20",
          wiki: "腐臭蛋"
        },
        rancidEgg18: {
          name: "腐臭蛋 #18",
          spoiler: "皇家水道: Main Bench Area",
          id: "Shiny Item(Clone)",
          sceneName: "Waterways_02",
          wiki: "腐臭蛋"
        },
        rancidEgg19: {
          name: "腐臭蛋 #19",
          spoiler: "王国边缘: Below 骨钉大师奥罗",
          id: "Shiny Item(Clone)",
          sceneName: "Deepnest_East_14",
          wiki: "腐臭蛋"
        },
        rancidEgg20: {
          name: "腐臭蛋 #20",
          spoiler: "斯莱: 60吉欧",
          id: "slyRancidEgg",
          sceneName: "",
          wiki: "腐臭蛋"
        },
        rancidEgg21: {
          name: "腐臭蛋 #21",
          spoiler: "皇家水道: 图克的免费腐臭蛋",
          spoilerNormal: "皇家水道: 图克, 佩戴 防御者纹章",
          spoilerSteelSoul: "皇家水道: Inspect Tuk",
          idPlayerData: "tukDungEgg",
          id: "Shiny Item",
          sceneName: "Waterways_03",
          wiki: "图克"
        },
      },
    },

    /* ###################################### Collectibles -> Items ############################################## */

    items: {
      h2: "物品",
      id: "hk-items",
      description: `游戏中有些可获取的物品、地图标记或收藏品不属于任何特定类别。使用自定义地图标记来标记地图上的有趣地点非常实用。1440 吉欧 是购买所有地图标记的价格.`,
      percent: 0,
      maxPercent: 21,
      entries: {
        hasQuill: {
          name: "羽毛笔",
          spoiler: "120吉欧: 伊赛尔达的商店, updates map with explored areas",
          wiki: "地图和羽毛笔#制图工具"
        },
        hasPinBench: {
          name: "长椅图针",
          spoiler: "100吉欧: 伊赛尔达的商店",
          wiki: "长椅_(空洞骑士)"
        },
        hasPinShop: {
          name: "商贩图针",
          spoiler: "100吉欧: 伊赛尔达的商店",
          wiki: "NPC_(空洞骑士)#商贩"
        },
        hasPinCocoon: {
          name: "虫茧图针",
          spoiler: "100吉欧: 伊赛尔达的商店",
          wiki: "生命血茧"
        },
        hasPinSpa: {
          name: "温泉图针",
          spoiler: "100吉欧: 伊赛尔达的商店",
          wiki: "温泉"
        },
        hasPinStag: {
          name: "鹿角虫车站图针",
          spoiler: "100吉欧: 伊赛尔达的商店, unlock first Station",
          wiki: "鹿角虫车站"
        },
        hasPinGhost: {
          name: "战士之墓图针",
          spoiler: "180吉欧: 伊赛尔达的商店, 获得梦之钉后",
          wiki: "战士之墓"
        },
        hasPinDreamPlant: {
          name: "低语之根图针",
          spoiler: "150吉欧: 伊赛尔达的商店, 获得梦之钉后",
          wiki: "低语之根"
        },
        hasPinTram: {
          name: "电车图针",
          spoiler: "100吉欧: 伊赛尔达的商店, 获得电车通行证后",
          wiki: "传送_(空洞骑士)#电车"
        },
        hasMarker_r: {
          name: "贝壳标记",
          spoiler: "100吉欧: 伊赛尔达的商店",
          wiki: "伊塞尔达#图针"
        },
        hasMarker_b: {
          name: "圣甲虫标记",
          spoiler: "100吉欧: 伊赛尔达的商店",
          wiki: "伊塞尔达#图针"
        },
        hasMarker_y: {
          name: "铜币标记",
          spoiler: "100吉欧: 伊赛尔达的商店, 获得蛾翼披风后",
          wiki: "伊塞尔达#图针"
        },
        hasMarker_w: {
          name: "闪亮标记",
          spoiler: "210吉欧: 伊赛尔达, 获得蛾翼披风后",
          wiki: "伊塞尔达#图针"
        },
        hasPinGuardian: {
          name: "守梦者标记",
          spoiler: "安息之地: 调查守梦者神龛",
          wiki: "守梦者"
        },
        hasPinBlackEgg: {
          name: "黑卵圣殿标记",
          spoiler: "泪水之城: Inspect fountain",
          wiki: "黑卵圣殿"
        },
        hasPinGrub: {
          name: "收藏家的地图",
          spoiler: "王国边缘: 爱之塔, 爱之钥",
          wiki: "地图和羽毛笔#收藏家的地图"
        },
        cityCrest: {
          name: "城市纹章",
          spoiler: "遗忘十字路: 假骑士 Reward",
          id: "Shiny Item",
          sceneName: "Crossroads_10",
          wiki: "城市纹章"
        },
        hasDreamGate: {
          name: "梦之门",
          spoiler: "先知: 900精华",
          wiki: "梦之门"
        },
        fragileGreed_unbreakable: {
          name: "坚固贪婪",
          spoiler: "迪万: 易碎贪婪 + 9000吉欧",
          wiki: "迪万#坚固护符"
        },
        fragileHealth_unbreakable: {
          name: "坚固心脏",
          spoiler: "迪万: 易碎心脏 + 12000吉欧",
          wiki: "迪万#坚固护符"
        },
        fragileStrength_unbreakable: {
          name: "坚固力量",
          spoiler: "迪万: 易碎力量 + 15000吉欧",
          wiki: "迪万#坚固护符"
        },
      },
    },

    /* ###################################### 吉欧 Caches -> 吉欧宝箱 ############################################## */

    geoChests: {
      h2: "吉欧宝箱",
      id: "hk-geo-chests",
      description: `游戏中所有的吉欧宝箱，包括空宝箱和有 1 吉欧 的宝箱。从所有的吉欧宝箱中收集起来，总价值为 2380 吉欧。装备坚固贪婪护符不会增加吉欧宝箱中吉欧的数量。`,
      percent: 0,
      maxPercent: 14,
      entries: {
        chest1: {
          name: "宝箱 #1: 200吉欧",
          spoiler: "遗忘十字路: 假骑士 Reward",
          id: "Chest",
          sceneName: "Crossroads_10",
          wiki: "吉欧#获取"
        },
        chest2: {
          name: "宝箱 #2: 1吉欧",
          spoiler: "呼啸悬崖: Baldur's Shell房间",
          id: "Chest",
          sceneName: "Fungus1_28",
          wiki: "吉欧#获取"
        },
        chest3: {
          name: "宝箱 #3: 78吉欧",
          spoiler: "水晶山峰: Crushers房间",
          id: "Chest",
          sceneName: "Mines_37",
          wiki: "吉欧#获取"
        },
        chest4: {
          name: "宝箱 #4: 380吉欧",
          spoiler: "泪水之城: 灵魂大师 Reward",
          id: "Chest",
          sceneName: "Ruins1_32",
          wiki: "吉欧#获取"
        },
        chest5: {
          name: "宝箱 #5: 150吉欧",
          spoiler: "安息之地: 地窖",
          id: "Chest",
          sceneName: "RestingGrounds_10",
          wiki: "吉欧#获取"
        },
        chest6: {
          name: "宝箱 #6: 85吉欧",
          spoiler: "苍绿之径: 低语之根房间",
          id: "Chest",
          sceneName: "Fungus1_13",
          wiki: "吉欧#获取"
        },
        chest7: {
          name: "宝箱 #7: 620吉欧",
          spoiler: "真菌荒地: 螳螂领主 Reward",
          id: "Mantis Chest (2)",
          sceneName: "Fungus2_31",
          wiki: "吉欧#获取"
        },
        chest8: {
          name: "宝箱 #8: 655吉欧",
          spoiler: "泪水之城: 守望者骑士 Reward",
          id: "Chest",
          sceneName: "Ruins2_03",
          wiki: "吉欧#获取"
        },
        chest9: {
          name: "宝箱 #9: 160吉欧",
          spoiler: "深邃巢穴: 编织者巢穴, 隐藏房间",
          id: "Chest",
          sceneName: "Deepnest_45_v02",
          wiki: "吉欧#获取"
        },
        chest10: {
          name: "宝箱 #10: 8吉欧",
          spoiler: "皇家水道: 垃圾坑",
          id: "Chest",
          sceneName: "GG_Waterways",
          wiki: "吉欧#获取"
        },
        chest11: {
          name: "宝箱 #11: 8吉欧",
          spoiler: "皇家水道: 垃圾坑",
          id: "Chest (1)",
          sceneName: "GG_Waterways",
          wiki: "吉欧#获取"
        },
        chest12: {
          name: "宝箱 #12: 25吉欧",
          spoiler: "皇家水道: 垃圾坑",
          id: "Chest (2)",
          sceneName: "GG_Waterways",
          wiki: "吉欧#获取"
        },
        chest13: {
          name: "宝箱 #13: 0吉欧",
          spoiler: "皇家水道: 垃圾坑",
          id: "Chest (3)",
          sceneName: "GG_Waterways",
          wiki: "吉欧#获取"
        },
        chest14: {
          name: "宝箱 #14: 10吉欧",
          spoiler: "皇家水道: 垃圾坑",
          id: "Chest (4)",
          sceneName: "GG_Waterways",
          wiki: "吉欧#获取"
        },
      },
    },

    /* ###################################### 吉欧 Caches -> 吉欧堆 ############################################## */

    geoRocks: {
      h2: "吉欧堆",
      id: "hk-geo-rocks",
      description: `游戏中所有的 吉欧堆。只有完全打碎 吉欧堆 才计作完成。部分击打 吉欧堆 不算。装备坚固贪婪护符不会增加吉欧堆中吉欧的数量。一共可以找到 5074吉欧 (credit: <a href="https://github.com/ReznoRMichael/hollow-knight-completion-check/pull/9" target="_blank">Araraura</a>).`,
      percent: 0,
      maxPercent: 207,
      entries: {
        geoRock1: {
          name: "吉欧堆 #1: 15吉欧",
          spoiler: "国王山道",
          id: "Geo Rock 4",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock2: {
          name: "吉欧堆 #2: 15吉欧",
          spoiler: "国王山道",
          id: "Geo Rock 1",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock3: {
          name: "吉欧堆 #3: 15吉欧",
          spoiler: "国王山道",
          id: "Geo Rock 3",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock4: {
          name: "吉欧堆 #4: 18吉欧",
          spoiler: "国王山道",
          id: "Geo Rock 2",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock5: {
          name: "吉欧堆 #5: 15吉欧",
          spoiler: "国王山道",
          id: "Geo Rock 5",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock6: {
          name: "吉欧堆 #6: 19吉欧",
          spoiler: "遗忘十字路: Well",
          id: "Geo Rock 2",
          sceneName: "Crossroads_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock7: {
          name: "吉欧堆 #7: 15吉欧",
          spoiler: "遗忘十字路: Gruzzer Vertical房间",
          id: "Geo Rock 1",
          sceneName: "Crossroads_07",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock8: {
          name: "吉欧堆 #8: 15吉欧",
          spoiler: "遗忘十字路: Gruzzer Vertical房间",
          id: "Geo Rock 1 (2)",
          sceneName: "Crossroads_07",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock9: {
          name: "吉欧堆 #9: 15吉欧",
          spoiler: "遗忘十字路: Gruzzer Vertical房间",
          id: "Geo Rock 1 (1)",
          sceneName: "Crossroads_07",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock10: {
          name: "吉欧堆 #10: 15吉欧",
          spoiler: "遗忘十字路: Corridor to Acid Grub",
          id: "Geo Rock 2",
          sceneName: "Crossroads_12",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock11: {
          name: "吉欧堆 #11: 10吉欧",
          spoiler: "遗忘十字路: Aspid Arena",
          id: "Geo Rock 1 (3)",
          sceneName: "Crossroads_08",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock12: {
          name: "吉欧堆 #12: 10吉欧",
          spoiler: "遗忘十字路: Aspid Arena",
          id: "Geo Rock 1 (2)",
          sceneName: "Crossroads_08",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock13: {
          name: "吉欧堆 #13: 15吉欧",
          spoiler: "遗忘十字路: Aspid Arena",
          id: "Geo Rock 1",
          sceneName: "Crossroads_08",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock14: {
          name: "吉欧堆 #14: 10吉欧",
          spoiler: "遗忘十字路: Aspid Arena",
          id: "Geo Rock 1 (1)",
          sceneName: "Crossroads_08",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock15: {
          name: "吉欧堆 #15: 15吉欧",
          spoiler: "遗忘十字路: 真菌荒地 Entrance",
          id: "Geo Rock 1",
          sceneName: "Crossroads_18",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock16: {
          name: "吉欧堆 #16: 15吉欧",
          spoiler: "遗忘十字路: 真菌荒地 Entrance",
          id: "Geo Rock 2",
          sceneName: "Crossroads_18",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock17: {
          name: "吉欧堆 #17: 15吉欧",
          spoiler: "遗忘十字路: 真菌荒地 Entrance",
          id: "Geo Rock 3",
          sceneName: "Crossroads_18",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock18: {
          name: "吉欧堆 #18: 15吉欧",
          spoiler: "遗忘十字路: Goam Mask Shard",
          id: "Geo Rock 2",
          sceneName: "Crossroads_13",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock19: {
          name: "吉欧堆 #19: 15吉欧",
          spoiler: "遗忘十字路: Goam Mask Shard",
          id: "Geo Rock 1",
          sceneName: "Crossroads_13",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock20: {
          name: "吉欧堆 #20: 15吉欧",
          spoiler: "遗忘十字路: Right of Mask Shard",
          id: "Geo Rock 2",
          sceneName: "Crossroads_42",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock21: {
          name: "吉欧堆 #21: 15吉欧",
          spoiler: "遗忘十字路: Right of Mask Shard",
          id: "Geo Rock 1",
          sceneName: "Crossroads_42",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock22: {
          name: "吉欧堆 #22: 15吉欧",
          spoiler: "遗忘十字路: Before 格鲁兹之母",
          id: "Geo Rock 1",
          sceneName: "Crossroads_19",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock23: {
          name: "吉欧堆 #23: 15吉欧",
          spoiler: "遗忘十字路: Outside 假骑士",
          id: "Geo Rock 1",
          sceneName: "Crossroads_21",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock24: {
          name: "吉欧堆 #24: 15吉欧",
          spoiler: "遗忘十字路: 水晶山峰 Dark Toll",
          id: "Geo Rock 2 (1)",
          sceneName: "Mines_33",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock25: {
          name: "吉欧堆 #25: 15吉欧",
          spoiler: "遗忘十字路: 水晶山峰 Dark Toll",
          id: "Geo Rock 2",
          sceneName: "Mines_33",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock26: {
          name: "吉欧堆 #26: 15吉欧",
          spoiler: "遗忘十字路: 水晶山峰 Dark Toll",
          id: "Geo Rock 2 (2)",
          sceneName: "Mines_33",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock27: {
          name: "吉欧堆 #27: 15吉欧",
          spoiler: "遗忘十字路: Above Lever",
          id: "Geo Rock 2",
          sceneName: "Crossroads_16",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock28: {
          name: "吉欧堆 #28: 15吉欧",
          spoiler: "遗忘十字路: Central Grub",
          id: "Geo Rock 1",
          sceneName: "Crossroads_05",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock29: {
          name: "吉欧堆 #29: 15吉欧",
          spoiler: "遗忘十字路: Outside Tram",
          id: "Geo Rock 1",
          sceneName: "Crossroads_27",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock30: {
          name: "吉欧堆 #30: 15吉欧",
          spoiler: "遗忘十字路: Tram",
          id: "Geo Rock 1",
          sceneName: "Crossroads_46",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock31: {
          name: "吉欧堆 #31: 15吉欧",
          spoiler: "遗忘十字路: 假骑士 Arena",
          id: "Geo Rock 1",
          sceneName: "Crossroads_10",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock32: {
          name: "吉欧堆 #32: 15吉欧",
          spoiler: "遗忘十字路: 祖先山丘",
          id: "Geo Rock 2",
          sceneName: "Crossroads_ShamanTemple",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock33: {
          name: "吉欧堆 #33: 15吉欧",
          spoiler: "遗忘十字路: 祖先山丘",
          id: "Geo Rock 2 (1)",
          sceneName: "Crossroads_ShamanTemple",
          hitsLeft: "5",
          wiki: "吉欧#获取"
        },
        geoRock34: {
          name: "吉欧堆 #34: 15吉欧",
          spoiler: "遗忘十字路: 祖先山丘",
          id: "Geo Rock 1",
          sceneName: "Crossroads_ShamanTemple",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock35: {
          name: "吉欧堆 #35: 15吉欧",
          spoiler: "遗忘十字路: 祖先山丘",
          id: "Geo Rock 2",
          sceneName: "Crossroads_ShamanTemple",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock36: {
          name: "吉欧堆 #36: 26吉欧",
          spoiler: "苍绿之径: Entrance",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock37: {
          name: "吉欧堆 #37: 26吉欧",
          spoiler: "苍绿之径: Waterfall Bench",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_01b",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock38: {
          name: "吉欧堆 #38: 26吉欧",
          spoiler: "苍绿之径: First 大黄蜂 Sighting",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock39: {
          name: "吉欧堆 #39: 26吉欧",
          spoiler: "苍绿之径: First 大黄蜂 Sighting",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus1_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock40: {
          name: "吉欧堆 #40: 26吉欧",
          spoiler: "苍绿之径: Outside Hunter",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_07",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock41: {
          name: "吉欧堆 #41: 26吉欧",
          spoiler: "苍绿之径: Above Sanctuary Bench",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_19",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock42: {
          name: "吉欧堆 #42: 26吉欧",
          spoiler: "苍绿之径: Acid Bridge",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_10",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock43: {
          name: "吉欧堆 #43: 26吉欧",
          spoiler: "苍绿之径: Outside 鹿角虫车站",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus1_22",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock44: {
          name: "吉欧堆 #44: 26吉欧",
          spoiler: "苍绿之径: Outside 鹿角虫车站",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_22",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock45: {
          name: "吉欧堆 #45: 26吉欧",
          spoiler: "苍绿之径: Toll",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_31",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock46: {
          name: "吉欧堆 #46: 15吉欧",
          spoiler: "苍绿之径: Toll",
          id: "Geo Rock 1 (1)",
          sceneName: "Fungus1_31",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock47: {
          name: "吉欧堆 #47: 15吉欧",
          spoiler: "苍绿之径: Toll",
          id: "Geo Rock 2 (1)",
          sceneName: "Fungus1_31",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock48: {
          name: "吉欧堆 #48: 26吉欧",
          spoiler: "苍绿之径: Storerooms",
          id: "Geo Rock Green Path 01 (2)",
          sceneName: "Fungus1_03",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock49: {
          name: "吉欧堆 #49: 26吉欧",
          spoiler: "苍绿之径: Storerooms",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus1_03",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock50: {
          name: "吉欧堆 #50: 26吉欧",
          spoiler: "苍绿之径: Storerooms",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_03",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock51: {
          name: "吉欧堆 #51: 15吉欧",
          spoiler: "苍绿之径: Outside Thorns",
          id: "Geo Rock 2",
          sceneName: "Fungus1_05",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock52: {
          name: "吉欧堆 #52: 15吉欧",
          spoiler: "呼啸悬崖: Baldur's Shell",
          id: "Geo Rock 2",
          sceneName: "Fungus1_28",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock53: {
          name: "吉欧堆 #53: 15吉欧",
          spoiler: "呼啸悬崖: Baldur's Shell",
          id: "Geo Rock 1 (2)",
          sceneName: "Fungus1_28",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock54: {
          name: "吉欧堆 #54: 30吉欧",
          spoiler: "苍绿之径: Outside Hornet",
          id: "Geo Rock Green Path 02",
          sceneName: "Fungus1_21",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock55: {
          name: "吉欧堆 #55: 30吉欧",
          spoiler: "苍绿之径: Outside Hornet",
          id: "Geo Rock Green Path 02 (1)",
          sceneName: "Fungus1_21",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock56: {
          name: "吉欧堆 #56: 30吉欧",
          spoiler: "苍绿之径: Outside Hornet",
          id: "Geo Rock Green Path 02 (2)",
          sceneName: "Fungus1_21",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock57: {
          name: "吉欧堆 #57: 26吉欧",
          spoiler: "苍绿之径: Hornet",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_04",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock58: {
          name: "吉欧堆 #58: 26吉欧",
          spoiler: "苍绿之径: 大型苔藓冲锋者",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_29",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock59: {
          name: "吉欧堆 #59: 26吉欧",
          spoiler: "苍绿之径: 大型苔藓冲锋者 Corridor",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_12",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock60: {
          name: "吉欧堆 #60: 26吉欧",
          spoiler: "苍绿之径: 大型苔藓冲锋者 Corridor",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus1_12",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock61: {
          name: "吉欧堆 #61: 30吉欧",
          spoiler: "苍绿之径: 大型苔藓冲锋者 Corridor",
          id: "Geo Rock Green Path 02",
          sceneName: "Fungus1_12",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock62: {
          name: "吉欧堆 #62: 26吉欧",
          spoiler: "雾之峡谷: 王后花园 Acid Entrance",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus3_03",
          hitsLeft: "5",
          wiki: "吉欧#获取"
        },
        geoRock63: {
          name: "吉欧堆 #63: 22吉欧",
          spoiler: "真菌荒地: Below 蘑菇巨怪s",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_04",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock64: {
          name: "吉欧堆 #64: 22吉欧",
          spoiler: "真菌荒地: 柯尼法",
          id: "Geo Rock Fung 01 (1)",
          sceneName: "Fungus2_18",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock65: {
          name: "吉欧堆 #65: 22吉欧",
          spoiler: "真菌荒地: 柯尼法",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_18",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock66: {
          name: "吉欧堆 #66: 17吉欧",
          spoiler: "真菌荒地: 柯尼法",
          id: "Geo Rock Fung 02 (1)",
          sceneName: "Fungus2_18",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock67: {
          name: "吉欧堆 #67: 17吉欧",
          spoiler: "真菌荒地: 柯尼法",
          id: "Geo Rock Fung 02 (2)",
          sceneName: "Fungus2_18",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock68: {
          name: "吉欧堆 #68: 15吉欧",
          spoiler: "遗忘十字路: 戈姆 日志",
          id: "Geo Rock 1",
          sceneName: "Crossroads_52",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock69: {
          name: "吉欧堆 #69: 15吉欧",
          spoiler: "遗忘十字路: 戈姆 日志",
          id: "Geo Rock 2",
          sceneName: "Crossroads_52",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock70: {
          name: "吉欧堆 #70: 22吉欧",
          spoiler: "真菌荒地: Outside 胡长老",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_08",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock71: {
          name: "吉欧堆 #71: 22吉欧",
          spoiler: "真菌荒地: Left Of Pilgrim's Way",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_10",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock72: {
          name: "吉欧堆 #72: 17吉欧",
          spoiler: "真菌荒地: Right of Bouncy Mushroom Grub",
          id: "Geo Rock Fung 02",
          sceneName: "Fungus2_11",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock73: {
          name: "吉欧堆 #73: 22吉欧",
          spoiler: "真菌荒地: Right of Bouncy Mushroom Grub",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_11",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock74: {
          name: "吉欧堆 #74: 22吉欧",
          spoiler: "真菌荒地: 布蕾塔 长椅",
          id: "Geo Rock Fung 01 (1)",
          sceneName: "Fungus2_13",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock75: {
          name: "吉欧堆 #75: 22吉欧",
          spoiler: "真菌荒地: 布蕾塔 长椅",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_13",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock76: {
          name: "吉欧堆 #76: 17吉欧",
          spoiler: "真菌荒地: 布蕾塔 长椅",
          id: "Geo Rock Fung 02",
          sceneName: "Fungus2_13",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock77: {
          name: "吉欧堆 #77: 15吉欧",
          spoiler: "真菌荒地: 螳螂村",
          id: "Geo Rock 2 (2)",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock78: {
          name: "吉欧堆 #78: 15吉欧",
          spoiler: "真菌荒地: 螳螂村",
          id: "Geo Rock 1",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock79: {
          name: "吉欧堆 #79: 15吉欧",
          spoiler: "真菌荒地: 螳螂村",
          id: "Geo Rock 2 (3)",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock80: {
          name: "吉欧堆 #80: 15吉欧",
          spoiler: "真菌荒地: 螳螂村",
          id: "Geo Rock 2 (1)",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock81: {
          name: "吉欧堆 #81: 15吉欧",
          spoiler: "真菌荒地: 螳螂村",
          id: "Geo Rock 2",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock82: {
          name: "吉欧堆 #82: 15吉欧",
          spoiler: "真菌荒地: 螳螂领主",
          id: "Geo Rock 1",
          sceneName: "Fungus2_15",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock83: {
          name: "吉欧堆 #83: 15吉欧",
          spoiler: "真菌荒地: 螳螂领主",
          id: "Geo Rock 1 (1)",
          sceneName: "Fungus2_15",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock84: {
          name: "吉欧堆 #84: 22吉欧",
          spoiler: "真菌荒地: 真菌核心 Upper",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_29",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock85: {
          name: "吉欧堆 #85: 15吉欧",
          spoiler: "真菌荒地: Pilgrim's Way",
          id: "Geo Rock 1",
          sceneName: "Fungus2_21",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock86: {
          name: "吉欧堆 #86: 30吉欧",
          spoiler: "泪水之城: Rafters",
          id: "Geo Rock City 1",
          sceneName: "Ruins1_03",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock87: {
          name: "吉欧堆 #87: 30吉欧",
          spoiler: "泪水之城: 文物搜寻者里姆房间",
          id: "Geo Rock City 1 (1)",
          sceneName: "Ruins1_05b",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock88: {
          name: "吉欧堆 #88: 30吉欧",
          spoiler: "泪水之城: 腐臭蛋 Above 文物搜寻者里姆",
          id: "Geo Rock City 1",
          sceneName: "Ruins1_05c",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock89: {
          name: "吉欧堆 #89: 15吉欧",
          spoiler: "遗忘十字路: 容器碎片",
          id: "Geo Rock 2",
          sceneName: "Crossroads_37",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock90: {
          name: "吉欧堆 #90: 15吉欧",
          spoiler: "遗忘十字路: 躁郁的毛里克 Middle",
          id: "Geo Rock 1",
          sceneName: "Crossroads_36",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock91: {
          name: "吉欧堆 #91: 15吉欧",
          spoiler: "呼啸悬崖: 戈布",
          id: "Geo Rock 1",
          sceneName: "Cliffs_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock92: {
          name: "吉欧堆 #92: 15吉欧",
          spoiler: "呼啸悬崖: 戈布",
          id: "Geo Rock 1 (1)",
          sceneName: "Cliffs_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock93: {
          name: "吉欧堆 #93: 15吉欧",
          spoiler: "呼啸悬崖: Main",
          id: "Geo Rock 2 (2)",
          sceneName: "Cliffs_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock94: {
          name: "吉欧堆 #94: 15吉欧",
          spoiler: "呼啸悬崖: Main",
          id: "Geo Rock 2 (1)",
          sceneName: "Cliffs_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock95: {
          name: "吉欧堆 #95: 15吉欧",
          spoiler: "呼啸悬崖: Main",
          id: "Geo Rock 2 (4)",
          sceneName: "Cliffs_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock96: {
          name: "吉欧堆 #96: 15吉欧",
          spoiler: "呼啸悬崖: Main",
          id: "Geo Rock 2 (3)",
          sceneName: "Cliffs_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock97: {
          name: "吉欧堆 #97: 24吉欧",
          spoiler: "水晶山峰: Dark Entrance",
          id: "Geo Rock Mine",
          sceneName: "Mines_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock98: {
          name: "吉欧堆 #98: 15吉欧",
          spoiler: "水晶山峰: Dark Entrance",
          id: "Geo Rock 1",
          sceneName: "Mines_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock99: {
          name: "吉欧堆 #99: 22吉欧",
          spoiler: "水晶山峰: Dark Entrance",
          id: "Geo Rock Mine (1)",
          sceneName: "Mines_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock100: {
          name: "吉欧堆 #100: 16吉欧",
          spoiler: "水晶山峰: Conveyor Belts Entrance",
          id: "Geo Rock Mine (1)",
          sceneName: "Mines_04",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock101: {
          name: "吉欧堆 #101: 16吉欧",
          spoiler: "水晶山峰: Conveyor Belts Entrance",
          id: "Geo Rock Mine",
          sceneName: "Mines_04",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock102: {
          name: "吉欧堆 #102: 22吉欧",
          spoiler: "水晶山峰: Above Spike Grub",
          id: "Geo Rock Mine",
          sceneName: "Mines_05",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock103: {
          name: "吉欧堆 #103: 24吉欧",
          spoiler: "水晶山峰: East Tall",
          id: "Geo Rock Mine (4)",
          sceneName: "Mines_20",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock104: {
          name: "吉欧堆 #104: 24吉欧",
          spoiler: "水晶山峰: East Tall",
          id: "Geo Rock Mine (3)",
          sceneName: "Mines_20",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock105: {
          name: "吉欧堆 #105: 24吉欧",
          spoiler: "水晶山峰: East Tall",
          id: "Geo Rock Mine (2)",
          sceneName: "Mines_20",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock106: {
          name: "吉欧堆 #106: 24吉欧",
          spoiler: "水晶山峰: Chest Crushers",
          id: "Geo Rock Mine",
          sceneName: "Mines_37",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock107: {
          name: "吉欧堆 #107: 24吉欧",
          spoiler: "水晶山峰: Chest Crushers",
          id: "Geo Rock Mine (1)",
          sceneName: "Mines_37",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock108: {
          name: "吉欧堆 #108: 30吉欧",
          spoiler: "皇家水道: Entrance",
          id: "Geo Rock City 1",
          sceneName: "Waterways_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock109: {
          name: "吉欧堆 #109: 26吉欧",
          spoiler: "皇家水道: Entrance",
          id: "Geo Rock City 1 (1)",
          sceneName: "Waterways_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock110: {
          name: "吉欧堆 #110: 30吉欧",
          spoiler: "皇家水道: Mask Shard房间",
          id: "Geo Rock City 1",
          sceneName: "Waterways_04b",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock111: {
          name: "吉欧堆 #111: 15吉欧",
          spoiler: "泪水之城: Broken Elevator",
          id: "Geo Rock 2 (1)",
          sceneName: "Abyss_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock112: {
          name: "吉欧堆 #112: 15吉欧",
          spoiler: "泪水之城: Broken Elevator",
          id: "Geo Rock 2",
          sceneName: "Abyss_01",
          hitsLeft: "5",
          wiki: "吉欧#获取"
        },
        geoRock113: {
          name: "吉欧堆 #113: 15吉欧",
          spoiler: "泪水之城: Broken Elevator",
          id: "Geo Rock 1",
          sceneName: "Abyss_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock114: {
          name: "吉欧堆 #114: 15吉欧",
          spoiler: "古老盆地: Broken Bridge",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Abyss_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock115: {
          name: "吉欧堆 #115: 15吉欧",
          spoiler: "古老盆地: Broken Bridge",
          id: "Geo Rock Deepnest",
          sceneName: "Abyss_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock116: {
          name: "吉欧堆 #116: 15吉欧",
          spoiler: "古老盆地: Broken Bridge",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Abyss_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock117: {
          name: "吉欧堆 #117: 30吉欧",
          spoiler: "泪水之城: 国王驿站",
          id: "Geo Rock City 1",
          sceneName: "Ruins2_06",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock118: {
          name: "吉欧堆 #118: 30吉欧",
          spoiler: "泪水之城: Above 国王驿站",
          id: "Geo Rock City 1",
          sceneName: "Ruins2_05",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock119: {
          name: "吉欧堆 #119: 44吉欧",
          spoiler: "王国边缘: 低语之根",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_07",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock120: {
          name: "吉欧堆 #120: 44吉欧",
          spoiler: "王国边缘: 低语之根",
          id: "Geo Rock Outskirts (1)",
          sceneName: "Deepnest_East_07",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock121: {
          name: "吉欧堆 #121: 44吉欧",
          spoiler: "王国边缘: Outside 骨钉大师奥罗",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_06",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock122: {
          name: "吉欧堆 #122: 44吉欧",
          spoiler: "王国边缘: Outside 骨钉大师奥罗",
          id: "Geo Rock Outskirts (1)",
          sceneName: "Deepnest_East_06",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock123: {
          name: "吉欧堆 #123: 44吉欧",
          spoiler: "王国边缘: Bardoon",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_04",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock124: {
          name: "吉欧堆 #124: 44吉欧",
          spoiler: "王国边缘: 大跳虫 国王神像",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_08",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock125: {
          name: "吉欧堆 #125: 44吉欧",
          spoiler: "王国边缘: 苍白潜伏者 Arena",
          id: "Geo Rock Outskirts",
          sceneName: "GG_Lurker",
          hitsLeft: "5",
          wiki: "吉欧#获取"
        },
        geoRock126: {
          name: "吉欧堆 #126: 30吉欧",
          spoiler: "雾之峡谷: 长满植物的山丘",
          id: "Geo Rock Green Path 02",
          sceneName: "Room_Fungus_Shaman",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock127: {
          name: "吉欧堆 #127: 30吉欧",
          spoiler: "泪水之城: 灵魂大师 Rewards房间",
          id: "Geo Rock City 1",
          sceneName: "Ruins1_32",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock128: {
          name: "吉欧堆 #128: 30吉欧",
          spoiler: "皇家水道: Outside 吸虫之母",
          id: "Geo Rock City 1",
          sceneName: "Waterways_08",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock129: {
          name: "吉欧堆 #129: 30吉欧",
          spoiler: "皇家水道: 贪食吸虫 Corridor",
          id: "Geo Rock City 1",
          sceneName: "GG_Pipeway",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock130: {
          name: "吉欧堆 #130: 22吉欧",
          spoiler: "皇家水道: Fluke Hermit房间",
          id: "Geo Rock Fung 01",
          sceneName: "Room_GG_Shortcut",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock131: {
          name: "吉欧堆 #131: 17吉欧",
          spoiler: "皇家水道: Fluke Hermit房间",
          id: "Geo Rock Fung 02 (1)",
          sceneName: "Room_GG_Shortcut",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock132: {
          name: "吉欧堆 #132: 25吉欧",
          spoiler: "安息之地: 地窖",
          id: "Geo Rock Grave 02 (1)",
          sceneName: "RestingGrounds_10",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock133: {
          name: "吉欧堆 #133: 25吉欧",
          spoiler: "安息之地: 地窖",
          id: "Geo Rock Grave 02",
          sceneName: "RestingGrounds_10",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock134: {
          name: "吉欧堆 #134: 25吉欧",
          spoiler: "安息之地: 地窖",
          id: "Geo Rock Grave 01",
          sceneName: "RestingGrounds_10",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock135: {
          name: "吉欧堆 #135: 24吉欧",
          spoiler: "水晶山峰: Crystal Heart Gauntlet",
          id: "Geo Rock Mine",
          sceneName: "Mines_31",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock136: {
          name: "吉欧堆 #136: 24吉欧",
          spoiler: "水晶山峰: 幼虫 Mimic",
          id: "Geo Rock Mine",
          sceneName: "Mines_16",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock137: {
          name: "吉欧堆 #137: 35吉欧",
          spoiler: "古老盆地: Corridor to 残破容器",
          id: "Geo Rock Abyss",
          sceneName: "Abyss_18",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock138: {
          name: "吉欧堆 #138: 35吉欧",
          spoiler: "深渊: Main/Core Area",
          id: "Geo Rock Abyss (1)",
          sceneName: "Abyss_06_Core",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock139: {
          name: "吉欧堆 #139: 35吉欧",
          spoiler: "深渊: Main/Core Area",
          id: "Geo Rock Abyss",
          sceneName: "Abyss_06_Core",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock140: {
          name: "吉欧堆 #140: 35吉欧",
          spoiler: "深渊: Main/Core Area",
          id: "Geo Rock Abyss",
          sceneName: "Abyss_06_Core",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock141: {
          name: "吉欧堆 #141: 35吉欧",
          spoiler: "古老盆地: 残破容器 Grub",
          id: "Geo Rock Abyss (1)",
          sceneName: "Abyss_19",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock142: {
          name: "吉欧堆 #142: 35吉欧",
          spoiler: "古老盆地: 残破容器 Grub",
          id: "Geo Rock Abyss",
          sceneName: "Abyss_19",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock143: {
          name: "吉欧堆 #143: 24吉欧",
          spoiler: "水晶山峰: 圣巢之冠 Climb",
          id: "Geo Rock Mine",
          sceneName: "Mines_25",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock144: {
          name: "吉欧堆 #144: 24吉欧",
          spoiler: "水晶山峰: 圣巢之冠 Climb",
          id: "Geo Rock Mine (4)",
          sceneName: "Mines_25",
          hitsLeft: "4",
          wiki: "吉欧#获取"
        },
        geoRock145: {
          name: "吉欧堆 #145: 24吉欧",
          spoiler: "水晶山峰: 圣巢之冠 Climb",
          id: "Geo Rock Mine (2)",
          sceneName: "Mines_25",
          hitsLeft: "4",
          wiki: "吉欧#获取"
        },
        geoRock146: {
          name: "吉欧堆 #146: 24吉欧",
          spoiler: "水晶山峰: 圣巢之冠 Climb",
          id: "Geo Rock Mine (1)",
          sceneName: "Mines_25",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock147: {
          name: "吉欧堆 #147: 24吉欧",
          spoiler: "水晶山峰: 圣巢之冠 Climb",
          id: "Geo Rock Mine (3)",
          sceneName: "Mines_25",
          hitsLeft: "4",
          wiki: "吉欧#获取"
        },
        geoRock148: {
          name: "吉欧堆 #148: 30吉欧",
          spoiler: "泪水之城: 守望者的尖塔 Second Floor",
          id: "Geo Rock City 1",
          sceneName: "Ruins2_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock149: {
          name: "吉欧堆 #149: 30吉欧",
          spoiler: "雾之峡谷: East Tall",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus3_26",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock150: {
          name: "吉欧堆 #150: 26吉欧",
          spoiler: "王后花园: Main Arena",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus3_10",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock151: {
          name: "吉欧堆 #151: 30吉欧",
          spoiler: "王后花园: Outside 白色夫人",
          id: "Geo Rock Green Path 02",
          sceneName: "Fungus3_48",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock152: {
          name: "吉欧堆 #152: 27吉欧",
          spoiler: "王后花园: Moss Prophet房间",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus3_39",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock153: {
          name: "吉欧堆 #153: 30吉欧",
          spoiler: "王后花园: Moss Prophet房间",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus3_39",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock154: {
          name: "吉欧堆 #154: 15吉欧",
          spoiler: "真菌荒地: 深邃巢穴 Fall",
          id: "Geo Rock 1",
          sceneName: "Deepnest_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock155: {
          name: "吉欧堆 #155: 15吉欧",
          spoiler: "真菌荒地: 深邃巢穴 Fall",
          id: "Geo Rock 2",
          sceneName: "Deepnest_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock156: {
          name: "吉欧堆 #156: 26吉欧",
          spoiler: "王后花园: Corridor To 深邃巢穴",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Deepnest_43",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock157: {
          name: "吉欧堆 #157: 26吉欧",
          spoiler: "王后花园: Corridor To 深邃巢穴",
          id: "Geo Rock Green Path 01",
          sceneName: "Deepnest_43",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock158: {
          name: "吉欧堆 #158: 22吉欧",
          spoiler: "真菌荒地: 真菌核心 Lower",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_30",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock159: {
          name: "吉欧堆 #159: 22吉欧",
          spoiler: "真菌荒地: 真菌核心 Lower",
          id: "Geo Rock Fung 01 (1)",
          sceneName: "Fungus2_30",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock160: {
          name: "吉欧堆 #160: 15吉欧",
          spoiler: "深邃巢穴: Lower 柯尼法",
          id: "Geo Rock Deepnest",
          sceneName: "Fungus2_25",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock161: {
          name: "吉欧堆 #161: 15吉欧",
          spoiler: "深邃巢穴: Lower 柯尼法",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Fungus2_25",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock162: {
          name: "吉欧堆 #162: 15吉欧",
          spoiler: "深邃巢穴: Lower 柯尼法",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Fungus2_25",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock163: {
          name: "吉欧堆 #163: 15吉欧",
          spoiler: "深邃巢穴: Top of Lower 柯尼法",
          id: "Geo Rock Deepnest (4)",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock164: {
          name: "吉欧堆 #164: 15吉欧",
          spoiler: "深邃巢穴: Top of Lower 柯尼法",
          id: "Geo Rock Deepnest (3)",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock165: {
          name: "吉欧堆 #165: 15吉欧",
          spoiler: "深邃巢穴: Top of Lower 柯尼法",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock166: {
          name: "吉欧堆 #166: 15吉欧",
          spoiler: "深邃巢穴: Top of Lower 柯尼法",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock167: {
          name: "吉欧堆 #167: 15吉欧",
          spoiler: "深邃巢穴: Top of Lower 柯尼法",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock168: {
          name: "吉欧堆 #168: 15吉欧",
          spoiler: "深邃巢穴: Outside 幼虫 Mimics",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_02",
          hitsLeft: "3",
          wiki: "吉欧#获取"
        },
        geoRock169: {
          name: "吉欧堆 #169: 15吉欧",
          spoiler: "深邃巢穴: Outside 幼虫 Mimics",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_02",
          hitsLeft: "3",
          wiki: "吉欧#获取"
        },
        geoRock170: {
          name: "吉欧堆 #170: 15吉欧",
          spoiler: "深邃巢穴: 低语之根",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_39",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock171: {
          name: "吉欧堆 #171: 15吉欧",
          spoiler: "深邃巢穴: 低语之根",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_39",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock172: {
          name: "吉欧堆 #172: 15吉欧",
          spoiler: "深邃巢穴: 低语之根",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_39",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock173: {
          name: "吉欧堆 #173: 15吉欧",
          spoiler: "深邃巢穴: Left of Hot Spring",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_03",
          hitsLeft: "3",
          wiki: "吉欧#获取"
        },
        geoRock174: {
          name: "吉欧堆 #174: 15吉欧",
          spoiler: "深邃巢穴: Left of Hot Spring",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_03",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock175: {
          name: "吉欧堆 #175: 15吉欧",
          spoiler: "深邃巢穴: Left of Hot Spring",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_03",
          hitsLeft: "3",
          wiki: "吉欧#获取"
        },
        geoRock176: {
          name: "吉欧堆 #176: 15吉欧",
          spoiler: "深邃巢穴: Outside 加利安",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_35",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock177: {
          name: "吉欧堆 #177: 15吉欧",
          spoiler: "深邃巢穴: Outside 加利安",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_35",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock178: {
          name: "吉欧堆 #178: 15吉欧",
          spoiler: "深邃巢穴: Corridor to Tram",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_37",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock179: {
          name: "吉欧堆 #179: 15吉欧",
          spoiler: "深邃巢穴: Corridor to Tram",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_37",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock180: {
          name: "吉欧堆 #180: 15吉欧",
          spoiler: "王国边缘: Left of 蜂巢",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_East_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock181: {
          name: "吉欧堆 #181: 15吉欧",
          spoiler: "王国边缘: Left of 蜂巢",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_East_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock182: {
          name: "吉欧堆 #182: 15吉欧",
          spoiler: "王国边缘: Above 蜂巢",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_East_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock183: {
          name: "吉欧堆 #183: 15吉欧",
          spoiler: "王国边缘: Above 蜂巢",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_East_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock184: {
          name: "吉欧堆 #184: 30吉欧",
          spoiler: "皇家水道: Left of 伊思玛的树林",
          id: "Geo Rock City 1",
          sceneName: "Waterways_07",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock185: {
          name: "吉欧堆 #185: 56吉欧",
          spoiler: "蜂巢: Outside Grub",
          id: "Geo Rock Hive (2)",
          sceneName: "Hive_03",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock186: {
          name: "吉欧堆 #186: 56吉欧",
          spoiler: "蜂巢: Outside Grub",
          id: "Geo Rock Hive",
          sceneName: "Hive_03",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock187: {
          name: "吉欧堆 #187: 56吉欧",
          spoiler: "蜂巢: Outside Grub",
          id: "Geo Rock Hive (1)",
          sceneName: "Hive_03",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock188: {
          name: "吉欧堆 #188: 56吉欧",
          spoiler: "蜂巢: Entrance",
          id: "Geo Rock Hive",
          sceneName: "Hive_01",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock189: {
          name: "吉欧堆 #189: 56吉欧",
          spoiler: "蜂巢: 低语之根",
          id: "Geo Rock Hive",
          sceneName: "Hive_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock190: {
          name: "吉欧堆 #190: 56吉欧",
          spoiler: "蜂巢: 低语之根",
          id: "Geo Rock Hive (2)",
          sceneName: "Hive_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock191: {
          name: "吉欧堆 #191: 56吉欧",
          spoiler: "蜂巢: 低语之根",
          id: "Geo Rock Hive (1)",
          sceneName: "Hive_02",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock192: {
          name: "吉欧堆 #192: 56吉欧",
          spoiler: "蜂巢: Mask Shard房间",
          id: "Geo Rock Hive",
          sceneName: "Hive_04",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock193: {
          name: "吉欧堆 #193: 56吉欧",
          spoiler: "蜂巢: Mask Shard房间",
          id: "Geo Rock Hive (1)",
          sceneName: "Hive_04",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock194: {
          name: "吉欧堆 #194: 15吉欧",
          spoiler: "深邃巢穴: 诺斯克 Corridor",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_31",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock195: {
          name: "吉欧堆 #195: 15吉欧",
          spoiler: "深邃巢穴: 诺斯克 Corridor",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_31",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock196: {
          name: "吉欧堆 #196: 15吉欧",
          spoiler: "深邃巢穴: 诺斯克 Corridor",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_31",
          hitsLeft: "3",
          wiki: "吉欧#获取"
        },
        geoRock197: {
          name: "吉欧堆 #197: 15吉欧",
          spoiler: "深邃巢穴: 野兽巢穴",
          id: "Geo Rock Deepnest (3)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock198: {
          name: "吉欧堆 #198: 15吉欧",
          spoiler: "深邃巢穴: 野兽巢穴",
          id: "Geo Rock Deepnest (4)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock199: {
          name: "吉欧堆 #199: 20吉欧",
          spoiler: "深邃巢穴: 野兽巢穴",
          id: "Geo Rock Deepnest (5)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock200: {
          name: "吉欧堆 #200: 15吉欧",
          spoiler: "深邃巢穴: 野兽巢穴",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock201: {
          name: "吉欧堆 #201: 15吉欧",
          spoiler: "深邃巢穴: 野兽巢穴",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock202: {
          name: "吉欧堆 #202: 30吉欧",
          spoiler: "深邃巢穴: 野兽巢穴",
          id: "Geo Rock Deepnest (7)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock203: {
          name: "吉欧堆 #203: 15吉欧",
          spoiler: "深邃巢穴: 野兽巢穴",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock204: {
          name: "吉欧堆 #204: 20吉欧",
          spoiler: "深邃巢穴: 野兽巢穴",
          id: "Geo Rock Deepnest (6)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock205: {
          name: "吉欧堆 #205: 30吉欧",
          spoiler: "泪水之城: 欢乐之屋 Elevator",
          id: "Geo Rock City 1",
          sceneName: "Ruins_Elevator",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock206: {
          name: "吉欧堆 #206: 44吉欧",
          spoiler: "王国边缘: Near 420吉欧堆",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_17",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
        geoRock207: {
          name: "巨大吉欧蛋 #207: 420吉欧",
          spoiler: "王国边缘",
          id: "Giant Geo Egg",
          sceneName: "Deepnest_East_17",
          hitsLeft: "0",
          wiki: "吉欧#获取"
        },
      },
    },

    /* ###################################### Secrets -> World Interactions ############################################## */

    worldInteractions: {
      h2: "世界互动",
      id: "hk-world-interactions",
      description: `玩家可以与游戏中的NPC或世界物体进行某些互动。所有这些互动都不会计入112%的游戏完成度或成就。`,
      entries: {
        unlockedCompletionRate: {
          name: "世界感知能力",
          spoiler: "黑卵圣殿: 长椅旁的石碑",
          wiki: "世界感知"
        },
        spaBugsEncountered: {
          name: "两只八卦虫",
          spoiler: "遗忘十字路: 温泉，需要螳螂爪",
          wiki: "温泉#遗忘十字路"
        },
        jijiDoorUnlocked: {
          name: "解锁忏悔师吉吉的房间",
          spoiler: "德特茅斯, 需要简单钥匙",
          wiki: "吉吉"
        },
        bathHouseOpened: {
          name: "解锁欢乐之屋",
          spoiler: "泪水之城: 在城市右部区域",
          wiki: "泪水之城#欢乐之屋"
        },
        openedWaterwaysManhole: {
          name: "解锁皇家水道井口",
          spoiler: "泪水之城: below 文物搜寻者里姆, use简单钥匙",
          wiki: "皇家水道#入口"
        },
        gladeDoorOpened: {
          name: "解锁灵魂沼地入口",
          spoiler: "安息之地, 先知: 200精华",
          wiki: "安息之地#灵魂沼地"
        },
        openedCityGate: {
          name: "解锁泪水之城的入口",
          spoiler: "真菌荒地, 需要城市纹章",
          wiki: "真菌荒地"
        },
        soulSanctumShortcut: {
          name: "解锁灵魂圣所的捷径",
          spoiler: "泪水之城: 柯尼法 Lift房间, break left wall",
          id: "Breakable Wall Ruin Lift",
          sceneName: "Ruins1_31",
          wiki: "泪水之城#灵魂圣所"
        },
        waterwaysGate: {
          name: "解锁皇家水道的入口",
          spoiler: "皇家水道: 柯尼法房间, use lever",
          wiki: "皇家水道"
        },
        watcherChandelier: {
          name: "打下守望者骑士房间的吊灯",
          spoiler: "泪水之城: 守望者骑士房间，打坏天花板",
          wiki: "守望者骑士#游戏剧情"
        },
        colosseumHiddenHotSpring: {
          name: "愚人斗兽场的隐藏温泉",
          spoiler: "愚人斗兽场, 打破椅子右边的隐藏墙壁",
          id: "Breakable Wall_Silhouette",
          sceneName: "Room_Colosseum_02",
          wiki: "愚人斗兽场#简介"
        },
        stagEggInspected: {
          name: "鹿角虫巢穴的蛋",
          spoiler: "呼啸悬崖: 鹿角虫巢穴",
          wiki: "呼啸悬崖#鹿角虫巢穴"
        },
        deepnestBridgeCollapsed: {
          name: "深邃巢穴的桥",
          spoiler: "真菌荒地, left of 蘑菇孢子",
          wiki: "深邃巢穴#入口"
        },
        maskmakerUnmasked1: {
          name: "打破面具制作师的面具",
          spoiler: "深邃巢穴, use 荒芜俯冲 on Mask Maker",
          wiki: "面具制作师#游戏剧情"
        },
        bankerAccountPurchased: {
          name: "在米莉贝利银行开户",
          spoiler: "100吉欧: 雾之峡谷: 银行家米莉贝利",
          wiki: "米莉贝利"
        },
        millibelleLeft: {
          name: "米莉贝利跑路了",
          spoiler: "雾之峡谷: 银行家米莉贝利",
          wiki: "米莉贝利"
        },
        millibelleCheckedStand: {
          name: "检查米莉贝利的柜台",
          spoiler: "雾之峡谷: 银行家米莉贝利",
          wiki: "米莉贝利"
        },
        bankerSpaMet: {
          name: "在温泉与米莉贝利互动",
          spoiler: "泪水之城: 温泉,简单钥匙",
          wiki: "米莉贝利"
        },
        millibelleReclaimedAllGeo: {
          name: "取回米莉贝利所有吉欧",
          spoiler: "泪水之城: 温泉, 小偷米莉贝利",
          wiki: "米莉贝利"
        },
        elderbugGaveFlower: {
          name: "娇嫩的花: 虫长者",
          spoiler: "从叛徒的孩子之墓送花",
          wiki: "娇嫩的花#能送花的_NPC"
        },
        givenGodseekerFlower: {
          name: "娇嫩的花: 寻神者",
          spoiler: "从叛徒的孩子之墓送花，需要先完成2个万神殿",
          wiki: "娇嫩的花#能送花的_NPC"
        },
        givenOroFlower: {
          name: "娇嫩的花: 骨钉大师奥罗",
          spoiler: "从叛徒的孩子之墓送花",
          wiki: "娇嫩的花#能送花的_NPC"
        },
        givenWhiteLadyFlower: {
          name: "娇嫩的花: 白色夫人",
          spoiler: "从叛徒的孩子之墓送花",
          wiki: "娇嫩的花#能送花的_NPC"
        },
        givenEmilitiaFlower: {
          name: "娇嫩的花: 永恒的艾米丽塔",
          spoiler: "从叛徒的孩子之墓送花",
          wiki: "娇嫩的花#能送花的_NPC"
        },
      },
    },

    /* ###################################### Secrets -> 隐藏房间 ############################################## */

    secretRooms: {
      h2: "隐藏房间",
      id: "hk-secret-rooms",
      description: `游戏中的隐藏房间， <span class="spoiler-span blurred">格林帐篷的隐藏房间</span> 有错过的可能，如果玩家选择 <span class="spoiler-span blurred">放弃团队或完成仪式</span>.`,
      entries: {
        grimmTentSecretRoom: {
          name: "格林的帐篷: 隐藏房间 (有错过的可能)",
          spoiler: "德特茅斯: inside Grimm's Tent",
          id: "Secret Mask",
          sceneName: "Grimm_Main_Tent",
          wiki: "德特茅斯#格林剧团的帐篷"
        },
        towerOfLoveSecretRoom: {
          name: "爱之塔: 隐藏房间",
          spoiler: "泪水之城: near 收藏家的地图",
          id: "secret sound_grub room",
          sceneName: "Ruins2_11",
          wiki: "收藏家"
        },
        weaversDenSecretRoom1: {
          name: "编织者巢穴: 隐藏房间 #1",
          spoiler: "深邃巢穴: inside 编织者巢穴",
          id: "Breakable Wall",
          sceneName: "Deepnest_45_v02",
          wiki: "深邃巢穴#编织者巢穴"
        },
        weaversDenSecretRoom2: {
          name: "编织者巢穴: 隐藏房间 #2",
          spoiler: "深邃巢穴: inside 编织者巢穴",
          id: "Breakable Wall Waterways",
          sceneName: "Deepnest_45_v02",
          wiki: "深邃巢穴#编织者巢穴"
        },
        pathOfPainEntrance: {
          name: "白色宫殿: 苦痛之路入口",
          spoiler: "打破电梯区域上方的左侧墙壁",
          id: "Breakable Wall Ruin Lift",
          sceneName: "White_Palace_06",
          wiki: "白色宫殿#苦痛之路"
        },
        killsBindingSeal: {
          name: "白色宫殿: 苦痛之路",
          spoiler: "主要秘密区域，位于中间电梯之后",
          wiki: "白色宫殿#苦痛之路"
        },
        whitePalaceSecretRoomVisited: {
          name: "白色宫殿: 隐藏房间 #1",
          spoiler: "苍白之王的工作室",
          wiki: "白色宫殿#国王工坊"
        },
        whiteLadyRoom: {
          name: "白色宫殿: 隐藏房间 #2",
          spoiler: "白色夫人的房间，打破地板",
          id: "Quake Floor",
          sceneName: "White_Palace_09",
          wiki: "白色宫殿#白色夫人的房间"
        },
        throneRoomLoreTablet: {
          name: "白色宫殿: 隐藏房间 #3",
          spoiler: "王座之间的石碑，打破右侧墙壁",
          id: "Breakable Wall Waterways",
          sceneName: "White_Palace_09",
          wiki: "白色宫殿#王座之间的石碑"
        },
        /* 
        #52 Quake Floor 🗺️ Palace Caged Lever ⌨️ White_Palace_15
        #53 Breakable Wall Waterways 🗺️ Palace Spike Drop ⌨️ White_Palace_12
        #54 Break Floor 1 🗺️ Palace Spike Drop ⌨️ White_Palace_12
        */
      },
    },

    /* ###################################### Secrets -> 柯尼法的卡片 ############################################## */

    corniferNotes: {
      h2: "柯尼法的卡片",
      id: "hk-cornifer-notes",
      description: `制图师柯尼法每次离开当前区域时都会在地上留下纸条。纸条会留在柯尼法之前所在的位置。当该区域的特定条件达成后，例如击败某个首领或习得一项新能力，他就会离开该区域。阅读纸条后，纸条会停止发光，并且相应的条目会被标记为已完成。`,
      entries: {
        corniferNote1: {
          name: "卡片 #1: 遗忘十字路",
          spoiler: "遗忘十字路下方的格鲁兹之母房间",
          id: "Shiny",
          sceneName: "Crossroads_33",
          wiki: "柯尼法#位置"
        },
        corniferNote2: {
          name: "卡片 #2: 苍绿之径",
          spoiler: "Room below the Crossroads entrance",
          id: "Shiny",
          sceneName: "Fungus1_06",
          wiki: "柯尼法#位置"
        },
        corniferNote3: {
          name: "卡片 #3: 真菌荒地",
          spoiler: "王后驿站右边",
          id: "Shiny",
          sceneName: "Fungus2_18",
          wiki: "柯尼法#位置"
        },
        corniferNote4: {
          name: "卡片 #4: 呼啸悬崖",
          spoiler: "Big Main Area on the left side",
          id: "Shiny",
          sceneName: "Cliffs_01",
          wiki: "柯尼法#位置"
        },
        corniferNote5: {
          name: "卡片 #5: 泪水之城",
          spoiler: "Toll Bench left of 灵魂圣所",
          id: "Shiny",
          sceneName: "Ruins1_31",
          wiki: "柯尼法#位置"
        },
        corniferNote6: {
          name: "卡片 #6: 水晶山峰",
          spoiler: "中部长椅的左方",
          id: "Shiny",
          sceneName: "Mines_30",
          wiki: "柯尼法#位置"
        },
        corniferNote7: {
          name: "卡片 #7: 安息之地",
          spoiler: "靠近鹿角虫车站",
          id: "Shiny",
          sceneName: "RestingGrounds_09",
          wiki: "柯尼法#位置"
        },
        corniferNote8: {
          name: "卡片 #8: 皇家水道",
          spoiler: "靠近真菌荒地出口",
          id: "Shiny",
          sceneName: "Waterways_09",
          wiki: "柯尼法#位置"
        },
        corniferNote9: {
          name: "卡片 #9: 古老盆地",
          spoiler: "车站和喷泉下方",
          id: "Shiny",
          sceneName: "Abyss_04",
          wiki: "柯尼法#位置"
        },
        corniferNote10: {
          name: "卡片 #10: 王国边缘",
          spoiler: "国王驿站入口下方",
          id: "Shiny",
          sceneName: "Deepnest_East_03",
          wiki: "柯尼法#位置"
        },
      },
    },

    /* ################ Game Statistics ################### */

    statistics: {
      h2: "游戏统计",
      id: "hk-statistics",
      description: "专为收藏家和数据爱好者打造。游戏中可能不会直接告诉你的所有信息，但都可以从存档文件中读取。",
      entries: {
        journalEntriesCompleted: {
          name: "遇到的生物",
          spoiler: "猎人日志 (158-164)",
          spoilerDefault: "猎人日志",
          max: 164,
          maxDefault: 164,
          wiki: "敌人_(空洞骑士)#图鉴"
        },
        /* 
        Add 4 remaining to Hunter Notes max
        */
        journalNotesCompleted: {
          name: "完成猎人日志",
          spoiler: "猎人日志 (158-164)",
          spoilerDefault: "猎人日志",
          max: 164,
          maxDefault: 164,
          wiki: "敌人_(空洞骑士)#图鉴"
        },
        nailDamage: {
          name: "骨钉基础伤害",
          spoiler: "钉子匠升级, 泪水之城",
          max: 21,
          maxDefault: 21,
          wiki: "骨钉#升级"
        },
        // not ghostCoins
        geoPool: {
          name: "暗影吉欧",
          spoiler: "暗影（小骑士尸体）里的吉欧的当前数量",
          min: 0,
          wiki: "暗影"
        },
        soldTrinket1: {
          name: "漫游者日记 售出",
          spoiler: "泪水之城: 文物搜寻者里姆",
          geoValue: 200,
          wiki: "漫游者日记"
        },
        soldTrinket2: {
          name: "圣巢印章 售出",
          spoiler: "泪水之城: 文物搜寻者里姆",
          geoValue: 450,
          wiki: "圣巢印章"
        },
        soldTrinket3: {
          name: "国王神像 售出",
          spoiler: "泪水之城: 文物搜寻者里姆",
          geoValue: 800,
          wiki: "国王神像"
        },
        soldTrinket4: {
          name: "神秘蛋 售出",
          spoiler: "泪水之城: 文物搜寻者里姆",
          geoValue: 1200,
          wiki: "神秘蛋"
        },
        relicsSoldTotalGeo: {
          name: "售卖文物的吉欧收入",
          spoiler: "泪水之城: 文物搜寻者里姆",
          wiki: "里姆#文物"
        },
        ore: {
          name: "苍白矿石",
          spoiler: "当前持有的苍白矿石数量",
          wiki: "苍白矿石"
        },
        simpleKeys: {
          name: "简单钥匙",
          spoiler: "当前持有的简单钥匙数量",
          wiki: "简单钥匙"
        },
        rancidEggs: {
          name: "腐臭蛋",
          spoiler: "当前持有的腐臭蛋数量",
          wiki: "腐臭蛋"
        },
        jinnEggsSold: {
          name: "腐臭蛋 售出",
          spoiler: "德特茅斯: 钢铁之魂吉恩, 钢魂模式 only",
          wiki: "吉恩"
        },
        xunFlowerBrokeTimes: {
          name: "娇嫩的花损毁",
          spoiler: "灰色哀悼者, 叛徒的孩子之墓",
          wiki: "娇嫩的花"
        },
        itemsDiscovered: {
          id: "itemsDiscovered",
          name: "可交互对象",
          spoiler: "未激活 | 已激活 | 发现",
          wiki: "区域_(空洞骑士)",
          notActivated: 0,
          activated: 0,
          discoveredTotal: 0
        },
        bankerBalance: {
          name: "银行账户余额",
          spoiler: "雾之峡谷: 银行家米莉贝利",
          wiki: "米莉贝利"
        },
        whiteDefenderDefeats: {
          name: "多次击败白色防御者",
          spoiler: "皇家水道 (最多5次)",
          max: 5,
          maxDefault: 5,
          wiki: "白色防御者"
        },
        greyPrinceDefeats: {
          name: "多次击败灰色王子左特",
          spoiler: "德特茅斯 (最多10次)",
          max: 10,
          maxDefault: 10,
          wiki: "灰色王子左特"
        }
      },
    },

    /* ################################################# 万神殿 Statistics ############################################## */

    godhomeStatistics: {
      h2: "万神殿",
      id: "hk-godhome-statistics",
      description: "万神殿相关, 在垃圾坑对寻神者使用梦之钉时，有2%的几率进入调谐器的记忆。",
      entries: {
        seenGGWastes: {
          name: "调谐器的记忆",
          spoiler: "完成前三个万神殿后，",
          wiki: "神居#调谐器的记忆"
        },
        blueRoomDoorUnlocked: {
          name: "打开生命血房间",
          spoiler: "完成8个万神殿绑定后",
          wiki: "神居#上锁的生命血房间"
        },
        killedVoidIdol_1: {
          name: "日志: 虚空神像 调谐",
          spoiler: "诸神堂: 击败所有 Boss (调谐级)",
          wiki: "虚空神像"
        },
        killedVoidIdol_2: {
          name: "日志: 虚空神像 进升",
          spoiler: "诸神堂: 击败所有 Boss (进升级)",
          wiki: "虚空神像"
        },
        killedVoidIdol_3: {
          name: "日志: 虚空神像 辐辉",
          spoiler: "诸神堂: 击败所有 Boss (辐辉级)",
          wiki: "虚空神像"
        },
        killedGodseekerMask: {
          name: "日志: 风化面具",
          spoiler: "风暴之地: 完成所有万神殿和所有束缚",
          wiki: "风化面具"
        },
        zoteStatueWallBroken: {
          name: "发现入侵者",
          spoiler: "诸神堂: 左特的雕像 (右上方)",
          wiki: "诸神堂#左特"
        },
        ordealAchieved: {
          name: "无尽折磨",
          spoiler: "击杀 57 个左特",
          wiki: "无尽折磨"
        }
      },
    },

    /* ################################################### Pantheon of the Master #################################################### */

    pantheonOfTheMaster: {
      h2: "P1 - 大师万神殿",
      id: "hk-pantheon-master",
      property: "bossDoorStateTier1",
      description: "寻觅骨钉与外壳之神",
      entries: {
        unlocked: {
          name: "P1 已解锁",
          spoiler: "击败游戏中的所有大师万神殿Boss后解锁",
          wiki: "大师万神殿"
        },
        completed: {
          name: "P1 已完成",
          spoiler: "击败所有大师万神殿Boss后完成",
          wiki: "大师万神殿"
        },
        boundNail: {
          name: "P1 骨钉束缚",
          spoiler: "以骨钉束缚状态通关",
          wiki: "万神殿#束缚"
        },
        boundShell: {
          name: "P1 外壳束缚",
          spoiler: "以外壳束缚状态通关",
          wiki: "万神殿#束缚"
        },
        boundCharms: {
          name: "P1 护符束缚",
          spoiler: "Charm binding active",
          wiki: "万神殿#束缚"
        },
        boundSoul: {
          name: "P1 灵魂束缚",
          spoiler: "以灵魂束缚状态通关",
          wiki: "万神殿#束缚"
        },
        allBindings: {
          name: "P1 全部束缚（四锁）",
          spoiler: "四锁状态完成大师万神殿",
          wiki: "万神殿#束缚"
        },
        noHits: {
          name: "P1 无伤",
          spoiler: "无伤完成大师万神殿",
          wiki: "万神殿"
        },
      },
    },

    /* ################################################### Pantheon of the Artist #################################################### */

    pantheonOfTheArtist: {
      h2: "P2 - 艺术家万神殿",
      id: "hk-pantheon-artist",
      property: "bossDoorStateTier2",
      description: "寻觅创造力之神",
      entries: {
        unlocked: {
          name: "P2 已解锁",
          spoiler: "击败游戏中的所有艺术家万神殿Boss后解锁",
          wiki: "艺术家万神殿"
        },
        completed: {
          name: "P2 已完成",
          spoiler: "击败所有艺术家万神殿Boss后完成",
          wiki: "艺术家万神殿"
        },
        boundNail: {
          name: "P2 骨钉束缚",
          spoiler: "以骨钉束缚状态通关",
          wiki: "艺术家万神殿#绑定"
        },
        boundShell: {
          name: "P2 外壳束缚",
          spoiler: "以外壳束缚状态通关",
          wiki: "万神殿#束缚"
        },
        boundCharms: {
          name: "P2 护符束缚",
          spoiler: "以护符束缚状态通关",
          wiki: "万神殿#束缚"
        },
        boundSoul: {
          name: "P2 灵魂束缚",
          spoiler: "以灵魂束缚状态通关",
          wiki: "万神殿#束缚"
        },
        allBindings: {
          name: "P2 全部束缚（四锁）",
          spoiler: "四锁状态完成艺术家万神殿",
          wiki: "万神殿#束缚"
        },
        noHits: {
          name: "P2 无伤",
          spoiler: "无伤完成艺术家万神殿",
          wiki: "万神殿"
        },
      },
    },

    /* ################################################### Pantheon of the Sage #################################################### */

    pantheonOfTheSage: {
      h2: "P3 - Pantheon of the Sage",
      id: "hk-pantheon-sage",
      property: "bossDoorStateTier3",
      description: "寻觅财富与力量之神",
      entries: {
        unlocked: {
          name: "P3 已解锁",
          spoiler: "击败游戏中的所有贤者万神殿Boss后解锁",
          wiki: "贤者万神殿"
        },
        completed: {
          name: "P3 已完成",
          spoiler: "击败所有贤者万神殿Boss后完成",
          wiki: "贤者万神殿"
        },
        boundNail: {
          name: "P3 骨钉束缚",
          spoiler: "以骨钉束缚状态通关",
          wiki: "万神殿#束缚"
        },
        boundShell: {
          name: "P3 外壳束缚",
          spoiler: "以外壳束缚状态通关",
          wiki: "万神殿#束缚"
        },
        boundCharms: {
          name: "P3 护符束缚",
          spoiler: "以护符束缚状态通关",
          wiki: "万神殿#束缚"
        },
        boundSoul: {
          name: "P3 灵魂束缚",
          spoiler: "以灵魂束缚状态通关",
          wiki: "万神殿#束缚"
        },
        allBindings: {
          name: "P3 全部束缚（四锁）",
          spoiler: "四锁状态完成贤者万神殿",
          wiki: "万神殿#束缚"
        },
        noHits: {
          name: "P3 无伤",
          spoiler: "无伤完成贤者万神殿",
          wiki: "万神殿"
        },
      },
    },

    /* ################################################### Pantheon of the Knight #################################################### */

    pantheonOfTheKnight: {
      h2: "P4 - 骑士万神殿",
      id: "hk-pantheon-knight",
      property: "bossDoorStateTier4",
      description: "寻觅纯粹之神",
      entries: {
        unlocked: {
          name: "P4 已解锁",
          spoiler: "完成前三个万神殿后解锁",
          wiki: "骑士万神殿"
        },
        completed: {
          name: "P4 已完成",
          spoiler: "击败所有骑士万神殿Boss后完成",
          wiki: "骑士万神殿"
        },
        boundNail: {
          name: "P4 骨钉束缚",
          spoiler: "以骨钉束缚状态通关",
          wiki: "万神殿#束缚"
        },
        boundShell: {
          name: "P4 外壳束缚",
          spoiler: "以外壳束缚状态通关",
          wiki: "万神殿#束缚"
        },
        boundCharms: {
          name: "P4 护符束缚",
          spoiler: "以护符束缚状态通关",
          wiki: "万神殿#束缚"
        },
        boundSoul: {
          name: "P4 灵魂束缚",
          spoiler: "以灵魂束缚状态通关",
          wiki: "万神殿#束缚"
        },
        allBindings: {
          name: "P4 全部束缚（四锁）",
          spoiler: "四锁状态完成骑士万神殿",
          wiki: "万神殿#束缚"
        },
        noHits: {
          name: "P4 无伤",
          spoiler: "无伤完成骑士万神殿",
          wiki: "万神殿"
        },
      },
    },

    /* ################################################### 圣巢万神殿 #################################################### */

    pantheonOfHallownest: {
      h2: "P5 - 圣巢万神殿",
      id: "hk-pantheon-hallownest",
      property: "bossDoorStateTier5",
      description: "寻觅王国那被遗忘的光芒",
      entries: {
        unlocked: {
          name: "P5 已解锁",
          spoiler: "完成前四个万神殿后解锁",
          wiki: "圣巢万神殿"
        },
        completed: {
          name: "P5 已完成",
          spoiler: "击败所有圣巢万神殿Boss后完成",
          wiki: "圣巢万神殿"
        },
        boundNail: {
          name: "P5 骨钉束缚",
          spoiler: "骨钉束缚：若骨钉伤降低",
          wiki: "万神殿#束缚"
        },
        boundShell: {
          name: "P5 外壳束缚",
          spoiler: "外壳束缚：血量格数降至4",
          wiki: "万神殿#束缚"
        },
        boundCharms: {
          name: "P5 护符束缚",
          spoiler: "护符束缚：不能装备护符",
          wiki: "万神殿#束缚"
        },
        boundSoul: {
          name: "P5 灵魂束缚",
          spoiler: "灵魂束缚：最多只能蓄积33%灵魂",
          wiki: "万神殿#束缚"
        },
        allBindings: {
          name: "P5 全部束缚（四锁）",
          spoiler: "四锁状态完成圣巢万神殿",
          wiki: "万神殿#束缚"
        },
        noHits: {
          name: "P5 无伤",
          spoiler: "无伤完成圣巢万神殿",
          wiki: "万神殿"
        },
      },
    },

    /* ################################################### 诸神堂 ############################################################# */

    hallOfGods: {
      h2: "诸神堂",
      id: "hk-hall-of-gods",
      property: "statueState",
      description: "万神殿底部，放置了许多 Boss 的雕像。可以通过雕像开启战斗，挑战这些 Boss，每一个 Boss 都有三个不同的难度挑战等级：调谐级 (Attuned), 进升级 (Ascended), 辐辉级 (Radiant).",
      entries: {
        GruzMotherUnlocked: {
          name: "格鲁兹之母: 解锁",
          spoiler: "“我沉睡在蜿蜒的路口”",
          id: "GruzMother",
          check: "isUnlocked",
          wiki: "诸神堂#格鲁兹之母"
        },
        GruzMotherAttuned: {
          name: "格鲁兹之母: 调谐级",
          spoiler: "“我沉睡在蜿蜒的路口”",
          id: "GruzMother",
          check: "completedTier1",
          wiki: "诸神堂#格鲁兹之母"
        },
        GruzMotherAscended: {
          name: "格鲁兹之母: 进升级",
          spoiler: "沉睡的生育之神",
          id: "GruzMother",
          check: "completedTier2",
          wiki: "诸神堂#格鲁兹之母"
        },
        GruzMotherRadiant: {
          name: "格鲁兹之母: 辐辉级",
          spoiler: "沉睡的生育之神",
          id: "GruzMother",
          check: "completedTier3",
          wiki: "诸神堂#格鲁兹之母"
        },
        VengeflyUnlocked: {
          name: "复仇蝇之王: 解锁",
          spoiler: "“我守卫于翠绿的土地之上”",
          id: "Vengefly",
          check: "isUnlocked",
          wiki: "诸神堂#复仇蝇之王"
        },
        VengeflyAttuned: {
          name: "复仇蝇之王: 调谐级",
          spoiler: "凶恶的领土之神",
          id: "Vengefly",
          check: "completedTier1",
          wiki: "诸神堂#复仇蝇之王"
        },
        VengeflyAscended: {
          name: "复仇蝇之王: 进升级",
          spoiler: "凶恶的领土之神",
          id: "Vengefly",
          check: "completedTier2",
          wiki: "诸神堂#复仇蝇之王"
        },
        VengeflyRadiant: {
          name: "复仇蝇之王: 辐辉级",
          spoiler: "凶恶的领土之神",
          id: "Vengefly",
          check: "completedTier3",
          wiki: "诸神堂#复仇蝇之王"
        },
        BroodingMawlekUnlocked: {
          name: "躁郁的毛里克: 解锁",
          spoiler: "I call out to no one...",
          id: "BroodingMawlek",
          check: "isUnlocked",
          wiki: "诸神堂#躁郁的毛里克"
        },
        BroodingMawlekAttuned: {
          name: "躁郁的毛里克: 调谐级",
          spoiler: "...hidden by roads and highways",
          id: "BroodingMawlek",
          check: "completedTier1",
          wiki: "诸神堂#躁郁的毛里克"
        },
        BroodingMawlekAscended: {
          name: "躁郁的毛里克: 进升级",
          spoiler: "孤独的巢穴之神",
          id: "BroodingMawlek",
          check: "completedTier2",
          wiki: "诸神堂#躁郁的毛里克"
        },
        BroodingMawlekRadiant: {
          name: "躁郁的毛里克: 辐辉级",
          spoiler: "孤独的巢穴之神",
          id: "BroodingMawlek",
          check: "completedTier3",
          wiki: "诸神堂#躁郁的毛里克"
        },
        FalseKnightUnlocked: {
          name: "假骑士: 解锁",
          spoiler: "“我在十字路的中心保护弱者”",
          id: "FalseKnight",
          check: "isUnlocked",
          wiki: "诸神堂#假骑士"
        },
        FalseKnightAttuned: {
          name: "假骑士: 调谐级",
          spoiler: "“我在十字路的中心保护弱者”",
          id: "FalseKnight",
          check: "completedTier1",
          wiki: "诸神堂#假骑士"
        },
        FalseKnightAscended: {
          name: "假骑士: 进升级",
          spoiler: "愤怒的受压迫之神",
          id: "FalseKnight",
          check: "completedTier2",
          wiki: "诸神堂#假骑士"
        },
        FalseKnightRadiant: {
          name: "假骑士: 辐辉级",
          spoiler: "愤怒的受压迫之神",
          id: "FalseKnight",
          check: "completedTier3",
          wiki: "诸神堂#假骑士"
        },
        FailedChampionUnlocked: {
          name: "失败冠军: 解锁",
          spoiler: "凶恶的悔恨之神",
          id: "FailedChampion",
          check: "isUnlocked",
          wiki: "诸神堂#失败冠军"
        },
        FailedChampionAttuned: {
          name: "失败冠军: 调谐级",
          spoiler: "凶恶的悔恨之神",
          id: "FailedChampion",
          check: "completedTier1",
          wiki: "诸神堂#失败冠军"
        },
        FailedChampionAscended: {
          name: "失败冠军: 进升级",
          spoiler: "凶恶的悔恨之神",
          id: "FailedChampion",
          check: "completedTier2",
          wiki: "诸神堂#失败冠军"
        },
        FailedChampionRadiant: {
          name: "失败冠军: 辐辉级",
          spoiler: "凶恶的悔恨之神",
          id: "FailedChampion",
          check: "completedTier3",
          wiki: "诸神堂#失败冠军"
        },
        Hornet1Unlocked: {
          name: "守护者大黄蜂: 解锁",
          spoiler: "I watch over lush pathways...",
          id: "Hornet1",
          check: "isUnlocked",
          wiki: "诸神堂#守护者大黄蜂"
        },
        Hornet1Attuned: {
          name: "守护者大黄蜂: 调谐级",
          spoiler: "...and distant ash-swept graves",
          id: "Hornet1",
          check: "completedTier1",
          wiki: "诸神堂#守护者大黄蜂"
        },
        Hornet1Ascended: {
          name: "守护者大黄蜂: 进升级",
          spoiler: "God protector of a fading land",
          id: "Hornet1",
          check: "completedTier2",
          wiki: "诸神堂#守护者大黄蜂"
        },
        Hornet1Radiant: {
          name: "守护者大黄蜂: 辐辉级",
          spoiler: "God protector of a fading land",
          id: "Hornet1",
          check: "completedTier3",
          wiki: "诸神堂#守护者大黄蜂"
        },
        Hornet2Unlocked: {
          name: "岗哨大黄蜂: 解锁",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "isUnlocked",
          wiki: "诸神堂#岗哨大黄蜂"
        },
        Hornet2Attuned: {
          name: "岗哨大黄蜂: 调谐级",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "completedTier1",
          wiki: "诸神堂#岗哨大黄蜂"
        },
        Hornet2Ascended: {
          name: "岗哨大黄蜂: 进升级",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "completedTier2",
          wiki: "诸神堂#岗哨大黄蜂"
        },
        Hornet2Radiant: {
          name: "岗哨大黄蜂: 辐辉级",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "completedTier3",
          wiki: "诸神堂#岗哨大黄蜂"
        },
        MegaMossChargerUnlocked: {
          name: "大型苔藓冲锋者: 解锁",
          spoiler: "Together we hunt in paths...",
          id: "MegaMossCharger",
          check: "isUnlocked",
          wiki: "诸神堂#大型苔藓冲锋者"
        },
        MegaMossChargerAttuned: {
          name: "大型苔藓冲锋者: 调谐级",
          spoiler: "...overgrown with green",
          id: "MegaMossCharger",
          check: "completedTier1",
          wiki: "诸神堂#大型苔藓冲锋者"
        },
        MegaMossChargerAscended: {
          name: "大型苔藓冲锋者: 进升级",
          spoiler: "Restless god of those...",
          id: "MegaMossCharger",
          check: "completedTier2",
          wiki: "诸神堂#大型苔藓冲锋者"
        },
        MegaMossChargerRadiant: {
          name: "大型苔藓冲锋者: 辐辉级",
          spoiler: "...who band together",
          id: "MegaMossCharger",
          check: "completedTier3",
          wiki: "诸神堂#大型苔藓冲锋者"
        },
        FlukemarmUnlocked: {
          name: "吸虫之母: 解锁",
          spoiler: "I lie within a maze of pipes",
          id: "Flukemarm",
          check: "isUnlocked",
          wiki: "诸神堂#吸虫之母"
        },
        FlukemarmAttuned: {
          name: "吸虫之母: 调谐级",
          spoiler: "Alluring god of motherhood",
          id: "Flukemarm",
          check: "completedTier1",
          wiki: "诸神堂#吸虫之母"
        },
        FlukemarmAscended: {
          name: "吸虫之母: 进升级",
          spoiler: "Alluring god of motherhood",
          id: "Flukemarm",
          check: "completedTier2",
          wiki: "诸神堂#吸虫之母"
        },
        FlukemarmRadiant: {
          name: "吸虫之母: 辐辉级",
          spoiler: "Alluring god of motherhood",
          id: "Flukemarm",
          check: "completedTier3",
          wiki: "诸神堂#吸虫之母"
        },
        MantisLordsUnlocked: {
          name: "螳螂领主: 解锁",
          spoiler: "We watch over a village of warriors",
          id: "MantisLords",
          check: "isUnlocked",
          wiki: "诸神堂#螳螂领主"
        },
        MantisLordsAttuned: {
          name: "螳螂领主: 调谐级",
          spoiler: "Noble sister gods of combat",
          id: "MantisLords",
          check: "completedTier1",
          wiki: "诸神堂#螳螂领主"
        },
        MantisLordsAscended: {
          name: "螳螂领主: 进升级",
          spoiler: "Noble sister gods of combat",
          id: "MantisLords",
          check: "completedTier2",
          wiki: "诸神堂#Mantis_Lords"
        },
        MantisLordsRadiant: {
          name: "螳螂领主: 辐辉级",
          spoiler: "Noble sister gods of combat",
          id: "MantisLords",
          check: "completedTier3",
          wiki: "诸神堂#螳螂领主"
        },
        MantisLordsExtraUnlocked: {
          name: "战斗姐妹: 解锁",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "isUnlocked",
          wiki: "诸神堂#战斗姐妹"
        },
        MantisLordsExtraAttuned: {
          name: "战斗姐妹: 调谐级",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "completedTier1",
          wiki: "诸神堂#战斗姐妹"
        },
        MantisLordsExtraAscended: {
          name: "战斗姐妹: 进升级",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "completedTier2",
          wiki: "诸神堂#战斗姐妹"
        },
        MantisLordsExtraRadiant: {
          name: "战斗姐妹: 辐辉级",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "completedTier3",
          wiki: "诸神堂#战斗姐妹"
        },
        OblobblesUnlocked: {
          name: "奥波路波: 解锁",
          spoiler: "Together we are chained in a strange colosseum",
          id: "Oblobbles",
          check: "isUnlocked",
          wiki: "诸神堂#奥波路波"
        },
        OblobblesAttuned: {
          name: "奥波路波: 调谐级",
          spoiler: "Lover gods of faith and devotion",
          id: "Oblobbles",
          check: "completedTier1",
          wiki: "诸神堂#奥波路波"
        },
        OblobblesAscended: {
          name: "奥波路波: 进升级",
          spoiler: "Lover gods of faith and devotion",
          id: "Oblobbles",
          check: "completedTier2",
          wiki: "诸神堂#奥波路波"
        },
        OblobblesRadiant: {
          name: "奥波路波: 辐辉级",
          spoiler: "Lover gods of faith and devotion",
          id: "Oblobbles",
          check: "completedTier3",
          wiki: "诸神堂#奥波路波"
        },
        HiveKnightUnlocked: {
          name: "蜂巢骑士: 解锁",
          spoiler: "I guard the heart of the hive for my Queen",
          id: "HiveKnight",
          check: "isUnlocked",
          wiki: "诸神堂#蜂巢骑士"
        },
        HiveKnightAttuned: {
          name: "蜂巢骑士: 调谐级",
          spoiler: "Watchful god of duty",
          id: "HiveKnight",
          check: "completedTier1",
          wiki: "诸神堂#蜂巢骑士"
        },
        HiveKnightAscended: {
          name: "蜂巢骑士: 进升级",
          spoiler: "Watchful god of duty",
          id: "HiveKnight",
          check: "completedTier2",
          wiki: "诸神堂#蜂巢骑士"
        },
        HiveKnightRadiant: {
          name: "蜂巢骑士: 辐辉级",
          spoiler: "Watchful god of duty",
          id: "HiveKnight",
          check: "completedTier3",
          wiki: "诸神堂#蜂巢骑士"
        },
        BrokenVesselUnlocked: {
          name: "残破容器: 解锁",
          spoiler: "I sleep in the deep caves below the world",
          id: "BrokenVessel",
          check: "isUnlocked",
          wiki: "诸神堂#残破容器"
        },
        BrokenVesselAttuned: {
          name: "残破容器: 调谐级",
          spoiler: "Broken shell of an empty god",
          id: "BrokenVessel",
          check: "completedTier1",
          wiki: "诸神堂#残破容器"
        },
        BrokenVesselAscended: {
          name: "残破容器: 进升级",
          spoiler: "Broken shell of an empty god",
          id: "BrokenVessel",
          check: "completedTier2",
          wiki: "诸神堂#残破容器"
        },
        BrokenVesselRadiant: {
          name: "残破容器: 辐辉级",
          spoiler: "Broken shell of an empty god",
          id: "BrokenVessel",
          check: "completedTier3",
          wiki: "诸神堂#残破容器"
        },
        LostKinUnlocked: {
          name: "失落近亲: 解锁",
          spoiler: "Lost god of 深渊",
          id: "LostKin",
          check: "isUnlocked",
          wiki: "诸神堂#失落近亲"
        },
        LostKinAttuned: {
          name: "失落近亲: 调谐级",
          spoiler: "Lost god of 深渊",
          id: "LostKin",
          check: "completedTier1",
          wiki: "诸神堂#失落近亲"
        },
        LostKinAscended: {
          name: "失落近亲: 进升级",
          spoiler: "Lost god of 深渊",
          id: "LostKin",
          check: "completedTier2",
          wiki: "诸神堂#失落近亲"
        },
        LostKinRadiant: {
          name: "失落近亲: 辐辉级",
          spoiler: "Lost god of 深渊",
          id: "LostKin",
          check: "completedTier3",
          wiki: "诸神堂#失落近亲"
        },
        NoskUnlocked: {
          name: "诺斯克: 解锁",
          spoiler: "I wait patiently in a dark nest of predators",
          id: "Nosk",
          check: "isUnlocked",
          wiki: "诸神堂#诺斯克"
        },
        NoskAttuned: {
          name: "诺斯克: 调谐级",
          spoiler: "Everchanging god of the faceless",
          id: "Nosk",
          check: "completedTier1",
          wiki: "诸神堂#诺斯克"
        },
        NoskAscended: {
          name: "诺斯克: 进升级",
          spoiler: "Everchanging god of the faceless",
          id: "Nosk",
          check: "completedTier2",
          wiki: "诸神堂#诺斯克"
        },
        NoskRadiant: {
          name: "诺斯克: 辐辉级",
          spoiler: "Everchanging god of the faceless",
          id: "Nosk",
          check: "completedTier3",
          wiki: "诸神堂#诺斯克"
        },
        NoskHornetUnlocked: {
          name: "有翼诺斯克: 解锁",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "isUnlocked",
          wiki: "诸神堂#有翼诺斯克"
        },
        NoskHornetAttuned: {
          name: "有翼诺斯克: 调谐级",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "completedTier1",
          wiki: "诸神堂#有翼诺斯克"
        },
        NoskHornetAscended: {
          name: "有翼诺斯克: 进升级",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "completedTier2",
          wiki: "诸神堂#有翼诺斯克"
        },
        NoskHornetRadiant: {
          name: "有翼诺斯克: 辐辉级",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "completedTier3",
          wiki: "诸神堂#有翼诺斯克"
        },
        CollectorUnlocked: {
          name: "收藏家: 解锁",
          spoiler: "I lurk at the peak of a forsaken tower",
          id: "Collector",
          check: "isUnlocked",
          wiki: "诸神堂#收藏家"
        },
        CollectorAttuned: {
          name: "收藏家: 调谐级",
          spoiler: "Joyful god of protection",
          id: "Collector",
          check: "completedTier1",
          wiki: "诸神堂#收藏家"
        },
        CollectorAscended: {
          name: "收藏家: 进升级",
          spoiler: "Joyful god of protection",
          id: "Collector",
          check: "completedTier2",
          wiki: "诸神堂#收藏家"
        },
        CollectorRadiant: {
          name: "收藏家: 辐辉级",
          spoiler: "Joyful god of protection",
          id: "Collector",
          check: "completedTier3",
          wiki: "诸神堂#收藏家"
        },
        GodTamerUnlocked: {
          name: "神之驯服者: 解锁",
          spoiler: "I wait, weapon in hand, within the colosseum",
          id: "GodTamer",
          check: "isUnlocked",
          wiki: "诸神堂#神之驯服者"
        },
        GodTamerAttuned: {
          name: "神之驯服者: 调谐级",
          spoiler: "Gallant god of the arena",
          id: "GodTamer",
          check: "completedTier1",
          wiki: "诸神堂#神之驯服者"
        },
        GodTamerAscended: {
          name: "神之驯服者: 进升级",
          spoiler: "Gallant god of the arena",
          id: "GodTamer",
          check: "completedTier2",
          wiki: "诸神堂#神之驯服者"
        },
        GodTamerRadiant: {
          name: "神之驯服者: 辐辉级",
          spoiler: "Gallant god of the arena",
          id: "GodTamer",
          check: "completedTier3",
          wiki: "诸神堂#神之驯服者"
        },
        CrystalGuardian1Unlocked: {
          name: "水晶守卫: 解锁",
          spoiler: "I rest amongst crystals...",
          id: "CrystalGuardian1",
          check: "isUnlocked",
          wiki: "诸神堂#水晶守卫"
        },
        CrystalGuardian1Attuned: {
          name: "水晶守卫: 调谐级",
          spoiler: "...and strange machinery",
          id: "CrystalGuardian1",
          check: "completedTier1",
          wiki: "诸神堂#水晶守卫"
        },
        CrystalGuardian1Ascended: {
          name: "水晶守卫: 进升级",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian1",
          check: "completedTier2",
          wiki: "诸神堂#水晶守卫"
        },
        CrystalGuardian1Radiant: {
          name: "水晶守卫: 辐辉级",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian1",
          check: "completedTier3",
          wiki: "诸神堂#水晶守卫"
        },
        CrystalGuardian2Unlocked: {
          name: "暴怒守卫: 解锁",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "isUnlocked",
          wiki: "诸神堂#暴怒守卫"
        },
        CrystalGuardian2Attuned: {
          name: "暴怒守卫: 调谐级",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "completedTier1",
          wiki: "诸神堂#暴怒守卫"
        },
        CrystalGuardian2Ascended: {
          name: "暴怒守卫: 进升级",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "completedTier2",
          wiki: "诸神堂#暴怒守卫"
        },
        CrystalGuardian2Radiant: {
          name: "暴怒守卫: 辐辉级",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "completedTier3",
          wiki: "诸神堂#暴怒守卫"
        },
        UumuuUnlocked: {
          name: "乌姆: 解锁",
          spoiler: "I sleep submerged in the depths of the archive",
          id: "Uumuu",
          check: "isUnlocked",
          wiki: "诸神堂#乌姆"
        },
        UumuuAttuned: {
          name: "乌姆: 调谐级",
          spoiler: "Uncanny god of knowledge",
          id: "Uumuu",
          check: "completedTier1",
          wiki: "诸神堂#乌姆"
        },
        UumuuAscended: {
          name: "乌姆: 进升级",
          spoiler: "Uncanny god of knowledge",
          id: "Uumuu",
          check: "completedTier2",
          wiki: "诸神堂#乌姆"
        },
        UumuuRadiant: {
          name: "乌姆: 辐辉级",
          spoiler: "Uncanny god of knowledge",
          id: "Uumuu",
          check: "completedTier3",
          wiki: "诸神堂#乌姆"
        },
        TraitorLordUnlocked: {
          name: "叛徒领主: 解锁",
          spoiler: "I defile the gardens of false royalty",
          id: "TraitorLord",
          check: "isUnlocked",
          wiki: "诸神堂#叛徒领主"
        },
        TraitorLordAttuned: {
          name: "叛徒领主: 调谐级",
          spoiler: "Treacherous god of anger",
          id: "TraitorLord",
          check: "completedTier1",
          wiki: "诸神堂#叛徒领主"
        },
        TraitorLordAscended: {
          name: "叛徒领主: 进升级",
          spoiler: "Treacherous god of anger",
          id: "TraitorLord",
          check: "completedTier2",
          wiki: "诸神堂#叛徒领主"
        },
        TraitorLordRadiant: {
          name: "叛徒领主: 辐辉级",
          spoiler: "Treacherous god of anger",
          id: "TraitorLord",
          check: "completedTier3",
          wiki: "诸神堂#叛徒领主"
        },
        GreyPrinceUnlocked: {
          name: "灰色王子左特: 解锁",
          spoiler: "I serve my Queen inside her dreams",
          id: "GreyPrince",
          check: "isUnlocked",
          wiki: "诸神堂#灰色王子左特"
        },
        GreyPrinceAttuned: {
          name: "灰色王子左特: 调谐级",
          spoiler: "False god conjured by the lonely",
          id: "GreyPrince",
          check: "completedTier1",
          wiki: "诸神堂#灰色王子左特"
        },
        GreyPrinceAscended: {
          name: "灰色王子左特: 进升级",
          spoiler: "False god conjured by the lonely",
          id: "GreyPrince",
          check: "completedTier2",
          wiki: "诸神堂#灰色王子左特"
        },
        GreyPrinceRadiant: {
          name: "灰色王子左特: 辐辉级",
          spoiler: "False god conjured by the lonely",
          id: "GreyPrince",
          check: "completedTier3",
          wiki: "诸神堂#灰色王子左特"
        },
        MageKnightUnlocked: {
          name: "灵魂战士: 解锁",
          spoiler: "I haunt the halls of a sanctum",
          id: "MageKnight",
          check: "isUnlocked",
          wiki: "诸神堂#灵魂战士"
        },
        MageKnightAttuned: {
          name: "灵魂战士: 调谐级",
          spoiler: "Haunted god of the sanctum",
          id: "MageKnight",
          check: "completedTier1",
          wiki: "诸神堂#灵魂战士"
        },
        MageKnightAscended: {
          name: "灵魂战士: 进升级",
          spoiler: "Haunted god of the sanctum",
          id: "MageKnight",
          check: "completedTier2",
          wiki: "诸神堂#灵魂战士"
        },
        MageKnightRadiant: {
          name: "灵魂战士: 辐辉级",
          spoiler: "Haunted god of the sanctum",
          id: "MageKnight",
          check: "completedTier3",
          wiki: "诸神堂#灵魂战士"
        },
        SoulMasterUnlocked: {
          name: "灵魂大师: 解锁",
          spoiler: "Immortal, I rule the Sanctum",
          id: "SoulMaster",
          check: "isUnlocked",
          wiki: "诸神堂#灵魂大师"
        },
        SoulMasterAttuned: {
          name: "灵魂大师: 调谐级",
          spoiler: "Covetous god of soul",
          id: "SoulMaster",
          check: "completedTier1",
          wiki: "诸神堂#灵魂大师"
        },
        SoulMasterAscended: {
          name: "灵魂大师: 进升级",
          spoiler: "Covetous god of soul",
          id: "SoulMaster",
          check: "completedTier2",
          wiki: "诸神堂#灵魂大师"
        },
        SoulMasterRadiant: {
          name: "灵魂大师: 辐辉级",
          spoiler: "Covetous god of soul",
          id: "SoulMaster",
          check: "completedTier3",
          wiki: "诸神堂#灵魂大师"
        },
        SoulTyrantUnlocked: {
          name: "灵魂暴君: 解锁",
          spoiler: "Frenzied god of mortality",
          id: "SoulTyrant",
          check: "isUnlocked",
          wiki: "诸神堂#灵魂暴君"
        },
        SoulTyrantAttuned: {
          name: "灵魂暴君: 调谐级",
          spoiler: "Frenzied god of mortality",
          id: "SoulTyrant",
          check: "completedTier1",
          wiki: "诸神堂#灵魂暴君"
        },
        SoulTyrantAscended: {
          name: "灵魂暴君: 进升级",
          spoiler: "Frenzied god of mortality",
          id: "SoulTyrant",
          check: "completedTier2",
          wiki: "诸神堂#灵魂暴君"
        },
        SoulTyrantRadiant: {
          name: "灵魂暴君: 辐辉级",
          spoiler: "Frenzied god of mortality",
          id: "SoulTyrant",
          check: "completedTier3",
          wiki: "诸神堂#灵魂暴君"
        },
        DungDefenderUnlocked: {
          name: "粪虫防御者: 解锁",
          spoiler: "I protect the pipeways of the kingdom",
          id: "DungDefender",
          check: "isUnlocked",
          wiki: "诸神堂#粪虫防御者"
        },
        DungDefenderAttuned: {
          name: "粪虫防御者: 调谐级",
          spoiler: "Kindly god of bravery and honour",
          id: "DungDefender",
          check: "completedTier1",
          wiki: "诸神堂#粪虫防御者"
        },
        DungDefenderAscended: {
          name: "粪虫防御者: 进升级",
          spoiler: "Kindly god of bravery and honour",
          id: "DungDefender",
          check: "completedTier2",
          wiki: "诸神堂#粪虫防御者"
        },
        DungDefenderRadiant: {
          name: "粪虫防御者: 辐辉级",
          spoiler: "Kindly god of bravery and honour",
          id: "DungDefender",
          check: "completedTier3",
          wiki: "诸神堂#粪虫防御者"
        },
        WhiteDefenderUnlocked: {
          name: "白色防御者: 解锁",
          spoiler: "Kindly god of bravery and honour",
          id: "WhiteDefender",
          check: "isUnlocked",
          wiki: "诸神堂#白色防御者"
        },
        WhiteDefenderAttuned: {
          name: "白色防御者: 调谐级",
          spoiler: "Kindly god of bravery and honour",
          id: "WhiteDefender",
          check: "completedTier1",
          wiki: "诸神堂#白色防御者"
        },
        WhiteDefenderAscended: {
          name: "白色防御者: 进升级",
          spoiler: "Kindly god of bravery and honour",
          id: "WhiteDefender",
          check: "completedTier2",
          wiki: "诸神堂#白色防御者"
        },
        WhiteDefenderRadiant: {
          name: "白色防御者: 辐辉级",
          spoiler: "Kindly god of bravery and honour",
          id: "WhiteDefender",
          check: "completedTier3",
          wiki: "诸神堂#白色防御者"
        },
        WatcherKnightsUnlocked: {
          name: "守望者骑士: 解锁",
          spoiler: "We lie dormant, guarding the Spire's peak",
          id: "WatcherKnights",
          check: "isUnlocked",
          wiki: "诸神堂#守望者骑士"
        },
        WatcherKnightsAttuned: {
          name: "守望者骑士: 调谐级",
          spoiler: "Sentinel gods of the spire",
          id: "WatcherKnights",
          check: "completedTier1",
          wiki: "诸神堂#守望者骑士"
        },
        WatcherKnightsAscended: {
          name: "守望者骑士: 进升级",
          spoiler: "Sentinel gods of the spire",
          id: "WatcherKnights",
          check: "completedTier2",
          wiki: "诸神堂#守望者骑士"
        },
        WatcherKnightsRadiant: {
          name: "守望者骑士: 辐辉级",
          spoiler: "Sentinel gods of the spire",
          id: "WatcherKnights",
          check: "completedTier3",
          wiki: "诸神堂#守望者骑士"
        },
        NoEyesUnlocked: {
          name: "无眼: 解锁",
          spoiler: "I lie dreaming in a silent sanctuary",
          id: "NoEyes",
          check: "isUnlocked",
          wiki: "诸神堂#无眼"
        },
        NoEyesAttuned: {
          name: "无眼: 调谐级",
          spoiler: "Dreamborn god of fear and relief",
          id: "NoEyes",
          check: "completedTier1",
          wiki: "诸神堂#无眼"
        },
        NoEyesAscended: {
          name: "无眼: 进升级",
          spoiler: "Dreamborn god of fear and relief",
          id: "NoEyes",
          check: "completedTier2",
          wiki: "诸神堂#无眼"
        },
        NoEyesRadiant: {
          name: "无眼: 辐辉级",
          spoiler: "Dreamborn god of fear and relief",
          id: "NoEyes",
          check: "completedTier3",
          wiki: "诸神堂#无眼"
        },
        MarmuUnlocked: {
          name: "马尔穆: 解锁",
          spoiler: "I lie dreaming patiently in a garden",
          id: "Marmu",
          check: "isUnlocked",
          wiki: "诸神堂#马尔穆"
        },
        MarmuAttuned: {
          name: "马尔穆: 调谐级",
          spoiler: "Dreamborn god of gardens",
          id: "Marmu",
          check: "completedTier1",
          wiki: "诸神堂#马尔穆"
        },
        MarmuAscended: {
          name: "马尔穆: 进升级",
          spoiler: "Dreamborn god of gardens",
          id: "Marmu",
          check: "completedTier2",
          wiki: "诸神堂#马尔穆"
        },
        MarmuRadiant: {
          name: "马尔穆: 辐辉级",
          spoiler: "Dreamborn god of gardens",
          id: "Marmu",
          check: "completedTier3",
          wiki: "诸神堂#马尔穆"
        },
        GalienUnlocked: {
          name: "加利安: 解锁",
          spoiler: "I lie dreaming in darkness, surrounded by predators",
          id: "Galien",
          check: "isUnlocked",
          wiki: "诸神堂#加利安"
        },
        GalienAttuned: {
          name: "加利安: 调谐级",
          spoiler: "Dreamborn god of heroic hearts",
          id: "Galien",
          check: "completedTier1",
          wiki: "诸神堂#加利安"
        },
        GalienAscended: {
          name: "加利安: 进升级",
          spoiler: "Dreamborn god of heroic hearts",
          id: "Galien",
          check: "completedTier2",
          wiki: "诸神堂#加利安"
        },
        GalienRadiant: {
          name: "加利安: 辐辉级",
          spoiler: "Dreamborn god of heroic hearts",
          id: "Galien",
          check: "completedTier3",
          wiki: "诸神堂#加利安"
        },
        MarkothUnlocked: {
          name: "马科斯: 解锁",
          spoiler: "I lie dreaming at the edge of the world",
          id: "Markoth",
          check: "isUnlocked",
          wiki: "诸神堂#马科斯"
        },
        MarkothAttuned: {
          name: "马科斯: 调谐级",
          spoiler: "Dreamborn god of meditation and isolation",
          id: "Markoth",
          check: "completedTier1",
          wiki: "诸神堂#马科斯"
        },
        MarkothAscended: {
          name: "马科斯: 进升级",
          spoiler: "Dreamborn god of meditation and isolation",
          id: "Markoth",
          check: "completedTier2",
          wiki: "诸神堂#马科斯"
        },
        MarkothRadiant: {
          name: "马科斯: 辐辉级",
          spoiler: "Dreamborn god of meditation and isolation",
          id: "Markoth",
          check: "completedTier3",
          wiki: "诸神堂#马科斯"
        },
        XeroUnlocked: {
          name: "泽若: 解锁",
          spoiler: "I lie dreaming amongst peaceful graves",
          id: "Xero",
          check: "isUnlocked",
          wiki: "诸神堂#泽若"
        },
        XeroAttuned: {
          name: "泽若: 调谐级",
          spoiler: "Dreamborn god of faith and betrayal",
          id: "Xero",
          check: "completedTier1",
          wiki: "诸神堂#泽若"
        },
        XeroAscended: {
          name: "泽若: 进升级",
          spoiler: "Dreamborn god of faith and betrayal",
          id: "Xero",
          check: "completedTier2",
          wiki: "诸神堂#泽若"
        },
        XeroRadiant: {
          name: "泽若: 辐辉级",
          spoiler: "Dreamborn god of faith and betrayal",
          id: "Xero",
          check: "completedTier3",
          wiki: "诸神堂#泽若"
        },
        GorbUnlocked: {
          name: "戈布: 解锁",
          spoiler: "I lie dreaming at a wind-blasted peak",
          id: "Gorb",
          check: "isUnlocked",
          wiki: "诸神堂#戈布"
        },
        GorbAttuned: {
          name: "戈布: 调谐级",
          spoiler: "Dreamborn god of the beyond",
          id: "Gorb",
          check: "completedTier1",
          wiki: "诸神堂#戈布"
        },
        GorbAscended: {
          name: "戈布: 进升级",
          spoiler: "Dreamborn god of the beyond",
          id: "Gorb",
          check: "completedTier2",
          wiki: "诸神堂#戈布"
        },
        GorbRadiant: {
          name: "戈布: 辐辉级",
          spoiler: "Dreamborn god of the beyond",
          id: "Gorb",
          check: "completedTier3",
          wiki: "诸神堂#戈布"
        },
        ElderHuUnlocked: {
          name: "胡长老: 解锁",
          spoiler: "I lie dreaming in the wastes",
          id: "ElderHu",
          check: "isUnlocked",
          wiki: "诸神堂#胡长老"
        },
        ElderHuAttuned: {
          name: "胡长老: 调谐级",
          spoiler: "Dreamborn god of travellers and sages",
          id: "ElderHu",
          check: "completedTier1",
          wiki: "诸神堂#胡长老"
        },
        ElderHuAscended: {
          name: "胡长老: 进升级",
          spoiler: "Dreamborn god of travellers and sages",
          id: "ElderHu",
          check: "completedTier2",
          wiki: "诸神堂#胡长老"
        },
        ElderHuRadiant: {
          name: "胡长老: 辐辉级",
          spoiler: "Dreamborn god of travellers and sages",
          id: "ElderHu",
          check: "completedTier3",
          wiki: "诸神堂#胡长老"
        },
        NailmastersUnlocked: {
          name: "骨钉兄弟奥罗与马托: 解锁",
          spoiler: "“我们一同立于万神殿之巅”",
          id: "Nailmasters",
          check: "isUnlocked",
          wiki: "诸神堂#骨钉兄弟奥罗与马托"
        },
        NailmastersAttuned: {
          name: "骨钉兄弟奥罗与马托: 调谐级",
          spoiler: "忠诚的骨钉兄弟神",
          id: "Nailmasters",
          check: "completedTier1",
          wiki: "诸神堂#骨钉兄弟奥罗与马托"
        },
        NailmastersAscended: {
          name: "骨钉兄弟奥罗与马托: 进升级",
          spoiler: "忠诚的骨钉兄弟神",
          id: "Nailmasters",
          check: "completedTier2",
          wiki: "诸神堂#骨钉兄弟奥罗与马托"
        },
        NailmastersRadiant: {
          name: "骨钉兄弟奥罗与马托: 辐辉级",
          spoiler: "忠诚的骨钉兄弟神",
          id: "Nailmasters",
          check: "completedTier3",
          wiki: "诸神堂#骨钉兄弟奥罗与马托"
        },
        PaintmasterUnlocked: {
          name: "绘画大师席奥: 解锁",
          spoiler: "“我在万神殿之巅磨练技艺”",
          id: "Paintmaster",
          check: "isUnlocked",
          wiki: "诸神堂#绘画大师席奥"
        },
        PaintmasterAttuned: {
          name: "绘画大师席奥: 调谐级",
          spoiler: "天赋异禀的艺术家与创作者之神",
          id: "Paintmaster",
          check: "completedTier1",
          wiki: "诸神堂#绘画大师席奥"
        },
        PaintmasterAscended: {
          name: "绘画大师席奥: 进升级",
          spoiler: "天赋异禀的艺术家与创作者之神",
          id: "Paintmaster",
          check: "completedTier2",
          wiki: "诸神堂#绘画大师席奥"
        },
        PaintmasterRadiant: {
          name: "绘画大师席奥: 辐辉级",
          spoiler: "天赋异禀的艺术家与创作者之神",
          id: "Paintmaster",
          check: "completedTier3",
          wiki: "诸神堂#绘画大师席奥"
        },
        SlyUnlocked: {
          name: "伟大骨钉贤者斯莱: 解锁",
          spoiler: "“我在万神殿的巅峰等你”",
          id: "Sly",
          check: "isUnlocked",
          wiki: "诸神堂#伟大骨钉贤者斯莱"
        },
        SlyAttuned: {
          name: "伟大骨钉贤者斯莱: 调谐级",
          spoiler: "狡黠的机遇之神",
          id: "Sly",
          check: "completedTier1",
          wiki: "诸神堂#伟大骨钉贤者斯莱"
        },
        SlyAscended: {
          name: "伟大骨钉贤者斯莱: 进升级",
          spoiler: "邪恶的机遇之神",
          id: "Sly",
          check: "completedTier2",
          wiki: "诸神堂#伟大骨钉贤者斯莱"
        },
        SlyRadiant: {
          name: "伟大骨钉贤者斯莱: 辐辉级",
          spoiler: "邪恶的机遇之神",
          id: "Sly",
          check: "completedTier3",
          wiki: "诸神堂#伟大骨钉贤者斯莱"
        },
        HollowKnightUnlocked: {
          name: "纯粹容器: 解锁",
          spoiler: "“这位空虚之神屹立在万神殿之巅”",
          id: "HollowKnight",
          check: "isUnlocked",
          wiki: "诸神堂#纯粹容器"
        },
        HollowKnightAttuned: {
          name: "纯粹容器: 调谐级",
          spoiler: "强大的虚无之神",
          id: "HollowKnight",
          check: "completedTier1",
          wiki: "诸神堂#纯粹容器"
        },
        HollowKnightAscended: {
          name: "纯粹容器: 进升级",
          spoiler: "强大的虚无之神",
          id: "HollowKnight",
          check: "completedTier2",
          wiki: "诸神堂#纯粹容器"
        },
        HollowKnightRadiant: {
          name: "纯粹容器: 辐辉级",
          spoiler: "强大的虚无之神",
          id: "HollowKnight",
          check: "completedTier3",
          wiki: "诸神堂#纯粹容器"
        },
        GrimmUnlocked: {
          name: "格林: 解锁",
          spoiler: "“我等待着灯被点燃”",
          id: "Grimm",
          check: "isUnlocked",
          wiki: "诸神堂#格林"
        },
        GrimmAttuned: {
          name: "格林: 调谐级",
          spoiler: "巡回的剧团之神",
          id: "Grimm",
          check: "completedTier1",
          wiki: "诸神堂#格林"
        },
        GrimmAscended: {
          name: "格林: 进升级",
          spoiler: "巡回的剧团之神",
          id: "Grimm",
          check: "completedTier2",
          wiki: "诸神堂#格林"
        },
        GrimmRadiant: {
          name: "格林: 辐辉级",
          spoiler: "巡回的剧团之神",
          id: "Grimm",
          check: "completedTier3",
          wiki: "诸神堂#格林"
        },
        NightmareGrimmUnlocked: {
          name: "梦魇之王: 解锁",
          spoiler: "梦魇之神",
          id: "NightmareGrimm",
          check: "isUnlocked",
          wiki: "诸神堂#梦魇之王"
        },
        NightmareGrimmAttuned: {
          name: "梦魇之王: 调谐级",
          spoiler: "梦魇之神",
          id: "NightmareGrimm",
          check: "completedTier1",
          wiki: "诸神堂#梦魇之王"
        },
        NightmareGrimmAscended: {
          name: "梦魇之王: 进升级",
          spoiler: "梦魇之神",
          id: "NightmareGrimm",
          check: "completedTier2",
          wiki: "诸神堂#梦魇之王"
        },
        NightmareGrimmRadiant: {
          name: "梦魇之王: 辐辉级",
          spoiler: "梦魇之神",
          id: "NightmareGrimm",
          check: "completedTier3",
          wiki: "诸神堂#梦魇之王"
        },
        RadianceUnlocked: {
          name: "辐光: 解锁",
          spoiler: "被遗忘的光芒神",
          id: "Radiance",
          check: "isUnlocked",
          wiki: "诸神堂#辐光"
        },
        RadianceAttuned: {
          name: "辐光: 调谐级",
          spoiler: "被遗忘的光芒神",
          id: "Radiance",
          check: "completedTier1",
          wiki: "诸神堂#辐光"
        },
        RadianceAscended: {
          name: "辐光: 进升级",
          spoiler: "被遗忘的光芒神",
          id: "Radiance",
          check: "completedTier2",
          wiki: "诸神堂#辐光"
        },
        RadianceRadiant: {
          name: "辐光: 辐辉级",
          spoiler: "被遗忘的光芒神",
          id: "Radiance",
          check: "completedTier3",
          wiki: "诸神堂#辐光"
        },
      },
    }


  },
};

export default HK;